# FtpRenomear

## Assinatura

```lspt
Funcao FtpRenomear(Alfa Ftp, Alfa DiretorioFtp, Alfa Nome, Alfa NovoNome);
```

## Código
N/A

## Descrição

Permite renomear um diretório ou um arquivo do servidor FTP. Informando um caminho no NovoNome, a função também MOVE o arquivo entre diretórios. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa`) - Entrada: A conexão FTP que deve ser utilizada
- **DiretorioFtp** (`Alfa`) - Entrada: Diretório onde está o arquivo/diretório no FTP. Por exemplo, /arquivos
- **Nome** (`Alfa`) - Entrada: Nome atual do diretório ou arquivo. Por exemplo, documento.doc
- **NovoNome** (`Alfa`) - Entrada: Novo nome do diretório ou arquivo. Por exemplo, documento2.doc

## Exemplo de Uso

```lspt
Definir Alfa vaFtp;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
FtpRenomear(vaFtp, "/arquivos/diretorio", "documento.doc", "documento2.doc");
FtpRenomear(vaFtp, "/processar", "teste.txt", "/processados/teste.txt");   @ move @
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftprenomear.htm
