# CriarEstoque

## Assinatura

```lspt
Funcao CriarEstoque(Alfa End Produto, Alfa End Derivacao, Alfa End Deposito);
```

## Código
770

## Descrição

Ligar o produto a vários depositos. Nota Se o sistema estiver [parametrizado](../menu_controladoria/processo-bloco-k.htm#ParametrizacoesIniciais) para a geração do bloco K, algumas consistências e bloqueios podem ser realizadas nessa função, garantindo a correta geração de informações do arquivo, conforme guia prático. Confira estas consistências na tela Parâmetros e consistências da empresa [(F070ECN)](../menu_cadastros/f070ecn.htm).

## Parâmetros

- **Produto** (`Alfa End`) - Saída
- **Derivacao** (`Alfa End`) - Saída
- **Deposito** (`Alfa End`) - Saída

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CriarEstoque();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/criarestoque%20.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
