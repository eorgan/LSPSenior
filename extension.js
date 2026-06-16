// Extension entry point
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

// Carrega dados das funções
const FUNCTIONS_DATA = loadFunctionsData();
// Índice case-insensitive (a LSP não distingue maiúsculas/minúsculas).
const FUNCTIONS_LOWER = {};
for (const name of Object.keys(FUNCTIONS_DATA)) FUNCTIONS_LOWER[name.toLowerCase()] = name;

/** Busca a função no catálogo, ignorando a caixa. */
function getFunc(word) {
   if (!word) return undefined;
   if (FUNCTIONS_DATA[word]) return FUNCTIONS_DATA[word];
   const canon = FUNCTIONS_LOWER[word.toLowerCase()];
   return canon ? FUNCTIONS_DATA[canon] : undefined;
}

// Palavras reservadas da LSP (para autocomplete e exclusão em diagnostics).
const RESERVED_WORDS = [
   'Definir', 'Funcao', 'Se', 'Senao', 'Enquanto', 'Para', 'Inicio', 'Fim',
   'Pare', 'Continue', 'VaPara', 'Regra', 'Cancel', 'Mensagem', 'Inserir',
   'Abrir', 'Fechar', 'Ler', 'Lernl', 'Gravar', 'Gravarnl', 'Cursor',
   'ValRet', 'ValStr', 'Retorna', 'Erro', 'Aviso', 'E', 'OU', 'NAO',
];
// Conjunto em minúsculas para checagens (exclui da detecção de "chamada de função").
const RESERVED_LOWER = new Set(RESERVED_WORDS.map((w) => w.toLowerCase()));
// Construções de fluxo cujos parênteses contêm EXPRESSÕES (não são chamadas de função).
// Só estas são isentas da regra "sem operação dentro de parâmetro".
const CONTROL_FLOW_LOWER = new Set(['se', 'senao', 'enquanto', 'para', 'funcao']);

// Variáveis de sistema da LSP, com descrição (fonte: manual oficial).
const SYSTEM_VARS = {
   AnoSis: 'Ano do sistema operacional',
   CodEmp: 'Código da empresa',
   CodFil: 'Código da filial',
   CodUsu: 'Código do usuário',
   DatSis: 'Data do sistema operacional',
   DBNomeUsuario: 'Nome do usuário do banco de dados',
   DBTipo: 'Banco de dados utilizado (ORACLE/SQLSERVER/POSTGRESQL/OUTRO)',
   DesRodape: 'Descrição para rodapé',
   DiaSis: 'Dia do sistema operacional',
   Empresa: 'Nome da empresa',
   ExtSis: 'Data por extenso do sistema operacional',
   Filial: 'Nome da filial',
   GerTabAlf: 'Variável alfanumérica com 2000 ocorrências',
   GerTabNum: 'Variável numérica flutuante com 999 ocorrências',
   HorSis: 'Hora do sistema operacional',
   MesSis: 'Mês do sistema operacional',
   NomUsu: 'Nome do usuário',
   NumPag: 'Número da página',
   QtdDupPag: 'Quantidade de duplicatas impressas por página',
};
const SYSTEM_VARS_LOWER = {};
for (const v of Object.keys(SYSTEM_VARS)) SYSTEM_VARS_LOWER[v.toLowerCase()] = v;

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

/** Snippet de chamada de função com placeholders nos parâmetros. */
function callSnippet(funcName, funcData) {
   if (funcData.params && funcData.params.length > 0) {
      const paramsSnippet = funcData.params
         .map((p, i) => `\${${i + 1}:${[p.type, p.name].filter(Boolean).join(' ')}}`)
         .join(', ');
      return new vscode.SnippetString(`${funcName}(${paramsSnippet});`);
   }
   return new vscode.SnippetString(`${funcName}();`);
}

