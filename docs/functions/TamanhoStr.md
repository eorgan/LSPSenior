# TamanhoStr

## Assinatura

```lspt
Funcao TamanhoStr(Alfa Origem, Numero End Tam);
```

## Código
15

## Descrição

Retornam o tamanho de uma variável/campo alfanumérico através de parâmetro de retorno.

## Parâmetros

- **Origem** (`Alfa`) - Entrada: Campo/Variável que se deseja saber o tamanho
- **Tam** (`Numero End`) - Saída: Variável Numero que receberá o tamanho

## Exemplo de Uso

```lspt
Definir Alfa vaSenha;
Definir Numero vnTamanho;
Definir Alfa vaMensagem;
Definir Alfa vaNumeroStr;

vaSenha = "minhasenha123";
TamanhoAlfa(vaSenha, vnTamanho);

Se (vnTamanho < 8) {
  vaMensagem = "Senha deve ter pelo menos 8 caracteres";
  Mensagem(Erro, vaMensagem);
} Senao {
  IntParaAlfa(vnTamanho, vaNumeroStr);
  vaMensagem = "Senha válida com " + vaNumeroStr + " caracteres";
  Mensagem(Retorna, vaMensagem);
}
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
