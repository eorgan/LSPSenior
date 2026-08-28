# FtpListar

## Assinatura

```lspt
Funcao FtpListar(Alfa Ftp, Alfa Diretorio, Alfa Filtro, Alfa end Lista);
```

## Código
N/A

## Descrição

Permite listar os arquivos e diretórios do servidor FTP. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa`) - Entrada: A conexão FTP que deve ser utilizada
- **Diretorio** (`Alfa`) - Entrada: Diretório cujos arquivos e subdiretórios serão listados. Por exemplo, /arquivos
- **Filtro** (`Alfa`) - Entrada: Filtro dos itens desejados. Por exemplo, *.zip, *doc*, log*.zip. Vazio traz tudo
- **Lista** (`Alfa end`) - Saída: Retorna a listagem do FTP para uso nas demais funções de lista

## Retorno

- Lista: identificador da listagem, consumido por FtpListaQuantidade / FtpListaItem / FtpListaItemDetalhes / FtpListaItemPermissoes.

## Exemplo de Uso

```lspt
Definir Alfa vaFtp;
Definir Alfa vaLista;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
FtpListar(vaFtp, "/arquivos", "*.zip", vaLista);
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftplistar.htm
