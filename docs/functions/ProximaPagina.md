# ProximaPagina

## Assinatura

```lspt
Funcao ProximaPagina (Alfa Secao, Numero End Retorno);
```

## Código
N/A

## Descrição

Esta função permite verificar se uma determinada seção será impressa na próxima página.

## Parâmetros

- **Secao** (`Alfa`) - Entrada: Parâmetro numérico, que retornará **1** quando a seção será impressa na próxima página, e **0**(**zero**) quando a seção não será impressa na próxima página
- **Retorno** (`Numero End`) - Saída: Parâmetro numérico, que retornará **1** quando a seção será impressa na próxima página, e **0**(**zero**) quando a seção não será impressa na próxima página

## Exemplo de Uso

```lspt
definir numero RetProx;
ProximaPagina ("Subtitulo_Horario", RetProx);
Se (RetProx = 1)
  ListaSecao ("Adicional_Saltar");
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
