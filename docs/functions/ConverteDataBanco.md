# ConverteDataBanco

## Assinatura

```lspt
Funcao ConverteDataBanco(Numero DatNum,Alfa End DatAlf);
```

## Código
4

## Descrição

Converter uma data qualquer, para o formato de data do banco de dados.

## Parâmetros

- **DatNum** (`Numero`) - Entrada: É o campo de tabela ou variável que se deseja converter
- **DatAlf** (`Alfa End`) - Saída: É uma variável que conterá o retorno da conversão

## Valores de Retorno

- DatAlf: é uma variável tipo Alfa, que conterá o retorno da conversão.

## Exemplo de Uso

```lspt
Definir Alfa vaDataStr;
Definir Data vdData;

vdData = 31/12/1900;
ConverteDataBanco(vdData, vaDataStr);
@ vaDataStr = "to_date('31/12/1900','DD/MM/YYYY')" ou formato do banco usado @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/convertedatabanco.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
