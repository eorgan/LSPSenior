---
name: lsp-senior
description: >-
  Use ao escrever, editar ou revisar código LSP (Linguagem Senior de Programação) —
  arquivos .lsp/.lspt do ERP Senior (regras, cursores SQL, web services, relatórios).
  Fornece as regras críticas da linguagem (que evitam os erros mais comuns), convenções
  de nomenclatura, padrões seguros e como consultar o catálogo de ~600 funções built-in
  deste projeto (functions.json + docs/functions/).
---

# Programando em LSP (Linguagem Senior de Programação) com segurança

A LSP é a linguagem de regras do ERP Senior (G5). É **case-insensitive**, sequencial,
e tem limitações específicas que causam a maioria dos erros. Leia as regras abaixo
ANTES de escrever ou revisar código `.lsp`/`.lspt`.

## 🥇 Regra de Ouro: manipule primeiro, chame a função depois

A LSP **NÃO** aceita operações (concatenação, conversão, matemática, chamadas de função)
**dentro dos parâmetros** de uma função. Faça tudo antes, guarde em variável, passe a variável.

```lsp
@ ERRADO @
Mensagem(Retorna, "Idade: " + IntParaAlfa(vnIdade));

@ CORRETO @
Definir Alfa vaIdade;
Definir Alfa vaMensagem;
IntParaAlfa(vnIdade, vaIdade);     @ converte antes @
vaMensagem = "Idade: " + vaIdade;  @ concatena antes @
Mensagem(Retorna, vaMensagem);     @ passa a variável pronta @
```

A função `Mensagem` é a vítima mais comum desse erro.

## ⚠️ Limitações críticas

1. **Sem operações em parâmetros** (regra acima): nada de `+`, `*`, `/`, `-`, nem
   `IntParaAlfa(...)`/`AlfaParaInt(...)` dentro dos argumentos.
2. **Funções retornam por parâmetro de saída, não por `=`.** O resultado vem num
   parâmetro marcado com `end` (Saída), não no retorno da expressão.
   ```lsp
   @ ERRADO @  vnDia = RetDiaSemana(vnData);
   @ CORRETO @ RetDiaSemana(vnData, vnDia);   @ vnDia é o parâmetro de saída @
   ```
   Para saber qual parâmetro é saída, veja a direção (`Saída`/`end`) no catálogo.
3. **Grids/tabelas:** conversões diretas falham — use variável intermediária.
4. **Declare variáveis no início** (com `Definir`), não no meio do fluxo.

## 🏷️ Nomenclatura de variáveis

Prefixo por tipo + CamelCase, descritivo, sem acento, sem palavra reservada:

- `va` → Alfa (texto): `vaNomeCompleto`
- `vn` → Numero: `vnValorTotal`
- `vd` → Data: `vdDataVencimento`
- parâmetros de função costumam usar prefixo `a`/`p` (`aTela`, `pData`).

## 🔎 Como consultar o catálogo de funções (deste projeto)

Antes de usar uma função, confirme a assinatura real — **não invente**. A LSP é
case-insensitive, então compare nomes ignorando a caixa.

- **`functions.json`**: mapa `Nome → { signature, params[{name,type,direction,description}], returns[], description, code }`.
  Procure-o **nesta pasta de skill** (bundle exportado) ou **na raiz do projeto**.
  Para localizar uma função: `grep -i '"nomeFuncao"' functions.json` ou leia a entrada.
- **`docs/functions/<Nome>.md`** (quando presente no projeto): documentação completa por
  função, com **exemplo de uso real**. Use o nome canônico do `functions.json`.

Sempre cheque a `direction` de cada parâmetro: `in` = você fornece; `out` (`end`) = recebe o resultado.

## 🧩 Estrutura e sintaxe

- Comentários: `@ comentário @`, `@-- comentário --@` ou `/* bloco */`.
- Blocos: `{ ... }` ou `Inicio ... Fim;`. Comandos terminam com `;`.
- Funções:
  ```lsp
  Definir Funcao MinhaFuncao();   @ declaração no topo @
  ...
  Funcao MinhaFuncao();
     Inicio
        @ corpo @
     Fim;
  ```
- Condicional: `Se (cond) { ... } Senao Se (cond) { ... } Senao { ... }`
- Loops: `Para (vn=0; vn<vnQtd; vn++) { ... }` · `Enquanto (cond) { ... }`
  (`Pare;` só dentro de loop; `Continue;` pula iteração).
- `Cancel(1)` cancela impressão/registro; `ValRet`/`ValStr` + `Cancel(2)` definem valor impresso.

## 📐 Padrões seguros (há snippets prontos em `snippets/lspt-snippets.json`)

- **Cursor SQL (recomendado):** `SQL_Criar` → `SQL_UsarSqlSenior2` → `SQL_DefinirComando`
  → `SQL_AbrirCursor` → loop `Enquanto (SQL_EOF(...) = 0)` com `SQL_RetornarAlfa/Inteiro/...`
  → `SQL_Proximo` → `SQL_FecharCursor` → `SQL_Destruir`.
