# GeraTabFicha2

## Assinatura

```lspt
Funcao GeraTabFicha2(Alfa CodPro, Alfa CodDer, Numero TabPrePad,Numero TabTaxCus, Numero TabPErCif, Numero CodSim, Numero DatFic, Numero QtdSim,Numero;
```

## Código
N/A

## Descrição

Gera os dados da Ficha na tabela E622REL, que é utilizada somente nos relatórios de ficha técnica de Custos.

## Parâmetros

- **CodPro**: Variável que recebe o código do produto para gerar a ficha técnica.
- **CodDer**: Variável que recebe o código da derivação.
- **TabPrePad**: Variável que recebe a tabela de preço padrão.
- **TabTaxCus**: Variável que recebe a tabela de taxas.
- **TabPErCif**: Variável que recebe a tabela de CIF.
- **CodSim**: Variável que recebe o código da simulação.
- **DatFic**: Variável que recebe o data da Ficha.
- **QtdSim**: Variável que recebe o quantidade a simular(default é 1).
- **CalcProp**: Variável que indica se o calculo é proporcional ou não (1 para proporcional e 0 para não proporcional).
- **NumPrc**: Número do processo de geração da ficha. Este número deve ser utilizado para limpar-se os dados desta ficha, ao final do relatório. (retorno)

## Valores de Retorno

- NumPrc: Número do processo de geração da ficha. Este número
- deve ser utilizado para limpar-se os dados desta ficha, ao final do relatório.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
GeraTabFicha2();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
