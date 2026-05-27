# CarregarCSVparaPlataforma

## Assinatura

```lspt
Funcao CarregarCSVparaPlataforma(Alfa pFileNamePlataform, Alfa pTableNamePlataform, Alfa pAuthorization, Alfa end Retorno);
```

## Código
919

## Descrição

Função que carrega arquivos CSV para a plataforma. Para uso específico na integração entre ERP XT e BPM/BOT.

## Parâmetros

- **pFileNamePlataform** (`Alfa`) - Entrada: Variável que indica o caminho e o nome do arquivo CSV que será carregado.
- **pTableNamePlataform** (`Alfa`) - Entrada: Variável que indica o dataTable do BPM/BOT Factory que receberá as informações do arquivo CSV em questão.
- **pAuthorization** (`Alfa`) - Entrada: Variável cujo conteúdo é o token para conexão com a Senior X (montado na regra através da função [MontarAutenticacaoSeniorXd](montarautenticacaoseniorxd.md))
- **Retorno** (`Alfa end`) - Saída

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CarregarCSVparaPlataforma();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
