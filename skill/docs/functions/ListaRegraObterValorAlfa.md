# ListaRegraObterValorAlfa

## Assinatura

```lspt
Funcao ListaRegraObterValorAlfa(Numero aLista, Alfa aColuna, Alfa End aValor, Alfa End aObteve);
```

## Código
N/A

## Descrição

Obtém o valor de um campo específico do registro atual da lista.

## Parâmetros

- **aLista** (`Numero`) - Entrada: Identificador da lista
- **aColuna** (`Alfa`) - Entrada: Nome do campo a ser obtido
- **aValor** (`Alfa End`) - Saída: Variável alfa que receberá o valor do campo
- **aObteve** (`Alfa End`) - Saída: Variável alfa que receberá "S" se obteve valor, "N" se não obteve

## Valores de Retorno

- **
- aValor: variável alfa que retorna o valor da coluna
- aObteve: Indica se foi possível obter o valor. 'S' para obteve e 'N' para não obteve o valor

## Exemplo de Uso

```lspt
Definir Numero nLista;
Definir Alfa vaNome;
Definir Alfa vaIdade;
Definir Alfa vaObteve;

@ Obter nome do registro atual @
ListaRegraObterValorAlfa(nLista, "nome", vaNome, vaObteve);
Se (vaObteve = "S") {
  Mensagem(Retorna, "Nome: " + vaNome);
}

@ Obter idade do registro atual @
ListaRegraObterValorAlfa(nLista, "idade", vaIdade, vaObteve);
Se (vaObteve = "S") {
  Mensagem(Retorna, "Idade: " + vaIdade);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/listaregraobtervaloralfa.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
