# AnalisaBloqueioAreaPedido

## Assinatura

```lspt
Funcao AnalisaBloqueioAreaPedido(Numero pCodEmp, Numero pCodFil, Numero pNumPed);
```

## Código
N/A

## Descrição

Analisa o pedido, bloqueia ou não, de acordo com as parametrizações da empresa e se existir ao menos uma observação de bloqueio não aprovada. Além disso: - gera bloqueio de pedidos quando utilizada em qualquer identificador de regras. Entretanto, não é recomendável esta função em algum identificador de regras executado no fechamento do pedido; - bloqueia ou desbloqueia o pedido no caso da empresa controlar bloqueio por SGQ. Caso existir bloqueio por área, a função pode bloquear o pedido, mas nunca desbloqueá-lo. Quando verificado que o bloqueio de pedidos não é mais necessário, é recomendável utilizar o web service [com.senior.g5.co.mcm.ven.pedidos](../webservices/com_senior_g5_co_mcm_ven_pedidos.htm) para desbloquear os pedidos. Além disso, não é indicado realizar `Update` e `Delete` em campos de sistema, pois, como consequência, a base de dados pode apresentar inconsistências ou problemas de multiusuário.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Código da empresa.
- **pCodFil** (`Numero`) - Entrada: Código da filial.
- **pNumPed** (`Numero`) - Entrada: Número do pedido.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AnalisaBloqueioAreaPedido();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/analisabloqueioareapedido.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
