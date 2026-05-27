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
 * Aviso de migração: a versão publicada sob o publisher antigo "eliezer-organ"
 * orienta o usuário a instalar a nova "eorgan.lspt-language-support". Exibido uma
 * única vez (globalState). No build do publisher "eorgan" é no-op.
 */
function maybeShowMigrationNotice(context) {
   const OLD_ID = 'eliezer-organ.lspt-language-support';
   const NEW_ID = 'eorgan.lspt-language-support';
   const NEW_URL = 'https://open-vsx.org/extension/eorgan/lspt-language-support';
   const STATE_KEY = 'migracaoEorganAvisada';

   const id = (context.extension && context.extension.id ? context.extension.id : '').toLowerCase();
   if (id !== OLD_ID) return;
   if (context.globalState.get(STATE_KEY)) return;

   const instalar = 'Instalar nova versão';
   const abrir = 'Abrir página';
   vscode.window
      .showInformationMessage(
         'A extensão "LSPT Language Support" mudou para o publisher "eorgan". Instale a nova versão (eorgan.lspt-language-support) para continuar recebendo atualizações.',
         instalar,
         abrir
      )
      .then((escolha) => {
         if (escolha === instalar) {
            vscode.commands.executeCommand('workbench.extensions.installExtension', NEW_ID).then(
               () =>
                  vscode.window.showInformationMessage(
                     'Nova versão instalada. Recarregue a janela e desinstale a versão antiga (eliezer-organ).'
                  ),
               () => vscode.env.openExternal(vscode.Uri.parse(NEW_URL))
            );
         } else if (escolha === abrir) {
            vscode.env.openExternal(vscode.Uri.parse(NEW_URL));
         }
         context.globalState.update(STATE_KEY, true);
      });
}

/**
 * Ativa a extensão
 */
function activate(context) {
   console.log('LSPT Language Support extension is now active!');

   try {
      maybeShowMigrationNotice(context);
   } catch (error) {
      console.error('Falha ao exibir aviso de migração:', error);
   }

   // 1. COMPLETION PROVIDER (Autocomplete ao digitar Dev.)
   const completionProvider = vscode.languages.registerCompletionItemProvider(
      'lspt',
      {
         provideCompletionItems(document, position) {
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
                  console.warn(`Dados inválidos para função: ${funcName}`);
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

            // Adiciona informações dos parâmetros (com descrição, quando disponível)
            funcData.params.forEach(param => {
               const label = [param.type, param.name].filter(Boolean).join(' ');
               const dir = param.direction === 'out' ? 'Saída' : 'Entrada';
               const doc = param.description ? `${dir} — ${param.description}` : dir;
               signature.parameters.push(new vscode.ParameterInformation(label, doc));
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
               const label = [param.type, param.name].filter(Boolean).join(' ');
               const dir = param.direction === 'out' ? 'Saída' : 'Entrada';
               const desc = param.description ? `: ${param.description}` : '';
               markdown.appendMarkdown(`- \`${label}\` (${dir})${desc}\n`);
            });
         }

         if (Array.isArray(funcData.returns) && funcData.returns.length > 0) {
            markdown.appendMarkdown('\n**Valores de retorno:**\n\n');
            funcData.returns.forEach(r => markdown.appendMarkdown(`- ${r}\n`));
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
