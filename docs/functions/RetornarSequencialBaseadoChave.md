# RetornarSequencialBaseadoChave

## Assinatura

```lspt
Funcao RetornarSequencialBaseadoChave(Alfa pTabelaBase, Alfa pChave, Numero end aSequencial);
```

## Código
953

## Descrição

Será criado um sequencial na base de dados conforme a tabela e chave de negócio informadas nos parâmetros. Ainda que uma tabela seja solicitada nos parâmetros, isso não significa que haverá uma ligação entre o sequencial e a tabela. A chamada da função de programador vai ignorar eventuais transações de banco em aberto no momento da chamada. <!-- source: https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/retornarserienotafiscal.htm -->

## Parâmetros

- **pTabelaBase** (`Alfa`) - Entrada
- **pChave** (`Alfa`) - Entrada
- **aSequencial** (`Numero end`) - Saída

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
RetornarSequencialBaseadoChave();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/retornar-sequencial-baseado-chave.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
