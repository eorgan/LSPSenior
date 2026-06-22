# VrfAbrN

## Assinatura

```lspt
Funcao VrfAbrN(valor, abrangencia);
```

## Código
N/A

## Descrição

Verifica se um valor numérico está dentro de uma abrangência especificada.

## Parâmetros

- **valor** - Entrada: Valor numérico a ser verificado
- **abrangencia** - Entrada: Abrangência especificada

## Exemplo de Uso

```lspt
Definir Alfa xData;
xret = VrfAbrN(5, "1-30");
se (xRet = 0)
{
ValStr = "Valor NÃO está inserido na abrangência";
}
senao
{
ValStr = "Valor está inserido na abrangência";
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/vrfabrn.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
