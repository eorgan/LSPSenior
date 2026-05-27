# AgluCtbValorComp

## Assinatura

```lspt
Funcao AgluCtbValorComp(Numero pCodAgl, Numero pDatRef, Numero pPosComp, Numero End pTemMais, Numero End Retorno);
```

## Código
N/A

## Descrição

Buscar o valor do aglutinador na data/competência referente.

## Parâmetros

- **pCodAgl** (`Numero`) - Entrada: Variável que recebe o código do aglutinador.
- **pDatRef** (`Numero`) - Entrada: Variável que recebe a data de referência(opcional).
- **pPosComp** (`Numero`) - Entrada: Variável que indica a posição na estrutura(opcional).
- **pTemMais** (`Numero End`) - Saída: Variável que retorna a existência de mais registros na estrutura (indica se está no último registro). Quando for "0", indica que existem mais registros a seguir. Quando for "1"(um), indica que está no último registro da estrutura.
- **Retorno** (`Numero End`) - Saída: Variável que indica o valor do registro posicionado.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AgluCtbValorComp();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/agluctbvalorcomp.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
