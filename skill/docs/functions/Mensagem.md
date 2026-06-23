# Mensagem

## Assinatura

```lspt
Funcao Mensagem(tipoMensagem, descricaoMensagem);
```

## Código
N/A

## Descrição

Apresenta a mensagem em tela de acordo com a parametrização do tipo de retorno e da mensagem que será visualizada.

## Parâmetros

- **tipoMensagem** - Entrada: **Retorna** – Mostra uma mensagem de aviso, com os botões especificados entre colchetes. O símbolo & indica tecla de aceleração (atalho);  **Erro** – Gera uma exceção, mostrando uma mensagem de erro e abortando a execução da regra;   **Refaz** - Gera uma exceção, mostrando uma mensagem de erro e abortando a execução da regra.
- **descricaoMensagem** - Entrada: Texto com a mensagem a ser exibida.

## Exemplo de Uso

```lspt
Mensagem(Retorna, “Deseja Sair? [&Sim,&Não]”);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/mensagem.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
