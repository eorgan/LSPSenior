# CriaNovoProduto

## Assinatura

```lspt
Funcao CriaNovoProduto (Alfa CodFam, Alfa CodPro, Alfa DesPro);
```

## Código
664

## Descrição

Essa função cria um novo produto herdando todas as informações da família. Necessário informar todos os parâmetros. Nota Se o sistema estiver [parametrizado](../menu_controladoria/processo-bloco-k.htm#ParametrizacoesIniciais) para a geração do bloco K, algumas consistências e bloqueios podem ser realizadas nessa função, garantindo a correta geração de informações do arquivo, conforme guia prático. Confira estas consistências na tela Parâmetros e consistências da empresa [(F070ECN)](../menu_cadastros/f070ecn.htm).

## Parâmetros

- **CodFam** (`Alfa`) - Entrada: Código da família do produto criado.
- **CodPro** (`Alfa`) - Entrada: Código do produto criado.
- **DesPro** (`Alfa`) - Entrada: Descrição do produto criado.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CriaNovoProduto();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/crianovoproduto.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
