# Erros comuns da LSP (e como corrigir)

Catálogo dos erros que o compilador/runtime mais geram. Cada item traz o código
errado e a correção. Consulte antes de escrever e ao revisar.

> Fonte: padrão [brunoleocam](https://github.com/brunoleocam/Documentacao-LSP-Linguagem-Senior-de-Programacao);
> assinaturas conferidas no `functions.json`.

## Erros de sintaxe / funções inexistentes

### `Chr()` não existe

```lsp
@ ❌ @ vaStr = "Linha1" + Chr(13) + Chr(10) + "Linha2";
@ ✅ @
Definir Alfa vaEnter;
CaracterParaAlfa(13, vaEnter);    @ CaracterParaAlfa(Caractere, Destino) @
vaStr = "Linha1" + vaEnter + "Linha2";
```

### `FormatarData` recebe **Numero**, não **Data**

A assinatura é `FormatarData(Numero Data, Alfa Formato, Alfa End DataFormatada)`.
O primeiro parâmetro é numérico — use `DataHora` (que devolve Numero), não uma variável `Data`.

```lsp
@ ❌ @ Definir Data vdData; DataHoje(vdData); FormatarData(vdData, "dd/MM/yyyy", vaFmt);
@ ✅ @
Definir Numero vnDataHora;
DataHora(vnDataHora);
FormatarData(vnDataHora, "dd/MM/yyyy", vaFmt);
```

### Atribuição direta de data não funciona

```lsp
@ ❌ @ vdData = 15/08/1990;
@ ✅ @ MontaData(15, 8, 1990, vdData);   @ ou CodData(dia, mes, ano) @
```

### Variáveis usadas sem declaração

Toda variável precisa de `Definir` antes do uso.

```lsp
@ ❌ @ DecodData(vdData, vnDia, vnMes, vnAno);
@ ✅ @
Definir Numero vnDia;
Definir Numero vnMes;
Definir Numero vnAno;
DecodData(vdData, vnDia, vnMes, vnAno);
```

### `Truncar` retorna por `=` (exceção à regra geral)

`Truncar(valor)` é uma das poucas funções que devolvem pela expressão:

```lsp
@ ❌ @ Truncar(vnDataHora, vnParteInteira);
@ ✅ @ vnParteInteira = Truncar(vnDataHora);
```

## Erros semânticos clássicos

### #1 — Operação/concatenação dentro de parâmetro

A LSP **não** avalia expressões dentro dos argumentos. Prepare em variável antes.
(É a "regra de ouro" do `SKILL.md`.) Vale para qualquer função, não só `Mensagem`.

```lsp
@ ❌ @ Mensagem(Retorna, "Resultado: " + vaValor);
@ ❌ @ TamanhoAlfa("Texto: " + vaNome, vnTam);
@ ✅ @
Definir Alfa vaMsg;
vaMsg = "Resultado: " + vaValor;
Mensagem(Retorna, vaMsg);
```

### #2 — Tratar função como se retornasse por `=`

Quase toda função LSP devolve pelo **parâmetro de saída** (`End`), não pela expressão.
Execute primeiro; depois compare a variável.

```lsp
@ ❌ @ vnTam = TamanhoAlfa(vaTexto);
@ ❌ @ Se (EstaNulo(vaDado, vnEhNulo) = 0) { ... }
@ ✅ @
TamanhoAlfa(vaTexto, vnTam);
EstaNulo(vaDado, vnEhNulo);   @ executa @
Se (vnEhNulo = 0) { ... }     @ compara a variável @
```

Para descobrir qual parâmetro é de saída, use `scripts/buscar_funcao.py <Nome>` e veja
quais aparecem como `→ SAÍDA`. (Exceções que retornam por `=`: ex. `Truncar`.)

### #3 — Declarar variável no meio do código

Declare tudo no início da regra/função; nunca dentro de `Se`/loop.

```lsp
@ ❌ @ Se (vnCond = 1) { Definir Alfa vaVar; vaVar = "x"; }
@ ✅ @ Definir Alfa vaVar;  ...  Se (vnCond = 1) { vaVar = "x"; }
```

### #4 — Concatenar tipos não-Alfa

**Só `Alfa` concatena.** Converta `Numero`/`Data` para `Alfa` antes do `+`.

```lsp
@ ❌ @ vaMsg = "Idade: " + vnIdade;
@ ✅ @
Definir Alfa vaIdadeStr;
IntParaAlfa(vnIdade, vaIdadeStr);
vaMsg = "Idade: " + vaIdadeStr;
```

### #5 — Atribuir tipo incompatível

```lsp
@ ❌ @ Definir Numero vnValor; vnValor = "123";
@ ✅ @
Definir Alfa vaTexto;
vaTexto = "123";
AlfaParaInt(vaTexto, vnValor);
```

### #6 — Loop infinito (condição de parada nunca muda)

```lsp
@ ❌ @ vnContador = 1; Enquanto (vnContador > 0) { ... }   @ nunca atualiza @
@ ✅ @
vnContador = 1;
Enquanto (vnContador <= 10) {
  @ ... @
  vnContador++;
}
```

### #7 — Parâmetro de saída (`p...`) direto em `SQL_Retornar*`

As funções `SQL_Retornar*` **não** preenchem variáveis que são parâmetro de função
(prefixo `p`). Use variável local e copie para o parâmetro depois.

```lsp
@ ❌ @
Funcao minhaFuncao(Numero pCodigo, Numero End pResultado); {
  SQL_RetornarInteiro(xCursor, "CODIGO", pCodigo);
}
@ ✅ @
Funcao minhaFuncao(Numero pCodigo, Numero End pResultado); {
  Definir Numero vnCodigoTemp;
  SQL_RetornarInteiro(xCursor, "CODIGO", vnCodigoTemp);
  pCodigo = vnCodigoTemp;
}
```

> Nota: `SQL_*` e `Http*` agora constam no `functions.json` (categorias `sql`/`http`);
> confirme a assinatura com `python3 scripts/buscar_funcao.py <Nome>`.
