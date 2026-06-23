# TrocarOpcaoOperacaoOP

## Assinatura

```lspt
Funcao TrocarOpcaoOperacaoOP(Alfa pParametros, Alfa End Retorno );
```

## Código
683

## Descrição

Efetuar a troca da opção de uma operação da O.P. para outra que esteja cadastrada no roteiro, recalculando os seus tempos. Ao alterar a opção de uma operação interna para externa, será verificado o valor do campo Gera Solicitação Serviço na Geração OP na origem da O.P. e de acordo com o valor deste campo será gerado a Solicitação de Compra ou a Ordem de Compra para o serviço.

## Parâmetros

- **pParametros** (`Alfa`) - Entrada: Nesta variável deverão ser concatenados os verdadeiros parâmetros separados por vírgula (vide exemplo abaixo), os quais são:   - CodOri: Origem - NumOrp: Número da OP; - CodEtg: Estágio da operação que será alterada; - SeqRot: sequência da opção que será alterada ; - SfxNov: Sufixo da nova opção.
- **Retorno** (`Alfa End`) - Saída: Se a função for executada com sucesso, o parâmetro Retorno terá o valor OK. Do contrário, será gerada uma mensagem de erro.

## Valores de Retorno

- Se a função for executada com sucesso, o parâmetro Retorno
- terá o valor OK. Do contrário, será gerada uma mensagem de erro.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
TrocarOpcaoOperacaoOP();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/trocaropcaooperacaoop.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
