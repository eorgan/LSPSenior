# CriarArquivoTemporario

## Assinatura

```lspt
Funcao CriarArquivoTemporario(xPrefixo, xArquivoTemporario);
```

## Código
N/A

## Descrição

Cria um arquivo temporário de nome aleatório e único prefixado com o valor do parâmetro prefixo. O arquivo temporário será criado na pasta definida pela variável de ambiente **TMP**, se **TMP** não estiver definida, será verificada a variável de ambiente **TEMP**, caso está também não esteja disponível, o arquivo será criado no diretório atual.

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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
