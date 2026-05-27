# DetPrimConector

## Assinatura

```lspt
Funcao DetPrimConector (Seção,Operador);
```

## Código
N/A

## Descrição

Permite determinar qual será o primeiro conector a ser inserido para concatenar na cláusula WHERE, valor este inserido pela função [INSCLAUSQLWHERE](#InsClauSQLWhere).

## Parâmetros

- **Seção** - Entrada: Nome do operador entre aspas
- **Operador** - Entrada: Nome do operador entre aspas

## Exemplo de Uso

```lspt
DetPrimConector ("Detalhe_1"," OR");
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/detprimconector.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
