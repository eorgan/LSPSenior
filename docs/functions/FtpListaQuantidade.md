# FtpListaQuantidade

## Assinatura

```lspt
Funcao FtpListaQuantidade(Alfa Ftp, Alfa Lista, Numero end Quantidade);
```

## Código
N/A

## Descrição

Retorna a quantidade de itens da lista obtida com FtpListar. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa`) - Entrada: A conexão FTP que deve ser utilizada
- **Lista** (`Alfa`) - Entrada: A lista a ser utilizada (obtida em FtpListar)
- **Quantidade** (`Numero end`) - Saída: Retorna a quantidade de itens da lista

## Retorno

- Quantidade: total de itens presentes na lista.

## Exemplo de Uso

```lspt
Definir Alfa   vaFtp;
Definir Alfa   vaLista;
Definir Numero vnQtde;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
FtpListar(vaFtp, "/arquivos", "*.zip", vaLista);
FtpListaQuantidade(vaFtp, vaLista, vnQtde);
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftplistaquantidade.htm
