# PosicaoAlfa

## Assinatura

```lspt
Funcao PosicaoAlfa (Texto_Pesquisa,Campo_Pesquisa,Posicao);
```

## Código
N/A

## Descrição

Procura por uma parte de texto dentro de um campo/variável do tipo **Alfa**, retornando a posição em que o texto inicia.

## Parâmetros

- **Texto_Pesquisa** - Entrada: Informar entre aspas o texto que se está procurando
- **Campo_Pesquisa** - Entrada: Nome do campo/variável em que se deseja fazer a procura
- **Posicao** - Entrada: Retornará a posição inicial do texto procurado, dentro do **Campo_Pesquisa**

## Exemplo de Uso

```lspt
PosicaoAlfa ("Luis",R034Fun.NomEmp,Vposicao);
@ Logo, se o nome do empregado fosse, por exemplo, "Ana Luisa Prates", a variável VPosicao retornaria 5. @
@ Porém se o nome do empregado fosse, por exemplo, "Pedro Silva" a variável Vposicao retornaria 0 (zero). @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/posicaoalfa.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
