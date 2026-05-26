#!/usr/bin/env node

/**
 * Mantém a gramática (syntaxes/lspt.tmLanguage.json) em sincronia com o catálogo
 * de funções built-in (functions.json), preenchendo a regra `builtin-functions`.
 *
 * Os scopes especiais (ex: SQL em `#functions`) continuam tendo precedência por
 * virem antes no array de patterns; esta regra cobre o restante das 369 funções.
 * Edição é surgical/idempotente: substitui só o `match` da regra marcada.
 */

const fs = require('fs');
const path = require('path');

const GRAMMAR_PATH = path.join(__dirname, '..', 'syntaxes', 'lspt.tmLanguage.json');
const FUNCTIONS_JSON = path.join(__dirname, '..', 'functions.json');

function main() {
   const names = Object.keys(JSON.parse(fs.readFileSync(FUNCTIONS_JSON, 'utf8'))).sort();
   const alternation = `(?i)\\\\b(${names.join('|')})\\\\b`;

   let grammar = fs.readFileSync(GRAMMAR_PATH, 'utf8');

   // Substitui o valor de "match" que segue o scope da regra gerada.
   const re = /("name": "support\.function\.builtin\.lspt",\s*"match": ")(?:[^"\\]|\\.)*(")/;
   if (!re.test(grammar)) {
      console.error('❌ Regra builtin-functions não encontrada na gramática.');
      process.exit(1);
   }
   grammar = grammar.replace(re, `$1${alternation}$2`);

   fs.writeFileSync(GRAMMAR_PATH, grammar, 'utf8');

   // Valida que o resultado continua sendo JSON correto.
   JSON.parse(grammar);

   console.log(`Funções injetadas na gramática: ${names.length}`);
   console.log(`Gramática: ${GRAMMAR_PATH}`);
}

main();
