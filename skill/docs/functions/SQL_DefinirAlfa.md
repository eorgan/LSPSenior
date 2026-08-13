# SQL_DefinirAlfa

## Assinatura

```lspt
Funcao SQL_DefinirAlfa(Alfa Cursor, Alfa Parametro, Alfa Valor);
```

## Código
N/A

## Descrição

Atribui um valor Alfa a um parâmetro bind (`:nome`) do comando SQL do cursor.
Deve ser chamada **depois** de `SQL_DefinirComando` e **antes** de `SQL_AbrirCursor`.

Usar bind é preferível a concatenar o valor no texto do SELECT: evita erro de aspas/formato
e elimina o risco de injeção quando o valor vem de fora (parâmetro de WS, campo de tela).

## Parâmetros

- **Cursor** (`Alfa`) - Entrada: Identificador do cursor.
- **Parametro** (`Alfa`) - Entrada: Nome do parâmetro bind como aparece no comando, **sem** os
  dois-pontos (`:xChave` no SQL → `"xChave"` aqui).
- **Valor** (`Alfa`) - Entrada: Valor texto atribuído ao parâmetro.

## Exemplo de Uso

```lspt
Definir Alfa vaCursor;
Definir Alfa vaValor;

SQL_Criar(vaCursor);
SQL_UsarSqlSenior2(vaCursor, 0);
SQL_UsarAbrangencia(vaCursor, 0);
SQL_DefinirComando(vaCursor, "SELECT NOMCLI FROM E085CLI WHERE CHAVE = :xChave");
SQL_DefinirAlfa(vaCursor, "xChave", vaValor);
SQL_AbrirCursor(vaCursor);
```

## Notas

- **Não existe `SQL_DefinirNumero`** — escolha entre `SQL_DefinirInteiro` e `SQL_DefinirFlutuante`.
- `ExecutarComandoSQL` **não** aceita bind (não há cursor); ali o valor precisa ir concatenado,
  já validado/convertido.

## Veja Também

- `SQL_DefinirComando`, `SQL_AbrirCursor`
- `SQL_DefinirAlfa`, `SQL_DefinirInteiro`, `SQL_DefinirFlutuante`, `SQL_DefinirData`

## Fonte

Ausente da documentação oficial e do `functions.json` original; documentado a partir do uso
real em regras `.lspt` de produção (mais de 1500 chamadas). Escrito manualmente — **sem** a nota
de auto-geração, para não ser sobrescrito por `generate-functions.js`.
