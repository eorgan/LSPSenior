# AdicionaEstagioRoteiro

## Assinatura

```lspt
Funcao AdicionaEstagioRoteiro (Alfa CodRot,Numero CodEtg,Numero SfxEtr,Numero TmpFix,Alfa CodSer,Numero CodFor,Numero FilPro);
```

## Código
670

## Descrição

Essa função cria um novo estágio de produção no roteiro. É necessário passar todos os parâmetros. Nota Se o sistema estiver [parametrizado](../menu_controladoria/processo-bloco-k.htm#ParametrizacoesIniciais) para a geração do bloco K, algumas consistências e bloqueios podem ser realizadas nessa função, garantindo a correta geração de informações do arquivo, conforme guia prático. Confira estas consistências na tela Parâmetros e consistências da empresa [(F070ECN)](../menu_cadastros/f070ecn.htm).

## Parâmetros

- **CodRot** (`Alfa`) - Entrada
- **CodEtg** (`Numero`) - Entrada
- **SfxEtr** (`Numero`) - Entrada
- **TmpFix** (`Numero`) - Entrada
- **CodSer** (`Alfa`) - Entrada
- **CodFor** (`Numero`) - Entrada
- **FilPro** (`Numero`) - Entrada

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AdicionaEstagioRoteiro();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
