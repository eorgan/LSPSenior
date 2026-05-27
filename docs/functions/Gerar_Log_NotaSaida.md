# Gerar_Log_NotaSaida

## Assinatura

```lspt
Funcao Gerar_Log_NotaSaida(Numero pEmpNfv, Numero pFilNfv, Alfa pSnfNfv, Alfa pAbrNfv, Alfa aDescricao, Alfa pOrigem, Alfa pOrdemOpe, Alfa pComplemento_Operacao, Alfa pObservacao_Depuracao);
```

## Código
975

## Descrição

Essa função possibilita criar registros na tabela de log de nota fiscal de saída. O usuário pode usar a função da maneira que desejar em regras LSP. Para saber mais sobre log de operações de nota fiscal de saída, acesse a [documentação correspondente](../manual-processos/mercado/gestao-faturamento/log-operacoes-nota-fiscal-saida.htm).

## Parâmetros

- **pEmpNfv** (`Numero`) - Entrada: Código da empresa da nota fiscal
- **pFilNfv** (`Numero`) - Entrada: Código da filial da nota fiscal
- **pSnfNfv** (`Alfa`) - Entrada: Série da nota fiscal de saída
- **pAbrNfv** (`Alfa`) - Entrada: Abrangência das notas fiscais (números separados por vírgula)
- **aDescricao** (`Alfa`) - Entrada: Descrição detalhada sobre a operação registrada
- **pOrigem** (`Alfa`) - Entrada: Sistema ou processo de origem da operação (ex: "F140NFV")
- **pOrdemOpe** (`Alfa`) - Entrada: Ordem de operação: "A" = Antes do processamento, "D" = Depois do processamento
- **pComplemento_Operacao** (`Alfa`) - Entrada: Complemento detalhado sobre a operação registrada. Valor padrão: “”
- **pObservacao_Depuracao** (`Alfa`) - Entrada: Texto com detalhes sobre a depuração registrada. Valor padrão: “”

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
Gerar_Log_NotaSaida();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/gerar_log_notasaida.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
