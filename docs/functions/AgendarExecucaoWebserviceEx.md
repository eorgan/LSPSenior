# AgendarExecucaoWebserviceEx

## Assinatura

```lspt
Funcao AgendarExecucaoWebserviceEx(Numero pCodEmp, Alfa pAbrFil, Alfa pWebService, Alfa pPorta, Alfa pJSON, Numero End pIdePle);
```

## Código
966

## Descrição

Essa função cria um novo plano de execução retornando o identificador único gerado

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Código da empresa que será gravado na E000PLE
- **pAbrFil** (`Alfa`) - Entrada: Abrangência de filiais que será gravado na E000PLE
- **pWebService** (`Alfa`) - Entrada: Caminho do web services que será executado. Ex: [com.senior.g5.co.mct.ctb.integracao](../webservices/com_senior_g5_co_mct_ctb_integracao.htm)
- **pPorta** (`Alfa`) - Entrada: Porta do web services que será executado. Ex: [Integrar_8](../webservices/com_senior_g5_co_mct_ctb_integracao.htm#integrar-2)
- **pJSON** (`Alfa`) - Entrada: JSON contendo o nome dos parâmetros e seus respectivos valores
- **pIdePle** (`Numero End`) - Saída: Código identificador da requisição gerada (E000PLE.IDEUNI)

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AgendarExecucaoWebserviceEx();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/agendarexecucaowebserviceex.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