- **HTTP:** `HttpObjeto` → cabeçalhos → `HttpGet`/`HttpPost` → `HttpLeCodigoResposta`.
- **JSON:** `ValorElementoJson` (campo simples); `ListaRegraCarregarJson` + `ListaRegraPrimeiro`/
  `ListaRegraProximo`/`ListaRegraObterValorAlfa` (coleções).
- **Validação:** `EstaNulo(vaVar, vnNulo)` e cheque `vnNulo = 1`.
- **SQL com escrita:** `ExecSQLEx(aComando, xErro, xMensagem)` e trate `xErro`.
- **Segurança SQL:** prefira placeholders; nunca concatene entrada do usuário cru no SQL.

## 🔁 Exemplo completo (antes → depois)

**Antes (com 3 erros típicos):**

```lsp
Funcao MostraTotal();
   Inicio
      @ ERROS: matemática, conversão e concatenação dentro do parâmetro @
      Mensagem(Retorna, "Total: " + IntParaAlfa(vnQtdA + vnQtdB) + " itens");
   Fim;
```

**Depois (correto — manipule primeiro, chame depois):**

```lsp
Definir Funcao MostraTotal();

Funcao MostraTotal();
   Inicio
      Definir Numero vnTotal;
      Definir Alfa vaTotal;
      Definir Alfa vaMensagem;

      vnTotal = vnQtdA + vnQtdB;       @ 1. matemática antes @
      IntParaAlfa(vnTotal, vaTotal);   @ 2. conversão por parâmetro de saída @
      vaMensagem = "Total: " + vaTotal + " itens";  @ 3. concatenação antes @
      Mensagem(Retorna, vaMensagem);   @ 4. passa a variável pronta @
   Fim;
```

## 📦 Exemplos de padrões prontos

**Cursor SQL (forma recomendada) — sempre feche e destrua:**

```lsp
Definir Alfa vaComando;
Definir Alfa vaSql;
Definir Alfa vaNome;

vaComando = "SELECT NomFun FROM R034FUN WHERE NumCpf = '12345678900'";

SQL_Criar(vaSql);
SQL_UsarSqlSenior2(vaSql, 0);
SQL_UsarAbrangencia(vaSql, 0);
SQL_DefinirComando(vaSql, vaComando);
SQL_AbrirCursor(vaSql);
Enquanto (SQL_EOF(vaSql) = 0)
   {
      SQL_RetornarAlfa(vaSql, "NomFun", vaNome);
      @ ... usa vaNome ... @
      SQL_Proximo(vaSql);
   }
SQL_FecharCursor(vaSql);
SQL_Destruir(vaSql);
```

**HTTP GET + leitura de JSON:**

```lsp
Definir Alfa  vaHTTP;
Definir Alfa  vaJson;
Definir Alfa  vaCidade;
Definir Numero vnCodResp;

HttpObjeto(vaHTTP);
HttpDesabilitaErroResposta(vaHTTP);
HttpAlteraCabecalhoRequisicao(vaHTTP, "Accept", "application/json");
HttpGet(vaHTTP, "https://viacep.com.br/ws/01001000/json/", vaJson);
HttpLeCodigoResposta(vaHTTP, vnCodResp);
Se (vnCodResp = 200)
   {
      ValorElementoJson(vaJson, "", "localidade", vaCidade);  @ campo simples @
   }
```

**Lista dinâmica a partir de array JSON:**

```lsp
Definir Numero vnLista;
Definir Alfa   vaAchou;
Definir Alfa   vaId;
Definir Alfa   vaNomeProd;

ListaRegraCriarLista(vnLista);
ListaRegraCarregarJson(vnLista, vaJsonProdutos, "produtos", "id;nome");
ListaRegraPrimeiro(vnLista, vaAchou);
Enquanto (vaAchou = "S")
   {
      ListaRegraObterValorAlfa(vnLista, "id", vaId, vaAchou);
      ListaRegraObterValorAlfa(vnLista, "nome", vaNomeProd, vaAchou);
      @ ... processa ... @
      ListaRegraProximo(vnLista, vaAchou);
   }
```

**Validação + INSERT com tratamento de erro:**

```lsp
Definir Numero vnNulo;
Definir Alfa   vaComando;
Definir Alfa   xErro;
Definir Alfa   xMensagem;

EstaNulo(vaEmail, vnNulo);
Se (vnNulo = 1)
   {
      Mensagem(Erro, "E-mail obrigatório.");
   }
Senao
   {
      vaComando = "INSERT INTO MinhaTabela (Email) VALUES ('" + vaEmail + "')";
      ExecSQLEx(vaComando, xErro, xMensagem);
      Se (xErro <> 0)
         {
            Mensagem(Erro, xMensagem);
         }
   }
```

## ✅ Checklist antes de finalizar

- [ ] Nenhuma operação/concatenação/conversão dentro de parâmetros de função.
- [ ] Resultados obtidos por parâmetro de saída (`end`), não por `=`.
- [ ] Toda função usada existe no `functions.json` com a assinatura/ordem corretas.
- [ ] Variáveis declaradas no topo, com prefixo de tipo (`va`/`vn`/`vd`).
- [ ] Cursores fechados (`SQL_FecharCursor` + `SQL_Destruir`); arquivos fechados (`Fechar`).
- [ ] `Pare;` apenas dentro de `Para`/`Enquanto`.
