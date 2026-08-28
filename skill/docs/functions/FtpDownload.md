# FtpDownload

## Assinatura

```lspt
Funcao FtpDownload(Alfa Ftp, Alfa DiretorioFtp, Alfa ArquivoFtp, Alfa ArquivoLocal);
```

## Código
N/A

## Descrição

Copia um arquivo do servidor FTP para um diretório local. A ordem dos parâmetros é INVERSA à do FtpUpload (aqui o remoto vem primeiro). Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa`) - Entrada: A conexão FTP que deve ser utilizada
- **DiretorioFtp** (`Alfa`) - Entrada: Diretório onde está o arquivo no FTP. Por exemplo, /arquivos
- **ArquivoFtp** (`Alfa`) - Entrada: Nome do arquivo no FTP. Por exemplo, documento.doc
- **ArquivoLocal** (`Alfa`) - Entrada: Caminho completo do arquivo local de destino. Por exemplo, C:\temp\arquivo.doc

## Retorno

- Numero (por '='): 0 = a cópia FALHOU; diferente de 0 = sucesso. Em falha, use FtpUltimoErro.

## Exemplo de Uso

```lspt
Definir Alfa   vaFtp;
Definir Numero vnRet;
Definir Alfa   vaErro;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
vnRet = FtpDownload(vaFtp, "/arquivos", "documento.doc", "C:\\temp\\documento.doc");

Se (vnRet = 0)
   {
      FtpUltimoErro(vaErro);
      Mensagem(Retorna, vaErro);
   }
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftpdownload.htm
