# TrocaString

## Assinatura

```lspt
Funcao TrocaString(Alfa aStrIni, Alfa aStrOut, Alfa aStrIn,Alfa End aStrFim);
```

## Código
N/A

## Descrição

Função avançada de substituição com mais opções de controle.

## Parâmetros

- **aStrIni** (`Alfa`) - Entrada: Texto original
- **aStrOut** (`Alfa`) - Entrada: Trecho específico que deve ser buscado no texto original
- **aStrIn** (`Alfa`) - Entrada: Texto que irá substituir o trecho específico buscado
- **aStrFim** (`Alfa End`) - Saída: Novo texto retornado pela função

## Exemplo de Uso

```lspt
Definir Alfa vaTemplate;
Definir Alfa vaNomeUsuario;
Definir Alfa vaEmpresa;
Definir Alfa vaMensagemFinal;

vaTemplate = "Olá __NOME__, bem-vindo à __EMPRESA__!";
vaNomeUsuario = "João Silva";
vaEmpresa = "Senior Sistemas";

vaMensagemFinal = vaTemplate;
TrocaString(vaMensagemFinal, "__NOME__", vaNomeUsuario);
TrocaString(vaMensagemFinal, "__EMPRESA__", vaEmpresa);
@ vaMensagemFinal será "Olá João Silva, bem-vindo à Senior Sistemas!" @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/trocastring.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
