# RetDiaUtilAntPos

## Assinatura

```lspt
Funcao Função RetDiaUtilAntPos (Numero pData, Numero pCEP, Numero End pDataAnt, Numero End pDataPos);
```

## Código
N/A

## Descrição

Verificar se uma data é dia útil ou não, retornando o dia útil imediatamente anterior e o posterior. Se a data informada for dia útil traz essa data em ambos os retornos.

## Parâmetros

- **pData** (`Numero`) - Entrada: Variável que recebe a data atual.
- **pCEP** (`Numero`) - Entrada: Variável que recebe o CEP do local.
- **pDataAnt** (`Numero End`) - Saída: Variável que retorna o dia útil imediatamente anterior, ou a data informada caso ela já seja dia útil.
- **pDataPos** (`Numero End`) - Saída: Variável que retorna o dia útil imediatamente posterior, ou a data informada caso ela já seja dia útil.

## Valores de Retorno

- - pDiaAnt: Variável numérica que retorna o dia útil imediatamente anterior, ou a data
- informada caso ela já seja dia útil.
- - pDiaPos: Variável numérica que retorna o dia útil imediatamente posterior, ou a data
- informada caso ela já seja dia útil.
- Exemplos:
- Ex. 1:
- vData = 25/12/2004
- RetDiaUtilAntPos(vData, vCEP, vDataAnt, vDataPos);
- Retorno será:
- vDataAnt = 24/12/2004
- vDataPos = 27/12/2004
- Ex. 2:
- vData = 09/05/2004
- RetDiaUtilAntPos(vData, vCEP, vDataAnt, vDataPos);
- Retorno será:
- vDataAnt = 07/05/2004
- vDataPos = 10/05/2004
- Ex. 3:
- vData = 19/04/2004
- RetDiaUtilAntPos(vData, vCEP, vDataAnt, vDataPos);
- Retorno será:
- vDataAnt = 19/04/2004
- vDataPos = 19/04/2004
- Ex. de regra:
- Definir Numero vData;
- Definir Numero vCEP;
- Definir Numero vDataAnt;
- Definir Numero vDataPos;
- Definir Alfa vDataAlf;
- vDataAlf = "19/04/2004";
- ConvDataInt(vDataAlf, vData);
- vCEP = 89107000;
- RetDiaUtilAntPos(vData, vCEP, vDataAnt, vDataPos);
- formula001 = vDataAnt;
- <!-- source: https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/retiraacentuacao.htm -->

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
RetDiaUtilAntPos();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
