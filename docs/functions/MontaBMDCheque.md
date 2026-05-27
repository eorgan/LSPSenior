# MontaBMDCheque

## Assinatura

```lspt
Funcao MontaBMDCheque(Numero IndReg,Numero End Fil,Alfa End Tit,Alfa End Tpt,Numero End Ent,Numero End Emi,Numero End Sac,Numero End Vor,Numero End Vpr,Numero End Vlr,Alfa End Ban,Alfa End Age,Alfa End Cta,Alfa End Num);
```

## Código
N/A

## Descrição

Esta função disponibiliza as variáveis abaixo descritas para a utilização na impressão de cheque. Os dados desta função são oriundos da grade "Substitutos" da tela de [Baixa por Motivos Diversos](../menu_financas/f301bmd.htm) ou da tela de [Baixa por Substituição/Negociação do contas a receber](../menu_financas/f301sub.htm).

## Parâmetros

- **IndReg** (`Numero`) - Entrada: Indicativo se os valores foram informados corretamente (Caso valor seja igual a 0-zero).
- **Fil** (`Numero End`) - Saída: Filial.
- **Tit** (`Alfa End`) - Saída: Número do Título.
- **Tpt** (`Alfa End`) - Saída: Tipo de Título.
- **Ent** (`Numero End`) - Saída: Data de Entrada.
- **Emi** (`Numero End`) - Saída: Data de Emissão.
- **Sac** (`Numero End`) - Saída: Código do Sacado.
- **Vor** (`Numero End`) - Saída: Vencimento Original.
- **Vpr** (`Numero End`) - Saída: Vencimento Prorrogado.
- **Vlr** (`Numero End`) - Saída: Valor Original.
- **Ban** (`Alfa End`) - Saída: Banco.
- **Age** (`Alfa End`) - Saída: Agência.
- **Cta** (`Alfa End`) - Saída: Conta Corrente.
- **Num** (`Alfa End`) - Saída: Número do Cheque.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MontaBMDCheque();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
