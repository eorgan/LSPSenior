// Teste do Quick Fix de cursor SQL não fechado (item 7), sem depender do VS Code.
//
// Mocka um 'vscode' mínimo, captura o CodeActionProvider real registrado em
// activate(), e verifica, via computeDiagnostics + provideCodeActions:
//   1. O fechamento é inserido no FIM do escopo (antes do `Fim`), depois do uso;
//   2. Cursor de nível raiz (sem função) fecha no fim do arquivo;
//   3. Mesmo nome aberto N vezes = 1 warning (rastreio por nome, por design);
//   4. Nomes diferentes = 1 warning cada, independentes.
//
// Uso: node scripts/test_quickfix.js

const path = require('path');
const Module = require('module');

// --- Mock mínimo do 'vscode' ---
class Position { constructor(line, character) { this.line = line; this.character = character; } }
class Range {
   constructor(a, b, c, d) {
      if (typeof a === 'object') { this.start = a; this.end = b; }
      else { this.start = new Position(a, b); this.end = new Position(c, d); }
   }
}
class Diagnostic { constructor(range, message, severity) { this.range = range; this.message = message; this.severity = severity; } }
class CodeAction { constructor(title, kind) { this.title = title; this.kind = kind; } }
class WorkspaceEdit {
   constructor() { this._edits = []; }
   insert(uri, position, newText) { this._edits.push({ uri, position, newText }); }
}
const noopDisposable = { dispose() {} };
const reg = () => noopDisposable;
let provider = null;

const fakeVscode = {
   Position, Range, Diagnostic, CodeAction, WorkspaceEdit,
   DiagnosticSeverity: { Error: 0, Warning: 1, Information: 2, Hint: 3 },
   CodeActionKind: { QuickFix: { value: 'quickfix' } },
   EndOfLine: { LF: 1, CRLF: 2 },
   languages: new Proxy({
      registerCodeActionsProvider(selector, p) { provider = p; return noopDisposable; },
      createDiagnosticCollection() { return { set() {}, delete() {}, dispose() {} }; },
   }, { get(t, p) { return p in t ? t[p] : reg; } }),
   commands: new Proxy({}, { get() { return reg; } }),
   workspace: new Proxy({ getConfiguration() { return { get(k, d) { return d; } }; } }, { get(t, p) { return p in t ? t[p] : reg; } }),
   window: new Proxy({ activeTextEditor: undefined }, { get(t, p) { return p in t ? t[p] : reg; } }),
};
const origLoad = Module._load;
Module._load = function (request, parent, isMain) {
   if (request === 'vscode') return fakeVscode;
   return origLoad.call(this, request, parent, isMain);
};

const { computeDiagnostics, activate } = require(path.join(__dirname, '..', 'extension.js'));
activate({ subscriptions: { push() {} } });
if (!provider) { console.error('Provider de Quick Fix não foi registrado!'); process.exit(1); }

// --- Helpers ---
function makeDocument(text, sep) {
   const lines = text.split(sep);
   return {
      uri: { path: 'fake.lspt' },
      eol: sep === '\r\n' ? fakeVscode.EndOfLine.CRLF : fakeVscode.EndOfLine.LF,
      lineCount: lines.length,
      lineAt(i) { const t = lines[i] !== undefined ? lines[i] : ''; return { text: t, range: new Range(i, 0, i, t.length) }; },
   };
}
function applyInsert(text, sep, position, insertText) {
   const lines = text.split(sep);
   while (lines.length <= position.line) lines.push('');
   const cur = lines[position.line];
   lines[position.line] = cur.slice(0, position.character) + insertText + cur.slice(position.character);
   return lines.join(sep);
}
function leaks(diags) { return diags.filter(d => d.code === 'sqlCursorLeak'); }
function applyPreferred(text, sep, doc, diag) {
   const actions = provider.provideCodeActions(doc, diag.range, { diagnostics: [diag] });
   const fechar = actions.find(x => x.isPreferred);
   let out = text;
   for (const e of fechar.edit._edits) out = applyInsert(out, sep, e.position, e.newText);
   return { out, actions };
}
function lineIndexOf(text, sep, substr) { return text.split(sep).findIndex(l => l.includes(substr)); }

let fails = 0;
function assert(cond, msg) { console.log((cond ? '✅' : '❌') + ' ' + msg); if (!cond) fails++; }

