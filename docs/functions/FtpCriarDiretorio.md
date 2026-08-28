# FtpCriarDiretorio

## Assinatura

```lspt
Funcao FtpCriarDiretorio(Alfa Ftp, Alfa DiretorioFtp, Alfa Nome);
```

## Código
N/A

## Descrição

Permite criar um novo diretório no servidor FTP. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa`) - Entrada: A conexão FTP que deve ser utilizada
- **DiretorioFtp** (`Alfa`) - Entrada: Diretório pai, onde o novo diretório será criado. Por exemplo, /arquivos
- **Nome** (`Alfa`) - Entrada: Nome do novo diretório no FTP. Por exemplo, documentos

## Exemplo de Uso

```lspt
Definir Alfa vaFtp;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
FtpCriarDiretorio(vaFtp, "/arquivos", "documentos");
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftpcriardiretorio.htm
