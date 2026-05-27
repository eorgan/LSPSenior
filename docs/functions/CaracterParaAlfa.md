# CaracterParaAlfa

## Assinatura

```lspt
Funcao CaracterParaAlfa(Caractere,Destino);
```

## Código
N/A

## Descrição

Converte um caracter (que fica armazenado pelo código ASCII) para o valor Alfanumérico correspondente. Importante Se for utilizar esta regra para inserir quebras de linha ao conteúdo para o envio de e-mail e na tela de **Envio de e-mail** da Central de Configurações Senior (Menu > Conexões de rede > Envio de e-mail), estiver habilitada a opção **Converter quebras de linha para HTML**, todas as quebras de linha Windows (compostas pelos caracteres ASCII 13 e 10) do conteúdo do e-mail serão convertidas para as tags <br/>, responsável por quebrar a linha no HTML.

## Parâmetros

- **Caractere** - Entrada: Campo/Variável que mantém o código ASCII de um caracter;
- **Destino** - Entrada: Variável que receberá o resultado da conversão

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CaracterParaAlfa();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/caracterparaalfa.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
