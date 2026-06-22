#!/usr/bin/env node

/**
 * Script para parsear funcoes.csv e gerar functions.json
 * Extrai informações sobre as 530 funções built-in da linguagem LSPT
 */

const fs = require('fs');
const path = require('path');

// Caminhos
const CSV_PATH = path.join(__dirname, '..', 'Exemplos de Arquivos', 'funcoes.csv');
const OUTPUT_JSON = path.join(__dirname, '..', 'functions.json');
const DOCS_DIR = path.join(__dirname, '..', 'docs', 'functions');
// Overlays de documentação. O do manual (curado/validado) tem precedência sobre o ERP.
const OVERLAY_PATH = path.join(__dirname, '..', 'data', 'functions-doc.json');
const OVERLAY_ERP_PATH = path.join(__dirname, '..', 'data', 'functions-doc-erp.json');
// Overlay curado à mão das APIs SQL_* (cursores) e Http* (cookies) que não constam
// como headings nos manuais. Assinaturas validadas nos exemplos reais `.lspt`. Maior
// precedência: vence o manual e o ERP por campo.
const OVERLAY_API_PATH = path.join(__dirname, '..', 'data', 'functions-api.json');

function loadJson(file, label) {
   try {
      return JSON.parse(fs.readFileSync(file, 'utf8'));
   } catch (error) {
      console.warn(`⚠️  Overlay ausente (${label}). Seguindo sem ele.`);
      return {};
   }
}

/**
 * Carrega e combina os overlays (manual + ERP/Tecnologia) com merge CAMPO-A-CAMPO
 * e chave case-insensitive. O manual (curado/validado) vence por campo; o ERP preenche
 * os campos ausentes (ex: `returns`/`example` que o manual não tem). Cada entrada ganha
 * `name` (o nome de exibição preferido).
 */
function loadOverlay() {
   const erp = loadJson(OVERLAY_ERP_PATH, OVERLAY_ERP_PATH);
   const manual = loadJson(OVERLAY_PATH, OVERLAY_PATH);
   const api = loadJson(OVERLAY_API_PATH, OVERLAY_API_PATH);
   const merged = {}; // chave: nome em minúsculas

   for (const [k, v] of Object.entries(erp)) {
      merged[k.toLowerCase()] = { name: k, ...v };
   }
   for (const [k, v] of Object.entries(manual)) {
      const lk = k.toLowerCase();
      merged[lk] = { ...(merged[lk] || {}), ...v, name: k }; // manual sobrescreve campos
   }
   for (const [k, v] of Object.entries(api)) {
      const lk = k.toLowerCase();
      merged[lk] = { ...(merged[lk] || {}), ...v, name: k }; // curado (SQL_*/Http*) vence
   }
   return merged;
}

/** Categoria da função derivada do prefixo do nome: SQL_* → sql, Http<Maiúscula> → http, senão rule. */
function categoryOf(name) {
   if (/^SQL_/i.test(name)) return 'sql';
   if (/^Http[A-Z]/.test(name)) return 'http';
   return 'rule';
}

/**
 * Acopla a funcData os campos ricos do overlay: descrição de cada parâmetro e
 * valores de retorno. Usado tanto pelas funções do CSV quanto pelas novas.
 */
function enrichFuncData(funcData, doc) {
   if (!doc) return;
   if (doc.params && Object.keys(doc.params).length) {
      if (funcData.params.length) {
         funcData.params = funcData.params.map((p, i) => {
            const d = paramDescription(p, i, doc.params);
            return d ? { ...p, description: d } : p;
         });
      } else {
         // Assinatura sem parâmetros tipados: deriva da tabela do overlay.
         funcData.params = Object.entries(doc.params).map(([name, description]) => ({
            name,
            type: '',
            direction: 'in',
            description,
         }));
      }
   }
   if (doc.returns && doc.returns.length) {
      funcData.returns = doc.returns;
   }
   if (doc.source) {
      funcData.source = doc.source;
   }
}

