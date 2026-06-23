# AtualizaEmbalagensNF

## Assinatura

```lspt
Funcao AtualizaEmbalagensNF(Numero CodEmp, Numero CodFil, Alfa CodSnf, Numero NumNfv, Numero QtdEmb, Alfa NumEmb, Numero PesLiq, Numero PesBru);
```

## Código
N/A

## Descrição

Alterar os campos QtdEmb, NumEmb, PesLiq, PesBru da tabela de Notas Fiscais (E140Nfv).

## Parâmetros

- **CodEmp** (`Numero`) - Entrada: Variável que recebe o Código da empresa.
- **CodFil** (`Numero`) - Entrada: Variável que recebe o Código da Filial.
- **CodSnf** (`Alfa`) - Entrada: Variável que recebe a Série da NF.
- **NumNfv** (`Numero`) - Entrada: Variável que recebe o Número da NF.
- **QtdEmb** (`Numero`) - Entrada: Variável que recebe a Quantidade a ser alterada.
- **NumEmb** (`Alfa`) - Entrada: Variável que recebe o Número a ser Alterado.
- **PesLiq** (`Numero`) - Entrada: Variável que recebe o Peso líquido a ser Alterado.
- **PesBru** (`Numero`) - Entrada: Variável que recebe o Peso Bruto a ser Alterado.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AtualizaEmbalagensNF();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/atualizaembalagensnf.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
