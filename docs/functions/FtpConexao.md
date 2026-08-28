# FtpConexao

## Assinatura

```lspt
Funcao FtpConexao(Alfa end Ftp, Alfa Host, Numero Porta, Alfa Usuario, Alfa Senha);
```

## Código
N/A

## Descrição

Configura a conexão com o servidor FTP para ser utilizada nas demais funções. NÃO suporta FTPS/FTPES (TLS implícito ou explícito) — para SFTP (FTP sobre SSH) chame FtpSetaSFTP logo depois. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa end`) - Saída: Retorna a conexão FTP para ser utilizada nas demais funções Ftp*
- **Host** (`Alfa`) - Entrada: IP ou domínio do servidor FTP. Somente o host: NÃO aceita esquema de URL (ftp://, ftpes://, sftp://)
- **Porta** (`Numero`) - Entrada: Porta TCP/IP do servidor. Normalmente 21 (FTP) ou 22 (SFTP)
- **Usuario** (`Alfa`) - Entrada: Usuário para autenticação no servidor FTP
- **Senha** (`Alfa`) - Entrada: Senha do usuário. Deve ficar VAZIA ("") quando a autenticação for por chave SSH (FtpSSH)

## Retorno

- Numero (por '='): 0 indica falha na conexão; use FtpUltimoErro para o texto do erro.

## Exemplo de Uso

```lspt
Definir Alfa   vaFtp;
Definir Numero vnRet;
Definir Alfa   vaErro;

vnRet = FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
Se (vnRet = 0)
   {
      FtpUltimoErro(vaErro);
      Mensagem(Retorna, vaErro);
   }
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftpconexao.htm
