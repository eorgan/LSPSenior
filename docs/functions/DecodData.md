# DecodData

## Assinatura

```lspt
Funcao DecodData(data, dia, mes, ano);
```

## Código
N/A

## Descrição

Permite a separação de uma data em dia, mês e ano para que os dados possam ser usados separadamente.

## Parâmetros

- **data** - Entrada: Corresponde a uma data em formato numérico.
- **dia** - Entrada: Valor correspondente ao dia.
- **mes** - Entrada: Valor correspondente ao mês.
- **ano** - Entrada: Valor correspondente ao ano.

## Exemplo de Uso

```lspt
Definir Alfa xretorno;
DecodData(1345, pDia, pMes, pAno);
IntParaAlfa(pAno, xRetorno);
ValStr = "O ano da data é: " + xretorno;
Cancel(2);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
