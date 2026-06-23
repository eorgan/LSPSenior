# VrfAbrA

## Assinatura

```lspt
Funcao VrfAbrA(valor, abrangencia);
```

## Código
N/A

## Descrição

Verifica se um valor alfanumérico está dentro de uma abrangência especificada.

## Parâmetros

- **valor** - Entrada: Valor a ser verificado
- **abrangencia** - Entrada: Abrangência especificada

## Exemplo de Uso

```lspt
Definir Alfa xData;
xret = VrfAbrA("c", "a-z");
se (xRet = 0)
{
ValStr = "Valor NÃO está inserido na abrangência";
}
senao
{
ValStr = "Valor está inserido na abrangência";
}
Cancel(2);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/vrfabra.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