// Roda toda a bateria com LF e CRLF.
for (const sep of ['\n', '\r\n']) {
   const tag = sep === '\n' ? 'LF' : 'CRLF';

   // T1: cursor em função → fecha ANTES do Fim e DEPOIS do uso, com indentação do corpo
   {
      const T = ['Funcao F();', 'Inicio', '   SQL_AbrirCursor(cur);', '   SQL_ExecutarSQL(cur, "x");', 'Fim;'].join(sep);
      const doc = makeDocument(T, sep);
      const ds = leaks(computeDiagnostics(doc));
      assert(ds.length === 1, `[${tag}] T1: 1 warning de cursor`);
      const { out, actions } = applyPreferred(T, sep, doc, ds[0]);
      assert(actions.length === 2 && actions[0].isPreferred, `[${tag}] T1: 2 ações, FecharCursor preferida`);
      const idxClose = lineIndexOf(out, sep, 'SQL_FecharCursor');
      const idxUse = lineIndexOf(out, sep, 'SQL_ExecutarSQL');
      const idxFim = lineIndexOf(out, sep, 'Fim;');
      assert(idxClose > idxUse, `[${tag}] T1: fecha DEPOIS do uso`);
      assert(idxClose < idxFim, `[${tag}] T1: fecha ANTES do Fim`);
      assert(out.split(sep)[idxClose] === '   SQL_FecharCursor(cur);', `[${tag}] T1: indentação do corpo preservada`);
      assert(leaks(computeDiagnostics(makeDocument(out, sep))).length === 0, `[${tag}] T1: re-análise sem warnings`);
   }

   // T2: cursor no nível raiz → fecha no FIM do arquivo, depois do uso
   {
      const T = ['SQL_AbrirCursor(cur);', 'SQL_ExecutarSQL(cur, "x");'].join(sep);
      const doc = makeDocument(T, sep);
      const ds = leaks(computeDiagnostics(doc));
      assert(ds.length === 1, `[${tag}] T2: 1 warning de cursor (raiz)`);
      const { out } = applyPreferred(T, sep, doc, ds[0]);
      const idxClose = lineIndexOf(out, sep, 'SQL_FecharCursor');
      const idxUse = lineIndexOf(out, sep, 'SQL_ExecutarSQL');
      assert(idxClose > idxUse, `[${tag}] T2: fecha DEPOIS do uso`);
      assert(leaks(computeDiagnostics(makeDocument(out, sep))).length === 0, `[${tag}] T2: re-análise sem warnings`);
   }

   // T3: mesmo nome x3 → 1 warning; um fechamento resolve (comportamento documentado)
   {
      const T = ['Funcao F();', 'Inicio', '   SQL_AbrirCursor(cur);', '   SQL_AbrirCursor(cur);', '   SQL_AbrirCursor(cur);', '   SQL_ExecutarSQL(cur, "x");', 'Fim;'].join(sep);
      const doc = makeDocument(T, sep);
      const ds = leaks(computeDiagnostics(doc));
      assert(ds.length === 1, `[${tag}] T3: mesmo nome x3 → 1 warning (rastreio por nome)`);
      const { out } = applyPreferred(T, sep, doc, ds[0]);
      assert(leaks(computeDiagnostics(makeDocument(out, sep))).length === 0, `[${tag}] T3: um fechamento resolve`);
   }

   // T4: nomes diferentes x3 → 3 warnings; fix do último deixa 2
   {
      const T = ['Funcao F();', 'Inicio', '   SQL_AbrirCursor(c1);', '   SQL_AbrirCursor(c2);', '   SQL_AbrirCursor(c3);', '   SQL_ExecutarSQL(c3, "x");', 'Fim;'].join(sep);
      const doc = makeDocument(T, sep);
      const ds = leaks(computeDiagnostics(doc));
      assert(ds.length === 3, `[${tag}] T4: nomes diferentes → 3 warnings`);
      const { out } = applyPreferred(T, sep, doc, ds[ds.length - 1]);
      assert(leaks(computeDiagnostics(makeDocument(out, sep))).length === 2, `[${tag}] T4: fix do último deixa 2`);
   }
}

console.log('\n' + (fails === 0 ? '✅ TODOS OS TESTES PASSARAM' : `❌ ${fails} asserção(ões) falharam`));
process.exit(fails === 0 ? 0 : 1);
