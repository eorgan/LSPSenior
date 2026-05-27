# LeDadosProdutoMinuta

## Assinatura

```lspt
Funcao LeDadosProdutoMinuta(Numero NPos, Numero End FLis, Alfa End pCodPro, Alfa End pCodDer, Alfa End pCplIpv, Numero End pQtde, Numero End;
```

## Código
N/A

## Descrição

Ler os produtos contidos na grade da tela de minuta de embarque.

## Parâmetros

- **NPos** - Entrada: Variável que indica a posição que deve ser lida na lista.
- **FLis** - Entrada: Variável numérica que indica o fim da lista.
- **pCodPro** - Entrada: Variável alfa que possui o código do produto.
- **pCodDer** - Entrada: Variável alfa que possui o código da derivação.
- **pCplIpv** - Entrada: Variável alfa que possui a descrição do produto.
- **pQtde** - Entrada: Variável numérica que possui a quantidade do produto pPesBru: variável numérica que possui o peso do produto proporcional a quantidade.
- **pPesBru** - Entrada
- **pMonEst** - Entrada: Variável numérica que indica se este produto terá sua estrutura listada.

## Valores de Retorno

- - FLis: variável numérica que indica o fim da lista.
- - pCodPro: variável alfa que possui o código do produto
- - pCodDer: variável alfa que possui o código da derivação
- - pCplIpv: variável alfa que possui a descrição do produto.
- - pQtde: variável numérica que possui a quantidade do produto pPesBru: variável numérica que possui o peso do produto proporcional a
- quantidade
- - pMonEst: variável numérica que indica se este produto terá sua estrutura
- listada

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LeDadosProdutoMinuta();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/ledadosprodutominuta.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