/**
 * Parseia uma linha do CSV
 * Formato: Codigo;Nome;Funcao
 * Exemplo: 11;InserirStr;Funcao InserirStr(Alfa Valor ,Alfa End Origem, Numero Pos);
 */
function parseCSVLine(line) {
   // Remove \r se existir (Windows line endings)
   line = line.trim().replace(/\r$/, '');

   if (!line || line.startsWith('Codigo;')) {
      return null; // Ignora header e linhas vazias
   }

   // Split por ; (assumindo que só há ; como separador entre colunas)
   const parts = line.split(';');

   if (parts.length < 3) {
      return null;
   }

   const codigo = parts[0].trim();
   const funcaoCompleta = parts.slice(2).join(';').trim(); // Junta de volta caso haja ; na assinatura

   // SEMPRE extrair o nome correto da assinatura da função
   // Isso previne problemas com CSV malformado
   let nome = '';
   const matchName = funcaoCompleta.match(/[Ff]uncao\s+(\w+)/);
   if (matchName && matchName[1]) {
      nome = matchName[1];
   } else {
      console.warn(`⚠️  Linha ignorada (não encontrou nome da função): ${line.substring(0, 80)}...`);
      return null;
   }

   // Extrai a assinatura completa
   const signature = funcaoCompleta;

   // Extrai parâmetros
   const params = extractParameters(funcaoCompleta);

   return {
      code: codigo,
      name: nome,
      signature: signature,
      params: params,
      description: `Função built-in: ${nome}` //Descrição padrão inicial
   };
}

/**
 * Extrai parâmetros da assinatura da função
 * Exemplo: "Funcao InserirStr(Alfa Valor ,Alfa End Origem, Numero Pos);"
 * Retorna: [{name: "Valor", type: "Alfa", direction: "in"}, ...]
 */
function extractParameters(signature) {
   const params = [];

   // Remove "Funcao NomeFuncao(" e ");"
   const match = signature.match(/\((.*?)\)/);
   if (!match || !match[1]) {
      return params; // Sem parâmetros
   }

   const paramsStr = match[1];

   // Split por vírgula (cuidado com espaços)
   const paramList = paramsStr.split(',').map(p => p.trim()).filter(p => p.length > 0);

   for (const param of paramList) {
      const parts = param.trim().split(/\s+/);
      const name = parts[parts.length - 1];

      // "End"/"end" indica parâmetro de saída (case-insensitive).
      const endIdx = parts.findIndex((p) => p.toLowerCase() === 'end');
      const direction = endIdx !== -1 ? 'out' : 'in';

      let type;
      if (parts.length >= 2) {
         type = endIdx !== -1 ? parts.slice(0, endIdx + 1).join(' ') : parts[0];
      } else {
         // Assinatura sem tipo explícito (ex: "AlfaParaInt(Origem, Destino)").
         type = '';
      }

      params.push({ name, type, direction });
   }

   return params;
}

// Marcadores que identificam um arquivo de doc como stub (não editado à mão).
const STUB_MARKERS = ['Adicione aqui a descrição', '[Adicione descrição]'];
// Notas inseridas em docs gerados — permitem regenerá-los sem tocar em edições manuais.
// Inclui o rodapé legado (versões anteriores do gerador) para uniformizar.
const GENERATED_MARKERS = [
   'Gerado automaticamente a partir da documentação oficial da LSP',
   'Documentação extraída do manual oficial da LSP',
];

function isStub(content) {
   return STUB_MARKERS.some((m) => content.includes(m));
}

function isGenerated(content) {
   return GENERATED_MARKERS.some((m) => content.includes(m));
}

