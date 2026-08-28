# FtpModoTransferencia

## Assinatura

```lspt
Funcao FtpModoTransferencia(Alfa end Ftp, Numero Modo);
```

## Código
N/A

## Descrição

Define o modo de transferência dos dados entre servidor e cliente; pode ser alterado a qualquer momento. Modo 0 (binário, padrão): os caracteres trafegam sem nenhuma conversão — use para imagens, vídeos e arquivos compactados. Modo 1 (texto): os caracteres podem ser traduzidos pelo cliente — indicado para arquivos texto quando a codificação difere entre as plataformas. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa end`) - Saída: Recebe a conexão e retorna com o modo de transferência informado
- **Modo** (`Numero`) - Entrada: 0 = binário (padrão); 1 = texto

## Exemplo de Uso

```lspt
Definir Alfa vaFtp;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
FtpModoTransferencia(vaFtp, 1);   @ transferencia em modo texto @
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftpmodotransferencia.htm
