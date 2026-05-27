# ObterProximoId

## Assinatura

```lspt
Funcao ObterProximoId(Alfa Identificador, Numero Incremento, Alfa Filtro, Numero End ProximoId);
```

## Código
927

## Descrição

Gerar um ID único para controlar os sequenciais das tabelas. **Sintaxe**: função Alfa Identificador, Numero Incremento, Alfa Filtro, Numero End ProximoId

## Parâmetros

- **Identificador** (`Alfa`) - Entrada: Variável com um identificador único, usado para a geração do sequencial.
- **Incremento** (`Numero`) - Entrada: Variável com a quantidade que será incrementada no sequencial.
- **Filtro** (`Alfa`) - Entrada: Variável com o comando SQL para verificar o maior sequencial existente na base.
- **ProximoId** (`Numero End`) - Saída

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ObterProximoId();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
