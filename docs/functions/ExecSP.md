# ExecSP

## Assinatura

```lspt
Funcao ExecSP(Alfa pNome, Alfa pParamEntrada, Alfa End pParamSaida);
```

## Código
N/A

## Descrição

Executa uma Stored Procedure do banco de dados definida no TBS. Os parâmetros vão e voltam em texto, no formato NOME=valor;NOME2=valor2. Não é obrigatório informar todos os parâmetros de entrada; todos os de saída voltam, mesmo sem valor. Datas seguem o formato padrão do sistema. Para ler um valor do retorno use ObtemValorParam.

## Parâmetros

- **pNome** (`Alfa`) - Entrada: Nome da Stored Procedure a executar.
- **pParamEntrada** (`Alfa`) - Entrada: Valores de entrada, identificados pelo nome do parâmetro (NOME=valor;NOME2=valor2). Ponha o valor entre aspas simples, obrigatoriamente quando ele contém ponto e vírgula.
- **pParamSaida** (`Alfa End`) - Saída: Retorna os valores informados e os valores devolvidos pela procedure, no mesmo formato.

## Valores de Retorno

- O resultado vem em pParamSaida; a função não documenta código de erro próprio.

## Exemplo de Uso

```lspt
Definir Alfa vaEntrada;
Definir Alfa vaRetorno;

vaEntrada = "p_idtpes='0100011000000001';p_numcra='010000000001'";
ExecSP("SP_ATUPRMLOC", vaEntrada, vaRetorno);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/execucao-de-stored-procedures-nas-regras/execsp.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
