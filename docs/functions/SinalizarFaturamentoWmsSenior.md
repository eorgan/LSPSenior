# SinalizarFaturamentoWmsSenior

## Assinatura

```lspt
Funcao SinalizarFaturamentoWmsSenior(Numero pCodEmp, Numero pCodFil, Numero pNumNfv, Alfa pCodSnf, Alfa pTipoDocumento,  Alfa end pChaveGerada, Alfa end pStatus);
```

## Código
961

## Descrição

Gera o sinal de integração de uma nota fiscal autorizada para o WMS (Alcis e Silt/Senior).

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Empresa do documento.
- **pCodFil** (`Numero`) - Entrada: Filial do documento.
- **pNumNfv** (`Numero`) - Entrada: Número da nota fiscal.
- **pCodSnf** (`Alfa`) - Entrada: Código da série da nota fiscal.
- **pTipoDocumento** (`Alfa`) - Entrada: Caso a mesma tenha sido originária de uma pré-fatura/nota enviar F, para nota fiscal avulsa fiscal enviar = N.
- **pChaveGerada** (`Alfa end`) - Saída: Chave da ordem de separação gerada - Retorno.
- **pStatus** (`Alfa end`) - Saída

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SinalizarFaturamentoWmsSenior();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
