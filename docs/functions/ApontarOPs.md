# ApontarOPs

## Assinatura

```lspt
Funcao ApontarOPs(Alfa pParam,Alfa End Retorno);
```

## Código
646

## Descrição

Movimenta O.P.s. Se o sistema estiver [parametrizado](../menu_controladoria/processo-bloco-k.htm#ParametrizacoesIniciais) para a geração do Bloco K, algumas consistências e bloqueios podem ser realizadas nessa função, garantindo a correta geração de informações do arquivo, conforme guia prático. Confira estas consistências na tela Parâmetros e consistências da empresa [(F070ECN)](../menu_cadastros/f070ecn.htm).

## Parâmetros

- **pParam** (`Alfa`) - Entrada: Código da Origem da O.P./O.S
- **Retorno** (`Alfa End`) - Saída: Retorno

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ApontarOPs();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/apontarops.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
