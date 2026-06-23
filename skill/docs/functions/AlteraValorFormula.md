# AlteraValorFormula

## Assinatura

```lspt
Funcao AlteraValorFormula(Alfa NomeFormula, Numero Valor);
```

## Código
N/A

## Descrição

Altera o valor de um controle fórmula pelo seu nome.

## Parâmetros

- **NomeFormula** (`Alfa`) - Entrada: O nome do controle fórmula
- **Valor** (`Numero`) - Entrada: O novo valor do controle fórmula

## Exemplo de Uso

```lspt
Definir Alfa vNome;
Definir Numero vValor;
Definir Numero vOption;

vOption = 3;

@ O nome do controle e o valor serão definidos dinamicamente @
Se (vOption = 1) {
  vNome = "Formula001";
  vValor = 1;
} Senao {
  Se (vOption = 2) {
    vNome = "Formula002";
    vValor = 2;
  } Senao {
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
