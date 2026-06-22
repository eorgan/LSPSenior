#!/usr/bin/env node

/**
 * Extrai documentação dos manuais consolidados (WebScraping) e gera o overlay
 * `data/functions-doc-erp.json`.
 *
 * Fonte: senior_erp_completo.md e senior_tecnologia_completo.md. Cada função vive
 * em um heading `###` com os campos: descrição, `Sintaxe: Funcao Nome(...)`,
 * `Parâmetros:` (tabela markdown Nome|Tipo|Descrição), `Tipo de retorno:` e `Exemplo:`.
 *
 * O nome canônico é derivado do `Sintaxe:` (Funcao <nome>), não do heading — headings
 * podem ser descritivos (ex: "Arredonda ABNT"). Entradas com `signature` permitem que
 * o generate-functions.js as adicione ao catálogo se ainda não existirem (Fase 6).
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(
   __dirname,
   '..',
   '..',
   'WebScraping',
   'output',
   '_consolidado'
);
const SRC_FILES = ['senior_erp_completo.md', 'senior_tecnologia_completo.md'];
const OUTPUT = path.join(__dirname, '..', 'data', 'functions-doc-erp.json');

/** Primeiro bloco de código cercado por ``` em um texto. */
function firstCodeBlock(text) {
   const m = text.match(/```[a-zA-Z]*\n?([\s\S]*?)```/);
   return m ? m[1].replace(/\s+$/, '').replace(/^\n/, '') : '';
}

/** Normaliza a assinatura: remove escapes markdown, junta linhas e colapsa espaços. */
function normalizeSignature(raw) {
   return raw.replace(/[\\*`]/g, '').replace(/\s+/g, ' ').trim();
}

/** Parseia a primeira tabela markdown (Nome|Tipo|Descrição) do bloco em {nome: descrição}. */
function parseFirstParamTable(block) {
   const lines = block.split('\n');
   // Acha o bloco contíguo de linhas que começam com "|".
   let start = -1;
   for (let i = 0; i < lines.length; i++) {
      if (/^\s*\|/.test(lines[i])) { start = i; break; }
   }
   if (start === -1) return {};
   const rows = [];
   for (let i = start; i < lines.length && /^\s*\|/.test(lines[i]); i++) rows.push(lines[i]);

   const params = {};
   for (const row of rows) {
      const cols = row.split('|').map((c) => c.trim());
      const nome = (cols[1] || '').replace(/[\\*`]/g, '').trim();
      const desc = (cols[3] || '').replace(/\\/g, '').trim();
      if (!nome || /^-+$/.test(nome) || nome.toLowerCase() === 'nome') continue;
      if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(nome)) continue;
      params[nome] = desc;
   }
   return params;
}

