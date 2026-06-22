# ArqExiste

## Assinatura

```lspt
Funcao ArqExiste(caminhoArquivo);
```

## Código
N/A

## Descrição

Verifica se um arquivo físico existe no local especificado.

## Parâmetros

- **caminhoArquivo** - Entrada: Caminho completo do arquivo

## Exemplo de Uso

```lspt
Definir Funcao verificarArquivos();

  @ Variáveis globais @
  Definir Alfa vaCaminhoArquivo;
  Definir Alfa vaCaminhoConfig;
  Definir Alfa vaCaminhoLog;
  Definir Numero vnExisteArquivo;
  Definir Numero vnExisteConfig;
  Definir Numero vnExisteLog;
  Definir Alfa vaMensagem;

vaCaminhoArquivo = "C:\\temp\\dados.txt";
vaCaminhoConfig = "C:\\config\\app.ini";
vaCaminhoLog = "C:\\logs\\sistema.log";

verificarArquivos();

Funcao verificarArquivos(); {
  @ Verifica arquivo de dados @
  ArqExiste(vaCaminhoArquivo, vnExisteArquivo);
  Se (vnExisteArquivo = 1) {
    Mensagem(Retorna, "Arquivo de dados encontrado");
  } Senao {
    Definir Alfa vaMensagem;
    vaMensagem = "Arquivo de dados não encontrado: " + vaCaminhoArquivo;
    Mensagem(Erro, vaMensagem);
  }
  
  @ Verifica arquivo de configuração @
  ArqExiste(vaCaminhoConfig, vnExisteConfig);
  Se (vnExisteConfig = 1) {
    Mensagem(Retorna, "Arquivo de configuração encontrado");
  } Senao {
    Mensagem(Retorna, "Arquivo de configuração não encontrado, usando padrão");
  }
  
  @ Verifica arquivo de log @
  ArqExiste(vaCaminhoLog, vnExisteLog);
  Se (vnExisteLog = 0) {
    vaMensagem = "Arquivo de log será criado: " + vaCaminhoLog;
    Mensagem(Retorna, vaMensagem);
  }
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/arqexiste.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
