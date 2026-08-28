# FtpApagarArquivo

## Assinatura

```lspt
Funcao FtpApagarArquivo(Alfa Ftp, Alfa DiretorioFtp, Alfa Nome);
```

## Código
N/A

## Descrição

Permite apagar um arquivo do servidor FTP. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa`) - Entrada: A conexão FTP que deve ser utilizada
- **DiretorioFtp** (`Alfa`) - Entrada: Diretório onde está o arquivo no FTP. Por exemplo, /arquivos
- **Nome** (`Alfa`) - Entrada: Nome do arquivo no FTP. Por exemplo, documento.doc

## Exemplo de Uso

```lspt
Definir Alfa vaFtp;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
FtpApagarArquivo(vaFtp, "/arquivos", "documento.zip");
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftpapagararquivo.htm
