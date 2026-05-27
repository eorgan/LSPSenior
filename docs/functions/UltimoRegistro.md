# UltimoRegistro

## Assinatura

```lspt
Funcao UltimoRegistro (<"Seção Detalhe">, Retorno);
```

## Código
N/A

## Descrição

Esta função verifica se o registro que está sendo listado na seção detalhe, é o último elemento.

## Parâmetros

- **Detalhe">** (`<"Seção`) - Entrada: Variável que retorna **0** (**zero**) caso não seja o último registro, ou **1** caso seja o último
- **Retorno** - Entrada: Variável que retorna **0** (**zero**) caso não seja o último registro, ou **1** caso seja o último

## Exemplo de Uso

```lspt
			Definir Numero xvalor;
			UltimoRegistro("Detalhe_Clientes",xvalor)
			Se (xvalor = 0)
			{
			   ...
@ Comandos. @
			}
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
