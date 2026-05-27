# GerarPendenciaExportacao

## Assinatura

```lspt
Funcao GerarPendenciaExportacao(Numero CodInt, Numero IdeInt, Alfa Chave);
```

## Código
812

## Descrição

Gerar pendência de integração de informações com sistemas externos.

## Parâmetros

- **CodInt** (`Numero`) - Entrada: Variável do código de sistema integrado (tela F000SIS - Cadastros / Integrações / Cadastro de Sistemas Integrados).
- **IdeInt** (`Numero`) - Entrada: Variável do tipo de informação (ver na tabela abaixo). A variável deve ser preenchida com o conteúdo da coluna IdeInt que se quer exportar.
- **Chave** (`Alfa`) - Entrada: Variável alfa referente a chave do registro que será gerado pendência, conforme tabela abaixo. Os códigos devem ser separados pelo caracter ";".

## Valores de Retorno

- Caso ocorra alguma inconsistência na
- execução da função, esta será retornada em tela para o usuário.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
GerarPendenciaExportacao();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
