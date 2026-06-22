# HttpGet

## Assinatura

```lspt
Funcao HttpGet(Alfa Objeto, Alfa URL, Alfa end HTML);
```

## Código
N/A

## Descrição

Executa uma requisição HTTP GET para obter dados de um servidor. É o método mais utilizado para consulta de dados em APIs REST.

## Parâmetros

- **Objeto** (`Alfa`) - Entrada: Objeto HTTP criado com HttpObjeto
- **URL** (`Alfa`) - Entrada: URL completa do endpoint (deve incluir http:// ou https://)
- **HTML** (`Alfa end`) - Saída: Variável que receberá a resposta do servidor

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaResposta;
Definir Numero vnStatus;

HttpObjeto(vaHTTP);
HttpDesabilitaErroResposta(vaHTTP);

HttpGet(vaHTTP, "https://api.exemplo.com/usuarios", vaResposta);
HttpLeCodigoResposta(vaHTTP, vnStatus);

Se (vnStatus = 200) {
  @ Processar resposta @
  Mensagem(Retorna, "Dados recebidos com sucesso!");
} Senao {
  @ Tratar erro @
  Mensagem(Erro, "Erro na requisição. Status: " + vnStatus);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httpget.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
