// Extension entry point
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// Output channel para logs
let outputChannel;

// Carrega dados das funções
const FUNCTIONS_DATA = loadFunctionsData();

/**
 * Carrega o arquivo functions.json
 */
function loadFunctionsData() {
   try {
      const jsonPath = path.join(__dirname, 'functions.json');
      const data = fs.readFileSync(jsonPath, 'utf8');
      return JSON.parse(data);
   } catch (error) {
      console.error('Erro ao carregar functions.json:', error);
      return {};
   }
}

/**
 * Ativa a extensão
 */
function activate(context) {
   // Criar Output Channel para logs
   outputChannel = vscode.window.createOutputChannel('LSPT Language Support');
   context.subscriptions.push(outputChannel);

   outputChannel.appendLine('✅ LSPT Language Support extension is now active!');
   outputChannel.appendLine(`📊 Loaded ${Object.keys(FUNCTIONS_DATA).length} functions`);

   // 1. COMPLETION PROVIDER (Autocomplete ao digitar Dev.)
   const completionProvider = vscode.languages.registerCompletionItemProvider(
      'lspt',
      {
         provideCompletionItems(document, position) {
            try {
               const linePrefix = document.lineAt(position).text.substring(0, position.character);

               // Verifica se o usuário digitou "Dev." ou "dev." (case-insensitive)
               const lowerPrefix = linePrefix.toLowerCase();
               if (!lowerPrefix.endsWith('dev.')) {
                  return undefined;
               }

               // Retorna todas as funções como sugestões
               const completions = Object.keys(FUNCTIONS_DATA).map(funcName => {
                  const funcData = FUNCTIONS_DATA[funcName];

                  // Validação de dados
                  if (!funcData) {
                     outputChannel.appendLine(`⚠️ Dados inválidos para função: ${funcName}`);
                     return null;
                  }

                  const item = new vscode.CompletionItem(funcName, vscode.CompletionItemKind.Function);

                  // Detalhes mostrados no autocomplete
                  item.detail = funcData.signature || funcName;
                  item.documentation = new vscode.MarkdownString(funcData.description || '');

                  // Cria a assinatura completa com parâmetros usando snippets
                  // Exemplo: AnoBissexto(Data aDataIni, Numero end aBissexto);
                  if (funcData.params && funcData.params.length > 0) {
                     // Cria snippets com placeholders para cada parâmetro
                     const paramsSnippet = funcData.params.map((p, index) => {
                        return `\${${index + 1}:${p.type} ${p.name}}`;
                     }).join(', ');

                     item.insertText = new vscode.SnippetString(`${funcName}(${paramsSnippet});`);
                  } else {
                     // Função sem parâmetros
                     item.insertText = new vscode.SnippetString(`${funcName}();`);
                  }

                  // Remove o "Dev." ou "dev." do texto
                  item.additionalTextEdits = [
                     vscode.TextEdit.delete(new vscode.Range(
                        position.translate(0, -4),
                        position
                     ))
                  ];

                  return item;
               }).filter(item => item !== null);

               return completions;
            } catch (error) {
               outputChannel.appendLine(`❌ Error in CompletionProvider: ${error.message}`);
               return undefined;
            }
         }
      },
      '.' // trigger character
   );

   // 2. SIGNATURE HELP PROVIDER (Mostra parâmetros ao digitar "(")
   const signatureHelpProvider = vscode.languages.registerSignatureHelpProvider(
      'lspt',
      {
         provideSignatureHelp(document, position) {
            try {
               const line = document.lineAt(position).text;
               const beforeCursor = line.substring(0, position.character);

               // Encontra o nome da função antes do "("
               const match = beforeCursor.match(/(\w+)\s*\(/);
               if (!match) return undefined;

               const funcName = match[1];
               const funcData = FUNCTIONS_DATA[funcName];

               if (!funcData) return undefined;

               const signatureHelp = new vscode.SignatureHelp();
               const signature = new vscode.SignatureInformation(funcData.signature);

               // Validação robusta de parâmetros
               if (funcData.params && Array.isArray(funcData.params)) {
                  funcData.params.forEach(param => {
                     signature.parameters.push(
                        new vscode.ParameterInformation(
                           `${param.type} ${param.name}`,
                           `${param.direction === 'out' ? 'Saída' : 'Entrada'}`
                        )
                     );
                  });

                  // Determina qual parâmetro está ativo baseado nas vírgulas
                  const commaCount = (beforeCursor.match(/,/g) || []).length;
                  signatureHelp.activeParameter = Math.min(commaCount, funcData.params.length - 1);
               }

               signatureHelp.signatures = [signature];
               signatureHelp.activeSignature = 0;

               return signatureHelp;
            } catch (error) {
               outputChannel.appendLine(`❌ Error in SignatureHelpProvider: ${error.message}`);
               return undefined;
            }
         }
      },
      '(', ',' // trigger characters
   );

   // 3. HOVER PROVIDER (Mostra documentação ao passar o mouse)
   const hoverProvider = vscode.languages.registerHoverProvider('lspt', {
      provideHover(document, position) {
         try {
            const range = document.getWordRangeAtPosition(position);
            if (!range) return undefined;

            const word = document.getText(range);
            const funcData = FUNCTIONS_DATA[word];

            if (!funcData) return undefined;

            const markdown = new vscode.MarkdownString();
            markdown.appendCodeblock(funcData.signature, 'lspt');
            markdown.appendMarkdown(`\\n\\n**Código:** ${funcData.code}\\n\\n`);
            markdown.appendMarkdown(`${funcData.description}\\n\\n`);

            if (funcData.params && Array.isArray(funcData.params) && funcData.params.length > 0) {
               markdown.appendMarkdown('**Parâmetros:**\\n\\n');
               funcData.params.forEach(param => {
                  markdown.appendMarkdown(`- \\`${ param.type } ${ param.name }\\` (${param.direction === 'out' ? 'Saída' : 'Entrada'})\\n`);
               });
            }

            return new vscode.Hover(markdown);
         } catch (error) {
            outputChannel.appendLine(`❌ Error in HoverProvider: ${error.message}`);
            return undefined;
         }
      }
   });

   // 4. DEFINITION PROVIDER (Command+Click para ir à documentação)
   const definitionProvider = vscode.languages.registerDefinitionProvider('lspt', {
      provideDefinition(document, position) {
         try {
            const range = document.getWordRangeAtPosition(position);
            if (!range) return undefined;

            const word = document.getText(range);
            const funcData = FUNCTIONS_DATA[word];

            if (!funcData) return undefined;

            // Caminho para o arquivo de documentação
            const docPath = path.join(__dirname, 'docs', 'functions', `${word}.md`);

            // Verifica se o arquivo existe
            if (fs.existsSync(docPath)) {
               const docUri = vscode.Uri.file(docPath);
               return new vscode.Location(docUri, new vscode.Position(0, 0));
            } else {
               vscode.window.showInformationMessage(
                  `Documentação para ${word} ainda não está completa. Você pode editar em: docs/functions/${word}.md`
               );
               return undefined;
            }
         } catch (error) {
            outputChannel.appendLine(`❌ Error in DefinitionProvider: ${error.message}`);
            return undefined;
         }
      }
   });

   // Registra todos os providers
   context.subscriptions.push(
      completionProvider,
      signatureHelpProvider,
      hoverProvider,
      definitionProvider
   );

   outputChannel.appendLine('✅ Todos os providers registrados com sucesso!');
}

function deactivate() {
   // Cleanup if needed
}

module.exports = {
   activate,
   deactivate
};
