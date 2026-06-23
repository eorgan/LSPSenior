# Skill LSP Senior

Skill para Claude Code que ensina a escrever código LSP (Linguagem Senior de Programação)
com segurança — evitando os erros mais comuns do ERP Senior (G5).

## Estrutura

```
skill/
├── SKILL.md              ← skill principal (carregada automaticamente pelo Claude Code)
├── buscar_funcao.py      ← consulta o catálogo de 647+ funções com direção dos parâmetros
└── reference/
    ├── sintaxe.md        ← operadores, palavras reservadas, tipos, blocos
    ├── erros-comuns.md   ← os 12 erros mais frequentes com correção
    ├── quick-reference.md← cartões por categoria (strings, datas, SQL, HTTP, JSON)
    └── padroes.md        ← padrões prontos: validação, conversão, tratamento de erro
```

## Como usar

### No Claude Code (carregamento automático)

A skill está registrada em `.claude/skills/lsp-senior/`. Claude Code a ativa
automaticamente quando você trabalha com arquivos `.lsp`/`.lspt`.

### Consultar o catálogo de funções

```bash
python3 skill/buscar_funcao.py SQL_AbrirCursor
python3 skill/buscar_funcao.py --listar Http
python3 skill/buscar_funcao.py --full Mensagem
```

### Carregar em outro projeto

Copie esta pasta `skill/` para o projeto destino e registre em `.claude/skills/lsp-senior/`.

## O que a skill cobre

- **Regra de ouro:** manipule antes, passe variável pronta — nunca opere dentro de parâmetros
- **Limitações críticas:** retorno por parâmetro de saída, declaração no topo, sem operação em param
- **Nomenclatura:** `va` (Alfa), `vn` (Numero), `vd` (Data)
- **Catálogo:** 647+ funções built-in com assinatura, parâmetros e direção
- **Padrões seguros:** cursor SQL, HTTP, JSON, validação, ExecSQLEx
- **Linter:** o que a extensão LSPT detecta automaticamente (operação em parâmetro, cursor não fechado, Pare/Continue fora de loop)
