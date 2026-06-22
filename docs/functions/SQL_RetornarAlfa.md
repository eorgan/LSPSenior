# SQL_RetornarAlfa

## Assinatura

```lspt
Funcao SQL_RetornarAlfa(Alfa Cursor, Alfa Campo, Alfa end Valor);
```

## Código
N/A

## Descrição

Lê o valor de um campo do tipo texto (Alfa) no registro corrente do cursor. O valor é devolvido no parâmetro de saída. Nunca passe variáveis de parâmetro (prefixo 'p') no destino — use variável local.

## Parâmetros

- **Cursor** (`Alfa`) - Entrada: Identificador do cursor aberto.
- **Campo** (`Alfa`) - Entrada: Nome (alias) do campo no SELECT.
- **Valor** (`Alfa end`) - Saída: Variável Alfa que recebe o valor lido (saída).

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SQL_RetornarAlfa();
```

## Fonte

Documentação oficial Senior — https://documentacao.senior.com.br

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
