# MontaListEmbEst

## Assinatura

```lspt
Funcao MontaListEmbEst(Numero pEmp,Alfa pClc,Alfa pMod,Alfa Fam,Alfa pPro,Alfa pDep,Alfa pFxa,Alfa pPgr,Numero pEmb);
```

## Código
N/A

## Descrição

Esta função carrega uma lista com os saldos em estoque das embalagens em forma de Grade. (5.3.2.3) - foi modificado a função de programador "MontaListEmbEst". A mesma é utilizada no relatório padrão do sistema "CMEE037.GER". O bjetivo da função é o de permitir que sejam realizadas buscas de embalagens de estocagem, tanto avulsas quanto de estoques. Nesta função foram acrescentados mais dois campos para fins de filtro e retorno, são eles: Número da Embalagem "VNumEmb" e um indicativo se a pesquisa será por Embalagem ou não "S" ou "N". O procedimento irá funcionar da seguinte maneira: 1. modo antigo: O usuário utilizava a função "MontaListEmbEst" para montar a lista interna de registros,passando os parâmetros.: (Empresa,Colecao,Modelo,Familia,Produto,Deposito,Faixa,Proporcionalidade,Marca,Agrup. Est.,Tipo Embalagem,Agrupa Depósitos,Tipo Relatorio) e Lia a mesma com a função "LeMemListEmbEst". 2. modo novo: O usuário utilizará a mesma função, mas no final da função, existirão mais dois parâmetros,sendo: Numero da Embalagem (String de tamanho 30) e Busca Embalagens (String de tamanho 1). Em todos os lugares que utilizarem esta função, terão que ser alterados para receber mais estes dois parâmetros. Caso o usuário apenas deseje que a rotina fique igual, basta passar, "" e "N" neste campos. Mas caso os mesmos seja utilizados, o procedimento é o seguinte: - caso o campo Busca Embalagens estiver com valor "S", o sistem entederá que a busca está sendo feita por Embalagens e neste caso o campo Numero da Embalagem será respeitado. - caso o campo Busca Embalagens estiver com valor "N", o sistem entederá que a busca não está sendo feita por Embalagens e neste caso o campo Numero da Embalagem não será respeitado, ou seja, o sistema voltará a sua forma original de trabalho. Na leitura destas novas informações o sistema também foi modificado, da seguinte forma: 1. para atender ao modo antigo, ou seja, sem informar a embalagem e/ou não for uma busca por Embalagem, o usuário poderá continuar acessando a função "LeMemListEmbEst". 2. para atender ao modo novo, ou seja, informar a embalagem e for uma busca por Embalagem, o usuário deverá acessar a função "LeMemListEmbEst2". nesta nova função, o número da embalagem será retornado.

## Parâmetros

- **pEmp** (`Numero`) - Entrada: Empresa
- **pClc** (`Alfa`) - Entrada: Código da Coleção do Produto.
- **pMod** (`Alfa`) - Entrada: Modelo do Produto.
- **Fam** (`Alfa`) - Entrada: Família do Produto.
- **pPro** (`Alfa`) - Entrada: Código do Produto.
- **pDep** (`Alfa`) - Entrada: Código do Depósito.
- **pFxa** (`Alfa`) - Entrada: Código da Faixa da Grade.
- **pPgr** (`Alfa`) - Entrada: Proporcionalidade da Grade.
- **pEmb** (`Numero`) - Entrada: Código da Embalagem.

## Valores de Retorno

- Retorna uma lista com os saldos das embalagens.
- Dica: Os campos Numero da Embalagem e Busca Embalagens, poderão ser parâmetros de
- Entrada do Relatório, para facilitar a codificação do mesmo.
- <!-- source: https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/montanumlancamento.htm -->

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MontaListEmbEst();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
