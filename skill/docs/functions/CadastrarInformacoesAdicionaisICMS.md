# CadastrarInformacoesAdicionaisICMS

## Assinatura

```lspt
Funcao CadastrarInformacoesAdicionaisICMS(Numero aEmpresa, Numero aFilial, Alfa aImposto, Data aPeriodoCalculo, Numero aDispositivo, Numero aValor);
```

## Código
N/A

## Descrição

Permitir gravar as informações adicionais na execução do identificador de regra [IMP-661CALIM02](../identificadores_regras/imp_661calim02.htm).

## Parâmetros

- **aEmpresa** (`Numero`) - Entrada
- **aFilial** (`Numero`) - Entrada
- **aImposto** (`Alfa`) - Entrada
- **aPeriodoCalculo** (`Data`) - Entrada
- **aDispositivo** (`Numero`) - Entrada
- **aValor** (`Numero`) - Entrada

## Valores de Retorno

- Não possui retorno, pois serve apenas para gravar registros na tabela Valores Declaratórios da Apuração (E661DEC).

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CadastrarInformacoesAdicionaisICMS();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/cadastrarinfadicionaisicms.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
