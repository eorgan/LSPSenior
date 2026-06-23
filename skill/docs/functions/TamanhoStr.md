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

## Valores de Retorno

- Tam: Variável numérica que retornará o tamanho do texto especificado em Origem.

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

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/tamanhostr.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
