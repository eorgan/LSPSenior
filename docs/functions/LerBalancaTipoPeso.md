# LerBalancaTipoPeso

## Assinatura

```lspt
Funcao LerBalancaTipoPeso(Numero pControle, alfa pTipoPeso, Numero end pPeso);
```

## Código
749

## Descrição

Permite ler o peso líquido e a tara das balanças suportadas pela "DLL" da "ExecSoft". A nova função tem o funcionamento idêntico a função "LerBalanca", bastando apenas que seja informado o tipo de peso que deverá ser lido. O sistema pode ser usado normalmente com versões antigas da referida "DLL", no entanto, apenas o peso bruto poderá ser lido. Caso o usuário faça uso das novas leituras (peso líquido ou tara) uma mensagem de erro será exibida, de acordo com o tipo de peso a ser lido. Caso o tipo de peso seja líquido, a mensagem "A versão da DLL é incompatível com o sistema. O método GetLiquido() não foi encontrado na versão em uso.". Caso o tipo de peso seja a tara, o sistema exibirá a mensagem "A versão da DLL é incompatível com o sistema. O método GetTara() não foi encontado na versão em uso".

## Parâmetros

- **pControle** (`Numero`) - Entrada: "0" para Entrada ou "1" para Saída.
- **pTipoPeso** (`alfa`) - Entrada: "B" para peso Bruto, "L" para peso Líquido e "T" para Tara.
- **pPeso** (`Numero end`) - Saída: Variável que retorna o peso da balança (retorno).

## Exemplo de Uso

```lspt
Definir Numero Controle;
Definir Alfa TipoPeso;
Definir Numero Peso;
/* 0 para Entrada ou 1 para Saída */
Controle = 1;
/* 'B' para peso Bruto, "L" para peso Líquido e "T" para Tara */
TipoPeso = "B";
LerBalancaTipoPeso(Controle, TipoPeso, Peso);
Peso = Peso;
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
