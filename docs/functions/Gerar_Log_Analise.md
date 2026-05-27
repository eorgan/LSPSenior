# Gerar_Log_Analise

## Assinatura

```lspt
Funcao Gerar_Log_Analise(Numero pEmpAne, Numero pFilAne, Numero pNumAne, Alfa pAbrPfa, Alfa aDescricao, Alfa pOrigem, Alfa pOrdemOpe, Alfa pComplemento_Operacao, Alfa pObservacao_Depuracao);
```

## Código
974

## Descrição

Essa função possibilita criar registros na tabela de análise de embarque/carga. O usuário pode usar a função da maneira que desejar em regras LSP. Para saber mais sobre log de análise, acesse a [documentação correspondente](../menu_mercado/log_analise.htm).

## Parâmetros

- **pEmpAne** (`Numero`) - Entrada: Código da empresa da análise
- **pFilAne** (`Numero`) - Entrada: Código da filial da análise
- **pNumAne** (`Numero`) - Entrada: Número sequencial da análise de embarque/carga
- **pAbrPfa** (`Alfa`) - Entrada: Abrangência das pré-faturas (números separados por vírgula)
- **aDescricao** (`Alfa`) - Entrada: Descrição detalhada sobre a operação registrada
- **pOrigem** (`Alfa`) - Entrada: Sistema ou processo de origem da operação (ex: "F135ANE")
- **pOrdemOpe** (`Alfa`) - Entrada: Ordem de operação: "A" = Antes do processamento, "D" = Depois do processamento
- **pComplemento_Operacao** (`Alfa`) - Entrada: Complemento detalhado sobre a operação registrada. Valor padrão: “”
- **pObservacao_Depuracao** (`Alfa`) - Entrada: Texto com detalhes sobre a depuração registrada. Valor padrão: “”

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
Gerar_Log_Analise();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/gerar_log_analise.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