/** Casa um parâmetro da assinatura (CSV) com a descrição do manual (overlay). */
function paramDescription(funcParam, index, docParams) {
   if (!docParams) return '';
   const entries = Object.entries(docParams);
   const byName = entries.find(([k]) => k.toLowerCase() === funcParam.name.toLowerCase());
   if (byName) return byName[1];
   // Fallback por posição quando a contagem bate (manual lista na ordem da assinatura).
   if (entries.length === Object.keys(docParams).length && entries[index]) {
      return entries[index][1];
   }
   return '';
}

/** Conteúdo markdown rico, quando há overlay do manual. */
function buildRichDoc(funcData, doc) {
   let params;
   if (funcData.params.length) {
      params = funcData.params
         .map((p, i) => {
            const dir = p.direction === 'out' ? 'Saída' : 'Entrada';
            const desc = paramDescription(p, i, doc.params);
            const tipo = p.type ? ` (\`${p.type}\`)` : '';
            return `- **${p.name}**${tipo} - ${dir}${desc ? `: ${desc}` : ''}`;
         })
         .join('\n');
   } else if (doc.params && Object.keys(doc.params).length) {
      // Assinatura sem parâmetros tipados: usa a tabela do overlay (nome + descrição).
      params = Object.entries(doc.params)
         .map(([n, d]) => `- **${n}**${d ? `: ${d}` : ''}`)
         .join('\n');
   } else {
      params = '_Sem parâmetros_';
   }

   const returns = doc.returns && doc.returns.length
      ? `\n## Valores de Retorno\n\n${doc.returns.map((r) => `- ${r}`).join('\n')}\n`
      : '';

   const example = doc.example
      ? `\`\`\`lspt\n${doc.example}\n\`\`\``
      : `\`\`\`lspt\n@-- Adicione exemplo de uso aqui --@\n${funcData.name}();\n\`\`\``;

   return `# ${funcData.name}

## Assinatura

\`\`\`lspt
${funcData.signature}
\`\`\`

## Código
${funcData.code}

## Descrição

${doc.description}

## Parâmetros

${params}
${returns}
## Exemplo de Uso

${example}

## Fonte

${doc.source ? `[Documentação oficial Senior](${doc.source})` : 'Documentação oficial Senior — https://documentacao.senior.com.br'}

> Gerado automaticamente a partir da documentação oficial da LSP por \`generate-functions.js\`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
`;
}

/** Conteúdo markdown stub (sem overlay): comportamento original. */
function buildStubDoc(funcData) {
   return `# ${funcData.name}

## Assinatura

\`\`\`lspt
${funcData.signature}
\`\`\`

## Código
${funcData.code}

## Descrição

> [!NOTE]
> Adicione aqui a descrição completa da função.

## Parâmetros

${funcData.params.map(p => `- **${p.name}** (\`${p.type}\`) - ${p.direction === 'out' ? 'Saída' : 'Entrada'}: [Adicione descrição]`).join('\n') || '_Sem parâmetros_'}

## Exemplo de Uso

\`\`\`lspt
@-- Adicione exemplo de uso aqui --@
${funcData.name}();
\`\`\`

## Notas

- Adicione observações importantes sobre o uso da função

## Veja Também

- Lista de funções relacionadas
`;
}

/**
 * Cria/atualiza o arquivo de documentação markdown de uma função.
 * - Arquivo ausente: cria (rico se houver overlay, senão stub).
 * - Arquivo stub OU gerado automaticamente + overlay disponível: regenera com rico.
 * - Arquivo editado à mão (sem marcador de stub nem nota de gerado): nunca sobrescreve.
 * Retorna true se gravou conteúdo rico.
 */
function createDocFile(funcData, doc) {
   const docPath = path.join(DOCS_DIR, `${funcData.name}.md`);
   const hasDoc = doc && doc.description;
   const exists = fs.existsSync(docPath);

   if (exists) {
      const current = fs.readFileSync(docPath, 'utf8');
      const regeneravel = isStub(current) || isGenerated(current);
      if (!regeneravel || !hasDoc) return false;
   }

   const content = hasDoc ? buildRichDoc(funcData, doc) : buildStubDoc(funcData);
   if (!exists || hasDoc) {
      fs.writeFileSync(docPath, content, 'utf8');
   }
   return hasDoc && exists;
}

