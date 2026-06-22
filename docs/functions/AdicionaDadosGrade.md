# AdicionaDadosGrade

## Assinatura

```lspt
Funcao AdicionaDadosGrade(Alfa ControlName, Numero Linha, Numero Coluna, Alfa Texto);
```

## Código
N/A

## Descrição

Adiciona ou define texto em uma célula específica de um controle tipo grade.

## Parâmetros

- **ControlName** (`Alfa`) - Entrada: Nome do controle tipo grade onde será adicionada/setada a linha ou coluna
- **Linha** (`Numero`) - Entrada: Número da linha onde será adicionado/setado o texto
- **Coluna** (`Numero`) - Entrada: Número da coluna onde será adicionado/setado o texto
- **Texto** (`Alfa`) - Entrada: Texto a ser adicionado/setado

## Exemplo de Uso

```lspt
AdicionaDadosGrade("Grade001", 2, 1, "Quarto teste da grade.");
AdicionaDadosGrade("Grade001", 2, 2, "Gestão Empresarial | ERP da Senior Sistemas.");
AdicionaDadosGrade("Grade001", 2, 3, "Inconstitucionalicimamentemente.");
AdicionaDadosGrade("Grade001", 3, 1, "Sétimo teste para ver se imprime certo.");
AdicionaDadosGrade("Grade001", 3, 2, "Oitavo");
AdicionaDadosGrade("Grade001", 3, 3, "Nono");
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/adicionadadosgrade.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
