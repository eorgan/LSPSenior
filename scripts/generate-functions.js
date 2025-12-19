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

      if (parts.length >= 2) {
         let type = parts[0];
         let direction = 'in';
         let name = parts[parts.length - 1];

         // Verifica se tem "End" (parâmetro de saída)
         if (parts.includes('End') || parts.includes('end')) {
            direction = 'out';
            type = parts.slice(0, parts.indexOf('End') + 1).join(' ');
            name = parts[parts.length - 1];
         }

         params.push({
            name: name,
            type: type,
            direction: direction
         });
      }
   }

   return params;
}

/**
 * Cria arquivo de documentação markdown para uma função
 */
function createDocFile(funcData) {
   const docPath = path.join(DOCS_DIR, `${funcData.name}.md`);

   // Verifica se já existe
   if (fs.existsSync(docPath)) {
      return; // Não sobrescreve documentação existente
   }

   const content = `# ${funcData.name}

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

   fs.writeFileSync(docPath, content, 'utf8');
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

   const functions = {};
   let count = 0;

   for (const line of lines) {
      const funcData = parseCSVLine(line);

      if (funcData) {
         functions[funcData.name] = funcData;

         // Cria arquivo de documentação
         createDocFile(funcData);

         count++;

         // Log a cada 50 funções
         if (count % 50 === 0) {
            console.log(`   Processadas ${count} funções...`);
         }
      }
   }

   // Salva JSON
   fs.writeFileSync(OUTPUT_JSON, JSON.stringify(functions, null, 2), 'utf8');

   console.log(`\n✅ Processamento completo!`);
   console.log(`   Total de funções: ${count}`);
   console.log(`   Arquivo gerado: ${OUTPUT_JSON}`);
   console.log(`   Documentação: ${DOCS_DIR}`);
   console.log(`\n💡 Você pode agora preencher a documentação em docs/functions/`);
}

// Executa
main();
