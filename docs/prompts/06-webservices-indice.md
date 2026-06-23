# Prompt — Implementar item 6 do backlog: Índice navegável dos web services Senior

Cole este bloco numa **nova conversa** do agente, dentro de `/Users/eliezer.organ/GitHub/LSPSenior`.

---

## Contexto

Extensão VS Code para a LSP (Linguagem Senior de Programação) do ERP Senior.
JavaScript puro, sem build, API VS Code `^1.60.0`. Branch: `main`. Zero-deps em runtime.

Um novo scraping (jun/2026) gerou o consolidado
`../WebScraping/output/_consolidado/senior_erp_webservices_completo.md` (12 MB) com **456
web services** SOAP/REST do ERP (`com.senior.g5.co.*`). Esse arquivo **não** é consumido
pelo pipeline atual.

**Objetivo deste item:** gerar um **índice navegável** desses web services (nome, descrição,
portas, WSDL) como material de referência — no espírito de `docs/functions/`, mas para WS.
Os web services **NÃO** são funções LSP: **não** entram em `functions.json`, autocomplete,
hover ou gramática. É só geração de índice.

## Estrutura confirmada da fonte

Cada web service é uma seção `###`:
- Heading: `### Web service Com.senior.g5.co.cad.clientes` (434 casos) **ou**
  `### Com.senior.fsw.cad.cep` (15 casos, sem o prefixo "Web service").
  → Filtro confiável: `/^### (?:Web service )?(Com\.senior\.[\w.]+)\s*$/i`.
  Headings `###` que **não** casam (ex.: "Classes dos web services", "Pré-requisitos…",
  "Rateio…") são prosa e devem ser **ignorados**.
- **Descrição:** o 1º parágrafo não-vazio após o heading, antes do 1º `####`.
- **`#### WSDL`:** bloco com linhas:
  ```
  - Síncrono: http://example.com//g5-senior-services/sapiens_Synccom_senior_g5_co_cad_clientes?wsdl
  - Assíncrono: http://example.com/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_clientes?wsdl
  - Agendado: http://example.com/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_clientes?wsdl
  ```
  (host `example.com` é placeholder do scraping — preservar o path, anotar que o host é do
  ambiente do cliente.)
- **`#### Portas`:** bloco com linhas `- [NomePorta](#ancora)` (ex.: `- [Exportar](#Exportar_7)`,
  `- [ConsultarCadastro](#Consulta)`). Capturar só o **NomePorta** (texto do link).

## Tarefa

Criar **`scripts/generate-webservices.js`** (zero-deps, puro `fs`/`path`), seguindo o padrão
dos demais geradores do projeto (cabeçalho de comentário, idempotente). Ele deve:

1. Ler a fonte consolidada (caminho resolvido relativo ao repo, como em
   `scripts/extract-from-erp-docs.js`: `../WebScraping/output/_consolidado/...`).
   Se o arquivo não existir, abortar com mensagem clara (não quebrar o pipeline existente).
2. Varrer por seções `###`, aplicar o filtro de WS, e para cada WS extrair:
   - `name` — nome normalizado (ex.: `com.senior.g5.co.cad.clientes`, lowercase).
   - `module` — derivar do pacote para agrupamento (o segmento após `co.` quando houver:
     cad, mfi, mct, tes, ast, cre, int, ger…; senão, o 3º segmento). Usado só para agrupar.
   - `description` — 1ª frase/parágrafo (1 linha, sem markdown de imagem/links cruzados).
   - `ports` — array de nomes de porta.
   - `wsdl` — `{ sincrono, assincrono, agendado }` com os paths (sem o host placeholder, ou
     com o host mantido + nota; escolha uma e seja consistente).
3. Emitir duas saídas:
   - **`data/webservices.json`** — array canônico ordenado por `name`, um objeto por WS.
   - **`docs/WEBSERVICES.md`** — índice único navegável:
     - Cabeçalho com total de WS e nota de que o host do WSDL é do ambiente do cliente.
     - Agrupado por `module` (seções `##`), WS em ordem alfabética.
     - Por WS: nome (negrito), descrição (1 linha), portas (lista inline), e os 3 paths WSDL.
4. Ser **idempotente**: rodar 2× produz arquivos byte-idênticos (ordenar chaves/listas;
   nada de timestamps).

## Decisões já tomadas (não reabrir)

- **Índice único** `docs/WEBSERVICES.md` agrupado por módulo — não criar 456 arquivos.
- WS **fora** de `functions.json`/autocomplete/hover/gramática. Não tocar no pipeline de
  funções nem em `extension.js`.
- `docs/WEBSERVICES.md` deve ir para o **`.vscodeignore`** (referência pura — não empacotar
  no `.vsix`). `data/webservices.json` segue a mesma política dos outros `data/*.json`
  (verifique se `data/` já está no `.vscodeignore`; se sim, nada a fazer).
- Sem dependências npm novas.

## Validação

```bash
node scripts/generate-webservices.js
node -e "const w=require('./data/webservices.json'); console.log('WS:', w.length); console.log(w.find(x=>x.name.includes('cad.clientes')))"
# Conferir: ~449 WS, clientes com portas [Exportar, ConsultarCadastro, ...] e 3 WSDLs.

# Idempotência:
node scripts/generate-webservices.js && md5 data/webservices.json docs/WEBSERVICES.md
node scripts/generate-webservices.js && md5 data/webservices.json docs/WEBSERVICES.md
# Os hashes devem ser idênticos entre as duas execuções.

# Confirmar que docs/WEBSERVICES.md está no .vscodeignore:
npx @vscode/vsce@latest ls | grep -i webservices   # não deve listar docs/WEBSERVICES.md
```

## Release

Item de referência/docs — **não** precisa bump de versão da extensão (não muda runtime).
Commitar os artefatos gerados + o script + ajuste no `.vscodeignore`:

```bash
git add scripts/generate-webservices.js data/webservices.json docs/WEBSERVICES.md .vscodeignore docs/BACKLOG.md docs/prompts/06-webservices-indice.md
git commit -m "feat(docs): índice navegável dos web services Senior (item 6 do backlog)
Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push origin main
```

Se quiser publicar versão nova mesmo assim (ex.: adicionar link do índice no README), aí
sim bump patch + `vsce package`/`ovsx publish` conforme o fluxo padrão do projeto.

## Restrições

- Não introduzir dependências npm.
- Não alterar `functions.json`, `extension.js`, gramática ou o pipeline de funções.
- A extração é só leitura da fonte consolidada; não modificar nada em `../WebScraping/`.
- UI/mensagens/docs em PT-BR.

## Itens futuros (anotados, fora deste escopo)

- Catalogar variáveis `VSxxx` dos Identificadores de Regra (GER-000INPAD01/02 em
  `senior_erp_integracoes_completo.md`) para autocomplete/hover, como as variáveis de sistema.
- Incluir o material de integrações com parceiros (BTG, Cotei, wiipo, Mercado Eletrônico…)
  como referência da skill `lsp-senior`.
