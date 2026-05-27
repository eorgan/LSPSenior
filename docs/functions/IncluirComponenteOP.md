# IncluirComponenteOP

## Assinatura

```lspt
Funcao IncluirComponenteOP(Alfa pParametros,Alfa End pRetorno);
```

## Código
757

## Descrição

Incluir componentes na O.P.

## Parâmetros

- **pParametros** (`Alfa`) - Entrada: Código da Origem.
- **pRetorno** (`Alfa End`) - Saída: Número da OP.

## Exemplo de Uso

```lspt
definir
alfa
 vParametros;
definir
alfa
 vRetorno;
vParametros =
"CodOri=100,NumOrp=42,CodEtg=5,CodCmp=3034,CodDer=PR,QtdPrv=8,
CodDep=01"
;
IncluirComponenteOP(vparametros,vretorno);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
