# ExecSQLEx

## Assinatura

```lspt
Funcao ExecSQLEx(Alfa Comando, Numero End Erro, Alfa End Mensagem);
```

## Código
N/A

## Descrição

Executa um comando SQL de escrita (INSERT, UPDATE, DELETE) e devolve o resultado em vez de interromper a regra em caso de erro. Sempre teste Erro depois da chamada. Não tem página no manual da Senior: assinatura conferida pelo uso em regras reais de produção (3 parâmetros em todas as 464 chamadas, 11 clientes).

## Parâmetros

- **Comando** (`Alfa`) - Entrada: Texto do comando SQL a executar.
- **Erro** (`Numero End`) - Saída: Retorna 0 quando o comando executou com sucesso e 1 quando houve erro.
- **Mensagem** (`Alfa End`) - Saída: Retorna a mensagem de erro do banco quando Erro = 1.

## Valores de Retorno

- Sem retorno por '='. O resultado vem nos parâmetros Erro e Mensagem.

## Exemplo de Uso

```lspt
Definir Alfa   vaComando;
Definir Numero xErro;
Definir Alfa   xMensagem;

vaComando = "UPDATE E085CLI SET SITCLI = 'I' WHERE CODCLI = 123";
ExecSQLEx(vaComando, xErro, xMensagem);
Se (xErro <> 0)
Inicio
   Mensagem(Erro, xMensagem);
Fim;
```

## Fonte

Documentação oficial Senior — https://documentacao.senior.com.br

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
