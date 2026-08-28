# FtpUltimoErro

## Assinatura

```lspt
Funcao FtpUltimoErro(Alfa end Erro);
```

## Código
N/A

## Descrição

Retorna a mensagem de erro da última operação executada no FTP. NÃO recebe a conexão como parâmetro — é o último erro global, então leia imediatamente após detectar a falha (retorno 0), antes de qualquer outra chamada Ftp*. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Erro** (`Alfa end`) - Saída: Recebe o texto do erro da última função Ftp* executada, caso ela tenha falhado

## Retorno

- Erro: texto da mensagem de erro da última operação FTP que falhou.

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

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftpultimoerro.htm
