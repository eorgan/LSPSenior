# GerarOP

## Assinatura

```lspt
Funcao GerarOP(Alfa pParam,Alfa End Retorno);
```

## Código
676

## Descrição

Esta função gera O.Ps. digitadas para o produto/derivação informados em pParam, de acordo com a quantidade informada. O usuário deverá informar uma data na variável DatIni ou na variável DatFim, uma delas deverá ter valor obrigatoriamente. Com o identificador de regras "[PCP-910RNOPF01](../identificadores_regras/pcp_910rnopf01.htm)" cadastrado e ativo, será retornado o número da OP gerada no final do processo. Nota Se o sistema estiver [parametrizado](../menu_controladoria/processo-bloco-k.htm#ParametrizacoesIniciais) para a geração do bloco K, algumas consistências e bloqueios podem ser realizadas nessa função, garantindo a correta geração de informações do arquivo, conforme guia prático. Confira estas consistências na tela Parâmetros e consistências da empresa [(F070ECN)](../menu_cadastros/f070ecn.htm).

## Parâmetros

- **pParam** (`Alfa`) - Entrada: Código do produto.
- **Retorno** (`Alfa End`) - Saída: Código da derivação.

## Valores de Retorno

- Recebe OK se a geração for concluída
- com sucesso. Caso o Identificador de Regras PCP-910RNOPF01 estiver ativo, o retorno será o número da OP gerada pela execução da função.

## Exemplo de Uso

```lspt
Definir Alfa Str;
Definir Alfa Retorno;
Definir Alfa DatStr;
Definir Numero DataNum;
IntParaAlfa(DatSis, DatStr); @ data atual @
Str =

"CodPro=2101,CodDer=1,QtdPro=12.5,DatIni="
+DatStr;
GerarOP(Str,Retorno);
Retorna = Mensagem(Retorna, Retorno);
//Mensagem "OK" ou número da OP.
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
