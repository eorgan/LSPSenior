# FtpListaItemPermissoes

## Assinatura

```lspt
Funcao FtpListaItemPermissoes(Alfa Ftp, Alfa Lista, Numero Indice, Alfa end Proprietario, Alfa end Grupo, Alfa end Permissoes);
```

## Código
N/A

## Descrição

Obtém informações sobre as permissões do item no servidor FTP. Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **Ftp** (`Alfa`) - Entrada: A conexão FTP que deve ser utilizada
- **Lista** (`Alfa`) - Entrada: A lista a ser utilizada (obtida em FtpListar)
- **Indice** (`Numero`) - Entrada: Posição do item na lista. O primeiro item é 1
- **Proprietario** (`Alfa end`) - Saída: Retorna o proprietário do item
- **Grupo** (`Alfa end`) - Saída: Retorna o grupo do item
- **Permissoes** (`Alfa end`) - Saída: Retorna as permissões de leitura, escrita e execução do item

## Retorno

- Proprietario, Grupo e Permissoes do item no servidor FTP.

## Exemplo de Uso

```lspt
Definir Alfa vaFtp;
Definir Alfa vaLista;
Definir Alfa vaProprie;
Definir Alfa vaGrupo;
Definir Alfa vaPermiss;
Definir Alfa vaMsg;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");
FtpListar(vaFtp, "/arquivos", "", vaLista);
FtpListaItemPermissoes(vaFtp, vaLista, 1, vaProprie, vaGrupo, vaPermiss);

vaMsg = "Proprietario: " + vaProprie + ", Grupo: " + vaGrupo;
vaMsg = vaMsg + ", Permissoes: " + vaPermiss;
Mensagem(Retorna, vaMsg);
```

## Fonte

https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/ftp/ftplistaitempermissoes.htm
