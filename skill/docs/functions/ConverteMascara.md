# ConverteMascara

## Assinatura

```lspt
Funcao ConverteMascara (Tipo_dado,Valor_Origem,Alfa_Origem/Destino,Mascara);
```

## Código
N/A

## Descrição

Esta função converte um valor de entrada (numérico, data, hora ou cadeia de caracteres) para o tipo de dado cadeia de caracteres.

> ⚠️ **`Valor_Origem` é SEMPRE `Numero` em tempo de compilação**, independentemente de `Tipo_dado`.
> O compilador tipa o 2º parâmetro (`VALORNUM`) como número; passar uma variável/campo `Alfa` ali
> gera erro de compilação (`valor "X" (alfa) para o parâmetro "VALORNUM" (número) são incompatíveis`).
> **Esta função NÃO mascara uma string que já é texto** — ela formata um NÚMERO/DATA/HORA como string.
> Para aplicar máscara a um valor que já é `Alfa` (ex.: CNPJ alfanumérico com letras), NÃO use esta
> função: fatie e reconcatene com `CopiarAlfa`/`InserirAlfa` (ver seção "Mascarar string" abaixo).

## Parâmetros

- **Tipo_dado** - Entrada: Código que determina o tipo do valor de origem
- **Valor_Origem** - Entrada: Campo/Variável/Valor a ser convertido
- **Alfa_Origem/Destino** - **Saída** para os tipos 1-4 (apesar do nome/doc oficial dizer "entrada"):
  variável `Alfa` que recebe o resultado da conversão — não atribua nada a ela antes. **Exceção: tipo
  5**, onde ela é entrada **e** saída (ver tabela abaixo).
- **Mascara** - Entrada: Especifica o formato de apresentação do resultado

### Valores de `Tipo_dado`

Confirmado contra a documentação oficial e centenas de usos reais no projeto (`Regra013.lspt`,
`BrasDiesel/Regras.lspt`, `dados/Accor/...`, `dados/Scania/...`):

| Valor | Tipo | Uso típico da `Mascara` |
| --- | --- | --- |
| `1` | Número | `"999.999.999-99"` (CPF), `"99.999.999/9999-99"` (CNPJ), `"99999-999"` (CEP) |
| `2` | Dinheiro/valor | `"ZZZZZZZZZZZZ9,99"` (valor monetário/decimal, zeros à esquerda suprimidos) |
| `3` | Data | `"DD/MM/YYYY"`, `"YYMMDD"` — **o valor de origem é uma variável `Data`** |
| `4` | Hora | — |
| `5` | Alfa | Doc oficial diz `Valor_Origem = 0` e a string vai na `Alfa_Origem/Destino` — **mas na prática o compilador rejeita string em `Valor_Origem`; ver aviso.** |

`9` = dígito obrigatório · `Z`/`z` = dígito com supressão de zero à esquerda · demais caracteres da
máscara (`.`, `/`, `-`, `,`) são literais inseridos na posição.

> ⚠️ **Tipo 5 (Alfa) — não confie.** A doc oficial afirma que dá para passar `Valor_Origem = 0` e a
> string na `Alfa_Origem/Destino`, mas em teste real (versão do cliente, 2026-07-14) isso **não
> mascara uma string alfanumérica** e o compilador continua exigindo `Numero` no 2º parâmetro. Para
> valores que já são texto (ex.: CNPJ alfanumérico com letras), use a seção abaixo.

## Mascarar uma string que já é `Alfa` (CNPJ alfanumérico, etc.)

`ConverteMascara` **não serve** aqui (é número→string). Fatie e reconcatene — concatenação de `Alfa`
é permitida fora de parâmetros de função. `CopiarAlfa` **modifica a própria variável**, então copie a
origem em cada pedaço antes de fatiar:

```lspt
Definir Alfa vaCnpj;
Definir Alfa vaP1;  Definir Alfa vaP2;  Definir Alfa vaP3;
Definir Alfa vaP4;  Definir Alfa vaP5;  Definir Alfa vaMask;

vaCnpj = "12ABC34501DE35";                 @ 14 chars, sem formatação @

vaP1 = vaCnpj;  CopiarAlfa(vaP1,  1, 2);   @ "12"   @
vaP2 = vaCnpj;  CopiarAlfa(vaP2,  3, 3);   @ "ABC"  @
vaP3 = vaCnpj;  CopiarAlfa(vaP3,  6, 3);   @ "345"  @
vaP4 = vaCnpj;  CopiarAlfa(vaP4,  9, 4);   @ "01DE" @
vaP5 = vaCnpj;  CopiarAlfa(vaP5, 13, 2);   @ "35"   @

vaMask = vaP1 + "." + vaP2 + "." + vaP3 + "/" + vaP4 + "-" + vaP5;
@ vaMask = "12.ABC.345/01DE-35" @
```

Alternativa compacta com `InserirAlfa`, inserindo os separadores **da direita para a esquerda** (as
posições anteriores não se deslocam):

```lspt
vaCnpj = "12ABC34501DE35";
InserirAlfa("-", vaCnpj, 13);
InserirAlfa("/", vaCnpj,  9);
InserirAlfa(".", vaCnpj,  6);
InserirAlfa(".", vaCnpj,  3);
@ vaCnpj = "12.ABC.345/01DE-35" @
```

⚠️ Não use `DeixaNumeros` para limpar um CNPJ alfanumérico — ela apaga as letras. Use só
`LimpaEspacos` se precisar, e valide `TamanhoAlfa` se o tamanho puder variar.

## Exemplo de Uso

```lspt
Definir Alfa   vaInscricaoStr;
Definir Numero vnNumCgc;
Definir Numero vnTipoInscricao;
Definir Data   vdHoje;
Definir Alfa   vaHojeStr;
Definir Numero vnValor;
Definir Alfa   vaValorStr;

vnNumCgc = 12345678901;
vnTipoInscricao = 3; @ CPF @

Se (vnTipoInscricao = 1) { @ CNPJ @
  ConverteMascara(1, vnNumCgc, vaInscricaoStr, "99.999.999/9999-99");
} Senao Se (vnTipoInscricao = 3) { @ CPF @
  ConverteMascara(1, vnNumCgc, vaInscricaoStr, "999.999.999-99");
}
@ vaInscricaoStr será "123.456.789-01" @

vdHoje = DatSis;
ConverteMascara(3, vdHoje, vaHojeStr, "DD/MM/YYYY");   @ tipo 3 = Data @

vnValor = 1234.5;
ConverteMascara(2, vnValor, vaValorStr, "ZZZZZZZZZZZZ9,99");  @ tipo 2 = Dinheiro/valor @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/convertemascara.htm)

> Editado manualmente em 2026-07-14: tabela de `Tipo_dado`; direção de `Alfa_Origem/Destino` (saída
> nos tipos 1-4); aviso de que `Valor_Origem` é sempre `Numero` no compilador (função é número→string,
> não mascara string) e que o "tipo 5" da doc oficial não funcionou em teste real; seção "Mascarar
> string" com `CopiarAlfa`/`InserirAlfa`. Não regerar sem preservar essas correções.
