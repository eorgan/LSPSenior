# RetornarSerieNotaFiscal

## Assinatura

```lspt
Funcao RetornarSerieNotaFiscal(Numero aEmpresa, Numero aFilial, Alfa aSerie, Alfa aForcarNova, Alfa End NovaSerie);
```

## Código
910

## Descrição

Esta função possibilita o cadastramento de uma nova série de nota fiscal com base em uma série já existente.

## Parâmetros

- **aEmpresa** (`Numero`) - Entrada: Informar a empresa de referência.
- **aFilial** (`Numero`) - Entrada: Informar a filial de referência.
- **aSerie** (`Alfa`) - Entrada: Informar a série de referência.
- **aForcarNova** (`Alfa`) - Entrada: Definir se o sistema retornará uma série gerada anteriormente para o parâmetro informado em aSerie, ou se deve gerar um novo cadastro. Quando informado N-Não e o sistema não encontrar uma série para o parâmetro aSerie, o mesmo irá forçar um novo cadastro.
- **NovaSerie** (`Alfa End`) - Saída: O sistema retorna para o usuário a nova série gerada, ou a gerada anteriormente.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
RetornarSerieNotaFiscal();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
