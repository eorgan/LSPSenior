#!/usr/bin/env node

/**
 * Extrai documentação real do manual da LSP (LSPSeniorDoc/README.md) e gera a
 * camada de overlay `data/functions-doc.json`.
 *
 * Por que overlay: `generate-functions.js` reconstrói `functions.json` do zero a
 * partir do CSV, com descrição genérica. O overlay é mesclado por nome de função,
 * preservando o conteúdo real entre regenerações (ver docs/PLANO-ENRIQUECIMENTO.md).
 *
 * O manual é organizado por tema; funções individuais vivem em headings ###/####
 * com os campos: descrição, **Sintaxe:**, **Parâmetros:**, **Valores de retorno:**,
 * **Exemplo:**. Só são gravadas entradas cujo nome existe em functions.json.
 */

const fs = require('fs');
const path = require('path');

const DOC_PATH = path.resolve(
   __dirname,
   '..',
   '..',
   'LSPSeniorDoc',
   'Documentacao-LSP-Linguagem-Senior-de-Programacao',
   'README.md'
);
const FUNCTIONS_JSON = path.join(__dirname, '..', 'functions.json');
const OUTPUT = path.join(__dirname, '..', 'data', 'functions-doc.json');

/** Normaliza o texto de um heading e devolve os nomes de função candidatos. */
function headingToNames(rawHeading) {
   let h = rawHeading.replace(/\*\*/g, '').replace(/`/g, '').trim();
   h = h.replace(/^\d+\.\s*/, ''); // "1. ValorElementoJson - ..."
   h = h.split(/\s+[-–]\s+/)[0].trim(); // corta " - Para Dados Simples"
   const names = [];
   // headings compostos: "SubstAlfa and SubstAlfaUmaVez", "X e Y", "X / Y"
   for (const part of h.split(/\s+(?:and|e)\s+|\s*\/\s*/)) {
      const tok = part.trim().split(/\s+/)[0] || '';
      if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(tok)) {
         names.push(tok);
      }
   }
   return names;
}

/** Extrai o primeiro bloco de código cercado por ``` a partir de um índice. */
function firstCodeBlock(text) {
   const m = text.match(/```[a-zA-Z]*\n([\s\S]*?)```/);
   return m ? m[1].trim() : '';
}

/** Extrai itens de uma lista de bullets no formato "- `nome`: descrição" ou "- texto". */
function parseBulletList(block) {
   const items = [];
   for (const line of block.split('\n')) {
      const m = line.match(/^\s*[-*]\s+(.*)$/);
      if (m) items.push(m[1].trim());
   }
   return items;
}

/** Constrói o mapa de parâmetros {nome: descrição} a partir dos bullets. */
function parseParams(block) {
   const params = {};
   for (const item of parseBulletList(block)) {
      // "`nome`: descrição"  ou  "**nome**: descrição"  ou  "nome: descrição"
      const m = item.match(/^`?\*{0,2}([A-Za-z_][A-Za-z0-9_]*)\*{0,2}`?\s*[:：-]\s*(.+)$/);
      if (m) params[m[1]] = m[2].trim();
   }
   return params;
}

/**
 * Dado o conteúdo bruto de uma seção (entre dois headings), extrai os campos.
 */
function parseSection(body) {
   // Marcadores conhecidos (negrito), em qualquer ordem.
   const markerRe = /\*\*(Sintaxe|Par[âa]metros|Valores de retorno|Exemplo[^*:]*)\s*:?\*\*/gi;
   const markers = [];
   let mm;
   while ((mm = markerRe.exec(body)) !== null) {
      markers.push({ kind: mm[1].toLowerCase(), index: mm.index, end: markerRe.lastIndex });
   }

   // Descrição: texto antes do primeiro marcador E antes do primeiro code fence.
   let descEnd = markers.length ? markers[0].index : body.length;
   const fenceIdx = body.indexOf('```');
   if (fenceIdx !== -1 && fenceIdx < descEnd) descEnd = fenceIdx;
   let description = body.slice(0, descEnd).trim();
   // Remove admonitions/linhas de citação e linhas vazias residuais.
   description = description
      .split('\n')
      .filter((l) => !/^\s*>/.test(l))
      .join('\n')
      .trim();

   // Helper: segmento de body pertencente a um marcador (até o próximo marcador).
   function segmentFor(i) {
      const start = markers[i].end;
      const end = i + 1 < markers.length ? markers[i + 1].index : body.length;
      return body.slice(start, end);
   }

   const result = { description };
   for (let i = 0; i < markers.length; i++) {
      const seg = segmentFor(i);
      const kind = markers[i].kind;
      if (kind.startsWith('sintaxe')) {
         const code = firstCodeBlock(seg);
         if (code) result.syntax = code.split('\n')[0].trim();
      } else if (kind.startsWith('par')) {
         const params = parseParams(seg);
         if (Object.keys(params).length) result.params = params;
      } else if (kind.startsWith('valores')) {
         const items = parseBulletList(seg);
         if (items.length) result.returns = items;
      } else if (kind.startsWith('exemplo')) {
         const code = firstCodeBlock(seg);
         if (code) result.example = code;
      }
   }
   return result;
}

function main() {
   const fnames = new Set(Object.keys(JSON.parse(fs.readFileSync(FUNCTIONS_JSON, 'utf8'))));
   const doc = fs.readFileSync(DOC_PATH, 'utf8');
   const lines = doc.split('\n');

   // Coleta headings nível 3-4 com posição (linha).
   const headings = [];
   lines.forEach((line, idx) => {
      const m = line.match(/^(#{3,4})\s+(.*)$/);
      if (m) headings.push({ level: m[1].length, raw: m[2], line: idx });
   });

   const overlay = {};
   let kept = 0;

   for (let h = 0; h < headings.length; h++) {
      const names = headingToNames(headings[h].raw).filter((n) => fnames.has(n));
      if (names.length === 0) continue;

      // Corpo da seção: até o próximo heading de QUALQUER nível.
      const startLine = headings[h].line + 1;
      let endLine = lines.length;
      for (let j = startLine; j < lines.length; j++) {
         if (/^#{1,6}\s/.test(lines[j])) {
            endLine = j;
            break;
         }
      }
      const body = lines.slice(startLine, endLine).join('\n');
      const parsed = parseSection(body);
      if (!parsed.description && !parsed.params && !parsed.example) continue;

      for (const name of names) {
         // Não sobrescreve uma entrada já mais rica do que a atual.
         if (overlay[name] && overlay[name].description && !parsed.description) continue;
         overlay[name] = parsed;
         kept++;
      }
   }

   // Ordena as chaves para diffs estáveis.
   const ordered = {};
   for (const k of Object.keys(overlay).sort()) ordered[k] = overlay[k];

   fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
   fs.writeFileSync(OUTPUT, JSON.stringify(ordered, null, 2) + '\n', 'utf8');

   console.log(`Manual: ${DOC_PATH}`);
   console.log(`Funcoes documentadas extraidas: ${Object.keys(ordered).length}`);
   console.log(`Overlay gravado em: ${OUTPUT}`);
}

main();
