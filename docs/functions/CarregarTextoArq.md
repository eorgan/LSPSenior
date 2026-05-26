# CarregarTextoArq

## Assinatura

```lspt
Funcao CarregarTextoArq(Alfa aArquivo, Alfa End aTexto);
```

## Código
616

## Descrição

Esta função carrega para uma variável alfanumérica o conteúdo de um arquivo texto.

## Parâmetros

- **aArquivo** (`Alfa`) - Entrada: Variável com o caminho do arquivo a ser lido
- **aTexto** (`Alfa End`) - Saída: Variável que retorna o texto lido do arquivo

## Exemplo de Uso

```lspt
Definir Alfa vaTexto;
CarregarTextoArq("C:\\Senior\\Sapiens\\Arquivo.txt", vaTexto);
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
