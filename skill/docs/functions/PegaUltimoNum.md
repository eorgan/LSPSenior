# PegaUltimoNum

## Assinatura

```lspt
Funcao PegaUltimoNum(Numero CodEmp, Numero CodFil, Alfa CamBas,Alfa DesCam, Numero End NumFcc, Numero End FlagFim);
```

## Código
89

## Descrição

Pega o Ultimo Numero de Formulário impresso. Se o usuário já tiver informado na tela de entrada, permanece o que  ele informou, porém chama a função para verificar se já existe um registro na tabela E078Ult para o CAMBAS = "NUMFCC". Se não existe então cria um

## Parâmetros

- **CodEmp** (`Numero`) - Entrada: Código da empresa.
- **CodFil** (`Numero`) - Entrada: Código da filial.
- **CamBas** (`Alfa`) - Entrada
- **DesCam** (`Alfa`) - Entrada
- **NumFcc** (`Numero End`) - Saída: Retorna o último número gravado para esta chave, e CAMBAS = 'NUMFCC' (Certificado de Classificação).
- **FlagFim** (`Numero End`) - Saída: Retorna 1 quando o usuário respodeu que não quer iniciar a impressão do número de certificado sugerido(quando não é informado o último número, sugere o próximo do que está gravado na tabela E078ULT para o CamBas 'NUMFCC').

## Valores de Retorno

- De acordo com as variáveis NumFcc e FlagFim acima.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
PegaUltimoNum();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/pegaultimonum.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
