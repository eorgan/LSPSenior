# CancelarOP

## Assinatura

```lspt
Funcao CancelarOP(Alfa pOri,Numero pOP,Alfa End Retorno);
```

## Código
644

## Descrição

Esta função faz exatamente o que o cancelamento de OP faz, ou seja, apenas cancela a OP e a respectiva quantidade fica disponível para uma próxima geração, isso se houvernecessidade (E815Nbp). Caso a intenção seja cancelar também a necessidade e talvez o item do pedido, deverá ser utilizada a função de programador CancelarProducao.

## Parâmetros

- **pOri** (`Alfa`) - Entrada
- **pOP** (`Numero`) - Entrada
- **Retorno** (`Alfa End`) - Saída

## Valores de Retorno

- Tipo de retorno: variável alfanumérica.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CancelarOP();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
