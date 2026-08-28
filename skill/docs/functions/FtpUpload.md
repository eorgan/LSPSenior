# FtpUpload

## Assinatura

```lspt
Funcao FtpUpload(Alfa Ftp, Alfa ArquivoLocal, Alfa DiretorioFtp, Alfa ArquivoFtp);
```

## Código
N/A

## Descrição

Copia um arquivo local para um diretório do servidor FTP. ATENÇÃO à ordem dos parâmetros: no Upload o arquivo local vem ANTES do diretório remoto; no FtpDownload é o inverso. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa`) - Entrada: A conexão FTP que deve ser utilizada (obtida em FtpConexao)
- **ArquivoLocal** (`Alfa`) - Entrada: Caminho completo do arquivo local. Por exemplo, C:\temp\arquivo.doc
- **DiretorioFtp** (`Alfa`) - Entrada: Diretório de destino no FTP. Por exemplo, /arquivos
- **ArquivoFtp** (`Alfa`) - Entrada: Nome do arquivo no FTP. Por exemplo, documento.doc

## Retorno

- Numero (por '='): 0 = o envio FALHOU; diferente de 0 = sucesso. Em falha, use FtpUltimoErro.

## Exemplo de Uso

```lspt
Definir Alfa   vaFtp;
Definir Numero vnRet;
Definir Alfa   vaErro;
Definir Alfa   vaMsg;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
vnRet = FtpUpload(vaFtp, "C:\\temp\\documento.doc", "/arquivos", "documento.doc");

Se (vnRet = 0)
   {
      FtpUltimoErro(vaErro);
      vaMsg = "Nao foi possivel enviar o arquivo. Erro: " + vaErro;
      Mensagem(Retorna, vaMsg);
   }
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftpupload.htm
