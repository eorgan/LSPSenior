# CancelaSaldoRequisicoes

## Assinatura

```lspt
Funcao CancelaSaldoRequisicoes(Numero pCodEmp, Numero pNumEme, Numero pSeqEme, Numero pUsuEme,  Numero pDatEme,Numero pFilEme, Alfa pCodTns, Alfa pCodPro, Alfa pCodDer, Alfa pCodSer, Alfa pCodDep, Numero pQtdCan);
```

## Código
686

## Descrição

A função de programador "CancelaSaldoRequisicoes" tem por objetivo cancelar o saldo de itens de requisições a partir de uma regra, ligada ao agendador de processos, ou através de modelos de relatório. Apenas os itens de requisições em situações "1-DIGITADA" e "2-APROVADA" serão considerados para o cancelamento. No processo de cancelamento, o sistema fará todas as consistências necessárias para garantir a integridade do processo, como por exemplo: a retirada do produto da reserva, inclusão de um descritivo na observação da requisição, troca de situação, etc...

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Empresa ao qual a requisição pertence (obrigatório informar).
- **pNumEme** (`Numero`) - Entrada: Número específico da requisição, caso o usuário deseja excluir apenas esta requisições e seus itens.
- **pSeqEme** (`Numero`) - Entrada: Sequência específica da requisição, caso o usuário desejar excluir apenas este item de requisição. Neste caso o número da requisição é obrigatório.
- **pUsuEme** (`Numero`) - Entrada: Usuário da requisição. Apenas requisições feitas por um usuário específico.
- **pDatEme** (`Numero`) - Entrada: Apenas requisições feitas em uma determinada data. Neste caso, o sistema irá cancelar todas as requisições da data informada até hoje (E207EME.DATEME >= pDatEme).
- **pFilEme** (`Numero`) - Entrada: Filial da requisição. Apenas requisições feitas em uma determinada filial.
- **pCodTns** (`Alfa`) - Entrada: Transação da requisição: Apenas requisições feitas para uma determinada transação.
- **pCodPro** (`Alfa`) - Entrada: Produto da requisição. Apenas requisições feitas para um determinado produto.
- **pCodDer** (`Alfa`) - Entrada: Derivação da requisição. Apenas requisições feitas para uma determinada derivação.
- **pCodSer** (`Alfa`) - Entrada: Serviço da requisição. Apenas requisições feitas em um determinado serviço.
- **pCodDep** (`Alfa`) - Entrada: Depósito da requisição. Apenas requisições feitas em um determinado depósito.
- **pQtdCan** (`Numero`) - Entrada: Caso o usuário informar uma quantidade, o sistema a respeitará. Porém, caso for "0-zero", o sistema cancelará total.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CancelaSaldoRequisicoes();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/fun_cancelasaldorequisicoes.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
