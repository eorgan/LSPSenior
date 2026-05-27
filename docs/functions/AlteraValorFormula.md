# AlteraValorFormula

## Assinatura

```lspt
Funcao AlteraValorFormula(Alfa NomeFormula, Numero Valor);
```

## Código
N/A

## Descrição

Esta função altera o valor de um controle fórmula pelo seu nome. Embora seja possível atribuir o valor diretamente para os controles, existem casos em que o tanto o nome do controle quanto o valor podem variar, nestes casos a atribuição deve ser feita por esta função. Esta função altera tanto o conteúdo do controle fórmula como da variável de regra criada implicitamente pelo compilador representando esta fórmula. Utilizar a função ou atribuir um valor via regra diretamente para o controle são equivalentes. O uso dessa função para alterar o valor de um controle fórmula não possui nenhuma restrição quanto a totalização da fórmula em questão por um controle totalizador.

## Parâmetros

- **NomeFormula** (`Alfa`) - Entrada: O nome do controle fórmula
- **Valor** (`Numero`) - Entrada: O Novo valor do controle fórmula

## Exemplo de Uso

```lspt
Definir Alfa vNome;
Definir Numero vValor;
Definir Numero vOption;
vOption = 3;
@ O nome do controle e o valor serão definidos dinamicamente. @
se (vOption = 1)
{
  vNome = "Formula001";
  vValor = 1;
}
senao
{
  se (vOption = 2)
  {
    vNome = "Formula002";
    vValor = 2;
  }
  senao
  {
    vNome = "Formula003";
    vValor = 3;
  }
}
AlteraValorFormula(vNome, vValor);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/alteravalorformula.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
