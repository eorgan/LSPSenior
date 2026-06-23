# RetDiaUtilAntPos

## Assinatura

```lspt
Funcao Função RetDiaUtilAntPos (Numero pData, Numero pCEP, Numero End pDataAnt, Numero End pDataPos);
```

## Código
N/A

## Descrição

Verifica se uma data é dia útil ou não, retornando o dia útil imediatamente anterior e o posterior. Se a data informada for dia útil, traz essa data em ambos os retornos.

## Parâmetros

- **pData** (`Numero`) - Entrada: Variável numérica que recebe a data atual
- **pCEP** (`Numero`) - Entrada: Variável numérica que recebe o CEP do local
- **pDataAnt** (`Numero End`) - Saída: Variável numérica que retorna o dia útil imediatamente anterior, ou a data informada caso ela já seja dia útil
- **pDataPos** (`Numero End`) - Saída: Variável numérica que retorna o dia útil imediatamente posterior, ou a data informada caso ela já seja dia útil

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
Definir Funcao exemploRetDiaUtilAntPos();

@ Variáveis globais @
Definir Numero vnData;
Definir Numero vnCEP;
Definir Numero vnDataAnt;
Definir Numero vnDataPos;
Definir Alfa vaDataAlf;
Definir Alfa vaDataAntStr;
Definir Alfa vaDataPosStr;

exemploRetDiaUtilAntPos();

Funcao exemploRetDiaUtilAntPos(); {
  @ Exemplo com data de Natal (25/12/2024) @
  vaDataAlf = "25/12/2024";
  ConvDataInt(vaDataAlf, vnData);
  vnCEP = 89107000;
  
  @ Verifica dias úteis anteriores e posteriores @
  RetDiaUtilAntPos(vnData, vnCEP, vnDataAnt, vnDataPos);
  
  @ Converte as datas para string para exibição @
  ConvDataExt(vnDataAnt, vaDataAntStr);
  ConvDataExt(vnDataPos, vaDataPosStr);
  
  Definir Alfa vaMensagem;
  vaMensagem = "Data base: " + vaDataAlf;
  Mensagem(Retorna, vaMensagem);
  vaMensagem = "Dia útil anterior: " + vaDataAntStr;
  Mensagem(Retorna, vaMensagem);
  vaMensagem = "Dia útil posterior: " + vaDataPosStr;
  Mensagem(Retorna, vaMensagem);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/retdiautilantpos.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
