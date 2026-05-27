# AdicionaOperacaoRoteiro

## Assinatura

```lspt
Funcao AdicionaOperacaoRoteiro (Alfa CodRot,Numero CodEtg,Numero SfxEtr,Numero SeqRot,Numero SfxSeq,Alfa CodOpr,Alfa CodSer,Numero CodFor,Numero TipPos,Numero PerSbr);
```

## Código
671

## Descrição

Essa função cria uma nova sequência de operação no estágio do roteiro. Não é necessário informar fornecedor e serviço. Todas as operações adicionadas serão do tipo automática. Nota Se o sistema estiver [parametrizado](../menu_controladoria/processo-bloco-k.htm#ParametrizacoesIniciais) para a geração do bloco K, algumas consistências e bloqueios podem ser realizadas nessa função, garantindo a correta geração de informações do arquivo, conforme guia prático. Confira estas consistências na tela Parâmetros e consistências da empresa [(F070ECN)](../menu_cadastros/f070ecn.htm).

## Parâmetros

- **CodRot** (`Alfa`) - Entrada
- **CodEtg** (`Numero`) - Entrada
- **SfxEtr** (`Numero`) - Entrada
- **SeqRot** (`Numero`) - Entrada
- **SfxSeq** (`Numero`) - Entrada
- **CodOpr** (`Alfa`) - Entrada
- **CodSer** (`Alfa`) - Entrada
- **CodFor** (`Numero`) - Entrada
- **TipPos** (`Numero`) - Entrada
- **PerSbr** (`Numero`) - Entrada

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AdicionaOperacaoRoteiro();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
