# EstornaComponentes

## Assinatura

```lspt
Funcao EstornaComponentes(Alfa aCodOri, Numero aNumOrp, Numero aCodEtg, Alfa aCodPro, Alfa aCodDer, Alfa aCodCmp, Alfa aDerCmp, Numero aQtdEst, Numero aDatFim, Alfa aCodTns, Alfa End Retorno);
```

## Código
803

## Descrição

Estorna os componentes já baixados da O.P. Nota - Se o sistema estiver [parametrizado](../menu_controladoria/processo-bloco-k.htm#ParametrizacoesIniciais) para a geração do Bloco K, algumas consistências e bloqueios podem ser realizadas nessa função, garantindo a correta geração de informações do arquivo, conforme guia prático. Confira estas consistências na tela Parâmetros e consistências da empresa [(F070ECN)](../menu_cadastros/f070ecn.htm) - Esta função utiliza o identificador de regra CHA-900RETRC01, no qual pode ser definido se irá ou não retornar a quantidade estornada para a reserva do componente

## Parâmetros

- **aCodOri** (`Alfa`) - Entrada: Código da origem da O.P.
- **aNumOrp** (`Numero`) - Entrada: Número da O.P.
- **aCodEtg** (`Numero`) - Entrada: Estágio da O.P.
- **aCodPro** (`Alfa`) - Entrada: Código do produto da O.P..
- **aCodDer** (`Alfa`) - Entrada: Código da derivação do produto.
- **aCodCmp** (`Alfa`) - Entrada: Código do componente que deseja estornar. Informando aCodCmp, o estorno será apenas daquele componente, com a quantidade informada (aQtdEst) sendo a estornada.
- **aDerCmp** (`Alfa`) - Entrada: Derivação do componente a ser estornado.
- **aQtdEst** (`Numero`) - Entrada: Quantidade que deseja estornar.
- **aDatFim** (`Numero`) - Entrada: Data do movimento. Quando não informada data, será utilizada a data atual. Esta variável deve ser passada em formato Numero (como no banco), caso não saiba, pode usar a função [ConvDataInt](convdataint.md) para transformar uma data alfa no formato aceito.
- **aCodTns** (`Alfa`) - Entrada: Código da transação. Quando não informada transação, será utilizada a transação padrão de estorno definida na filial.
- **Retorno** (`Alfa End`) - Saída

## Valores de Retorno

- status da execução da função. Retorna "OK" caso tenha sido processado
- com sucesso.

## Exemplo de Uso

```lspt
Definir Alfa Retorno;
EstornaComponentes(
"PEC"
, 8, 110,
"GABINETE"
,
"MS"
,
""
,
""
, 5, 0,
"90203"
,
Retorno);
Se (Retorno <>
"OK")
  GeraLog(Retorno);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/estornacomponenteop.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
