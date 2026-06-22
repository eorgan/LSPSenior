# CaracterParaAlfa

## Assinatura

```lspt
Funcao CaracterParaAlfa(Caractere,Destino);
```

## Código
N/A

## Descrição

Converte um caracter (que fica armazenado pelo código ASCII) para o valor Alfanumérico correspondente.

## Parâmetros

- **Caractere** - Entrada: Campo/Variável que mantém o código ASCII de um caracter
- **Destino** - Entrada: Variável que receberá o resultado da conversão

## Exemplo de Uso

```lspt
Definir Alfa vaLetra;
Definir Alfa vaEnter;

@ Conversão de código ASCII para caracter @
CaracterParaAlfa(65, vaLetra); @ vaLetra será "A" @

@ Quebra de linha @
CaracterParaAlfa(13, vaEnter); @ vaEnter será quebra de linha @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/caracterparaalfa.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
