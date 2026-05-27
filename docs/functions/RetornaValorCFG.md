# RetornaValorCFG

## Assinatura

```lspt
Funcao RetornaValorCFG(Alfa aChave, Alfa End aRetorno);
```

## Código
N/A

## Descrição

Responsável por retornar para a regra o valor de uma determinada chave da Central de Configuração Senior que está sendo utilizada pelo sistema. Esta função recebe um parâmetro do tipo alfanumérico referente ao nome da chave e retorna o valor da chave também em alfanumérico. A função pode ser chamada em qualquer regra de qualquer identificador de regra. Caso o valor da chave esteja em branco, o valor retornado é "( NULO )".

## Parâmetros

- **aChave** (`Alfa`) - Entrada: Nome da chave de configuração. Que pode conter: o nome completo, a parte final de uma chave ou então de uma das opções abaixo para retornar o diretório desses recursos:   - LOGS - TBS - Além do diretório, traz o nome do arquivo. - IMAGENS - ARQUIVOS - GRAFICOS - IMPEXP - CONSULTAS - REGRAS - CUBOS - MODELOS - TBS_TRANSLATION_FILTER_FILE   Caso seja informada apenas a parte final do nome da chave, será retornado o valor da primeira chave localizada que contenha a parte final informada.
- **aRetorno** (`Alfa End`) - Saída: Retorna o valor da chave.

## Exemplo de Uso

```lspt
Definir Alfa aChave;
Definir Alfa aRetorno;
aChave = "LOGS";
RetornaValorCFG(aChave, aRetorno);
@Mostra na tela o valor "\\servidor\ERP\Sapiens\Logs", que é o diretório configurado para os logs@
Mensagem(Retorna, aRetorno);

aChave = "com.senior.printers.path";
RetornaValorCFG(aChave, aRetorno);
@Mostra na tela o valor "\\servidor\ERP\Impressoras", que é o diretório configurado para as impressoras@
Mensagem(Retorna, aRetorno);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
