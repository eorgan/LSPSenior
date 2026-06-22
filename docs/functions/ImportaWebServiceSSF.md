# ImportaWebServiceSSF

## Assinatura

```lspt
Funcao ImportaWebServiceSSF(Alfa Caminho, Alfa Provedor, Alfa End Status);
```

## Código
N/A

## Descrição

Permite a importação de arquivos somente com a extensão .ssf (web services) via LSP.

## Parâmetros

- **Caminho** (`Alfa`) - Entrada: Caminho em que está o arquivo de web service.
- **Provedor** (`Alfa`) - Entrada: Nome do provedor. Necessário na hora de fazer a importação.
- **Status** (`Alfa End`) - Saída

## Exemplo de Uso

```lspt
Definir Alfa xStatus;
ImportaWebServiceSSF(
"C:\\MeusArquivos\\com.senior.wf.utils.ssf"
,
"interno"
, xStatus);
Se (xStatus =
"OK"
)
Inicio
xMsg =
"Importado com Exito"
;
Mensagem(Retorna, xMsg);
Fim;
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/regra-para-web-services/importawebservicessf.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
