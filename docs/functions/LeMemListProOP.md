# LeMemListProOP

## Assinatura

```lspt
Funcao LeMemListProOP(Numero NumPos,Numero End Fim,Alfa End CodNiv,Alfa End CodPro,Alfa End CodDer,Numero End CodEtg,Numero End SeqCmp,Alfa End CodCmp,Alfa End DerCmp,Alfa End RelPrd,Alfa End BxaOrp,Alfa End CodOri, Numero End NumOrp);
```

## Código
660

## Descrição

Esta função lê os dados da lista em memória que possui a estrutura de componentes do produto de uma OP.

## Parâmetros

- **NumPos** (`Numero`) - Entrada: Número da posição da lista a ser lida.
- **Fim** (`Numero End`) - Saída: Indica se a lista acabou (valor um) ou não (valor zero).
- **CodNiv** (`Alfa End`) - Saída: Nível do componente.
- **CodPro** (`Alfa End`) - Saída: Código do produto da OP (pai do componente).
- **CodDer** (`Alfa End`) - Saída: Código da derivação do produto da OP (pai do componente).
- **CodEtg** (`Numero End`) - Saída: Código do estágio do componente.
- **SeqCmp** (`Numero End`) - Saída: Sequência do componente.
- **CodCmp** (`Alfa End`) - Saída: Código do componente.
- **DerCmp** (`Alfa End`) - Saída: Derivação do componente.
- **RelPrd** (`Alfa End`) - Saída: Relatório de produção.
- **BxaOrp** (`Alfa End`) - Saída: Indicativo se o produto baixa na OP.
- **CodOri** (`Alfa End`) - Saída: Origem da OP a que o componente pertence.
- **NumOrp** (`Numero End`) - Saída: Número da OP a que o componente pertence.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LeMemListProOP();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
