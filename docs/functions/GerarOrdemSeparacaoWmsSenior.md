# GerarOrdemSeparacaoWmsSenior

## Assinatura

```lspt
Funcao GerarOrdemSeparacaoWmsSenior(Numero CodEmp, Numero CodFil, Alfa End ChaveGerada, Alfa End Resultado);
```

## Código
942

## Descrição

Tem o objetivo dar início à geração de uma ordem de separação para exportação ao Gestão de Armazenagem | WMS Senior.

## Parâmetros

- **CodEmp** (`Numero`) - Entrada: Código da empresa da ordem de separação
- **CodFil** (`Numero`) - Entrada: Código da filial da ordem de separação (que representa o depositante no Gestão de Armazenagem
- **ChaveGerada** (`Alfa End`) - Saída: Chave da ordem de separação gerada pelo Gestão Empresarial
- **Resultado** (`Alfa End`) - Saída: Resultado OK ou ERRO. Em caso de erro, a mensagem de erro será retornada no parâmetro `ChaveGerada`

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
GerarOrdemSeparacaoWmsSenior();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
