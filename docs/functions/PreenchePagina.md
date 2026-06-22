# PreenchePagina

## Assinatura

```lspt
Funcao PreenchePagina(Formato, Formato da Linha, Grossura da Linha, Cor da Linha, Cor da Textura);
```

## Código
N/A

## Descrição

Determina que uma página seja preenchida com rasuras.

## Parâmetros

- **Formato** - Entrada: Valor numérico entre 0 e 8
- **Linha** (`Formato`) - Entrada: Valor numérico entre 0 e 7
- **Linha** (`Grossura`) - Entrada: Valor numérico
- **Linha** (`Cor`) - Entrada: Nome da cor
- **Textura** (`Cor`) - Entrada: Nome da cor da textura entre aspas

## Exemplo de Uso

```lspt
PreenchePagina(8, 1, 2, "", "Preto");
ListaSecao("Adicional_Salto_Pagina");
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/preenchepagina.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
