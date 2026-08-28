# FtpSSH

## Assinatura

```lspt
Funcao FtpSSH(Alfa Ftp, Alfa DiretorioSSH, Alfa SenhaSSH);
```

## Código
N/A

## Descrição

Autentica em servidor SFTP por chave pública/privada SSH. Ordem obrigatória: FtpConexao -> FtpSetaSFTP -> FtpSSH. A senha do FtpConexao deve ficar VAZIA, pois não haverá autenticação por usuário/senha. O formato .ppk (PuTTY Private Key) NÃO é aceito: converta a chave para um padrão compatível, como OpenSSH. Disponível a partir da versão 5.10.4 (ERP) / 6.10.4.

## Parâmetros

- **Ftp** (`Alfa`) - Entrada: Conexão SFTP (obrigatoriamente já marcada com FtpSetaSFTP)
- **DiretorioSSH** (`Alfa`) - Entrada: Localização na máquina onde se encontra a chave SSH privada correspondente
- **SenhaSSH** (`Alfa`) - Entrada: Senha (passphrase) da chave SSH privada; vazio se a chave não tiver senha

## Exemplo de Uso

```lspt
Definir Alfa vaFtp;

FtpConexao(vaFtp, "localhost", 22, "ftp", "");   @ senha VAZIA: autentica por chave @
FtpSetaSFTP(vaFtp, 1);
FtpSSH(vaFtp, "C:/keys/key", "");                @ chave privada em formato OpenSSH @
FtpCriarDiretorio(vaFtp, "", "documentos");
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftpssh.htm
