# RetiraCaracteresEspeciais

## Assinatura

```lspt
Funcao RetiraCaracteresEspeciais(Alfa End Retorno);
```

## Código
750

## Descrição

Remove caracteres especiais deixando somente letras e números, removendo todos os outros caracteres.

## Parâmetros

- **Retorno** (`Alfa End`) - Saída: Variável Alfa que recebe o campo a ser limpo e retorna o campo sem caracteres especiais

## Exemplo de Uso

```lspt
Definir Funcao exemploRetiraCaracteresEspeciais();

@ Variáveis globais @
Definir Alfa vaTextoOriginal;
Definir Alfa vaTextoLimpo;
Definir Alfa vaMensagem;

exemploRetiraCaracteresEspeciais();

Funcao exemploRetiraCaracteresEspeciais(); {
  @ === EXEMPLO 1: RAZÃO SOCIAL === @
  vaTextoOriginal = "João & Pessoa Ltda.";
  vaTextoLimpo = vaTextoOriginal;
  RetiraCaracteresEspeciais(vaTextoLimpo);
  vaMensagem = "Original: " + vaTextoOriginal + " | Limpo: " + vaTextoLimpo;
  Mensagem(Retorna, vaMensagem);  @ Resultado: "JoaoPessoaLtda" @
  
  @ === EXEMPLO 2: TELEFONE === @
  vaTextoOriginal = "(47) 99999-8888";
  vaTextoLimpo = vaTextoOriginal;
  RetiraCaracteresEspeciais(vaTextoLimpo);
  vaMensagem = "Telefone original: " + vaTextoOriginal + " | Apenas números: " + vaTextoLimpo;
  Mensagem(Retorna, vaMensagem);  @ Resultado: "4799998888" @
  
  @ === EXEMPLO 3: EMAIL PARA ID === @
  vaTextoOriginal = "usuario@empresa.com.br";
  vaTextoLimpo = vaTextoOriginal;
  RetiraCaracteresEspeciais(vaTextoLimpo);
  vaMensagem = "Email: " + vaTextoOriginal + " | ID limpo: " + vaTextoLimpo;
  Mensagem(Retorna, vaMensagem);  @ Resultado: "usuarioempresacombr" @
  
  @ === EXEMPLO PRÁTICO: VALIDAÇÃO DE DOCUMENTO === @
  validarDocumentoLimpo();
}

/* ========================================================================
   FUNCAO: validarDocumentoLimpo
   DESCRICAO: Valida documento removendo caracteres especiais
   PARAMETROS: Nenhum (usa variáveis globais)
   RETORNO: Void
   OBSERVACOES: Exemplo prático de uso da função
   ======================================================================== */
Funcao validarDocumentoLimpo(); {
  @ Simular entrada de CPF com formatação @
  Definir Alfa vaCPF;
  Definir Numero vnTamanho;
  
  vaCPF = "123.456.789-10";
  vaMensagem = "CPF formatado: " + vaCPF;
  Mensagem(Retorna, vaMensagem);
  
  @ Remover formatação @
  RetiraCaracteresEspeciais(vaCPF);
  vaMensagem = "CPF apenas números: " + vaCPF;
  Mensagem(Retorna, vaMensagem);
  
  @ Validar tamanho @
  TamanhoAlfa(vaCPF, vnTamanho);
  Se (vnTamanho = 11) {
    Mensagem(Retorna, "CPF válido para processamento");
  } Senao {
    Mensagem(Erro, "CPF inválido após limpeza");
  }
}
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
