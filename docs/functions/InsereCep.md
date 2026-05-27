# InsereCep

## Assinatura

```lspt
funcao InsereCep(numero pCepIni, numero pCepFim, Alfa pSigUfs, Alfa pNomCid);
```

## Código
535

## Descrição

Incluir/Atualizar a tabela E008Cep com os parâmetros informados.

## Parâmetros

- **pCepIni** (`numero`) - Entrada: Variável que recebe o Cep Inicial da faixa.
- **pCepFim** (`numero`) - Entrada: Variável que recebe o Cep final da faixa.
- **pSigUfs** (`Alfa`) - Entrada: Variável que recebe o estado da cidade do Cep.
- **pNomCid** (`Alfa`) - Entrada: Variável que recebe o Nome da Cidade do Cep.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
InsereCep();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/inserecep.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