/** Item de autocomplete para uma função do catálogo. */
function functionCompletionItem(funcName) {
   const funcData = FUNCTIONS_DATA[funcName];
   if (!funcData) return null;
   const item = new vscode.CompletionItem(funcName, vscode.CompletionItemKind.Function);
   item.detail = funcData.signature || funcName;
   item.documentation = new vscode.MarkdownString(funcData.description || '');
   item.insertText = callSnippet(funcName, funcData);
   return item;
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

// ---------------------------------------------------------------------------
// Helpers de análise de texto (usados por diagnostics e navegação)
// ---------------------------------------------------------------------------

/** Substitui comentários de linha e strings por espaços (preserva colunas). */
function stripCommentsAndStrings(line) {
   let s = line;
   s = s.replace(/@--[\s\S]*?--@/g, (m) => ' '.repeat(m.length));
   s = s.replace(/@[^@]*@/g, (m) => ' '.repeat(m.length));
   s = s.replace(/"(?:[^"\\]|\\.)*"/g, (m) => ' '.repeat(m.length));
   s = s.replace(/'(?:[^'\\]|\\.)*'/g, (m) => ' '.repeat(m.length));
   return s;
}

/** Extrai os argumentos de uma chamada a partir do índice do "(" (linha única). */
function extractArgs(text, openParenIdx) {
   let depth = 0;
   for (let i = openParenIdx; i < text.length; i++) {
      if (text[i] === '(') depth++;
      else if (text[i] === ')') {
         depth--;
         if (depth === 0) return text.slice(openParenIdx + 1, i);
      }
   }
   return text.slice(openParenIdx + 1); // sem fechamento na linha
}

/** Lista funções definidas pelo usuário no documento: { nome: linha }. */
function findUserFunctions(document) {
   const defs = {};
   const re = /\bFuncao\s+([A-Za-z_]\w*)\s*\(/gi;
   for (let i = 0; i < document.lineCount; i++) {
      const text = stripCommentsAndStrings(document.lineAt(i).text);
      let m;
      re.lastIndex = 0;
      while ((m = re.exec(text)) !== null) {
         const nome = m[1].toLowerCase();
         if (!(nome in defs)) defs[nome] = i;
      }
   }
   return defs;
}

// ---------------------------------------------------------------------------
// Cabeçalho automático (Author/Email do Git, datas de criação/alteração)
// ---------------------------------------------------------------------------

/** Zero-pad para 2 dígitos. */
function pad2(n) {
   return n < 10 ? '0' + n : '' + n;
}

/** Formata uma data como "YYYY-MM-DD HH:mm:ss" na zona local. */
function formatDate(d) {
   return (
      `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())} ` +
      `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`
   );
}

/** Escapa caracteres especiais de SnippetString ($, }, \). */
function escapeSnippet(s) {
   return String(s).replace(/[\\$}]/g, '\\$&');
}

/** Raiz do workspace de um documento (ou a pasta do arquivo, em arquivos avulsos). */
function workspaceRootFor(document) {
   const folder = vscode.workspace.getWorkspaceFolder(document.uri);
   if (folder) return folder.uri.fsPath;
   if (document.uri.scheme === 'file') return path.dirname(document.uri.fsPath);
   // Arquivo sem título (untitled) ou avulso: usa a 1ª pasta do workspace aberto,
   // para que o cabeçalho ainda leia o git config do projeto.
   const folders = vscode.workspace.workspaceFolders;
   if (folders && folders.length) return folders[0].uri.fsPath;
   return undefined;
}

// Cache de identidade do Git por raiz de workspace (evita chamar git a cada save).
const gitIdentityCache = {};

/** Lê user.name/user.email do `git config` (cacheado). Vazio se não houver Git. */
function getGitIdentity(workspaceRoot) {
   if (!workspaceRoot) return { author: '', email: '' };
   if (gitIdentityCache[workspaceRoot]) return gitIdentityCache[workspaceRoot];
   const read = (key) => {
      try {
         return execFileSync('git', ['-C', workspaceRoot, 'config', '--get', key], {
            encoding: 'utf8',
         }).trim();
      } catch (e) {
         return '';
      }
   };
   const id = { author: read('user.name'), email: read('user.email') };
   gitIdentityCache[workspaceRoot] = id;
   return id;
}

