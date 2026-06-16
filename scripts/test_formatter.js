// Teste do formatter LSPT (sem depender do VS Code).
//
// Injeta um mock mínimo do módulo 'vscode' e roda computeFormatEdits sobre os
// arquivos reais em "Exemplos de Arquivos/". Verifica:
//   1. Conteúdo preservado — só o espaço à esquerda muda (linhas em branco viram vazias);
//   2. Idempotência — formatar duas vezes dá o mesmo resultado;
//   3. Balanceamento — a re-formatação não "explode" a indentação.
//
// Uso: node scripts/test_formatter.js

const path = require('path');
const fs = require('fs');
const Module = require('module');

// --- Mock mínimo do 'vscode' usado por computeFormatEdits ---
const fakeVscode = {
   TextEdit: {
      replace(range, newText) {
         return { range, newText };
      },
   },
};
const origLoad = Module._load;
Module._load = function (request, parent, isMain) {
   if (request === 'vscode') return fakeVscode;
   return origLoad.call(this, request, parent, isMain);
};

const { computeFormatEdits } = require(path.join(__dirname, '..', 'extension.js'));

// --- Documento falso a partir de um texto ---
function makeDocument(text) {
   const lines = text.split('\n');
   return {
      lineCount: lines.length,
      lineAt(i) {
         const t = lines[i];
         return {
            text: t,
            range: {
               start: { line: i, character: 0 },
               end: { line: i, character: t.length },
            },
         };
      },
   };
}

// Aplica os edits (um por linha, replace de linha inteira) e devolve o texto novo.
function applyEdits(text, edits) {
   const lines = text.split('\n');
   for (const e of edits) {
      lines[e.range.start.line] = e.newText;
   }
   return lines.join('\n');
}

function check(text, label, indentSize) {
   const doc1 = makeDocument(text);
   const edits1 = computeFormatEdits(doc1, indentSize);
   const out1 = applyEdits(text, edits1);

   const origLines = text.split('\n');
   const newLines = out1.split('\n');
   const problems = [];

   // 1. Preservação de conteúdo (só whitespace inicial muda).
   if (origLines.length !== newLines.length) {
      problems.push(`contagem de linhas mudou (${origLines.length} -> ${newLines.length})`);
   } else {
      for (let i = 0; i < origLines.length; i++) {
         const a = origLines[i];
         const b = newLines[i];
         if (a === b) continue;
         // linha em branco -> vazia é permitido
         if (a.trim() === '' && b === '') continue;
         if (a.trimStart() !== b.trimStart()) {
            problems.push(
               `linha ${i + 1}: conteúdo mudou além do recuo\n   antes: ${JSON.stringify(a)}\n   depois: ${JSON.stringify(b)}`
            );
         }
      }
   }

   // 2. Idempotência.
   const doc2 = makeDocument(out1);
   const edits2 = computeFormatEdits(doc2, indentSize);
   if (edits2.length !== 0) {
      problems.push(`não idempotente: 2ª passagem gerou ${edits2.length} edits`);
      const samples = edits2.slice(0, 5).map((e) => `  L${e.range.start.line + 1}: ${JSON.stringify(e.newText)}`);
      problems.push(samples.join('\n'));
   }

   const changed = edits1.filter((e) => {
      const i = e.range.start.line;
      return origLines[i] !== e.newText;
   }).length;

   if (problems.length) {
      console.log(`\n❌ ${label}`);
      for (const p of problems) console.log('   ' + p);
      return false;
   }
   console.log(`✅ ${label} — ${changed} linha(s) reindentada(s), idempotente, conteúdo preservado`);
   return true;
}

