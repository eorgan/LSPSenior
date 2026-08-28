# FtpModoErro

## Assinatura

```lspt
Funcao FtpModoErro(Alfa end Ftp, Numero Modo);
```

## Código
N/A

## Descrição

Configura como o erro de uma operação FTP deve ser retornado. Modo 0 (silencioso, padrão): a regra NÃO é interrompida e as funções devolvem 0 em caso de falha — é o modo que combina com o tratamento por 'Se (vnRet = 0)'. Modo 1: exibe mensagem ao usuário e continua (em ambiente não interativo comporta-se como o modo 0). Modo 2: gera exceção com a mensagem do erro e INTERROMPE a execução da regra. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa end`) - Saída: Recebe a conexão e retorna configurada com o modo de erro escolhido
- **Modo** (`Numero`) - Entrada: 0 = silencioso (padrão); 1 = mensagem; 2 = exceção

## Exemplo de Uso

```lspt
Definir Alfa vaFtp;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
FtpModoErro(vaFtp, 1);   @ passa a exibir mensagem ao usuario em caso de erro @
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftpmodoerro.htm
