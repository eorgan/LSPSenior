# AGENTS.md — Guia para agentes de IA

Este repositório é a extensão **LSPT Language Support** e também serve de base de
conhecimento da **LSP (Linguagem Senior de Programação)** do ERP Senior.

## Ao escrever/editar/revisar código LSP (`.lsp` / `.lspt`)

Leia primeiro a skill **[.claude/skills/lsp-senior/SKILL.md](.claude/skills/lsp-senior/SKILL.md)**
— contém as regras críticas, convenções e padrões seguros. As regras essenciais (resumo):

1. **Manipule primeiro, chame a função depois.** Nada de concatenação, conversão,
   matemática ou chamada de função **dentro dos parâmetros**. Faça antes, guarde em
   variável, passe a variável. (A função `Mensagem` é a que mais sofre com isso.)
2. **Funções retornam por parâmetro de saída (`end`), não por `=`.**
   `RetDiaSemana(vnData, vnDia);` — `vnDia` recebe o resultado.
3. **Confirme toda função no catálogo antes de usar** (não invente assinaturas).
4. **Declare variáveis no topo**, com prefixo de tipo: `va` (Alfa), `vn` (Numero), `vd` (Data).
5. A LSP é **case-insensitive**; comandos terminam com `;`; blocos `{ }` ou `Inicio/Fim;`.

## Catálogo de funções (fonte da verdade deste projeto)

- **`functions.json`** — ~600 funções: `Nome → { signature, params[{name,type,direction,description}], returns[], description }`.
  Busque com `grep -i '"nome"' functions.json`. Cheque `direction`: `in` (você fornece) vs `out`/`end` (recebe).
  Procure-o na **raiz do projeto** ou em **`.claude/skills/lsp-senior/functions.json`** (bundle exportado).
- **`docs/functions/<Nome>.md`** — doc completa por função, com exemplo de uso real.
  Pode estar em **`docs/functions/`** (raiz) ou em **`.claude/skills/lsp-senior/docs/functions/`**
  (quando o bundle foi exportado com `--with-docs`). Já o `functions.json` sozinho cobre
  assinatura, parâmetros descritos e valores de retorno — consulte o `.md` para ver um exemplo.

## Exemplos essenciais

**Regra de ouro (antes → depois):**

```lsp
@ ERRADO @  Mensagem(Retorna, "Idade: " + IntParaAlfa(vnIdade));
@ CORRETO @
IntParaAlfa(vnIdade, vaIdade);
vaMensagem = "Idade: " + vaIdade;
Mensagem(Retorna, vaMensagem);
```

**Retorno por parâmetro de saída (não use `=`):**

```lsp
EstaNulo(vaEmail, vnNulo);     Se (vnNulo = 1) { Mensagem(Erro, "Vazio"); }
RetDiaSemana(vnData, vnDia);   @ vnDia recebe o resultado @
```

**Cursor SQL (sempre feche/destrua):**

```lsp
SQL_Criar(vaSql);
SQL_UsarSqlSenior2(vaSql, 0);
SQL_DefinirComando(vaSql, vaComando);
SQL_AbrirCursor(vaSql);
Enquanto (SQL_EOF(vaSql) = 0)
   { SQL_RetornarAlfa(vaSql, "Campo", vaValor); SQL_Proximo(vaSql); }
SQL_FecharCursor(vaSql);
SQL_Destruir(vaSql);
```

> Mais padrões (HTTP, JSON, lista dinâmica, validação+INSERT) e o checklist completo
> estão em [.claude/skills/lsp-senior/SKILL.md](.claude/skills/lsp-senior/SKILL.md).

## Como regenerar a base (se a documentação-fonte mudar)

```bash
node scripts/extract-from-docs.js        # manual -> data/functions-doc.json
node scripts/extract-from-erp-docs.js    # manuais consolidados -> data/functions-doc-erp.json
node scripts/generate-functions.js       # CSV + overlays -> functions.json + docs/functions/
node scripts/build-grammar-functions.js  # functions.json -> gramática (syntaxes/)
```

Detalhes da iniciativa de enriquecimento: [docs/PLANO-ENRIQUECIMENTO.md](docs/PLANO-ENRIQUECIMENTO.md).
