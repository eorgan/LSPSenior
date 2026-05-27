# PreenchePagina

## Assinatura

```lspt
Funcao PreenchePagina(Formato, Formato da Linha, Grossura da Linha, Cor da Linha, Cor da Textura);
```

## Código
N/A

## Descrição

Esta função determina que uma página seja preenchida com rasuras.

## Parâmetros

- **Formato** - Entrada: Valor numérico entre 0 e 8
- **Linha** (`Formato`) - Entrada
- **Linha** (`Grossura`) - Entrada
- **Linha** (`Cor`) - Entrada
- **Textura** (`Cor`) - Entrada

## Exemplo de Uso

```lspt
PreenchePagina (8,1,2,"","Preto");
ListaSecao("Adicional_Salto_Pagina");
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
