# HttpNormalizaRetorno

## Assinatura

```lspt
Funcao HttpNormalizaRetorno(Alfa end Objeto);
```

## Código
N/A

## Descrição

Aplica normalização Unicode para caracteres acentuados em respostas HTTP.

## Parâmetros

- **Objeto** (`Alfa end`) - Saída: Indica o objeto HTTP no qual a configuração será aplicada.

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaResposta;

HttpObjeto(vaHTTP);

@ Habilitar normalização Unicode @
HttpNormalizaRetorno(vaHTTP);

HttpGet(vaHTTP, "https://api.exemplo.com/dados-acentuados", vaResposta);

@ A resposta terá caracteres acentuados normalizados @
Mensagem(Retorna, vaResposta);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httpnormalizaretorno.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
