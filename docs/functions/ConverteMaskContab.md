# ConverteMaskContab

## Assinatura

```lspt
Funcao ConverteMaskContab(Numero Nivel, Alfa ClaCta, Alfa Mask, Alfa End ValorStr);
```

## Código
N/A

## Descrição

Esta função disponibiliza a classificação das contas contábeis com uma máscara de visualizacão.

## Parâmetros

- **Nivel** (`Numero`) - Entrada: Variável numérica que indica o nível da conta/classificação.
- **ClaCta** (`Alfa`) - Entrada: Variável alfanumérica que recebe a classificação da conta contábil.
- **Mask** (`Alfa`) - Entrada: Variável alfanumérica que recebe a máscara do grupo que pertence a classificação.
- **ValorStr** (`Alfa End`) - Saída: Variável que retorna a classificação com a máscara aplicada.

## Valores de Retorno

- ValorStr: variável alfanumérica que retorna a classificação com a máscara aplicada.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ConverteMaskContab();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
