# BuscaBaixaDepreciacao

## Assinatura

```lspt
Funcao BuscaBaixaDepreciacao(Numero pCodEmp, Alfa pCodBem, Numero pNumMan, Numero pDatMov, Numero pSeqMov, Alfa pCodTns, Alfa pTnsOri, Numero pVlrMov, Numero End BdpMio, Numero End BdpMco);
```

## Código
N/A

## Descrição

Retorna os valores da baixa da depreciação em índice oficial e em moeda corrente. Esta função facilita a busca das variáveis de retorno BdpMio e BdpMco, podendo ser utilizada para evitar cursores. Pode ser usada em regras e relatórios.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Código da empresa do movimento que se deseja buscar a baixa da depreciação.
- **pCodBem** (`Alfa`) - Entrada: Número de manutenção do movimento que se deseja buscar a baixa da depreciação.
- **pNumMan** (`Numero`) - Entrada: Número de manutenção do movimento que se deseja buscar a baixa da depreciação.
- **pDatMov** (`Numero`) - Entrada: Data do movimento que se deseja buscar a baixa da depreciação.
- **pSeqMov** (`Numero`) - Entrada: Sequência do movimento que se deseja buscar a baixa da depreciação.
- **pCodTns** (`Alfa`) - Entrada: Código da transação do movimento que se deseja buscar a baixa da depreciação.
- **pTnsOri** (`Alfa`) - Entrada: Valor do movimento que se deseja buscar a baixa da depreciação.
- **pVlrMov** (`Numero`) - Entrada: Valor do movimento que se deseja buscar a baixa da depreciação.
- **BdpMio** (`Numero End`) - Saída: Retorna o valor da baixa da depreciação em índice oficial.
- **BdpMco** (`Numero End`) - Saída: Retorna o valor da baixa da depreciação em moeda corrente.

## Valores de Retorno

- Variáveis BdpMio e BdpMco, conforme tabela acima.
- <!-- source: https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/buscabaixadepreciacaotipo.htm -->

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscaBaixaDepreciacao();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
