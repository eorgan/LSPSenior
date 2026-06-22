# ListaRegraProximo

## Assinatura

```lspt
Funcao ListaRegraProximo(Numero aLista, Alfa End aExecutou);
```

## Código
N/A

## Descrição

Move para o próximo registro da lista.

## Parâmetros

- **aLista** (`Numero`) - Entrada: Identificador da lista
- **aExecutou** (`Alfa End`) - Saída: Variável alfa que receberá "S" se encontrou registro, "N" se chegou ao fim

## Valores de Retorno

- aExecutou: variável alfa que retorna se a instrução foi executada. 'S' para executada e 'N' para não executada.

## Exemplo de Uso

```lspt
Definir Numero nLista;
Definir Alfa vaAchou;

ListaRegraProximo(nLista, vaAchou);
Se (vaAchou = "S") {
  @ Moveu para próximo registro @
  Mensagem(Retorna, "Próximo registro encontrado");
} Senao {
  @ Chegou ao fim da lista @
  Mensagem(Retorna, "Fim da lista");
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/listaregraproximo.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
