# DuplicarProdutoServicoEmpresa

## Assinatura

```lspt
Funcao DuplicarProdutoServicoEmpresa(Numero pEmpOri,Alfa pProSerOri, Alfa pTipo, Alfa pEmpDes, Alfa pParam, Alfa End Retorno);
```

## Código
678

## Descrição

Duplicar produtos/serviços entre empresas distintas.

## Parâmetros

- **pEmpOri** (`Numero`) - Entrada: Empresa do produto/serviço original.
- **pProSerOri** (`Alfa`) - Entrada: Código do produto/serviço original.
- **pTipo** (`Alfa`) - Entrada: Indica se a duplicação a ser feita é de um produto (P) ou serviço (S).
- **pEmpDes** (`Alfa`) - Entrada: Variável onde deverão ser informadas as empresas para as quais o produto/serviço deverá ser duplicado. Os códigos das empresas deverão aparecer separados por vírgula. Exemplo: "2,3" (duplicará para as empresas 2 e 3).
- **pParam** (`Alfa`) - Entrada: Parâmetros diversos para a duplicação, que poderão ser concatenados em uma só variável, separados por vírgula.   - Quando pTipo for igual a P (produto), podem ser passados os seguintes   parâmetros nesta variável:    - DupHis - Indica se os históricos devem ser duplicados ou não (S/N)   - DupEqu - Indica se os produtos equivalentes devem ser duplicados ou não (S/N)   - DupMod - Indica se o modelo do produto deve ser duplicado (S/N)   - DupRot - Indica se o roteiro do produto deve ser duplicado (S/N)   - DupCar - Indica se as características do produto devem ser duplicadas (S/N)   - AtuExi - Indica se o cadastro do produto deve ser atualizado na empresa     destino caso já exista (S/N)   - DupFam - Permite duplicar a família para outra empresa. - Quando pTipo for igual a S (serviço), podem ser passados os seguintes   parâmetros nesta variável:    - DupCar - Indica se as características do serviço devem ser duplicadas (S/N)   - AtuExi - Indica se o cadastro do serviço deve ser atualizado na empresa     destino caso já exista (S/N)
- **Retorno** (`Alfa End`) - Saída

## Valores de Retorno

- a variável Retorno receberá o valor "OK" se a duplicação acontecer com
- sucesso

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
DuplicarProdutoServicoEmpresa();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/duplicar-produto-servico-empresa.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
