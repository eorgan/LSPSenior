# FtpModoConexao

## Assinatura

```lspt
Funcao FtpModoConexao(Alfa end Ftp, Numero Modo);
```

## Código
N/A

## Descrição

Define se a conexão ao servidor FTP é feita no modo passivo ou ativo. O modo passivo (0) é o padrão e o recomendado: a conexão de dados parte do cliente, o que a maioria dos servidores aceita e os firewalls não bloqueiam. No modo ativo (1) o servidor abre a conexão em direção ao cliente, o que costuma ser barrado por firewall. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa end`) - Saída: Recebe a conexão e retorna com o modo de conexão informado
- **Modo** (`Numero`) - Entrada: 0 = passivo (padrão, cliente->servidor); 1 = ativo (servidor->cliente)

## Exemplo de Uso

```lspt
Definir Alfa vaFtp;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
FtpModoConexao(vaFtp, 1);   @ modo ativo @
FtpModoConexao(vaFtp, 0);   @ volta ao modo passivo (padrao) @
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftpmodoconexao.htm
