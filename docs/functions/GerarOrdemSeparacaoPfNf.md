# GerarOrdemSeparacaoPfNf

## Assinatura

```lspt
Funcao GerarOrdemSeparacaoPfNf(Numero pCodEmp, Numero pCodFil, Numero pNumDoc, numero pSeqDoc, Alfa pSerieDoc, Alfa pTipoDocumento, Alfa end pChaveGerada, Alfa end pStatus);
```

## Código
969

## Descrição

Gera o sinal de geração de ordem de separação de uma pré-fatura fechada ou nota fiscal para o WMS Senior/ALCIS.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Empresa do documento
- **pCodFil** (`Numero`) - Entrada: Filial do documento
- **pNumDoc** (`Numero`) - Entrada: Número da nota fiscal ou número da análise de embarque
- **pSeqDoc** (`numero`) - Entrada: Sequência da pré-fatura na carga
- **pSerieDoc** (`Alfa`) - Entrada: Série da nota fiscal
- **pTipoDocumento** (`Alfa`) - Entrada: Numerador indicando **F**: Pré-fatura ou **N**: Nota fiscal
- **pChaveGerada** (`Alfa end`) - Saída: Chave da ordem de separação gerada - Retorno.
- **pStatus** (`Alfa end`) - Saída: Resultado OK ou ERRO - Retorno

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
GerarOrdemSeparacaoPfNf();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
