# HttpAlteraRedirecionamento

## Assinatura

```lspt
Funcao HttpAlteraRedirecionamento(Alfa Objeto, Numero AceitaRedirecionamento);
```

## Código
N/A

## Descrição

Controla o tratamento automático de redirecionamentos HTTP (3xx).

## Parâmetros

- **Objeto** (`Alfa`) - Entrada: Objeto HTTP criado com HttpObjeto
- **AceitaRedirecionamento** (`Numero`) - Entrada: 0 = Não trata, 1 = Trata redirecionamentos

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaResposta;

HttpObjeto(vaHTTP);

@ Habilitar tratamento automático de redirecionamentos @
HttpAlteraRedirecionamento(vaHTTP, 1);

HttpGet(vaHTTP, "https://site-com-redirect.exemplo.com", vaResposta);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/http-altera-redirecionamento.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
