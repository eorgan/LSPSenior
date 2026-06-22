# ExcluirArquivoTemporario

## Assinatura

```lspt
Funcao ExcluirArquivoTemporario(xArquivoTemporario);
```

## Código
N/A

## Descrição

Exclui um arquivo temporário criado anteriormente.

## Parâmetros

- **xArquivoTemporario** - Entrada: Nome completo do arquivo temporário criado com a função **CriarArquivoTemporario**

## Exemplo de Uso

```lspt
Definir Alfa xPrefixo;
Definir Alfa xArquivoTemporario;
xPrefixo = "xyz";
CriarArquivoTemporario(xPrefixo, xArquivoTemporario);
ExcluirArquivoTemporario(xArquivoTemporario);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/excluirarquivotemporario.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
