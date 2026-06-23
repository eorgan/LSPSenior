# InscricaoEstadualValida

## Assinatura

```lspt
Funcao InscricaoEstadualValida(Alfa aInscricaoEstadual, Alfa aSiglaUF, Alfa End aResult);
```

## Código
N/A

## Descrição

Verifica se a inscrição estadual informada é válida.

## Parâmetros

- **aInscricaoEstadual** (`Alfa`) - Entrada: Variável que recebe a inscrição estadual. Se desejar, preencha com caracteres especiais. Por exemplo: "252.812.441"
- **aSiglaUF** (`Alfa`) - Entrada: Variável que recebe a sigla do estado.
- **aResult** (`Alfa End`) - Saída: Indicador da validade da inscrição estadual. Caso a inscrição seja válida a variável retornará SIM, caso contrário, retornará NAO.

## Exemplo de Uso

```lspt
Definir Alfa aInscricaoEstadual;
Definir Alfa aSiglaUF;
Definir Alfa aResult;
aInscricaoEstadual =
"9000026607"
;
aSiglaUF =
"SC"
;
InscricaoEstadualValida(aInscricaoEstadual, aSiglaUF, aResult);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/inscricaoestadualvalida.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
