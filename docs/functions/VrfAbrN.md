# VrfAbrN

## Assinatura

```lspt
Funcao VrfAbrN(valor, abrangencia);
```

## Código
N/A

## Descrição

Verifica se um determinado valor numérico está contido em uma abrangência especificada.

## Parâmetros

- **valor** - Entrada: Valores numéricos que se deseja procurar dentro de uma abrangência.
- **abrangencia** - Entrada: Limite definido para busca dos caracteres informados na variável “valor”.

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
