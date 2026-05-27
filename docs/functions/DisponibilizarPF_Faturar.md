# DisponibilizarPF_Faturar

## Assinatura

```lspt
Funcao DisponibilizarPF_Faturar(Numero pEmp, Numero pFil, Numero pAne, Numero pPfa);
```

## Código
944

## Descrição

A função não verifica nenhuma condição, apenas altera a situação dos dados gerais e dos itens da pré-fatura para "3 - Para faturar". Caso o intuito seja atualizar os itens da pré-fatura e a própria pré-fatura para a situação "3 - Para faturar", somente quando todos os itens estiverem embalados, recomenda-se o uso da função [AtualizarSituacao_PFA_PES](atualizarsituacao_pfa_pes.md).

## Parâmetros

- **pEmp** (`Numero`) - Entrada: Código da empresa.
- **pFil** (`Numero`) - Entrada: Código da filial.
- **pAne** (`Numero`) - Entrada: Número da análise de embarque.
- **pPfa** (`Numero`) - Entrada: Número da pré-fatura.

## Exemplo de Uso

```lspt
Definir
Numero
 VSCodEmp;
Definir
Numero
 VSCodFil;
Definir
Numero
 VSNumAne;
Definir
Numero
 VSNumPfa;
Definir
Numero
 VSSitPfa;
DisponibilizarPF_Faturar(VSCodEmp, VSCodFil, VSNumAne, VSNumPfa, VSSitPfa);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/disponibilizarpf_faturar.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
