# ImportacaoMoeda

## Assinatura

```lspt
Funcao ImportacaoMoeda(Alfa pCodMoe,Alfa pDesMoe,Alfa pSigMoe,Alfa pTipCot,Numero pDiaBas,Numero pNroInteiros,Numero End pNroDecimais);
```

## Código
N/A

## Descrição

Função desenvolvida para rotina de importação de Moedas. Sua finalidade é especifica para cadastramento de moedas via Importação.

## Parâmetros

- **pCodMoe** (`Alfa`) - Entrada: Código da moeda.
- **pDesMoe** (`Alfa`) - Entrada: Descrição da moeda. Ao importar uma moeda (que ainda não existe na base), e passar para esta variável nenhum valor (""), o será sugerido a "Sigla da moeda" para o campo Descrição da moeda.
- **pSigMoe** (`Alfa`) - Entrada: Sigla da moeda.
- **pTipCot** (`Alfa`) - Entrada: Tipo de cotação da moeda.
- **pDiaBas** (`Numero`) - Entrada: Dia base da Moeda (Deve ser informado quando o tipo de Cotação for "Mensal").
- **pNroInteiros** (`Numero`) - Entrada: Quantidade de inteiros da cotação da moeda.
- **pNroDecimais** (`Numero End`) - Saída: Quantidade de decimais da cotação da moeda.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ImportacaoMoeda();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
