# AlteraSitObsPed

## Assinatura

```lspt
Funcao AlteraSitObsPed(Numero EmpObs,Numero FilObs,Numero PedObs,Numero SeqObs, Numero SitObs, Numero End RetGra);
```

## Código
28

## Descrição

Alterar a situação da Observação de um pedido

## Parâmetros

- **EmpObs** (`Numero`) - Entrada: Variável que recebe o Código da Empresa.
- **FilObs** (`Numero`) - Entrada: Variável que recebe o Código da Filial.
- **PedObs** (`Numero`) - Entrada: Variável que recebe o Número do Pedido.
- **SeqObs** (`Numero`) - Entrada: Variável que recebe a sequência.
- **SitObs** (`Numero`) - Entrada: Variável que recebe a Situação .
- **RetGra** (`Numero End`) - Saída: Variável que retorna se foi alterado com sucesso ou não.

## Valores de Retorno

- RetGra: Variável numérica que retorna se foi alterado com sucesso ou não.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AlteraSitObsPed();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
