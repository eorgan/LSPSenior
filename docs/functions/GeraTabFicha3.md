# GeraTabFicha3

## Assinatura

```lspt
Funcao GeraTabFicha3(Alfa CodPro, Alfa CodDer, Numero TabPrePad, Numero TabTaxCus, Numero TabPErCif, Numero CodSim, Numero DatFic, Numero QtdSim, Numero CalcProp, Numero End NumPrc, Numero MisCom, Numero VarAux1, Alfa VarAux2);
```

## Código
N/A

## Descrição

Gera os dados da Ficha na tabela E622REL, que é utilizada somente nos relatórios de ficha técnica de Custos. Esta função é semelhante a GeraTabFicha2, a diferença é que contempla o tratamento de misto como material e o tipo de mercado.

## Parâmetros

- **CodPro** (`Alfa`) - Entrada: Variável que recebe o código do produto para gerar a ficha técnica.
- **CodDer** (`Alfa`) - Entrada: Variável que recebe o código da derivação.
- **TabPrePad** (`Numero`) - Entrada: Variável que recebe a tabela de preço padrão
- **TabTaxCus** (`Numero`) - Entrada: Variável que recebe a tabela de taxas.
- **TabPErCif** (`Numero`) - Entrada: Variável que recebe a tabela de CIF.
- **CodSim** (`Numero`) - Entrada: Variável que recebe o código da simulação.
- **DatFic** (`Numero`) - Entrada: Variável que recebe o data da Ficha.
- **QtdSim** (`Numero`) - Entrada: Variável que recebe o quantidade a simular (default é 1).
- **CalcProp** (`Numero`) - Entrada: Variável que indica se o cálculo é proporcional ou não (1 para proporcional e 0 para não proporcional).
- **NumPrc** (`Numero End`) - Saída: Número do processo de geração da ficha. Este número deve ser utilizado para limpar os dados da ficha ao final do relatório. (retorno)
- **MisCom** (`Numero`) - Entrada: Variável que indica se considera produto misto como material (1 - sim e 0 - não).
- **VarAux1** (`Numero`) - Entrada: Variável com uso ainda não definido.
- **VarAux2** (`Alfa`) - Entrada: Variável que identifica o tipo de mercado (I - Interno, E - Externo e A - Ambos), quando utilizado.

## Valores de Retorno

- NumPrc: Número do processo de geração da ficha. Este número
- deve ser utilizado para limpar os dados da ficha ao final do relatório.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
GeraTabFicha3();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/geratabficha3.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
