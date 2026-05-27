# ImportacaoNFEletronica

## Assinatura

```lspt
Funcao ImportacaoNFEletronica();
```

## Código
752

## Descrição

A função ImportacaoNFEletronica tem como objetivo verificar a autorização do cliente para o uso da funcionalidade de Importação de Nota Fiscal Eletrônica (NF-e) no ERP. Essa função realiza uma checagem para identificar a existência de algum dos seguintes processos na proprietária do ERP: IENR, EEMB, EMDS, EMDC ou JLRE. Caso algum desses processos exista, o sistema considera que o cliente está autorizado a utilizar a funcionalidade de Importação de NF-e. Caso, no entanto, nenhum desses processos exista na proprietária, o sistema exibirá a mensagem: "Cliente não autorizado à utilizar Importação de NF-e." <!-- source: https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/imprimenotasfiscaissaida.htm -->

## Parâmetros

_Sem parâmetros_

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ImportacaoNFEletronica();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
