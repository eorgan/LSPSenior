# HttpObjeto

## Assinatura

```lspt
Funcao HttpObjeto(Alfa end Objeto);
```

## Código
N/A

## Descrição

Esta função retorna um objeto HTTP inicializado com as configurações definidas na tela de Configurações de Internet da Central de Configurações. A referência deve ser armazenada em uma variável do tipo Alfa para poder ser usada nas demais funções HTTP.

## Parâmetros

- **Objeto** (`Alfa end`) - Saída

## Exemplo de Uso

```lspt
Definir Alfa vHTTP;
HttpObjeto(vHTTP);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httpobjeto.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
