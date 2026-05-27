# GerarOrdemRecebimentoWmsSenior

## Assinatura

```lspt
Funcao GerarOrdemRecebimentoWmsSenior(Numero CodEmp, Numero CodFil, Alfa End ChaveGerada, Alfa End Resultado);
```

## Código
943

## Descrição

Tem o objetivo de dar início à geração de uma ordem de recebimento para exportação ao Gestão de Armazenagem | WMS.

## Parâmetros

- **CodEmp** (`Numero`) - Entrada: Código da empresa da ordem de recebimento
- **CodFil** (`Numero`) - Entrada: Código da filial da ordem de recebimento (que representa o depositante no Gestão de Armazenagem
- **ChaveGerada** (`Alfa End`) - Saída: Chave da ordem de recebimento gerada pelo Gestão Empresarial
- **Resultado** (`Alfa End`) - Saída: Resultado OK ou ERRO. Em caso de erro, a mensagem de erro será retornada no parâmetro `ChaveGerada`

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
GerarOrdemRecebimentoWmsSenior();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
