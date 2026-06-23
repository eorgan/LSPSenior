# ExecProg

## Assinatura

```lspt
Funcao ExecProg(nomePrograma, parametroComando, esperar);
```

## Código
N/A

## Descrição

Executa um programa externo a partir da regra LSP.

## Parâmetros

- **nomePrograma** - Entrada: Caminho do diretório e nome do programa a ser executado com sua extensão
- **parametroComando** - Entrada: Parâmetros que podem ser incluídos na execução do programa.
- **esperar** - Entrada: 0 – Executa o programa e ao mesmo tempo continua a execução da regra;  1 – Aguarda a execução do programa para prosseguir com a execução da regra.

## Exemplo de Uso

```lspt
Definir Funcao integracaoFerramentasExternas();

@ Variáveis globais @
Definir Alfa vaComando;
Definir Alfa vaParametros;
Definir Alfa vaCaminhoArquivo;

vaCaminhoArquivo = "C:\\temp\\relatorio.txt";

integracaoFerramentasExternas();

Funcao integracaoFerramentasExternas(); {
  Definir Alfa vaMensagem;
  @ 1. Abre arquivo no Bloco de Notas @
  vaComando = "notepad.exe";
  vaParametros = vaCaminhoArquivo;
  
  Se (ArqExiste(vaCaminhoArquivo) = 1) {
    ExecProg(vaComando, vaParametros, 0); @ Não aguarda terminar @
    vaMensagem = "Arquivo aberto no Bloco de Notas";
    Mensagem(Retorna, vaMensagem);
  } Senao {
    vaMensagem = "Arquivo não encontrado: " + vaCaminhoArquivo;
    Mensagem(Erro, vaMensagem);
  }
  
  @ 2. Abre explorador de arquivos @
  vaComando = "explorer.exe";
  vaParametros = "C:\\temp";
  ExecProg(vaComando, vaParametros, 0);
  Mensagem(Retorna, "Explorador de arquivos aberto");
  
  @ 3. Executa comando do sistema @
  vaComando = "cmd.exe";
  vaParametros = "/c dir C:\\temp > C:\\temp\\listagem.txt";
  ExecProg(vaComando, vaParametros, 1); @ Aguarda terminar @
  Mensagem(Retorna, "Listagem de arquivos gerada");
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/execprog.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
