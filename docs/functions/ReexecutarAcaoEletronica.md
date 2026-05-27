# ReexecutarAcaoEletronica

## Assinatura

```lspt
Funcao ReexecutarAcaoEletronica(Numero pIdentificadorUnico, Numero pCodEmp, Numero pCodFil, Alfa pCodSnf, Alfa pAbrangenciaNfe, Alfa pAcaoNfe, Alfa pSimularEmissao, Alfa pRotinaOrigem, Alfa End pResultado);
```

## Código
970

## Descrição

Esta função recebe a chave de uma nota fiscal de venda e chama a emissão da ação eletrônica salva no banco de dados.

## Parâmetros

- **pIdentificadorUnico** (`Numero`) - Entrada
- **pCodEmp** (`Numero`) - Entrada
- **pCodFil** (`Numero`) - Entrada
- **pCodSnf** (`Alfa`) - Entrada
- **pAbrangenciaNfe** (`Alfa`) - Entrada
- **pAcaoNfe** (`Alfa`) - Entrada
- **pSimularEmissao** (`Alfa`) - Entrada
- **pRotinaOrigem** (`Alfa`) - Entrada
- **pResultado** (`Alfa End`) - Saída

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ReexecutarAcaoEletronica();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/reexecutaracaoeletronica.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
