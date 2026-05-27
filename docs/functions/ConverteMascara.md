# ConverteMascara

## Assinatura

```lspt
Funcao ConverteMascara (Tipo_dado,Valor_Origem,Alfa_Origem/Destino,Mascara);
```

## Código
N/A

## Descrição

Esta função converte um valor de entrada (**numérico**, **data**, **hora** ou **cadeia de caracteres**), para o tipo de dado **cadeia de caracteres**.

## Parâmetros

- **Tipo_dado** - Entrada
- **Valor_Origem** - Entrada
- **Alfa_Origem/Destino** - Entrada
- **Mascara** - Entrada

## Exemplo de Uso

```lspt
Definir Alfa VinscrStr[18];
Se (R030Fil.TipIns = 1)
@ CGC @
  ConverteMascara (1,R030Fil.NumCgc,VInscrStr,"99.999.999/9999-99");
Senao
  Se (R030Fil.TipIns = 3)
@ CPF @
    ConverteMascara (1,R030Fil.NumCgc,VInscrStr,"999.999.999-99");
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
