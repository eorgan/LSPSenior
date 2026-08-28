# FtpProxy

## Assinatura

```lspt
Funcao FtpProxy(Alfa end Ftp, Numero TipoProxy, Alfa Host, Numero Porta, Alfa Usuario, Alfa Senha);
```

## Código
N/A

## Descrição

Configura os parâmetros de proxy para a conexão com o servidor FTP, quando o servidor está protegido por um proxy. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa end`) - Saída: Conexão estabelecida pelo FtpConexao; retorna configurada com o proxy
- **TipoProxy** (`Numero`) - Entrada: 0 = sem proxy (padrão); 1 = User; 2 = Site; 3 = Open; 4 = Integrado
- **Host** (`Alfa`) - Entrada: IP ou domínio do proxy
- **Porta** (`Numero`) - Entrada: Porta TCP/IP do proxy
- **Usuario** (`Alfa`) - Entrada: Usuário para autenticação no proxy
- **Senha** (`Alfa`) - Entrada: Senha do usuário no proxy (vazio quando opcional)

## Exemplo de Uso

```lspt
Definir Alfa vaFtp;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
FtpProxy(vaFtp, 1, "proxy.servidor.com.br", 3128, "usuarioproxy", "senhaproxy");
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftpproxy.htm
