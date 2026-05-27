# CarregarSaldoContabil

## Assinatura

```lspt
Funcao CarregarSaldoContabil(Numero aTipSal, Numero aCodEmp, Alfa aAbrFil, Alfa aAbrPca, Numero aDatIni, Numero aDatFin, Numero aCodMpc, Numero aCodMpa, Numero aCodMpu, Numero aSalAnt, Numero aDesZer, Numero aComMem, Numero aDzeTco);
```

## Código
796

## Descrição

Carregar em memória o saldo contábil conforme dados passados via parâmetro.

## Parâmetros

- **aTipSal** (`Numero`) - Entrada: Tipo do saldo a ser carregado em memória, podendo ser:  1 = Contábil,  2 = Multi Moeda,  3 = Relacionamento, 4 = Histórico,  5 = Auxiliar por Conta contábil,  6 = Auxiliar por Conta auxiliar,  7 = Histórico Auxiliar e  8 = Centro de Custo.
- **aCodEmp** (`Numero`) - Entrada: Código da Empresa para carregar o saldo em memória.
- **aAbrFil** (`Alfa`) - Entrada: Abrangência de Filiais para carregar o saldo em memória.
- **aAbrPca** (`Alfa`) - Entrada: Abrangência de contas auxiliares (Para os tipos de saldo 5, 6 e 7).
- **aDatIni** (`Numero`) - Entrada: Data inicial para carregar o saldo em memória.
- **aDatFin** (`Numero`) - Entrada: Data final para carregar o saldo em memória.
- **aCodMpc** (`Numero`) - Entrada: Código do Modelo de Plano (Para o tipo de saldo 4 e 7).
- **aCodMpa** (`Numero`) - Entrada: Código do Modelo de Plano atual (Para o tipo de saldo 3).
- **aCodMpu** (`Numero`) - Entrada: Código do Modelo de Plano de centro de custo (Para o tipo de saldo 3).
- **aSalAnt** (`Numero`) - Entrada: Indica se a estrutura deverá ser carregada com saldo anterior.
- **aDesZer** (`Numero`) - Entrada: Indica se deverá desconsiderar zeramento (0 = Não / 1 = Sim).
- **aComMem** (`Numero`) - Entrada: Indica se irá armazenar o registro de todas as competências em memória (0 = Não / 1 = Sim).
- **aDzeTco** (`Numero`) - Entrada: Indica se deverá desconsiderar zeramento para todas as competências (0 = Não / 1 = Sim).

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CarregarSaldoContabil();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/carregarsaldocontabil.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
