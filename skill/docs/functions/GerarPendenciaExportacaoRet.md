# GerarPendenciaExportacaoRet

## Assinatura

```lspt
Funcao GerarPendenciaExportacaoRet(Numero CodInt, Numero IdeInt, Alfa Chave, Alfa MsgRetorno);
```

## Código
814

## Descrição

Gerar pendência de integração de informações com sistemas externos.

## Parâmetros

- **CodInt** (`Numero`) - Entrada: Variável do código de sistema integrado (tela F000SIS - Cadastros / Integrações / Cadastro de Sistemas Integrados).
- **IdeInt** (`Numero`) - Entrada: Variável do tipo de informação (ver na tabela abaixo). A variável deve ser preenchida com o conteúdo da coluna IdeInt que se quer exportar.
- **Chave** (`Alfa`) - Entrada: Variável referente a chave do registro que será gerado pendência, conforme tabela abaixo. Os códigos devem ser separados pelo caracter ";".
- **MsgRetorno** (`Alfa`) - Entrada: Em caso de problemas na execução da função, esta mensagem será retornada por esta variável. Caso a execução seja bem sucedida, a variável não retornará nenhum conteúdo.

## Valores de Retorno

- aMsgTipo de retorno: Em caso de problemas na execução da função, esta mensagem
- será retornada por esta variável. Caso a execução seja bem sucedida, a
- variável não retornará nenhum conteúdo.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
GerarPendenciaExportacaoRet();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/gerarpendenciaexportacaoret.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
