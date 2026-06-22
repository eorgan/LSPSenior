# CriarArquivoTemporario

## Assinatura

```lspt
Funcao CriarArquivoTemporario(xPrefixo, xArquivoTemporario);
```

## Código
N/A

## Descrição

Cria um arquivo temporário com nome único.

## Parâmetros

- **xPrefixo** - Entrada: Prefixo do arquivo temporário, somente os três primeiros caracteres são válidos para o prefixo
- **xArquivoTemporario** - Entrada: Nome completo do arquivo temporário gerado com base no prefixo

## Exemplo de Uso

```lspt
Definir Alfa xPrefixo;
Definir Alfa xArquivoTemporario;
xPrefixo = "xyz";
CriarArquivoTemporario(xPrefixo, xArquivoTemporario);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/criararquivotemporario.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
