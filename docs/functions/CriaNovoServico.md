# CriaNovoServico

## Assinatura

```lspt
Funcao CriaNovoServico (Alfa CodSer, Alfa DesSer, Alfa CodFam);
```

## Código
672

## Descrição

Gera novo serviço na tabela de serviços. O sistema também gera um código de produto. Todos os valores padrão são buscados na tabela de famílias.

## Parâmetros

- **CodSer** (`Alfa`) - Entrada: Código do serviço a ser criado.
- **DesSer** (`Alfa`) - Entrada: Descrição do serciço a ser criado.
- **CodFam** (`Alfa`) - Entrada: Código da família do serviço.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CriaNovoServico();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/crianovoservico%20.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
