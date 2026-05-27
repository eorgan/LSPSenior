# ExecutaRelatorio

## Assinatura

```lspt
Funcao ExecutaRelatorio(Alfa pNomRel, Alfa pTelEnt, Alfa pNomOrd);
```

## Código
561

## Descrição

Executar modelos de Relatórios, Notas Fiscais, Cheques, Duplicatas etc.

## Parâmetros

- **pNomRel** (`Alfa`) - Entrada: Variável que deve conter o Nome do Modelo.
- **pTelEnt** (`Alfa`) - Entrada: Variável , que indica se a tela de entrada deve ser apresentada ou não (S=SIM e N=NÃO).
- **pNomOrd** (`Alfa`) - Entrada: Variável , que indica o nome do ordenação definida no modelo. Este parâmetro é opcional onde dever ser informado somente as aspas, caso exista ordenação no modelo e não seja informado o nome será selecionado a primeira ordenação na lista.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ExecutaRelatorio();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
