# ListaRegraPrimeiro

## Assinatura

```lspt
Funcao ListaRegraPrimeiro(Numero aLista, Alfa End aExecutou);
```

## Código
N/A

## Descrição

Posiciona a lista no primeiro registro.

## Parâmetros

- **aLista** (`Numero`) - Entrada: Identificador da lista
- **aExecutou** (`Alfa End`) - Saída: Variável alfa que receberá "S" se encontrou registro, "N" se não encontrou

## Valores de Retorno

- **
- aExecutou: variável alfa que retorna se a instrução foi executada. 'S' para executada e 'N' para não executada.

## Exemplo de Uso

```lspt
Definir Numero nLista;
Definir Alfa vaAchou;

ListaRegraPrimeiro(nLista, vaAchou);
Se (vaAchou = "S") {
  @ Lista posicionada no primeiro registro @
  Mensagem(Retorna, "Primeiro registro encontrado");
} Senao {
  @ Lista vazia @
  Mensagem(Retorna, "Lista vazia");
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/listaregraprimeiro.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
