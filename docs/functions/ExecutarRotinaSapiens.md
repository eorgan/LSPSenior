# ExecutarRotinaSapiens

## Assinatura

```lspt
Funcao ExecutarRotinaSapiens(Numero pEmpresaExecusao, Numero pFilialExecucao, Numero pRotinaSapiens, Alfa pParamentros, Alfa end pStatus, Alfa end pMensagemErro);
```

## Código
954

## Descrição

Permite executar Rotinas Sapiens sem necessidade de agendamento por meio da tela [Cadastro de Processo Automático (F000AGE)](../menu_recursos/f000age.htm). Atende a chamada das seguintes rotinas: - 87 - Movimentar pendências de estoque de faturamento Confira também o web service [com.senior.g5.co.cad.rotinasapiens](../webservices/com_senior_g5_co_cad_rotinasapiens.htm).

## Parâmetros

- **pEmpresaExecusao** (`Numero`) - Entrada: Define a empresa de execução
- **pFilialExecucao** (`Numero`) - Entrada: Define a filial de execução
- **pRotinaSapiens** (`Numero`) - Entrada: Define a Rotina Sapiens que será executada
- **pParamentros** (`Alfa`) - Entrada: Define os parâmetros da rotina Sapiens. Por padrão, os parâmetros devem ser separados pelo caractere / (barra inclinada). Porém, caso seja necessário informar um parâmetro de data no formato dd/mm/aaaa, deve-se ativar o parâmetro global UtiSprPip e os parâmetros devem ser separados pelo caractere
- **pStatus** (`Alfa end`) - Saída: Retorna o Status da execução: 'OK' ou 'ERRO'
- **pMensagemErro** (`Alfa end`) - Saída: Retorna a mensagem de erro

## Exemplo de Uso

```lspt
Definir numero xEmpExec;
Definir numero xFilExec;
Definir numero xRotSapiens;
Definir alfa xParametros;

Definir alfa xRetornoStatus;
Definir alfa xRetornoMensagemErro;

xEmpExec = 120;
xfilexec = 3;
xRotSapiens = 87;

@formato padrão@
xParametros = "FILTRO_EMPRESA=120/FILTRO_FILIAL=3,7";

@formato informando data como parâmetro no formato dd/mm/aaaa@
xParametros = "FILTRO_EMPRESA=120|FILTRO_FILIAL=3,7|LIMITE_EMISSAO=31/12/2024";

ExecutarRotinaSapiens(xEmpExec, xFilExec, xRotSapiens, xparametros, xRetornoStatus, xRetornoMensagemErro);

x=x;
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
