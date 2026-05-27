# SapiensSID

## Assinatura

```lspt
Funcao SapiensSID(alfa URL, alfa End RETORNO);, True);
```

## Código
556

## Descrição

Função utilizada para obter dados a partir de um endereço HTTP, ou executar funções do SapiensSID. Não são usados cookies para manter a sessão, sendo exclusivamente mantidas pelos parâmetros User e Connection, obrigatórios no corpo da ação.

## Parâmetros

- **URL** (`alfa`) - Entrada: Endereço no formato HTTP.
- **RETORNO** (`alfa End`) - Saída: Texto ou conteúdo da página HTML retornado a partir do endereço informado no parâmetro.

## Valores de Retorno

- texto ou conteúdo da página HTML retornado a partir do endereço
- informado no parâmetro.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SapiensSID();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