/** Linhas não-vazias de um trecho, limpas. */
function textLines(block) {
   return block
      .split('\n')
      .map((l) => l.replace(/\\/g, '').trim())
      .filter((l) => l.length > 0 && !/^#{1,6}\s/.test(l));
}

// Marcadores aceitos: "Sintaxe:" (plain), "**Sintaxe:**" e "**Sintaxe**:" (bold, colon antes ou depois do **).
const MARKER_RE = /(^|\n)[ \t]*\*{0,2}(Sintaxe|Par[âa]metros|Tipo de retorno|Exemplo)\*{0,2}[ \t]*:/gi;

function markerKind(word) {
   const w = word.toLowerCase();
   if (w.startsWith('sintaxe')) return 'sintaxe';
   if (w.startsWith('par')) return 'parametros';
   if (w.startsWith('tipo')) return 'retorno';
   return 'exemplo';
}

/** Remove linhas de tabela markdown de um trecho. */
function stripTableLines(block) {
   return block.split('\n').filter((l) => !/^\s*\|/.test(l)).join('\n');
}

/** Processa o corpo de uma seção `###` e retorna a entrada do overlay. */
function parseSection(body) {
   const found = [];
   let m;
   MARKER_RE.lastIndex = 0;
   while ((m = MARKER_RE.exec(body)) !== null) {
      const kind = markerKind(m[2]);
      const idx = m.index + (m[1] ? m[1].length : 0); // posição do início do marcador
      found.push({ kind, index: idx, markerEnd: m.index + m[0].length });
   }

   // Descrição: tudo antes do primeiro marcador (sem tabelas).
   const descEnd = found.length ? found[0].index : body.length;
   const description = textLines(stripTableLines(body.slice(0, descEnd))).join(' ').trim();

   const segFor = (i) => {
      const start = found[i].markerEnd;
      const end = i + 1 < found.length ? found[i + 1].index : body.length;
      return body.slice(start, end);
   };

   const out = { description };
   for (let i = 0; i < found.length; i++) {
      const seg = segFor(i);
      const kind = found[i].kind;
      if (kind === 'sintaxe' && !out.signature) {
         const term = seg.search(/[;.]/);
         const sigRaw = term !== -1 ? seg.slice(0, term + 1) : seg.split('\n').slice(0, 2).join(' ');
         out.signature = normalizeSignature(sigRaw).replace(/\.$/, ';');
      } else if (kind === 'retorno' && !out.returns) {
         const lines = textLines(stripTableLines(seg));
         if (lines.length) out.returns = lines;
      } else if (kind === 'exemplo' && !out.example) {
         const code = firstCodeBlock(seg);
         if (code) out.example = code;
      }
   }

   // Parâmetros: primeira tabela markdown da seção inteira (independe da ordem dos marcadores).
   const params = parseFirstParamTable(body);
   if (Object.keys(params).length) out.params = params;

   return out;
}

/** Nome canônico: do "Funcao Nome", senão do "Nome(" no início da assinatura. */
function nameFromSignature(sig) {
   if (!sig) return null;
   let m = sig.match(/Funcao\s+([A-Za-z_][A-Za-z0-9_]*)/i);
   if (m) return m[1];
   m = sig.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*\(/);
   return m ? m[1] : null;
}

function main() {
   const overlay = {};
   let sections = 0;

   for (const file of SRC_FILES) {
      const full = path.join(SRC_DIR, file);
      const doc = fs.readFileSync(full, 'utf8');
      const lines = doc.split('\n');

      // Índices dos headings nível 3.
      const heads = [];
      lines.forEach((l, idx) => {
         if (/^###\s+/.test(l)) heads.push(idx);
      });

      for (let h = 0; h < heads.length; h++) {
         const start = heads[h] + 1;
         let end = lines.length;
         for (let j = start; j < lines.length; j++) {
            if (/^#{1,3}\s/.test(lines[j])) { end = j; break; }
         }
         const headingRaw = lines[heads[h]].replace(/^###\s+/, '');
         const body = lines.slice(start, end).join('\n');
         const parsed = parseSection(body);

         // URL da doc oficial: o comentário "<!-- source: ... -->" fica IMEDIATAMENTE
         // ACIMA do heading desta função (separador que precede a próxima seção).
         let k = heads[h] - 1;
         while (k >= 0 && lines[k].trim() === '') k--;
         if (k >= 0) {
            const sm = lines[k].match(/<!--\s*source:\s*(\S+?)\s*-->/i);
            if (sm) parsed.source = sm[1];
         }

         // Nome canônico: do Sintaxe; senão, 1º token do heading.
         let name = nameFromSignature(parsed.signature);
         if (!name) {
            const tok = headingRaw.replace(/[*`\\]/g, '').trim().split(/\s+/)[0] || '';
            if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(tok)) name = tok;
         }
         if (!name) continue;
         if (!parsed.description && !parsed.params && !parsed.example) continue;

         sections++;
         // Mantém a entrada mais completa em caso de duplicata entre arquivos.
         const score = (e) => (e.description ? 1 : 0) + (e.params ? 1 : 0) + (e.example ? 1 : 0) + (e.signature ? 1 : 0);
         if (!overlay[name] || score(parsed) > score(overlay[name])) {
            overlay[name] = parsed;
         }
      }
   }

   const ordered = {};
   for (const k of Object.keys(overlay).sort()) ordered[k] = overlay[k];

   fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
   fs.writeFileSync(OUTPUT, JSON.stringify(ordered, null, 2) + '\n', 'utf8');

   const comSig = Object.values(ordered).filter((e) => e.signature).length;
   console.log(`Seções processadas: ${sections}`);
   console.log(`Funções no overlay ERP: ${Object.keys(ordered).length} (com signature: ${comSig})`);
   console.log(`Overlay gravado em: ${OUTPUT}`);
}

main();
