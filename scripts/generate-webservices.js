#!/usr/bin/env node

/**
 * Gera o índice navegável dos web services Senior a partir do consolidado de scraping.
 *
 * Fonte: ../WebScraping/output/_consolidado/senior_erp_webservices_completo.md
 * Saídas:
 *   data/webservices.json   — array canônico ordenado por name
 *   docs/WEBSERVICES.md     — índice navegável agrupado por módulo
 *
 * Idempotente: rodar 2× produz arquivos byte-idênticos.
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC  = path.resolve(ROOT, '..', 'WebScraping', 'output', '_consolidado',
   'senior_erp_webservices_completo.md');
const OUT_JSON = path.join(ROOT, 'data', 'webservices.json');
const OUT_MD   = path.join(ROOT, 'docs', 'WEBSERVICES.md');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Remove markdown de links e imagens, deixando só o texto visível. */
function stripMarkdown(text) {
   return text
      .replace(/!\[.*?\]\(.*?\)/g, '')          // imagens
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')  // links → texto
      .replace(/\\_/g, '_')                     // underscores escapados
      .trim();
}

/** Extrai o path de uma URL (remove scheme+host), normaliza e desescapa markdown. */
function urlPath(url) {
   const m = url.match(/^https?:\/\/[^/]+(\/.*)/);
   const p = m ? m[1] : url.trim();
   return p.replace(/^\/\//, '/').replace(/\\_/g, '_');
}

/** Deriva o módulo de agrupamento a partir do nome do WS. */
function deriveModule(name) {
   const parts = name.split('.');
   const coIdx = parts.indexOf('co');
   if (coIdx !== -1 && parts[coIdx + 1]) return parts[coIdx + 1];
   return parts[2] || 'outros';
}

// ---------------------------------------------------------------------------
// Parse
// ---------------------------------------------------------------------------

if (!fs.existsSync(SRC)) {
   console.error(`Fonte não encontrada: ${SRC}`);
   console.error('Execute o scraping antes de rodar este script.');
   process.exit(1);
}

const lines = fs.readFileSync(SRC, 'utf8').split('\n');

const WS_HEADING = /^### (?:Web service )?(Com\.senior\.[\w.]+)\s*$/i;

const services = [];
let cur = null;
let state = 'none'; // 'desc' | 'wsdl' | 'portas' | 'other'

function flush() {
   if (cur) {
      services.push(cur);
      cur = null;
   }
}

for (const raw of lines) {
   // ── Heading de WS ───────────────────────────────────────────────────────
   const hm = raw.match(WS_HEADING);
   if (hm) {
      flush();
      const name = hm[1].toLowerCase();
      cur = {
         name,
         module: deriveModule(name),
         description: '',
         ports: [],
         wsdl: { sincrono: '', assincrono: '', agendado: '' },
      };
      state = 'desc';
      continue;
   }

   if (!cur) continue;

   // ── Sub-heading #### ────────────────────────────────────────────────────
   if (raw.startsWith('####')) {
      const lower = raw.toLowerCase();
      if (lower.includes('wsdl')) {
         state = 'wsdl';
      } else if (/porta/.test(lower)) {
         state = 'portas';
      } else {
         state = 'other';
      }
      continue;
   }

   // ── Heading ## ou ### encerram a seção atual ────────────────────────────
   if (raw.startsWith('##')) {
      state = 'other';
      continue;
   }

   // ── Processar conteúdo conforme estado ──────────────────────────────────
   if (state === 'desc') {
      // Primeira linha não-vazia e não-especial (ignora [![Closed]...])
      if (!cur.description) {
         const clean = raw.replace(/\[!\[.*?\]\(.*?\)\]\(.*?\)/g, '').trim();
         if (clean && !clean.startsWith('#') && !clean.startsWith('|') &&
             !clean.startsWith('-') && !clean.startsWith('```')) {
            cur.description = stripMarkdown(clean);
         }
      }
   } else if (state === 'wsdl') {
      const sm = raw.match(/^\s*-\s*Síncrono:\s*(\S+)/i);
      const am = raw.match(/^\s*-\s*Assíncrono:\s*(\S+)/i);
      const gm = raw.match(/^\s*-\s*Agendado:\s*(\S+)/i);
      if (sm) cur.wsdl.sincrono   = urlPath(sm[1]);
      if (am) cur.wsdl.assincrono = urlPath(am[1]);
      if (gm) cur.wsdl.agendado   = urlPath(gm[1]);
   } else if (state === 'portas') {
      // Formato: - [NomePorta](#ancora)  ou  - [Nome\_Com\_Underscore](#ancora)
      const pm = raw.match(/^\s*-\s*\[([^\]]+)\]\(#/);
      if (pm) {
         const portName = pm[1].replace(/\\_/g, '_').trim();
         if (!cur.ports.includes(portName)) cur.ports.push(portName);
      }
   }
}
flush();

// ---------------------------------------------------------------------------
// Ordenar e normalizar
// ---------------------------------------------------------------------------

services.sort((a, b) => a.name.localeCompare(b.name));
for (const s of services) s.ports.sort();

// ---------------------------------------------------------------------------
// Emitir data/webservices.json
// ---------------------------------------------------------------------------

fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
fs.writeFileSync(OUT_JSON, JSON.stringify(services, null, 2) + '\n', 'utf8');
console.log(`✔ ${OUT_JSON} — ${services.length} web services`);

// ---------------------------------------------------------------------------
// Emitir docs/WEBSERVICES.md
// ---------------------------------------------------------------------------

// Agrupar por módulo
const byModule = {};
for (const s of services) {
   (byModule[s.module] = byModule[s.module] || []).push(s);
}
const modules = Object.keys(byModule).sort();

const mdLines = [
   '# Índice de Web Services Senior (ERP G5)',
   '',
   `> **${services.length} web services** extraídos da documentação oficial Senior.`,
   '> O host dos URLs WSDL é do ambiente do cliente — substitua pelo endereço do seu servidor Senior.',
   '',
   '## Sumário de módulos',
   '',
];

for (const mod of modules) {
   mdLines.push(`- [${mod}](#módulo-${mod}) (${byModule[mod].length})`);
}

for (const mod of modules) {
   mdLines.push('');
   mdLines.push(`## Módulo ${mod}`);
   mdLines.push('');

   for (const s of byModule[mod]) {
      mdLines.push(`### \`${s.name}\``);
      mdLines.push('');
      if (s.description) mdLines.push(s.description);
      else mdLines.push('_(sem descrição)_');
      mdLines.push('');

      if (s.ports.length > 0) {
         mdLines.push(`**Portas:** ${s.ports.map(p => `\`${p}\``).join(', ')}`);
         mdLines.push('');
      }

      mdLines.push('**WSDL:**');
      if (s.wsdl.sincrono)   mdLines.push(`- Síncrono: \`${s.wsdl.sincrono}\``);
      if (s.wsdl.assincrono) mdLines.push(`- Assíncrono: \`${s.wsdl.assincrono}\``);
      if (s.wsdl.agendado)   mdLines.push(`- Agendado: \`${s.wsdl.agendado}\``);
      if (!s.wsdl.sincrono && !s.wsdl.assincrono && !s.wsdl.agendado) {
         mdLines.push('- _(não disponível)_');
      }
      mdLines.push('');
   }
}

fs.mkdirSync(path.dirname(OUT_MD), { recursive: true });
fs.writeFileSync(OUT_MD, mdLines.join('\n'), 'utf8');
console.log(`✔ ${OUT_MD}`);
