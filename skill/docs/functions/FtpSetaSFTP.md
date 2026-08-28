# FtpSetaSFTP

## Assinatura

```lspt
Funcao FtpSetaSFTP(Alfa Ftp, Numero Valor);
```

## Código
N/A

## Descrição

Permite o acesso a servidores SFTP (FTP sobre SSH) através da LSP. Deve ser chamada DEPOIS do FtpConexao e não deve ser usada com servidores FTP convencionais. LIMITAÇÃO: as conexões SFTP só são possíveis sem criptografia adicional — não é permitido combinar com TLS/SSL implícito ou explícito (ou seja, a LSP não faz FTPS/FTPES). No ERP exige versão 5.8.10.105 ou superior.

## Parâmetros

- **Ftp** (`Alfa`) - Entrada: Conexão FTP que deve ser utilizada
- **Valor** (`Numero`) - Entrada: 1 (true) seleciona servidor SFTP; 0 (false) seleciona servidor FTP

## Exemplo de Uso

```lspt
Definir Alfa   vaFtp;
Definir Numero vnRet;

FtpConexao(vaFtp, "s_ftp.servidor.com.br", 22, "usuario", "senha");
FtpSetaSFTP(vaFtp, 1);
vnRet = FtpDownload(vaFtp, "/", "upload.txt", "C:\\temp\\upload.txt");
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftpsetasftp.htm
