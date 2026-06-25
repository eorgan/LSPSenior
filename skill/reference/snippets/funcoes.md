# Snippets Funções — Declaração, estrutura e cabeçalho

## BLOCO: declarar-funcao
**Uso:** Declarar assinatura de uma função no escopo global da regra
**Tags:** função, declarar, assinatura, escopo

```lspt
Definir Funcao NomeDaFuncao(); @ TODO: renomear @
```

---

## BLOCO: corpo-funcao
**Uso:** Estrutura básica de implementação de uma função LSP
**Tags:** função, corpo, inicio, fim, implementação

```lspt
Funcao NomeDaFuncao(); @ TODO: renomear @
   Inicio
      @ ... implementação ... @
   Fim;
```

---

## BLOCO: retornar-via-global
**Uso:** Retornar valor de uma função via variável global (padrão LSP — sem return com valor)
**Tags:** função, retornar, global, variável, saída, resultado

```lspt
@ No escopo global: @
Definir Alfa gaResultado; @ variável compartilhada de saída @

@ Dentro da função, antes do Fim: @
gaResultado = vaValorCalculado; @ TODO: ajustar variável @
```

---

## BLOCO: condicional-se
**Uso:** Estrutura condicional Se/Senao
**Tags:** se, senao, condicional, if, else

```lspt
Se (vaCondicao = "VALOR") @ TODO: ajustar condição @
   {
      @ ... bloco verdadeiro ... @
   }
Senao
   {
      @ ... bloco falso ... @
   }
```

---

## BLOCO: laco-para
**Uso:** Laço Para com contador (equivalente ao for)
**Tags:** para, laço, loop, contador, for, iteração

```lspt
Para (vnI = 0; vnI < vnTotal; vnI++) @ TODO: ajustar limites @
   Inicio
      @ ... corpo do laço ... @
   Fim;
```

---

## PADRÃO: cabecalho-arquivo
**Uso:** Bloco de cabeçalho padrão para novas regras LSP
**Tags:** cabeçalho, header, autor, data, descrição, novo, arquivo, template

```lspt
/*
 * @Author: NOME_AUTOR
 * @Email: EMAIL_AUTOR
 * @Date: YYYY-MM-DD HH:MM:SS
 * @Last Modified by: NOME_AUTOR
 * @Last Modified time: YYYY-MM-DD HH:MM:SS
 * @Description: DESCRICAO_DA_REGRA
 *               Continue a descrição em múltiplas linhas se necessário.
 *               Inclua: módulo, tela/identificador, e o que a regra faz.
 */
```

---

## PADRÃO: esqueleto-regra
**Uso:** Estrutura completa de uma nova regra LSP do zero (cabeçalho + declarações + funções + corpo)
**Tags:** esqueleto, novo, regra, estrutura, completo, template, boilerplate

```lspt
/*
 * @Author: NOME_AUTOR
 * @Email: EMAIL_AUTOR
 * @Date: YYYY-MM-DD HH:MM:SS
 * @Last Modified by: NOME_AUTOR
 * @Last Modified time: YYYY-MM-DD HH:MM:SS
 * @Description: DESCRICAO_DA_REGRA
 */

@-- Declaração de funções --@
Definir Funcao Processar(); @ TODO: renomear e adicionar outras funções @

@-- Declaração de variáveis globais --@
Definir Alfa   vaResultado;  @ TODO: ajustar variáveis @
Definir Numero vnRetorno;

@-- Corpo principal --@
Processar();
Se (vnRetorno <> 0)
   {
      MensagemErro("Erro no processamento."); @ TODO: ajustar mensagem @
   }

@-- Implementação das funções --@
Funcao Processar();
   Inicio
      @ ... implementação ... @
      vnRetorno = 0;
   Fim;
```
