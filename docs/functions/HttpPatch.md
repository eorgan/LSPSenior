# HttpPatch

## Assinatura

```lspt
Funcao HttpPatch(Alfa end Objeto, Alfa URL, Alfa Dados, Alfa end Retorno);
```

## Código
N/A

## Descrição

Executa uma requisição HTTP PATCH para aplicar modificações parciais em um recurso. Ideal para atualizações que modificam apenas alguns campos.

## Parâmetros

- **Objeto** (`Alfa end`) - Saída: Objeto HTTP criado com HttpObjeto
- **URL** (`Alfa`) - Entrada: URL do recurso a ser modificado parcialmente
- **Dados** (`Alfa`) - Entrada: Dados de modificação parcial no formato texto
- **Retorno** (`Alfa end`) - Saída: Variável que receberá a resposta

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaResposta;
Definir Alfa vaDados;
Definir Numero vnStatus;

HttpObjeto(vaHTTP);
HttpDesabilitaErroResposta(vaHTTP);

vaDados = "{\"email\": \"novo@exemplo.com\"}";

HttpAlteraCabecalhoRequisicao(vaHTTP, "Content-Type", "application/json");
HttpAlteraCabecalhoRequisicao(vaHTTP, "Authorization", "Bearer token123");

HttpPatch(vaHTTP, "https://api.exemplo.com/perfil", vaDados, vaResposta);

HttpLeCodigoResposta(vaHTTP, vnStatus);
Se (vnStatus = 200) {
  Mensagem(Retorna, "Perfil atualizado com sucesso!");
} Senao {
  Mensagem(Erro, "Erro ao atualizar. Status: " + vnStatus);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/http-patch.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
