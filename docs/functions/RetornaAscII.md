# RetornaAscII

## Assinatura

```lspt
Funcao RetornaAscII(Numero xNumero,Alfa End xCarAscII);
```

## Código
92

## Descrição

Retorna o caracter ASCII correspondente a um número.

## Parâmetros

- **xNumero** (`Numero`) - Entrada: Variável tipo Numero da qual se quer o retorno em ASCII
- **xCarAscII** (`Alfa End`) - Saída: Variável Alfa que retorna o caracter ASCII correspondente ao número

## Exemplo de Uso

```lspt
Definir Funcao exemploRetornaAscII();

@ Variáveis globais @
Definir Numero vnCodigo;
Definir Alfa vaCaracter;
Definir Alfa vaMensagem;

exemploRetornaAscII();

Funcao exemploRetornaAscII(); {
  @ === EXEMPLO 1: LETRAS MAIÚSCULAS === @
  vnCodigo = 65;  @ Código ASCII da letra 'A' @
  RetornaAscII(vnCodigo, vaCaracter);
  vaMensagem = "Código 65 = " + vaCaracter;
  Mensagem(Retorna, vaMensagem);  @ Resultado: "Código 65 = A" @
  
  @ === EXEMPLO 2: NÚMEROS === @
  vnCodigo = 48;  @ Código ASCII do número '0' @
  RetornaAscII(vnCodigo, vaCaracter);
  vaMensagem = "Código 48 = " + vaCaracter;
  Mensagem(Retorna, vaMensagem);  @ Resultado: "Código 48 = 0" @
  
  @ === EXEMPLO 3: CARACTERES ESPECIAIS === @
  vnCodigo = 64;  @ Código ASCII do símbolo '@' @
  RetornaAscII(vnCodigo, vaCaracter);
  vaMensagem = "Código 64 = " + vaCaracter;
  Mensagem(Retorna, vaMensagem);  @ Resultado: "Código 64 = @" @
  
  @ === EXEMPLO PRÁTICO: GERAR SENHA SIMPLES === @
  Definir Alfa vaSenha;
  Definir Numero vnContador;
  
  vaSenha = "";
  Para (vnContador = 1; vnContador <= 4; vnContador++) {
    vnCodigo = 65 + vnContador - 1;  @ A, B, C, D @
    RetornaAscII(vnCodigo, vaCaracter);
    vaSenha = vaSenha + vaCaracter;
  }
  vaMensagem = "Senha gerada: " + vaSenha;
  Mensagem(Retorna, vaMensagem);  @ Resultado: "Senha gerada: ABCD" @
}
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
