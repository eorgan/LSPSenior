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

## Valores de Retorno

- aTexto: Variável alfanumérica que retorna o texto lido do arquivo.

## Exemplo de Uso

```lspt
Definir Alfa vaTexto;
CarregarTextoArq("C:\\Senior\\Sapiens\\Arquivo.txt", vaTexto);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
