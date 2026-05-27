# GeraObsBloPed

## Assinatura

```lspt
Funcao GeraObsBloPed;
```

## Código
N/A

## Descrição

Essa função recebe a identificação de um pedido e os dados para que sejam geradas observações para esse pedido. Caso o pedido não exista irá ocorrer erro na função e será exibida mensagem ao usuário. O uso desta função não bloqueia o pedido. Para que o bloqueio aconteça é necessário que ocorra uma das alternativas abaixo: 1. a função seja utilizada por um identificador de regras no fechamento do pedido. Isso é necessário, pois a verificação do bloqueio por área ou SGQ, por meio de observações, acontece no fechamento do pedido. A regra com a função GeraObsBloPed pode, por exemplo, ser utilizada no identificador de regras [VEN-120CNFEC01](../identificadores_regras/ven_120cnfec01.htm), que executa antes do fechamento do pedido; 2. a função seja utilizada em conjunto com a função AnalisaBloqueioAreaPedido. Isso é necessário pois a função GeraObsBloPed irá gerar uma observação e a função AnalisaBloqueioAreaPedido irá verificar o pedido e bloqueá-lo se for preciso. Além disso, a função pode gerar bloqueio do pedido se nos parâmetros do vendas na filial a empresa utilizar bloqueio de pedidos por área ou pelo SGQ e for indicada a área da empresa e se deve bloquear o pedido. Se a empresa não utilizar o bloqueio por área, esses valores são gravados mas não bloqueiam o pedido. A área da empresa nas observações nas telas do sistema é exibida se utiliza-se o bloqueio de pedidos pelo SGQ ou por área. Devem ser passados em branco se não forem utilizados. Quando verificado que o bloqueio de pedidos não é mais necessário, é recomendável utilizar o web service [com.senior.g5.co.mcm.ven.pedidos](../webservices/com_senior_g5_co_mcm_ven_pedidos.htm) para desbloquear os pedidos. Além disso, não é indicado realizar `Update` e `Delete` em campos de sistema, pois, como consequência, a base de dados pode apresentar inconsistências ou problemas de multiusuário.

## Parâmetros

- **pCodEmp** - Entrada: Código da empresa do pedido para o qual a observação deverá ser gerada.
- **pCodFil** - Entrada: Código da filial do pedido para o qual a observação deverá ser gerada.
- **pNumPed** - Entrada: Número do pedido para o qual a observação deverá ser gerada.
- **pObs** - Entrada: Texto da observação. Limitado a 250 caracteres.
- **pCodMot** - Entrada: Código do motivo da observação.
- **pAreCon** - Entrada: Código da área da empresa que gerou a observação de bloqueio. Os valores estão disponíveis somente para as chaves: PCP, FIN, IMP, CPR e VEN.
- **pBloPed** - Entrada: (Opcional) Indicativo se a observação deve bloquear ou não o pedido. Só é considerada caso se nos parâmetros do vendas na filial a empresa utilizar bloqueio por área.
- **pSitObs** - Entrada: Permite definir a situação da observação, conseguindo informar se a mesma está “G – Gravada”, “P – Processada”, “R – Resolvida” e “C – Cancelada.

## Exemplo de Uso

```lspt
definir Numero VSCodEmp;
definir Numero VSCodFil;
definir Numero VSNumPed;
definir Alfa VSObsPed;
definir Numero VSCodMot;
definir Alfa VSAreCon;
definir Alfa VSBloPed;
VSCodEmp = 1;
VSCodFil = 100;
VSNumPed = 100;
VSObsPed =
"Observação a ser gerada como exemplo"
;
VSCodMot = 99;
@ Motivo existente no cadastro de motivos @
VSAreCon =
"VEN"
;
@ Observação gerada pela área de vendas @
VSBloPed =
"N"
;
@ Não irá bloquear o pedido @
GeraObsBloPed(VSCodEmp, VSCodFil, VSNumPed, VSObsPed, VSCodMot, VSAreCon, VSBloPed);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/geraobsbloped.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
