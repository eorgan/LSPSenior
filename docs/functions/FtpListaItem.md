# FtpListaItem

## Assinatura

```lspt
Funcao FtpListaItem(Alfa Ftp, Alfa Lista, Numero Indice, Alfa end Nome, Alfa end Tipo);
```

## Código
N/A

## Descrição

Obtém o nome e o tipo de um item da lista gerada por FtpListar. A lista é indexada a partir de 1. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa`) - Entrada: A conexão FTP que deve ser utilizada
- **Lista** (`Alfa`) - Entrada: A lista a ser utilizada (obtida em FtpListar)
- **Indice** (`Numero`) - Entrada: Posição do item na lista. O PRIMEIRO item é 1 (não 0)
- **Nome** (`Alfa end`) - Saída: Retorna o nome do item
- **Tipo** (`Alfa end`) - Saída: Retorna o tipo do item: A = arquivo, D = diretório, L = link simbólico

## Retorno

- Nome: nome do item.
- Tipo: 'A' arquivo, 'D' diretório, 'L' link simbólico.

## Exemplo de Uso

```lspt
Definir Alfa   vaFtp;
Definir Alfa   vaLista;
Definir Alfa   vaNome;
Definir Alfa   vaTipo;
Definir Alfa   vaMsg;
Definir Numero vnQtde;
Definir Numero vnIndice;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
FtpListar(vaFtp, "/arquivos", "", vaLista);
FtpListaQuantidade(vaFtp, vaLista, vnQtde);

vnIndice = 1;
Enquanto (vnIndice <= vnQtde)
   {
      FtpListaItem(vaFtp, vaLista, vnIndice, vaNome, vaTipo);
      Se (vaTipo = "A")
         {
            vaMsg = "Arquivo: " + vaNome;   @ concatena ANTES de chamar @
            Mensagem(Retorna, vaMsg);
         }
      vnIndice = vnIndice + 1;
   }
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftplistaitem.htm
