# FtpListaItemDetalhes

## Assinatura

```lspt
Funcao FtpListaItemDetalhes(Alfa Ftp, Alfa Lista, Numero Indice, Numero end Tamanho, Data end DataModificacao, Numero end HoraModificacao);
```

## Código
N/A

## Descrição

Obtém informações adicionais sobre um item da lista, como tamanho, data e hora de modificação. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa`) - Entrada: A conexão FTP que deve ser utilizada
- **Lista** (`Alfa`) - Entrada: A lista a ser utilizada (obtida em FtpListar)
- **Indice** (`Numero`) - Entrada: Posição do item na lista. O primeiro item é 1
- **Tamanho** (`Numero end`) - Saída: Retorna o tamanho do arquivo em bytes; diretórios normalmente retornam 4096
- **DataModificacao** (`Data end`) - Saída: Retorna a data de modificação do arquivo ou diretório
- **HoraModificacao** (`Numero end`) - Saída: Retorna a hora de modificação do arquivo ou diretório

## Retorno

- Tamanho (bytes), DataModificacao (Data) e HoraModificacao (Numero) do item.

## Exemplo de Uso

```lspt
Definir Alfa   vaFtp;
Definir Alfa   vaLista;
Definir Numero vnTamanho;
Definir Data   vdModific;
Definir Numero vnHoraMod;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
FtpListar(vaFtp, "/arquivos", "", vaLista);
FtpListaItemDetalhes(vaFtp, vaLista, 1, vnTamanho, vdModific, vnHoraMod);
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftplistaitemdetalhes.htm
