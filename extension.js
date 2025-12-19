// Extension entry point
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

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
   console.log('LSPT Language Support extension is now active!');

   // 1. COMPLETION PROVIDER (Autocomplete ao digitar Dev.)
   const completionProvider = vscode.languages.registerCompletionItemProvider(
      'lspt',
      {
         provideCompletionItems(document, position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);

            // Verifica se o usuário digitou "Dev."
            if (!linePrefix.endsWith('Dev.')) {
               return undefined;
            }

            // Retorna todas as funções como sugestões
            const completions = Object.keys(FUNCTIONS_DATA).map(funcName => {
               const funcData = FUNCTIONS_DATA[funcName];
               const item = new vscode.CompletionItem(funcName, vscode.CompletionItemKind.Function);

               // Detalhes mostrados no autocomplete
               item.detail = funcData.signature;
               item.documentation = new vscode.MarkdownString(funcData.description);

               // O que será inserido ao selecionar
               const paramsStr = funcData.params.map(p => `${p.type} ${p.name}`).join(', ');
               item.insertText = new vscode.SnippetString(`${funcName}(${paramsStr});`);

               return item;
            });

            return completions;
         }
      },
      '.' // trigger character
   );

   // 2. SIGNATURE HELP PROVIDER (Mostra parâmetros ao digitar "(")
   const signatureHelpProvider = vscode.languages.registerSignatureHelpProvider(
      'lspt',
      {
         provideSignatureHelp(document, position) {
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

            // Adiciona informações dos parâmetros
            funcData.params.forEach(param => {
               signature.parameters.push(
                  new vscode.ParameterInformation(
                     `${param.type} ${param.name}`,
                     `${param.direction === 'out' ? 'Saída' : 'Entrada'}`
                  )
               );
            });

            signatureHelp.signatures = [signature];
            signatureHelp.activeSignature = 0;

            // Determina qual parâmetro está ativo baseado nas vírgulas
            const commaCount = (beforeCursor.match(/,/g) || []).length;
            signatureHelp.activeParameter = Math.min(commaCount, funcData.params.length - 1);

            return signatureHelp;
         }
      },
      '(', ',' // trigger characters
   );

   // 3. HOVER PROVIDER (Mostra documentação ao passar o mouse)
   const hoverProvider = vscode.languages.registerHoverProvider('lspt', {
      provideHover(document, position) {
         const range = document.getWordRangeAtPosition(position);
         if (!range) return undefined;

         const word = document.getText(range);
         const funcData = FUNCTIONS_DATA[word];

         if (!funcData) return undefined;

         const markdown = new vscode.MarkdownString();
         markdown.appendCodeblock(funcData.signature, 'lspt');
         markdown.appendMarkdown(`\n\n**Código:** ${funcData.code}\n\n`);
         markdown.appendMarkdown(`${funcData.description}\n\n`);

         if (funcData.params.length > 0) {
            markdown.appendMarkdown('**Parâmetros:**\n\n');
            funcData.params.forEach(param => {
               markdown.appendMarkdown(`- \`${param.type} ${param.name}\` (${param.direction === 'out' ? 'Saída' : 'Entrada'})\n`);
            });
         }

         return new vscode.Hover(markdown);
      }
   });

   // 4. DEFINITION PROVIDER (Command+Click para ir à documentação)
   const definitionProvider = vscode.languages.registerDefinitionProvider('lspt', {
      provideDefinition(document, position) {
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
      }
   });

   // Registra todos os providers
   context.subscriptions.push(
      completionProvider,
      signatureHelpProvider,
      hoverProvider,
      definitionProvider
   );

   console.log('✅ Todos os providers registrados com sucesso!');
}

function deactivate() {
   // Cleanup if needed
}

module.exports = {
   activate,
   deactivate
};
