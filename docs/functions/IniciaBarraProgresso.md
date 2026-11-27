# IniciaBarraProgresso

## Assinatura

```lspt
Funcao IniciaBarraProgresso(Numero VlrMax);
```

## Código
N/A

## Descrição

Inicia a barra de progresso que mostra ao usuário o andamento de um processo longo. Use com AtualizaBarraProgresso (dentro do laço) e FinalizaBarraProgresso (ao terminar). Disponível em Gestão Empresarial | ERP, Gestão Empresarial PME | GO UP, Gestão de Pessoas | HCM e Ronda Senior.

## Parâmetros

- **VlrMax** (`Numero`) - Entrada: Valor máximo da barra de progresso (quantidade total de passos).

## Exemplo de Uso

```lspt
Definir Numero vnTotal;

vnTotal = 200;
IniciaBarraProgresso(vnTotal);
@ ... laço com AtualizaBarraProgresso ... @
FinalizaBarraProgresso();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/iniciabarraprogresso.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
