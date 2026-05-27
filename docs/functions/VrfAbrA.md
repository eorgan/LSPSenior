# VrfAbrA

## Assinatura

```lspt
Funcao VrfAbrA(valor, abrangencia);
```

## Código
N/A

## Descrição

Verifica se um determinado valor está contido em uma abrangência especificada.

## Parâmetros

- **valor** - Entrada: Caracteres que se deseja procurar dentro de uma abrangência.
- **abrangencia** - Entrada: Limite definido para busca dos caracteres informados na variável “valor”.

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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
