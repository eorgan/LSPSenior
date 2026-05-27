# DateToDB

## Assinatura

```lspt
Funcao DateToDB(Numero Date, Numero Native, Alfa End DateAlfa);
```

## Código
N/A

## Descrição

Converte um valor do tipo data para uma variável alfa com uma data compatível com o banco de dados utilizado.

## Parâmetros

- **Date** (`Numero`) - Entrada: É a data que deve ser convertida para alfa
- **Native** (`Numero`) - Entrada: Obsoleto, mantido apenas para compatibilidade
- **DateAlfa** (`Alfa End`) - Saída: O retorno da função é uma variável alfa com uma data que pode ser usada num comando SQL nativo

## Exemplo de Uso

```lspt
Definir Alfa xData;
DateToDB(1234, 0, xData);
ValStr = "Data no Formato do Banco = " + xData;
Cancel(2);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
