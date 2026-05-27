# Plano de Enriquecimento — LSPT Language Support

> Documento canônico desta iniciativa. Vive em disco para economizar contexto: cada
> fase deve ser executada em **uma conversa nova**, lendo apenas este arquivo + os
> arquivos da fase. Não recarregar a documentação inteira (`README.md` de 15k linhas)
> em toda conversa.

**Tipo:** brownfield (extensão VS Code já publicada, v1.5.5)
**Stack:** Node/JavaScript puro (sem build/transpile), API VS Code `^1.60.0`
**Fonte de enriquecimento:** `../LSPSeniorDoc/Documentacao-LSP-Linguagem-Senior-de-Programacao/`
(`README.md` ~15.310 linhas + 32 exemplos `.lsp` em `exemplos/`)

---

## Objetivo

Substituir o conteúdo genérico/placeholder da extensão por documentação real extraída
do manual da LSP, melhorando hover, autocomplete, signature help, "Go to Definition",
syntax highlighting e snippets.

### Estado atual (linha de base)

| Asset | Estado hoje | Problema |
|-------|-------------|----------|
| `functions.json` | 369/369 funções com `"description": "Função built-in: X"` | Zero descrição real |
| `docs/functions/*.md` | ~369 arquivos, todos stubs com `[Adicione descrição]` | Zero conteúdo real |
| `syntaxes/lspt.tmLanguage.json` | ~60 funções listadas; sem palavras reservadas completas; **sem variáveis de sistema** | Highlighting incompleto |
| `snippets/lspt-snippets.json` | Snippets básicos | Sem os padrões reais dos exemplos |

---

## ⚠️ Restrições críticas (ler antes de codar)