// --- Casos sintéticos (estilo do projeto) ---
const synthetic = [
   {
      label: 'sintético: Se/Senao/Funcao/Inicio',
      text: [
         'Funcao BuscarParamWS();',
         '   Inicio',
         '',
         '      Se(SQL_EOF(x) = 0)',
         '         {',
         '            x = 1;',
         '         }',
         '      Senao',
         '         {',
         '            y = 2;',
         '         }',
         '   Fim;',
      ].join('\n'),
   },
   {
      label: 'sintético: chave inline (Se(x) {) não desbalanceia',
      text: [
         'Funcao G();',
         '   Inicio',
         '      Se (xErro = 1) {',
         '         a = 1;',
         '      }',
         '   Fim;',
      ].join('\n'),
   },
   {
      label: 'sintético: string com chaves não engana',
      text: ['Funcao H();', '   Inicio', '      a = "x { y } z";', '   Fim;'].join('\n'),
   },
];

// String multi-linha com \ de continuação: as linhas de continuação NÃO podem ser
// reindentadas (mudaria o conteúdo da string). Saída exata abaixo.
const mlStringOk =
   (function () {
      const input = [
         'Funcao Q();',
         'Inicio',
         'Cur.Sql "SELECT A FROM T WHERE X = :X \\',
         '   AND Y = :Y \\',
         '       AND Z = :Z";',
         'a = 1;',
         'Fim;',
      ].join('\n');
      const expected = [
         'Funcao Q();',
         '   Inicio',
         '      Cur.Sql "SELECT A FROM T WHERE X = :X \\',
         '   AND Y = :Y \\', // intocada (dentro da string)
         '       AND Z = :Z";', // intocada (fecha a string)
         '      a = 1;',
         '   Fim;',
      ].join('\n');
      const out = applyEdits(input, computeFormatEdits(makeDocument(input), 3));
      if (out === expected) {
         console.log('✅ sintético: string multi-linha (\\) não é reindentada');
         return true;
      }
      console.log('\n❌ sintético: string multi-linha (\\) — saída inesperada');
      const a = expected.split('\n'),
         b = out.split('\n');
      for (let i = 0; i < Math.max(a.length, b.length); i++)
         if (a[i] !== b[i]) console.log(`   L${i + 1}\n     esp: ${JSON.stringify(a[i])}\n     obt: ${JSON.stringify(b[i])}`);
      return false;
   })();

let ok = mlStringOk;
for (const c of synthetic) ok = check(c.text, c.label, 3) && ok;

// --- Caso com saída exata esperada (recuo sob comentário de seção) ---
function expectExact(input, expected, label, indentSize) {
   const out = applyEdits(input, computeFormatEdits(makeDocument(input), indentSize));
   if (out === expected) {
      console.log(`✅ ${label} — saída exata conforme esperado`);
      return true;
   }
   console.log(`\n❌ ${label} — saída diferente do esperado`);
   const a = expected.split('\n');
   const b = out.split('\n');
   for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if (a[i] !== b[i]) console.log(`   L${i + 1}\n     esperado: ${JSON.stringify(a[i])}\n     obtido:   ${JSON.stringify(b[i])}`);
   }
   return false;
}

ok =
   expectExact(
      [
         '@-- Declarar Variaveis --@',
         '      Definir Alfa aX;',
         'Definir Alfa aY;',
         '',
         '@-- Chamada --@',
         '   Funcao F();',
         'Inicio',
         'a = 1;',
         '@-- nota --@',
         'b = 2;',
         'Fim;',
      ].join('\n'),
      [
         '@-- Declarar Variaveis --@',
         '   Definir Alfa aX;',
         '   Definir Alfa aY;',
         '',
         '@-- Chamada --@',
         'Funcao F();',
         '   Inicio',
         '      a = 1;',
         '      @-- nota --@',
         '         b = 2;',
         '   Fim;',
      ].join('\n'),
      'sintético: recuo sob @-- seção --@ (top-level e dentro de função)',
      3
   ) && ok;

// --- Arquivos reais ---
const dir = path.join(__dirname, '..', 'Exemplos de Arquivos');
if (fs.existsSync(dir)) {
   for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith('.lspt') && !f.endsWith('.lsp')) continue;
      const text = fs.readFileSync(path.join(dir, f), 'utf8');
      ok = check(text, `real: ${f}`, 3) && ok;
   }
}

console.log('\n' + (ok ? '✅ TODOS OS TESTES PASSARAM' : '❌ FALHAS ACIMA'));
process.exit(ok ? 0 : 1);
