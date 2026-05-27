# ExecutarRotinaSistema

## Assinatura

```lspt
Funcao ExecutarRotinaSistema(Numero aRotina, Alfa aParametros);
```

## Código
652

## Descrição

Esta função surgiu de uma necessidade específica, que era limpar dados repetidos das tabelas citadas. A rotina "varre" os registros das tabelas na ordem cronológica, e compara um registro com o registro seguinte, e caso forem iguais, manda excluir o segundo registro. Como a rotina exclui os registros repetidos, não há risco de perda de dados, no entanto pode ser que o sistema não exclua nenhum registro. Os dados são usados pelo SPED, Instrução Normativa 86 e outras obrigações fiscais. Se forem eliminados registros, pode haver prejuízo ao demonstrar algumas obrigações. A função foi criada prevendo a possibilidade de ser usada para outras rotinas, mas no momento só está preparada para a rotina **1**, que é a limpeza das tabelas de logs de alteração dos cadastros de: - E073VTR = Transportadoras - E085VCL = Clientes - E090VRE = Representantes - E095VFO = Fornecedores Para executar, deve ser informado **1** como parâmetro. Não há possibilidade de passar outros parâmetros como intervalo.

## Parâmetros

- **aRotina** (`Numero`) - Entrada: Número da rotina a ser executada
- **aParametros** (`Alfa`) - Entrada: Parâmetros para a rotina a ser executada, no formato "<nome>=<valor>", separados por vírgula.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ExecutarRotinaSistema();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/executarrotinasistema.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