/**
 * Main
 */
function main() {
   console.log('🔄 Processando funcoes.csv...\n');

   // Cria diretório de docs se não existir
   if (!fs.existsSync(DOCS_DIR)) {
      fs.mkdirSync(DOCS_DIR, { recursive: true });
      console.log(`✅ Criado diretório: ${DOCS_DIR}\n`);
   }

   // Lê o CSV
   const csvContent = fs.readFileSync(CSV_PATH, 'utf8');
   const lines = csvContent.split('\n');

   // Overlay combinado (manual + ERP), com chave case-insensitive e merge por campo.
   const overlay = loadOverlay();

   const functions = {};
   let count = 0;
   let enriched = 0;
   let docsRich = 0;

   for (const line of lines) {
      const funcData = parseCSVLine(line);

      if (funcData) {
         // Enriquecimento: descrição + descrição de parâmetros + valores de retorno.
         const doc = overlay[funcData.name.toLowerCase()];
         if (doc && doc.description) {
            funcData.description = doc.description;
            enriched++;
         }
         enrichFuncData(funcData, doc);

         functions[funcData.name] = funcData;

         // Cria/atualiza arquivo de documentação (rico se houver overlay).
         if (createDocFile(funcData, doc)) docsRich++;

         count++;

         // Log a cada 50 funções
         if (count % 50 === 0) {
            console.log(`   Processadas ${count} funções...`);
         }
      }
   }

   // Funções novas: entradas do overlay com assinatura que não estão no CSV.
   // Comparação case-insensitive (a LSP não distingue caixa) — evita duplicatas
   // tipo "AlterarStatus" vs "alterarStatus".
   const existingLower = new Set(Object.keys(functions).map((n) => n.toLowerCase()));
   let added = 0;
   for (const lower of Object.keys(overlay)) {
      const doc = overlay[lower];
      const name = doc.name;
      if (existingLower.has(lower) || !doc.signature) continue;
      existingLower.add(lower);

      // Garante o prefixo "Funcao" e o terminador ";" para consistência com o CSV.
      let signature = doc.signature.trim();
      if (!/^Funcao\b/i.test(signature)) signature = `Funcao ${signature}`;
      if (!signature.endsWith(';')) signature += ';';

      const funcData = {
         code: 'N/A',
         name: name,
         signature: signature,
         params: extractParameters(signature),
         description: doc.description || `Função built-in: ${name}`,
      };
      enrichFuncData(funcData, doc);

      functions[name] = funcData;
      if (createDocFile(funcData, doc)) docsRich++;
      added++;
   }

   // Categoriza cada função pelo prefixo do nome (rule/sql/http).
   const catCount = { rule: 0, sql: 0, http: 0 };
   for (const fn of Object.values(functions)) {
      fn.category = categoryOf(fn.name);
      catCount[fn.category]++;
   }

   // Salva JSON
   fs.writeFileSync(OUTPUT_JSON, JSON.stringify(functions, null, 2), 'utf8');

   console.log(`\n✅ Processamento completo!`);
   console.log(`   Total de funções: ${count + added} (CSV: ${count} + novas dos manuais: ${added})`);
   console.log(`   Categorias: rule=${catCount.rule}, sql=${catCount.sql}, http=${catCount.http}`);
   console.log(`   Enriquecidas pelo manual: ${enriched}`);
   console.log(`   Docs .md preenchidos com conteúdo real: ${docsRich}`);
   console.log(`   Arquivo gerado: ${OUTPUT_JSON}`);
   console.log(`   Documentação: ${DOCS_DIR}`);
   console.log(`\n💡 Você pode agora preencher a documentação em docs/functions/`);
}

// Executa
main();
