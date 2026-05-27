# Gerar_Log_Pedido

## Assinatura

```lspt
Funcao Gerar_Log_Pedido(Numero pEmpPed, Numero pFilPed, Alfa pAbrPed, Alfa aDescricao, Alfa pOrigem, Alfa pOrdemOpe, Alfa pComplemento_Operacao, Alfa pObservacao_Depuracao);
```

## Código
973

## Descrição

Essa função possibilita criar registros na tabela de log de operações do pedido. O usuário pode usar a função da maneira que desejar em regras LSP. Para saber mais sobre log de operações do pedido, acesse a [documentação correspondente](../menu_mercado/log_pedido.htm).

## Parâmetros

- **pEmpPed** (`Numero`) - Entrada: Código da empresa do pedido
- **pFilPed** (`Numero`) - Entrada: Código da filial do pedido
- **pAbrPed** (`Alfa`) - Entrada: Abrangência dos pedidos (números separados por vírgula)
- **aDescricao** (`Alfa`) - Entrada: Descrição detalhada sobre a operação registrada
- **pOrigem** (`Alfa`) - Entrada: Sistema ou processo de origem da operação (ex: "F120PED")
- **pOrdemOpe** (`Alfa`) - Entrada: Ordem de operação: "A" = Antes do processamento, “E” = Enquanto, "D" = Depois do processamento
- **pComplemento_Operacao** (`Alfa`) - Entrada: Complemento detalhado sobre a operação registrada. Valor padrão: “”
- **pObservacao_Depuracao** (`Alfa`) - Entrada: Texto com detalhes sobre a depuração registrada. Valor padrão: “”

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
Gerar_Log_Pedido();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
