# Skill LSP Senior

Skill para Claude Code que ensina a escrever código LSP (Linguagem Senior de Programação)
com segurança — evitando os erros mais comuns do ERP Senior (G5).

## Estrutura

```
lsp-senior/
├── SKILL.md                 ← skill principal (carregada automaticamente pelo Claude Code)
├── functions.json           ← catálogo de 647+ funções (assinatura, params, direção, exemplo)
├── scripts/
│   └── buscar_funcao.py     ← consulta o catálogo com a direção de cada parâmetro
├── docs/
│   └── functions/           ← uma doc .md por função, com exemplo de uso real
└── reference/
    ├── sintaxe.md           ← operadores, palavras reservadas, tipos, blocos
    ├── erros-comuns.md      ← os 12 erros mais frequentes com correção
    ├── quick-reference.md   ← cartões por categoria (strings, datas, SQL, HTTP, JSON)
    └── padroes.md           ← padrões prontos: validação, conversão, tratamento de erro
```

## Como usar

### No Claude Code (carregamento automático)

A skill está registrada em `.claude/skills/lsp-senior/`. Claude Code a ativa
automaticamente quando você trabalha com arquivos `.lsp`/`.lspt`.

### Consultar o catálogo de funções

```bash
python3 scripts/buscar_funcao.py SQL_AbrirCursor
python3 scripts/buscar_funcao.py --listar Http
python3 scripts/buscar_funcao.py --full Mensagem
```

## O que a skill cobre

- **Regra de ouro:** manipule antes, passe variável pronta — nunca opere dentro de parâmetros
- **Limitações críticas:** retorno por parâmetro de saída, declaração no topo, sem operação em
  parâmetro, funções de usuário sem `Alfa`, cursores sem `SELECT 1`, NULL em INSERTs, variáveis
  de sistema no SQL, `ProcuraEnter` em loop, parênteses por comparação
- **Nomenclatura:** `va` (Alfa), `vn` (Numero), `vd` (Data)
- **Catálogo:** 647+ funções built-in com assinatura, parâmetros e direção — inclui `SQL_*` e `Http*`
- **Padrões seguros:** cursor SQL, HTTP, JSON, validação, ExecSQLEx, UPSERT, leitura de CSV
- **Linter:** o que a extensão LSPT detecta automaticamente (operação em parâmetro, cursor não
  fechado, `Pare`/`Continue` fora de loop)

## Manutenção (fonte da verdade)

`functions.json` e `docs/functions/` são **gerados** — não edite à mão. O catálogo e os
exemplos vêm do projeto da extensão LSPT (`generate-functions.js` a partir de CSV/overlays).
Para alterar funções/exemplos, ajuste na origem e **reexporte o bundle** para cá; caso
contrário as duas cópias divergem. Apenas `SKILL.md`, `reference/` e este `README.md` são
editados diretamente aqui.
