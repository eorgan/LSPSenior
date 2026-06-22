# AtualizaBarraProgresso

## Assinatura

```lspt
Funcao AtualizaBarraProgresso(Alfa Texto1, Alfa Texto2, Alfa Incrementa, Numero Tipo);
```

## Código
N/A

## Descrição

Atualiza o progresso e a mensagem da barra.

## Parâmetros

- **Texto1** (`Alfa`) - Entrada: Variável alfanumérica com o valor que será atribuído ao campo Texto 1 da barra de progresso
- **Texto2** (`Alfa`) - Entrada: Variável alfanumérica com o valor que será atribuído ao campo Texto 2 da barra de progresso
- **Incrementa** (`Alfa`) - Entrada: Variável Alfanumérica que indica se incrementa ou não a barra de progresso, deve ser utilizado **SIM** ou **NÃO**
- **Tipo** (`Numero`) - Entrada: Variável numérica que indica o tipo de atualização dos parâmetros acima:  1. Atualiza apenas o campo **Texto1**; 2. Atualiza apenas o campo **Texto2**; 3. Atualiza todos os campos; 4. Não atualiza o texto dos campos.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AtualizaBarraProgresso();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/atualizabarraprogresso.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
