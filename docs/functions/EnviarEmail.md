# EnviarEmail

## Assinatura

```lspt
Funcao EnviarEmail(Alfa Remetente, Alfa Assunto, Alfa Destinatario, Alfa CopiaPara, Alfa CopiaOculta, Alfa Corpo, Alfa Anexo, Alfa FormatoMensagem);
```

## Código
N/A

## Descrição

Envia e-mails através de uma regra ou de um modelo de relatório.

## Parâmetros

- **Remetente** (`Alfa`) - Entrada: Variável que deve conter o endereço de e-mail do remetente.
- **Assunto** (`Alfa`) - Entrada: Variável que recebe o assunto da mensagem.
- **Destinatario** (`Alfa`) - Entrada: Variável que deve conter o endereço do(s) destinatário(s) do e-mail.
- **CopiaPara** (`Alfa`) - Entrada: Variável que deve conter o endereço do(s) destinatário(s) que receberão cópia do e-mail.
- **CopiaOculta** (`Alfa`) - Entrada: Variável que deve conter o endereço do(s) destinatário(s) que receberão cópia oculta do e-mail (sem que os destinatários em Destinatario e CopiaPara tenham conhecimento).
- **Corpo** (`Alfa`) - Entrada: Variável que recebe o corpo da mensagem do e-mail.
- **Anexo** (`Alfa`) - Entrada: Variável que recebe caminho e nome do(s) anexo(s) do e-mail.
- **FormatoMensagem** (`Alfa`) - Entrada: Variável que define a formatação de exibição do corpo da mensagem. Deve ser utilizado "T" para o formato Texto ou "H" para o formato HTML.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
EnviarEmail();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/enviaremail.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
