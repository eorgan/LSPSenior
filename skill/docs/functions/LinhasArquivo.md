# LinhasArquivo

## Assinatura

```lspt
Funcao LinhasArquivo(caminhoNomeArquivo, linhasEmBranco);
```

## Código
N/A

## Descrição

Conta o número de linhas em um arquivo através de parâmetro de retorno.

## Parâmetros

- **caminhoNomeArquivo** - Entrada: Caminho do arquivo a ser analisado
- **linhasEmBranco** - Entrada: Variável que receberá a quantidade de linhas

## Exemplo de Uso

```lspt
Definir Funcao processarArquivoTemporario();

  @ Variáveis globais @
  Definir Alfa vaCaminhoTemp;
  Definir Numero vnArquivo;
  Definir Numero vnLinhas;
  Definir Alfa vaConteudo;
  Definir Numero vnContador;
  Definir Alfa vaQuantidadeStr;
  Definir Alfa vaMensagem;

processarArquivoTemporario();

Funcao processarArquivoTemporario(); {
  @ 1. Cria arquivo temporário @
  CriarArquivoTemporario("processamento_", vaCaminhoTemp);
  vaMensagem = "Arquivo temporário criado: " + vaCaminhoTemp;
  Mensagem(Retorna, vaMensagem);
  
  @ 2. Escreve dados no arquivo @
  vnArquivo = Abrir(vaCaminhoTemp, Gravarnl);
  Para (vnContador = 1; vnContador <= 10; vnContador++) {
    vaConteudo = "Linha " + IntParaAlfa(vnContador) + " do arquivo temporário";
    Gravarnl(vnArquivo, vaConteudo);
  }
  Fechar(vnArquivo);
  
  @ 3. Verifica o arquivo criado @
  LinhasArquivo(vaCaminhoTemp, vnLinhas);
  IntParaAlfa(vnLinhas, vaQuantidadeStr);
  vaMensagem = "Arquivo criado com " + vaQuantidadeStr + " linhas";
  Mensagem(Retorna, vaMensagem);
  
  @ 4. Processa o arquivo @
  IniciaBarraProgresso("Processando Arquivo", "Lendo linhas...");
  vnArquivo = Abrir(vaCaminhoTemp, Lernl);
  
  Para (vnContador = 1; vnContador <= vnLinhas; vnContador++) {
    Lernl(vnArquivo, vaConteudo);
    AtualizaBarraProgresso((vnContador * 100) / vnLinhas, "Processando: " + vaConteudo);
    sleep(100); @ Simula processamento @
  }
  
  Fechar(vnArquivo);
  FinalizaBarraProgresso();
  
  @ 5. Remove arquivo temporário @
  ExcluirArquivoTemporario(vaCaminhoTemp);
  Mensagem(Retorna, "Arquivo temporário removido");
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/linhasarquivo.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
