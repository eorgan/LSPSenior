# AdicionaConsumoComponente

## Assinatura

```lspt
Funcao AdicionaConsumoComponente (Alfa CodMod, Numero CodEtg, Numero SeqMod, Alfa CodDer, Alfa CodCmp, Alfa DerCmp, Numero QtdUti,Numero PerPrd, Numero QtdFrq);
```

## Código
N/A

## Descrição

Essa função adiciona um consumo para uma derivação do modelo no componente. É opcional informar % Perda. Nota Se o sistema estiver [parametrizado](../menu_controladoria/processo-bloco-k.htm#ParametrizacoesIniciais) para a geração do bloco K, algumas consistências e bloqueios podem ser realizadas nessa função, garantindo a correta geração de informações do arquivo, conforme guia prático. Confira estas consistências na tela Parâmetros e consistências da empresa [(F070ECN)](../menu_cadastros/f070ecn.htm).

## Parâmetros

- **CodMod** (`Alfa`) - Entrada
- **CodEtg** (`Numero`) - Entrada
- **SeqMod** (`Numero`) - Entrada
- **CodDer** (`Alfa`) - Entrada
- **CodCmp** (`Alfa`) - Entrada
- **DerCmp** (`Alfa`) - Entrada
- **QtdUti** (`Numero`) - Entrada
- **PerPrd** (`Numero`) - Entrada
- **QtdFrq** (`Numero`) - Entrada

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AdicionaConsumoComponente();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
