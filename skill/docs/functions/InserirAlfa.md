# InserirAlfa

## Assinatura

```lspt
Funcao InserirAlfa(Alfa Valor ,Alfa End Origem, Numero Pos);
```

## Código
43

## Descrição

Insere um ou mais caracteres em uma variável/campo, a partir da posição indicada.

## Parâmetros

- **Valor** (`Alfa`) - Entrada: Variável que contém a string que deseja-se inserir
- **Origem** (`Alfa End`) - Saída: Variável que contém a string de origem e que receberá o conteúdo da inserção
- **Pos** (`Numero`) - Entrada: Variável que indica a posição em Origem a partir de onde Valor será inserido

## Valores de Retorno

- Origem: Variável alfa que receberá o conteúdo da inserção dos caracteres.

## Exemplo de Uso

```lspt
Definir Alfa vaOrigem;
vaOrigem = "Senior Sistemas";
InserirAlfa("empresa de ", vaOrigem, 8);
@ vaOrigem será "Senior empresa de Sistemas" @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/inseriralfa.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
