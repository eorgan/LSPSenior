# ExecProg

## Assinatura

```lspt
Funcao ExecProg(nomePrograma, parametroComando, esperar);
```

## Código
N/A

## Descrição

Permite a execução de aplicativos durante a execução de regras.

## Parâmetros

- **nomePrograma** - Entrada: Caminho do diretório e nome do programa a ser executado com sua extensão
- **parametroComando** - Entrada: Parâmetros que podem ser incluídos na execução do programa.
- **esperar** - Entrada: 0 – Executa o programa e ao mesmo tempo continua a execução da regra;  1 – Aguarda a execução do programa para prosseguir com a execução da regra.

## Exemplo de Uso

```lspt
Definir alfa vPrograma;
Definir alfa vParametro;
vPrograma =
"c:\\windows\\notepad.exe"
;
vParametro =
""
;
ExecProg(vPrograma, vParametro, 0);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/execprog.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
