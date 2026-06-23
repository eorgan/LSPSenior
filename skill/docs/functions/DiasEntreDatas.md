# DiasEntreDatas

## Assinatura

```lspt
Funcao DiasEntreDatas(Alfa pDataIni, Alfa pDataFim, Numero pUsarDataAtual, Alfa End pResultado);
```

## Código
971

## Descrição

Esta função retorna uma string com o comando utilizado para calcular uma quantidade de dias entre datas.

## Parâmetros

- **pDataIni** (`Alfa`) - Entrada: Data inicial usada no comando SQL
- **pDataFim** (`Alfa`) - Entrada: Data final usada no comando SQL. O valor pode ser enviado vazio, desde que o parâmetro pUsarDataAtual possua valor "1 - Sim". Assim, o sistema utilizará como data final a data atual.
- **pUsarDataAtual** (`Numero`) - Entrada: Indicativo se deve usar a data atual do sistema no momento de montar o comando SQL. Valores possíveis: "0 - Não" e "1 - Sim". Quando o valor for "1 - Sim", o sistema desconsidera o que foi passado no parâmetro pDataFim e usa como data final a data atual do sistema.
- **pResultado** (`Alfa End`) - Saída: Variável onde será retornado o comando SQL, independentemente do banco de dados.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
DiasEntreDatas();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/diasentredatas.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