1. **O pipeline sobrescreve `functions.json`.** `scripts/generate-functions.js` lê
   `Exemplos de Arquivos/funcoes.csv` e faz `writeFileSync(functions.json, ...)` com a
   descrição genérica. **Enriquecer o JSON na mão = perdido na próxima regeneração.**
   → Solução obrigatória: armazenar o conteúdo real numa **camada de overlay separada**
   (`data/functions-doc.json`) e fazer o `generate-functions.js` **mesclar** o overlay
   por nome de função. Contrato antes do código (anti-retrabalho #1).

2. **A doc NÃO é 1 função por seção.** O `README.md` é organizado por **tema**, não por
   função. Só ~14 funções têm heading `###` exato; ~65 aparecem com `nome(` em bloco de
   sintaxe. As 369 não saem por parse trivial. → Extração automática cobre o subconjunto
   documentado; o resto fica com o texto atual (degradação graciosa, não erro).

3. **UTF-8 sempre.** README e JSON têm acentuação PT-BR. Todo read/write de arquivo
   **explicitamente `'utf8'`**; nunca deixar default de plataforma reescrever para
   Windows-1252. `.editorconfig` deve fixar `charset = utf-8` e `end_of_line = lf`.

4. **`createDocFile` não sobrescreve `.md` existente** (`return` se já existe). Como os
   stubs já existem, a regeneração os ignora. → Popular docs reais exige **sobrescrever
   intencionalmente** os stubs (flag explícita no script), nunca apagar docs já editados à mão.

---

## Fases

> Convenção (de PromptDev): cada fase ≤4h, ≤500 linhas alteradas, ≤8 arquivos novos,
> cabe em 1 PR e 1 conversa. Critério de pronto = comando/checagem concreta.

### Fase 1 — Contrato + extração de descrições (FUNDAÇÃO) ✅ CONCLUÍDA
**Tier:** alto (decisão de arquitetura: formato do overlay + estratégia de parse)

> **Resultado:** `scripts/extract-from-docs.js` parseia headings `###`/`####` do manual
> (as funções individuais ficam em nível 4, não 3 — por isso a medição inicial achou só
> 15). Gera `data/functions-doc.json` com **57 funções** (description/params/returns/example).
> `generate-functions.js` mescla a `description` por nome (fallback genérico mantido) e é
> **idempotente** (re-rodar preserva). 57/369 enriquecidas; 312 seguem genéricas (não
> documentadas no manual — degradação graciosa).

Entregáveis:
1. Definir schema do overlay `data/functions-doc.json`:
   ```json
   { "RetDiaSemana": {
       "description": "Retorna o dia da semana...",
       "params": { "pData": "...", "pDia": "..." },
       "returns": ["0 = Domingo", "1 = Segunda-feira", ...],
       "example": "RetDiaSemana(vnData, vnDia);" } }
   ```
2. Script `scripts/extract-from-docs.js` que parseia o `README.md` (blocos
   `### Nome` / `**Sintaxe:**` / `**Parâmetros:**` / `**Valores de retorno:**` /
   `**Exemplo:**`) e gera/atualiza `data/functions-doc.json`. Só grava entradas que
   batem com nomes existentes em `functions.json`.
3. Modificar `scripts/generate-functions.js`: após montar cada função do CSV, fazer
   `merge` do overlay (description, params descritos) **se existir**, mantendo o
   genérico como fallback. Tudo em `'utf8'`.

Critério de pronto:
- `node scripts/extract-from-docs.js` gera `data/functions-doc.json` com ≥40 entradas.
- `node scripts/generate-functions.js` produz `functions.json` onde as funções
  documentadas têm descrição real e re-rodar **preserva** (não regride ao genérico).
- Abrir um `.lsp`, passar o mouse sobre `RetDiaSemana` → hover mostra descrição real.

### Fase 2 — Popular `docs/functions/*.md` reais ✅ CONCLUÍDA
**Tier:** médio

> **Resultado:** `generate-functions.js` (funções `buildRichDoc`/`isStub`/`createDocFile`)
> gera `.md` com descrição, parâmetros casados (nome/posição), valores de retorno e
> exemplo real. Sobrescreve **apenas stubs** (marcadores `Adicione aqui a descrição` /
> `[Adicione descrição]`); docs editados à mão nunca são tocados. **57 docs preenchidos**,
> 312 seguem stub. Idempotente: 2ª execução não re-sobrescreve docs já ricos.

Entregáveis:
1. Estender `generate-functions.js` (ou script dedicado) para, quando houver overlay,
   gerar `.md` rico: descrição, parâmetros entrada/saída descritos, valores de retorno
   e exemplo real — sobrescrevendo **apenas os stubs** (detectar marcador
   `[Adicione descrição]`), nunca docs editados à mão.
2. Funções sem overlay continuam stub.

Critério de pronto:
- N docs preenchidos (= nº de entradas no overlay).
- Cmd+Click numa função documentada abre `.md` com conteúdo real.
- `grep -L "Adicione" docs/functions/*.md | wc -l` ≈ tamanho do overlay.

### Fase 3 — Gramática (syntax highlighting) ✅ CONCLUÍDA
**Tier:** baixo (mecânico, verificável)

> **Resultado:** em `syntaxes/lspt.tmLanguage.json`: novo bloco `system-variables`
> (19 variáveis), palavras reservadas completadas (Definir, Pare, VaPara, Regra,
> Inserir, Abrir/Fechar/Ler/Lernl/Gravar/Gravarnl, ValRet/ValStr) com matching
> case-insensitive `(?i)` (LSP ignora maiúsculas), tipos ampliados (Lista/Tabela/Grid),
> e nova regra `builtin-functions` populada por `scripts/build-grammar-functions.js`
> com as **369** funções do `functions.json` (idempotente; scopes SQL preservados por
> precedência de ordem). **Validado visualmente** no Antigravity IDE via `.vsix` 1.5.6.

Entregáveis (em `syntaxes/lspt.tmLanguage.json`):
1. Bloco de **palavras reservadas** (51): `Definir, Se, Senao, Enquanto, Para, Funcao,
   Fim, Inicio, Mensagem, Cancel, ValRet, ValStr, VaPara, Pare, Continue, Regra, e, ou,
   nao, Inserir, Abrir, Fechar, Ler, Gravar, Lernl, Gravarnl, Cursor, ...` (lista completa
   na seção "Palavras Reservadas" do README, linha ~1606).
2. Bloco de **variáveis de sistema** (~19) como `constant.language`/`variable.language`:
   `AnoSis, CodEmp, CodFil, CodUsu, DatSis, DBNomeUsuario, DBTipo, DesRodape, DiaSis,
   Empresa, ExtSis, Filial, GerTabAlf, GerTabNum, HorSis, MesSis, NomUsu, NumPag, QtdDupPag`
   (README linha ~1653).
3. Ampliar a lista de funções built-in destacadas (gerar a partir das chaves de
   `functions.json` em vez de listas manuais, se viável).

Critério de pronto:
- Abrir `.lsp` e ver palavras reservadas e variáveis de sistema coloridas distintamente.

### Fase 4 — Snippets a partir dos exemplos ✅ CONCLUÍDA
**Tier:** baixo

> **Resultado:** o arquivo já cobria condicionais/loops/cursores/SQL/HTTP POST/WS/arquivos.
> Adicionados os padrões reais que faltavam, extraídos de `exemplos/`: `http-get`,
> `json-valor` (ValorElementoJson), `lista-json` (ListaRegra a partir de array JSON com
> loop) e `valida-nulo` (EstaNulo). 59 snippets no total, sem novas duplicações.
> Obs.: prefixo `execsql` está duplicado **desde antes** (cleanup opcional).

Entregáveis (em `snippets/lspt-snippets.json`), extraídos de `LSPSeniorDoc/.../exemplos/`:
- `se / senao se / senao`, loop `Para`, loop `Enquanto`, cursor SQL completo
  (`SQL_Criar`→`SQL_FecharCursor`), requisição HTTP (`HttpGet`/`HttpPost`),
  validação (`EstaNulo`/`VrfAbrA`), lista dinâmica, manipulação JSON.

Critério de pronto:
- Digitar prefixo do snippet num `.lsp` expande o template com placeholders corretos.

---

### Fase 5 — Enriquecer descrições com os manuais consolidados ✅ CONCLUÍDA
**Tier:** médio · **Fonte:** `../WebScraping/output/_consolidado/` (senior_erp + senior_tecnologia)

> **Resultado:** `scripts/extract-from-erp-docs.js` parseia os dois manuais (formatos
> distintos: ERP usa `Sintaxe:`+tabela; Tecnologia usa `**Sintaxe:**` inline) e gera
> `data/functions-doc-erp.json` (~505 funções, 484 com assinatura). `generate-functions.js`
> agora combina os overlays (manual tem precedência) com **matching case-insensitive** e
> enriquece **255** funções existentes. Docs regeneráveis via marcador de rodapé.

### Fase 6 — Adicionar funções novas ao catálogo ✅ CONCLUÍDA
**Tier:** médio

> **Resultado:** entradas do overlay com assinatura ausentes do CSV viram funções novas
> (parse de params da assinatura; `code: "N/A"`). Catálogo: **369 → 600** funções
> (+231). Gramática regenerada (600), docs gerados/atualizados (482 com conteúdo real,
> 118 stubs). Correções: bug do `end` minúsculo em `extractParameters`, fallback de
> params via tabela do overlay quando a assinatura não tem tipos, dedup case-insensitive
> (a LSP ignora caixa). Release **1.6.0**.

### Fase 7 — Doc rica no editor (hover + signature help) ✅ CONCLUÍDA
**Tier:** médio

> **Resultado:** `functions.json` passou a guardar `params[].description` e `returns`
> (via `enrichFuncData` no gerador, a partir do overlay combinado com merge campo-a-campo).
> `extension.js` exibe a descrição de cada parâmetro e os valores de retorno no **hover**
> e no **signature help** — antes só apareciam no `.md`. **438** funções com descrição de
> parâmetro, **195** com valores de retorno. Release **1.6.1**.
>
> Pendência conhecida: **114** funções do CSV seguem com descrição genérica (não constam
> em nenhuma das fontes: manual, ERP, Tecnologia). Só enriquecem com nova fonte de doc.

## Estado dos releases

| Versão | Namespace | Conteúdo |
|--------|-----------|----------|
| 1.5.7 | eorgan | Enriquecimento inicial (Fases 1–4) |
| 1.5.8 | eliezer-organ | Build de migração (aviso de publisher) — namespace antigo |
| 1.6.0 | eorgan | Catálogo 369→600 (Fases 5–6) |
| 1.6.1 | eorgan | Hover/signature com params descritos + retorno (Fase 7) |

## Higiene de processo (do PromptDev — versão enxuta p/ projeto pequeno)

- **ADR** para a estratégia de overlay/merge (a decisão estrutural da Fase 1) em
  `docs/adr/0001-overlay-descricoes.md`. É o que evita o retrabalho #1.
- **Conventional Commits**, um commit lógico por mudança (`feat`, `fix`, `chore`, `docs`).
- **`docs/known-pitfalls.md`** com as 4 restrições críticas acima no formato
  Sintoma → Causa → Fix.
- **`.editorconfig`** com `charset = utf-8` / `end_of_line = lf` (acentuação PT-BR).
- Cada fase = PR próprio; rodar a extensão em VS Code (F5 / host de extensão) antes de
  fechar fase de UI (highlighting/hover/snippets só se validam no editor real).

---

## O que foi aproveitado do PromptDev (`../PromptDev`)

| Prática | Como aplicamos aqui |
|---------|---------------------|
| Regra-zero (nada em disco sem aprovação; diff antes de modificar) | Modificações em `generate-functions.js` mostram diff antes |
| Anti-retrabalho #1 (contratos de dados antes do código) | Schema do overlay definido na Fase 1 antes de popular |
| Decomposição em fases ≤4h / ≤1 PR / 1 conversa | 4 fases acima, cada uma fechável isolada |
| Tiers de modelo por fase | Fase 1 alto, 2 médio, 3–4 baixo |
| `known-pitfalls.md` (Sintoma→Causa→Fix) | As 4 restrições críticas |
| ADR para decisão estrutural | `0001-overlay-descricoes.md` |
| UTF-8 enforced + `.editorconfig` (pitfall acentuação latina) | Restrição crítica #3 |
| Conventional Commits | Convenção de commit das fases |
| Degradação graciosa em vez de cobertura forçada | Funções sem doc mantêm texto atual (restrição #2) |

Não aplicamos (overkill para este projeto): CI elaborado, hooks de fase bloqueantes,
roadmap de 8–12 fases, skills customizadas, branch de backup formal — projeto é pequeno
e versionado por `.vsix`.
