# ImprimeNotasFiscaisSaida

## Assinatura

```lspt
Funcao ImprimeNotasFiscaisSaida (Alfa pCodSnf, Alfa pAbrNfs, Numero pUltNpi, Alfa pNomRel, Alfa pNomImp);
```

## Código
N/A

## Descrição

Tem como finalidade imprimir uma abragência de notas fiscais de saída, de uma série específica, permitindo configurar o comportamento da solicitação do último número pré-impresso (busca e solicita ao usuário, busca e não solicita ao usuário, ou utiliza informado sem solicitar confirmação ao usuário), além de permitir personalizar o modelo de relatório de notas de saída e a impressora a ser utilizada. Implementada uma nova função de programador, para ser utilizada nas regras do sistema, cujo objetivo é enviar notas fiscais de saída para a impressão. Os detalhes da função são os seguintes:

## Parâmetros

- **pCodSnf** (`Alfa`) - Entrada: Série da nota fiscal de saída a ser impressa (um único valor, não é abrangência).
- **pAbrNfs** (`Alfa`) - Entrada: Abrangência de número de notas de saída, pertencentes a série passada. É uma lista cujos número das notas devem estar separados por vírgula.
- **pUltNpi** (`Numero`) - Entrada: Número do último número pré-impresso. Esse campo pode assumir os valores qualquer número maior que zero: O sistema utilizará este valor como número pré-impresso.  -1 : Para que o sistema busque o último número pré-impresso automaticamente, e não abra ao usuário a tela de solicitação para informação deste valor; 0 : Para que o sistema busque o último número pré-impresso automaticamente, e abra ao usuário a tela de solicitação para informação ou confirmação deste valor.
- **pNomRel** (`Alfa`) - Entrada: Nome (nome e extensão) do arquivo de modelo, que será usado para imprimir a nota. Pode ser passado vazio, sendo que então é assumido o modelo que consta na série da nota fiscal de saída.
- **pNomImp** (`Alfa`) - Entrada: Nome da impressora. Nome da impressora do sistema, para uso. Pode ser passada vazio, sendo que então é assumido o que está definido no modelo (formato de saída) ou na lógica do modelo. Em ambientes sem interação com o usuário (Sapiens SID ou Agendador) é recomendado passar este valor quando não está definido na lógica do modelo qual impressora utilizar, mesmo que definido no formato de saída do relatório.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ImprimeNotasFiscaisSaida();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/imprimenotasfiscaissaida.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
