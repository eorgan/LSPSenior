# LeDadosComponentesMinuta

## Assinatura

```lspt
Funcao LeDadosComponentesMinuta(Numero NPos, Numero End FLis, Alfa End pCodPro, Alfa End pCodDer, Alfa End pCplIpv, Numero End pQtde, Numero End;
```

## Código
N/A

## Descrição

Ler os componentes dos produtos assinalados para listar a estrutura na tela de minuta de embarque e os itens inseridos manualmente.

## Parâmetros

- **NPos**: Variável que indica a posição que deve ser lida na lista.
- **FLis**: Variável que indica o fim da lista.
- **pCodPro**: Variável que possui o código do produto
- **pCodDer**: Variável que possui o código da derivação.
- **pCplIpv**: Variável que possui a descrição do produto.
- **pQtde**: Variável que possui a quantidade do produto.
- **pPesBru**: Variável que possui o peso bruto unitário do produto.

## Valores de Retorno

- - FLis: Variável numérica que indica o fim da lista.
- - pCodPro: Variável alfa que possui o código do produto.
- - pCodDer: Variável alfa que possui o código da derivação.
- - pCplIpv: Variável alfa que possui a descrição do produto.
- - pQtde: Variável numérica que possui a quantidade do produto.
- - pPesBru: Variável numérica que possui o peso bruto unitário do produto.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LeDadosComponentesMinuta();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
