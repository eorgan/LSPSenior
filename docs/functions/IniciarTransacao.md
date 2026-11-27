# IniciarTransacao

## Assinatura

```lspt
Funcao IniciarTransacao();
```

## Código
N/A

## Descrição

Abre uma transação no banco de dados: os comandos de escrita seguintes só valem depois de FinalizarTransacao e podem ser desfeitos com DesfazerTransacao. Não tem página no manual da Senior: assinatura conferida pelo uso em regras reais de produção (sempre sem parâmetros, 13 clientes); o comportamento descrito é o que o nome e o uso indicam.

## Parâmetros

_Sem parâmetros_

## Exemplo de Uso

```lspt
Definir Alfa   vaComando;
Definir Numero xErro;
Definir Alfa   xMensagem;

vaComando = "UPDATE E085CLI SET SITCLI = 'I' WHERE CODCLI = 123";
IniciarTransacao();
ExecSQLEx(vaComando, xErro, xMensagem);
Se (xErro = 0)
Inicio
   FinalizarTransacao();
Fim;
Senao
Inicio
   DesfazerTransacao();
   Mensagem(Erro, xMensagem);
Fim;
```

## Fonte

Documentação oficial Senior — https://documentacao.senior.com.br

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
