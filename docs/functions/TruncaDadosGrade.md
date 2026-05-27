# TruncaDadosGrade

## Assinatura

```lspt
Funcao TruncaDadosGrade(Alfa ControlName, Numero Linha, Numero Coluna);
```

## Código
N/A

## Descrição

Esta função permite ao desenvolvedor do modelo, fazer com que o dado de uma determinada célula seja truncado, evitando a quebra de linha e consequentemente o corte do texto que ultrapasse a largura da célula.

## Parâmetros

- **ControlName** (`Alfa`) - Entrada: Nome do controle grade que será truncado
- **Linha** (`Numero`) - Entrada: Número da linha da célula a ser truncada
- **Coluna** (`Numero`) - Entrada: Número da coluna da célula a ser truncada

## Exemplo de Uso

```lspt
TruncaDadosGrade("Grade001", 2, 1);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