/** Autor/e-mail para o cabeçalho: Git → fallback das settings → vazio. */
function getHeaderIdentity(document) {
   const cfg = vscode.workspace.getConfiguration('lspt');
   const git = getGitIdentity(workspaceRootFor(document));
   return {
      author: git.author || cfg.get('header.fallback.author', ''),
      email: git.email || cfg.get('header.fallback.email', ''),
   };
}

/** Data de criação do arquivo (birthtime) com fallback para agora. */
function getCreatedAt(document) {
   if (document.uri.scheme === 'file') {
      try {
         const ms = fs.statSync(document.uri.fsPath).birthtimeMs;
         if (ms && ms > 0) return new Date(ms);
      } catch (e) {
         // ignora — usa agora
      }
   }
   return new Date();
}

/** Monta o SnippetString do cabeçalho preenchido, com cursor em "Description". */
function buildHeaderSnippet(document) {
   const { author, email } = getHeaderIdentity(document);
   const created = formatDate(getCreatedAt(document));
   const a = escapeSnippet(author);
   const e = escapeSnippet(email);
   const c = escapeSnippet(created);
   return new vscode.SnippetString(
      '/*\n' +
         ` * @Author: ${a}\n` +
         ` * @Email: ${e}\n` +
         ` * @Date: ${c}\n` +
         ` * @Last Modified by: ${a}\n` +
         ` * @Last Modified time: ${c}\n` +
         ' * @Description: ${1:Description}\n' +
         ' */\n'
   );
}

/**
 * Calcula os TextEdits para atualizar "@Last Modified by/time" no save.
 * Mexe SOMENTE nessas duas linhas do primeiro bloco de comentário que as
 * contenha; não retorna edits se nada mudou (idempotente, evita loop de save).
 */
function computeHeaderEdits(document) {
   if (document.languageId !== 'lspt') return [];
   const cfg = vscode.workspace.getConfiguration('lspt');
   if (!cfg.get('header.autoUpdate', true)) return [];

   // Localiza o primeiro bloco /* ... */.
   let start = -1;
   let end = -1;
   for (let i = 0; i < document.lineCount; i++) {
      const t = document.lineAt(i).text;
      if (start === -1) {
         const open = t.indexOf('/*');
         if (open !== -1) {
            start = i;
            if (t.indexOf('*/', open + 2) !== -1) {
               end = i;
               break;
            }
         }
      } else if (t.indexOf('*/') !== -1) {
         end = i;
         break;
      }
   }
   if (start === -1 || end === -1) return [];

   const now = formatDate(new Date());
   const { author, email } = getHeaderIdentity(document);
   const edits = [];
   let hasTime = false;
   let hasBy = false;

   for (let i = start; i <= end; i++) {
      const line = document.lineAt(i);
      const text = line.text;
      let m;
      if ((m = /^(\s*\*?\s*@Last Modified time:).*$/.exec(text))) {
         hasTime = true;
         const novo = `${m[1]} ${now}`;
         if (novo !== text) edits.push(vscode.TextEdit.replace(line.range, novo));
      } else if ((m = /^(\s*\*?\s*@Last Modified by:).*$/.exec(text))) {
         hasBy = true;
         // Só sobrescreve o autor se houver identidade (não apaga nome digitado à mão).
         if (author) {
            const novo = `${m[1]} ${author}`;
            if (novo !== text) edits.push(vscode.TextEdit.replace(line.range, novo));
         }
      } else if ((m = /^(\s*\*?\s*@Author:)\s*(.*?)\s*$/.exec(text))) {
         // Preenche o autor SÓ se estiver vazio (ex.: cabeçalho inserido sem Git
         // resolvido). Nunca sobrescreve um nome já digitado.
         if (author && !m[2]) edits.push(vscode.TextEdit.replace(line.range, `${m[1]} ${author}`));
      } else if ((m = /^(\s*\*?\s*@Email:)\s*(.*?)\s*$/.exec(text))) {
         if (email && !m[2]) edits.push(vscode.TextEdit.replace(line.range, `${m[1]} ${email}`));
      }
   }

   // O bloco precisa ter AS DUAS linhas para ser considerado um cabeçalho.
   if (!hasTime || !hasBy) return [];
   return edits;
}

