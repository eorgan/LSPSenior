# Desencriptar

## Assinatura

```lspt
Funcao Desencriptar(valor, chave, resultado);
```

## Código
N/A

## Descrição

Descriptografa uma cadeia de caracteres previamente criptografada.

## Parâmetros

- **valor** - Entrada: Caracteres criptografados
- **chave** - Entrada: Chave de criptografia, deve ser um número entre 0 e 65535
- **resultado** - Entrada: Caracteres após a conversão para texto legível

## Exemplo de Uso

```lspt
Definir Funcao protegerDadosSensiveis();

@ Variáveis globais @
Definir Alfa vaDadosSensiveis;
Definir Alfa vaDadosCriptografados;
Definir Alfa vaDadosRecuperados;

vaDadosSensiveis = "CPF:12345678901;SENHA:minhasenha123";

protegerDadosSensiveis();

Funcao protegerDadosSensiveis(); {
  Definir Alfa vaMensagem;
  @ Criptografa dados @
  Encriptar(vaDadosSensiveis, vaDadosCriptografados);
  vaMensagem = "Dados criptografados: " + vaDadosCriptografados;
  Mensagem(Retorna, vaMensagem);

  @ Descriptografa para uso @
  Desencriptar(vaDadosCriptografados, vaDadosRecuperados);
  
  @ Verifica integridade @
  Se (vaDadosRecuperados = vaDadosSensiveis) {
    Mensagem(Retorna, "Dados recuperados com sucesso!");
  } Senao {
    Mensagem(Erro, "Erro na integridade dos dados!");
  }
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/desencriptar.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
