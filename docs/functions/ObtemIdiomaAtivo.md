# ObtemIdiomaAtivo

## Assinatura

```lspt
Funcao ObtemIdiomaAtivo(valorIdioma);
```

## Código
N/A

## Descrição

Retorna o código do idioma utilizado pelo usuário.

## Parâmetros

- **valorIdioma** - Entrada: Campo ou variável que receberá o valor de retorno do idioma utilizado (ex: "PTBRN")

## Exemplo de Uso

```lspt
Definir Alfa vaValorIdioma;

ObtemIdiomaAtivo(vaValorIdioma);
Definir Alfa vaMensagemIdioma;
vaMensagemIdioma = "Idioma ativo: " + vaValorIdioma;
Mensagem(Retorna, vaMensagemIdioma);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/obtemidiomaativo.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