// ---------------------------------------------------------------------------
// Diagnostics (linter conservador das armadilhas da LSP)
// ---------------------------------------------------------------------------

function computeDiagnostics(document) {
   const cfg = vscode.workspace.getConfiguration('lspt');
   if (!cfg.get('diagnostics.enabled', true)) return [];

   const diags = [];
   const userFns = findUserFunctions(document);
   const blockStack = [];
   let pendingLoop = false;
   let inBlockComment = false;

   for (let lineNo = 0; lineNo < document.lineCount; lineNo++) {
      let raw = document.lineAt(lineNo).text;

      // Comentário de bloco /* */ multi-linha.
      if (inBlockComment) {
         const end = raw.indexOf('*/');
         if (end === -1) continue;
         raw = ' '.repeat(end + 2) + raw.slice(end + 2);
         inBlockComment = false;
      }
      const openBlock = raw.indexOf('/*');
      if (openBlock !== -1 && raw.indexOf('*/', openBlock) === -1) {
         raw = raw.slice(0, openBlock);
         inBlockComment = true;
      }

      const line = stripCommentsAndStrings(raw);

      // --- Estrutura de blocos para validar Pare/Continue ---
      const tokenRe = /(\{)|(\})|\b(Inicio)\b|\b(Fim)\b|\b(Pare)\b|\b(Continue)\b|\b(?:Para|Enquanto)\s*\(/gi;
      let tk;
      while ((tk = tokenRe.exec(line)) !== null) {
         if (tk[1] || tk[3]) {
            // abre bloco ( { ou Inicio )
            blockStack.push(pendingLoop ? 'loop' : 'block');
            pendingLoop = false;
         } else if (tk[2] || tk[4]) {
            // fecha bloco ( } ou Fim )
            blockStack.pop();
         } else if (tk[5] || tk[6]) {
            // Pare / Continue
            if (!blockStack.includes('loop')) {
               diags.push(
                  new vscode.Diagnostic(
                     new vscode.Range(lineNo, tk.index, lineNo, tk.index + tk[0].length),
                     `'${tk[0]}' só pode ser usado dentro de um loop Para/Enquanto.`,
                     vscode.DiagnosticSeverity.Warning
                  )
               );
            }
         } else {
            // cabeçalho de loop Para(/Enquanto(
            pendingLoop = true;
         }
      }

      // --- Operações dentro de parâmetros de função ---
      const callRe = /\b([A-Za-z_]\w*)\s*\(/g;
      let cm;
      while ((cm = callRe.exec(line)) !== null) {
         const nome = cm[1];
         const lower = nome.toLowerCase();
         if (CONTROL_FLOW_LOWER.has(lower)) continue; // Se/Enquanto/Para/Funcao: expressões, não chamadas
         if (line[cm.index - 1] === '.') continue; // método de objeto (cursor/WS) — não analisa

         const isBuiltin = lower in FUNCTIONS_LOWER;
         const isUser = lower in userFns;
         const openIdx = cm.index + cm[0].length - 1;
         const args = extractArgs(line, openIdx);

         const temConcat = /\+/.test(args);
         const temChamada = /\b[A-Za-z_]\w*\s*\(/.test(args);
         if (temConcat || temChamada) {
            diags.push(
               new vscode.Diagnostic(
                  new vscode.Range(lineNo, cm.index, lineNo, openIdx + 1),
                  `Operação dentro do parâmetro de '${nome}'. Na LSP, faça a manipulação antes e passe a variável pronta.`,
                  vscode.DiagnosticSeverity.Warning
               )
            );
         } else if (
            cfg.get('diagnostics.unknownFunctions', false) &&
            !isBuiltin &&
            !isUser &&
            !(lower in SYSTEM_VARS_LOWER) &&
            nome.length >= 3
         ) {
            diags.push(
               new vscode.Diagnostic(
                  new vscode.Range(lineNo, cm.index, lineNo, cm.index + nome.length),
                  `Função '${nome}' não encontrada no catálogo. Verifique o nome (ou é função do usuário/externa).`,
                  vscode.DiagnosticSeverity.Information
               )
            );
         }
      }
   }

   return diags;
}

// ---------------------------------------------------------------------------
// Ativação
// ---------------------------------------------------------------------------

function activate(context) {
   console.log('LSPT Language Support extension is now active!');

   try {
      maybeShowMigrationNotice(context);
   } catch (error) {
      console.error('Falha ao exibir aviso de migração:', error);
   }

   // 1. COMPLETION — geral (funções, palavras reservadas, variáveis de sistema)
   //    e modo "Dev." (remove o prefixo ao inserir).
   const completionProvider = vscode.languages.registerCompletionItemProvider(
      'lspt',
      {
         provideCompletionItems(document, position) {
            const linePrefix = document
               .lineAt(position)
               .text.substring(0, position.character)
               .toLowerCase();
            const afterDev = linePrefix.endsWith('dev.');

            const items = [];

            // Funções do catálogo
            for (const funcName of Object.keys(FUNCTIONS_DATA)) {
               const item = functionCompletionItem(funcName);
               if (!item) continue;
               if (afterDev) {
                  item.additionalTextEdits = [
                     vscode.TextEdit.delete(new vscode.Range(position.translate(0, -4), position)),
                  ];
               }
               items.push(item);
            }

            if (afterDev) return items; // após "Dev." sugerimos só funções

            // Cabeçalho dinâmico — substitui os antigos snippets estáticos
            // `header`/`lspt-header`, inserindo o bloco já preenchido com os
            // dados do Git e a data de criação do arquivo.
            for (const label of ['header', 'lspt-header']) {
               const it = new vscode.CompletionItem(label, vscode.CompletionItemKind.Snippet);
               it.detail = 'Cabeçalho LSPT (preenchido com dados do Git)';
               it.documentation = new vscode.MarkdownString(
                  'Insere o cabeçalho já preenchido com Autor/E-mail do Git e a data de criação do arquivo.'
               );
               it.insertText = buildHeaderSnippet(document);
               it.sortText = '0000' + label; // prioriza no topo da lista
               items.push(it);
            }

            // Palavras reservadas
            for (const kw of RESERVED_WORDS) {
               items.push(new vscode.CompletionItem(kw, vscode.CompletionItemKind.Keyword));
            }
            // Variáveis de sistema
            for (const [name, desc] of Object.entries(SYSTEM_VARS)) {
               const it = new vscode.CompletionItem(name, vscode.CompletionItemKind.Variable);
               it.detail = 'Variável de sistema';
               it.documentation = new vscode.MarkdownString(desc);
               items.push(it);
            }
            return items;
         },
      },
      '.' // trigger character (para o modo Dev.)
   );

   // 2. SIGNATURE HELP
   const signatureHelpProvider = vscode.languages.registerSignatureHelpProvider(
      'lspt',
      {
         provideSignatureHelp(document, position) {
            const beforeCursor = document
               .lineAt(position)
               .text.substring(0, position.character);
            const match = beforeCursor.match(/(\w+)\s*\([^()]*$/);
            if (!match) return undefined;

            const funcData = getFunc(match[1]);
            if (!funcData) return undefined;

            const signatureHelp = new vscode.SignatureHelp();
            const signature = new vscode.SignatureInformation(funcData.signature);
            funcData.params.forEach((param) => {
               const label = [param.type, param.name].filter(Boolean).join(' ');
               const dir = param.direction === 'out' ? 'Saída' : 'Entrada';
               const doc = param.description ? `${dir} — ${param.description}` : dir;
               signature.parameters.push(new vscode.ParameterInformation(label, doc));
            });
            signatureHelp.signatures = [signature];
            signatureHelp.activeSignature = 0;
            const commaCount = (beforeCursor.match(/,/g) || []).length;
            signatureHelp.activeParameter = Math.min(commaCount, Math.max(funcData.params.length - 1, 0));
            return signatureHelp;
         },
      },
      '(', ','
   );

   // 3. HOVER — funções e variáveis de sistema
   const hoverProvider = vscode.languages.registerHoverProvider('lspt', {
      provideHover(document, position) {
         const range = document.getWordRangeAtPosition(position);
         if (!range) return undefined;
         const word = document.getText(range);

         const funcData = getFunc(word);
         if (funcData) {
            const md = new vscode.MarkdownString();
            md.appendCodeblock(funcData.signature, 'lspt');
            md.appendMarkdown(`\n\n**Código:** ${funcData.code}\n\n`);
            md.appendMarkdown(`${funcData.description}\n\n`);
            if (funcData.params.length > 0) {
               md.appendMarkdown('**Parâmetros:**\n\n');
               funcData.params.forEach((param) => {
                  const label = [param.type, param.name].filter(Boolean).join(' ');
                  const dir = param.direction === 'out' ? 'Saída' : 'Entrada';
                  const desc = param.description ? `: ${param.description}` : '';
                  md.appendMarkdown(`- \`${label}\` (${dir})${desc}\n`);
               });
            }
            if (Array.isArray(funcData.returns) && funcData.returns.length > 0) {
               md.appendMarkdown('\n**Valores de retorno:**\n\n');
               funcData.returns.forEach((r) => md.appendMarkdown(`- ${r}\n`));
            }
            if (funcData.source) {
               md.appendMarkdown(`\n📖 [Documentação oficial](${funcData.source})`);
            }
            return new vscode.Hover(md);
         }

         // Variável de sistema
         const sysCanon = SYSTEM_VARS_LOWER[word.toLowerCase()];
         if (sysCanon) {
            const md = new vscode.MarkdownString();
            md.appendCodeblock(sysCanon, 'lspt');
            md.appendMarkdown(`\n\n**Variável de sistema** — ${SYSTEM_VARS[sysCanon]}`);
            return new vscode.Hover(md);
         }

         return undefined;
      },
   });

   // 4. DEFINITION — função do usuário (no documento) ou docs do built-in
   const definitionProvider = vscode.languages.registerDefinitionProvider('lspt', {
      provideDefinition(document, position) {
         const range = document.getWordRangeAtPosition(position);
         if (!range) return undefined;
         const word = document.getText(range);

         // Função definida pelo usuário neste documento?
         const userFns = findUserFunctions(document);
         const lineNo = userFns[word.toLowerCase()];
         if (lineNo !== undefined) {
            return new vscode.Location(document.uri, new vscode.Position(lineNo, 0));
         }

         // Built-in → arquivo de documentação
         const funcData = getFunc(word);
         if (!funcData) return undefined;
         const canon = FUNCTIONS_DATA[word] ? word : FUNCTIONS_LOWER[word.toLowerCase()];
         const docPath = path.join(__dirname, 'docs', 'functions', `${canon}.md`);
         if (fs.existsSync(docPath)) {
            return new vscode.Location(vscode.Uri.file(docPath), new vscode.Position(0, 0));
         }
         vscode.window.showInformationMessage(
            `Documentação para ${canon} ainda não está completa.`
         );
         return undefined;
      },
   });

   // 5. DOCUMENT SYMBOLS (Outline) — funções definidas no arquivo
   const symbolProvider = vscode.languages.registerDocumentSymbolProvider('lspt', {
      provideDocumentSymbols(document) {
         const symbols = [];
         const vistos = new Set();
         const re = /\bFuncao\s+([A-Za-z_]\w*)\s*\(/i;
         for (let i = 0; i < document.lineCount; i++) {
            const text = stripCommentsAndStrings(document.lineAt(i).text);
            const m = text.match(re);
            if (m && !vistos.has(m[1].toLowerCase())) {
               vistos.add(m[1].toLowerCase());
               const range = document.lineAt(i).range;
               symbols.push(
                  new vscode.DocumentSymbol(m[1], 'Funcao', vscode.SymbolKind.Function, range, range)
               );
            }
         }
         return symbols;
      },
   });

   // 6. FOLDING — blocos Inicio ... Fim
   const foldingProvider = vscode.languages.registerFoldingRangeProvider('lspt', {
      provideFoldingRanges(document) {
         const ranges = [];
         const stack = [];
         let inBlockComment = false;
         for (let i = 0; i < document.lineCount; i++) {
            let raw = document.lineAt(i).text;
            if (inBlockComment) {
               const end = raw.indexOf('*/');
               if (end === -1) continue;
               raw = raw.slice(end + 2);
               inBlockComment = false;
            }
            const ob = raw.indexOf('/*');
            if (ob !== -1 && raw.indexOf('*/', ob) === -1) {
               raw = raw.slice(0, ob);
               inBlockComment = true;
            }
            const line = stripCommentsAndStrings(raw);
            const re = /\b(Inicio)\b|\b(Fim)\b/gi;
            let m;
            while ((m = re.exec(line)) !== null) {
               if (m[1]) stack.push(i);
               else if (m[2]) {
                  const start = stack.pop();
                  if (start !== undefined && i > start) ranges.push(new vscode.FoldingRange(start, i));
               }
            }
         }
         return ranges;
      },
   });

   // 7. DIAGNOSTICS
   const diagnostics = vscode.languages.createDiagnosticCollection('lspt');
   const refresh = (document) => {
      if (!document || document.languageId !== 'lspt') return;
      try {
         diagnostics.set(document.uri, computeDiagnostics(document));
      } catch (e) {
         console.error('Erro nos diagnostics LSPT:', e);
      }
   };
   let debounce;
   const refreshDebounced = (document) => {
      clearTimeout(debounce);
      debounce = setTimeout(() => refresh(document), 400);
   };
   if (vscode.window.activeTextEditor) refresh(vscode.window.activeTextEditor.document);

   // 8. COMANDO — buscar função no catálogo e inserir a chamada
   const buscarFuncao = vscode.commands.registerCommand('lspt.buscarFuncao', async () => {
      const editor = vscode.window.activeTextEditor;
      const picks = Object.keys(FUNCTIONS_DATA)
         .sort()
         .map((name) => ({
            label: name,
            detail: FUNCTIONS_DATA[name].signature,
            description: (FUNCTIONS_DATA[name].description || '').slice(0, 80),
         }));
      const escolha = await vscode.window.showQuickPick(picks, {
         matchOnDetail: true,
         placeHolder: 'Buscar função LSP (insere a chamada com parâmetros)',
      });
      if (!escolha) return;
      if (editor) {
         editor.insertSnippet(callSnippet(escolha.label, FUNCTIONS_DATA[escolha.label]));
      }
   });

   // 9. COMANDO — inserir cabeçalho preenchido com os dados do Git
   const inserirCabecalho = vscode.commands.registerCommand('lspt.inserirCabecalho', () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
         vscode.window.showInformationMessage('Abra um arquivo para inserir o cabeçalho.');
         return;
      }
      editor.insertSnippet(buildHeaderSnippet(editor.document));
   });

   // 10. AUTO-ATUALIZAÇÃO do cabeçalho ao salvar (@Last Modified by/time)
   const headerOnSave = vscode.workspace.onWillSaveTextDocument((event) => {
      if (event.document.languageId !== 'lspt') return;
      event.waitUntil(
         Promise.resolve().then(() => {
            try {
               return computeHeaderEdits(event.document);
            } catch (e) {
               console.error('Erro ao atualizar cabeçalho LSPT:', e);
               return [];
            }
         })
      );
   });

   context.subscriptions.push(
      completionProvider,
      signatureHelpProvider,
      hoverProvider,
      definitionProvider,
      symbolProvider,
      foldingProvider,
      diagnostics,
      buscarFuncao,
      inserirCabecalho,
      headerOnSave,
      vscode.workspace.onDidOpenTextDocument(refresh),
      vscode.workspace.onDidChangeTextDocument((e) => refreshDebounced(e.document)),
      vscode.workspace.onDidCloseTextDocument((doc) => diagnostics.delete(doc.uri)),
      vscode.window.onDidChangeActiveTextEditor((ed) => ed && refresh(ed.document))
   );

   console.log('✅ Todos os providers registrados com sucesso!');
}

function deactivate() {
   // Cleanup if needed
}

module.exports = {
   activate,
   deactivate,
};
