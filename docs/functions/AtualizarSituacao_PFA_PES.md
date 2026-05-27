# AtualizarSituacao_PFA_PES

## Assinatura

```lspt
Funcao AtualizarSituacao_PFA_PES(Numero CodEmp, Numero CodFil, Numero NumAne, Numero NumPfa);
```

## Código
N/A

## Descrição

A função verifica se todos os itens da pré-fatura estão embalados e caso estejam, altera a situação dos itens e dos dados gerais da pré-fatura para "3 - Para faturar". Caso o intuito seja atualizar os itens da pré-fatura e a própria pré-fatura para a situação "3 - Para faturar", independentemente se todos os itens da pré-fatura foram embalados ou não, recomenda-se o uso da função [DisponibilizarPF_Faturar](disponibilizarpf_faturar.md).

## Parâmetros

- **CodEmp** (`Numero`) - Entrada: Código da empresa.
- **CodFil** (`Numero`) - Entrada: Código da filial.
- **NumAne** (`Numero`) - Entrada: Número da análise de embarque.
- **NumPfa** (`Numero`) - Entrada: Número da pré-fatura.

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
AtualizarSituacao_PFA_PES(VSCodEmp, VSCodFil, VSNumAne, VSNumPfa, VSSitPfa);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/atualizarsituacao_pfa_pes.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
