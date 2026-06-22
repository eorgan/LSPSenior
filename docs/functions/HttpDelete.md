# HttpDelete

## Assinatura

```lspt
Funcao HttpDelete(Alfa Objeto, Alfa URL, Alfa end HTML);
```

## Código
N/A

## Descrição

Executa uma requisição HTTP DELETE para remover recursos. Usado para exclusão de dados específicos.

## Parâmetros

- **Objeto** (`Alfa`) - Entrada: Objeto HTTP criado com HttpObjeto
- **URL** (`Alfa`) - Entrada: URL do recurso a ser removido
- **HTML** (`Alfa end`) - Saída: Variável que receberá a resposta

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaResposta;
Definir Numero vnStatus;

HttpObjeto(vaHTTP);
HttpDesabilitaErroResposta(vaHTTP);

@ Configurar autenticação @
HttpAlteraCabecalhoRequisicao(vaHTTP, "Authorization", "Bearer token123");

HttpDelete(vaHTTP, "https://api.exemplo.com/usuarios/123", vaResposta);

@ Verificar resultado @
HttpLeCodigoResposta(vaHTTP, vnStatus);
Se (vnStatus = 204) {
  Mensagem(Retorna, "Usuário excluído com sucesso!");
} Senao {
  Mensagem(Erro, "Erro ao excluir usuário. Status: " + vnStatus);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httpdelete.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
