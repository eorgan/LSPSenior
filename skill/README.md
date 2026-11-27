# Skill LSP Senior

Skill para Claude Code que ensina a escrever código LSP (Linguagem Senior de Programação)
com segurança — evitando os erros mais comuns do ERP Senior (G5).

## Estrutura

```
lsp-senior/
├── SKILL.md                       ← skill principal (carregada automaticamente pelo Claude Code)
├── functions.json                 ← catálogo de 676 funções (assinatura, params, direção, retorno)
├── scripts/
│   ├── buscar_funcao.py           ← catálogo de funções built-in
│   ├── buscar_ws.py               ← 434 web services do ERP (entrada/saída de cada um)
│   ├── buscar_identificador.py    ← 3157 identificadores de regra (24 módulos)
│   ├── buscar_tabela.py           ← dicionário do ERP (3120 tabelas / 53210 campos)
│   ├── buscar_tabela_edocs.py     ← dicionário do eDocs (344 tabelas `N*`, banco próprio)
│   └── buscar_snippet.py          ← biblioteca de trechos prontos
├── docs/
│   └── functions/                 ← uma doc .md por função, com exemplo de uso real
└── reference/
    ├── sintaxe.md                 ← operadores, palavras reservadas, tipos, blocos
    ├── erros-comuns.md            ← os erros mais frequentes com correção
    ├── quick-reference.md         ← cartões por categoria (strings, datas, SQL, HTTP, JSON, FTP)
    ├── padroes.md                 ← padrões prontos: validação, conversão, tratamento de erro
    ├── webservices.md             ← índice dos web services
    ├── identificadores.md         ← índice dos identificadores de regra
    ├── tabelas.md                 ← índice do dicionário de tabelas do ERP
    ├── tabelas-edocs.md           ← índice do dicionário do eDocs
    ├── parametros-linha-comando.md
    ├── seguranca-sgu.md           ← permissão por usuário/grupo (SegEnt*)
    ├── ftp.md                     ← FTP/SFTP (família Ftp*)
    ├── edocs.md                   ← eDocs: banco separado, faixas de tabelas
    ├── banco-sgbd.md              ← descobrir Oracle/SQL Server/PostgreSQL
    └── snippets/                  ← sql, http, ws, log, funções, parâmetros
```

## Como usar

### No Claude Code (carregamento automático)

Esta pasta (`LSPSenior/skill`) é a fonte da skill. O Claude Code só a ativa sozinho
(ao trabalhar com arquivos `.lsp`/`.lspt`) no projeto que tiver uma cópia dela em
`.claude/skills/lsp-senior/`; hoje essa cópia fica em `geradorRegrasLSP`. Depois de alterar
a skill aqui, atualize a cópia:

```bash
rsync -a --delete --exclude .claude --exclude settings.local.json --exclude __pycache__ ~/GitHub/LSPSenior/skill/ ~/GitHub/geradorRegrasLSP/.claude/skills/lsp-senior/
```

O agente local `lsp-local` (Gemma) lê esta pasta diretamente e não precisa de cópia.
A pasta `LSPSenior/.claude/skills/lsp-senior` é uma versão antiga e não é usada.

### Consultar o catálogo de funções

```bash
python3 scripts/buscar_funcao.py SQL_AbrirCursor
python3 scripts/buscar_funcao.py --listar Ftp
python3 scripts/buscar_funcao.py --full FtpUpload   # inclui o exemplo de docs/functions/
```

Os demais scripts seguem o mesmo padrão (`--listar` para nomes, termo solto para detalhe):

```bash
python3 scripts/buscar_ws.py produto
python3 scripts/buscar_identificador.py E140NFV
python3 scripts/buscar_tabela.py E001TNS
python3 scripts/buscar_snippet.py cursor
```

## O que a skill cobre

- **Regra de ouro:** manipule antes, passe variável pronta — nunca opere dentro de parâmetros
- **Limitações críticas:** retorno por parâmetro de saída, sem operação em
  parâmetro, funções de usuário sem `Alfa`, corpo das funções no fim do arquivo, cursor nativo sem
  `SELECT 1`/agregação na lista de colunas do SELECT principal, NULL em INSERTs, variáveis de sistema no SQL, `ProcuraEnter` em loop, parênteses
  por comparação, comentários `@ … @` (linha) × `/* … */` (bloco)
- **Nomenclatura:** `va` (Alfa), `vn` (Numero), `vd` (Data)
- **Catálogo:** 676 funções built-in com assinatura, parâmetros e direção — inclui `SQL_*`
  (cursores e bind), `Http*` e `Ftp*`
- **FTP/SFTP:** a LSP **não** faz FTPS/FTPES; SFTP exige `FtpSetaSFTP` (+ `FtpSSH` para chave)
- **Web services internos:** proxy `interno.*`, `ModoExecucao`, `CriarLinha`
- **Segurança (SGU):** `SegEnt*`/`SegUsu*` para checar grupo/usuário
- **Dicionários:** tabelas do ERP, tabelas do eDocs e identificadores de regra
- **Padrões seguros:** cursor SQL, HTTP, JSON, validação, `ExecutarComandoSQL`, UPSERT, CSV
- **Linter:** o que a extensão LSPT detecta automaticamente (operação em parâmetro, cursor não
  fechado, `Pare`/`Continue` fora de loop)

## Manutenção (fonte da verdade)

`functions.json` e `docs/functions/` são **gerados** — não edite à mão. Ambos vêm do projeto da
extensão LSPT (`~/GitHub/LSPSenior`):

```
Exemplos de Arquivos/funcoes.csv   ← assinaturas do ERP
data/functions-doc*.json           ← overlays extraídos dos manuais
data/functions-api.json            ← overlay curado à mão (SQL_*, Http*, Ftp*, correções)
        │
        └── node scripts/generate-functions.js   → functions.json + docs/functions/*.md
            node scripts/build-grammar-functions.js → realce de sintaxe da extensão
            bash scripts/export-skill.sh <projeto> → publica o bundle da skill
```

Função que falta no catálogo entra em `data/functions-api.json` e **regenera** — editar o
`functions.json` direto some na próxima geração. Docs `.md` escritas à mão (sem a nota de
auto-geração no rodapé) nunca são sobrescritas.

Apenas `SKILL.md`, `reference/`, `scripts/` e este `README.md` são editados diretamente aqui —
e devem ser espelhados nas duas cópias da skill (`geradorRegrasLSP/.claude/skills/lsp-senior`
e `LSPSenior/skill`).
