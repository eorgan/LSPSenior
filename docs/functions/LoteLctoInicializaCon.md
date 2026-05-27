# LoteLctoInicializaCon

## Assinatura

```lspt
Funcao LoteLctoInicializaCon(Numero pCodEmp, Numero pCodFil, Numero pDatLot, Alfa pViaExe);
```

## Código
N/A

## Descrição

Esta função inicializa as variáveis utilizadas na importação de lançamentos contábeis e caso algum lançamento tenha inconsistência o processo é cancelado e nenhum lançamento é importado.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Variável numérica que recebe o código da empresa.
- **pCodFil** (`Numero`) - Entrada: Variável numérica que recebe o código da filial (filial que será gravada no lote).
- **pDatLot** (`Numero`) - Entrada: Variável numérica que recebe a data do lote.
- **pViaExe** (`Alfa`) - Entrada: Variável alfa que recebe a via de execução da função (Ex:'IMPORT' quando a função é chamada pela importação).

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LoteLctoInicializaCon();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/lotelctoinicializacon.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
