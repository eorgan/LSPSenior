# FtpApagarDiretorio

## Assinatura

```lspt
Funcao FtpApagarDiretorio(Alfa Ftp, Alfa DiretorioFtp, Alfa Nome);
```

## Código
N/A

## Descrição

Permite apagar um diretório do servidor FTP, desde que ele NÃO contenha arquivos nem subdiretórios. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa`) - Entrada: A conexão FTP que deve ser utilizada
- **DiretorioFtp** (`Alfa`) - Entrada: Diretório pai, onde está o diretório a apagar. Por exemplo, /arquivos
- **Nome** (`Alfa`) - Entrada: Nome do diretório a ser apagado. Por exemplo, documentos

## Exemplo de Uso

```lspt
Definir Alfa vaFtp;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
FtpApagarDiretorio(vaFtp, "/arquivos", "documentos");
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftpapagardiretorio.htm
