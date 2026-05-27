# ArqExiste

## Assinatura

```lspt
Funcao ArqExiste(caminhoArquivo);
```

## Código
N/A

## Descrição

Verifica se um arquivo físico existe no local especificado.

## Parâmetros

- **caminhoArquivo** - Entrada: Específica o caminho do diretório junto com o nome do arquivo e sua extensão.

## Exemplo de Uso

```lspt
xRet = ArqExiste("c:\\temp\\teste.txt");
se (xRet = 1)
{
ValStr = "Arquivo EXISTE!!!";
}
senao
{
ValStr = "Arquivo NÂO EXISTE!!!";
}
Cancel(2);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
