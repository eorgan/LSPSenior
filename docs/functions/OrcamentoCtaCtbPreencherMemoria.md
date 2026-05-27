# OrcamentoCtaCtbPreencherMemoria

## Assinatura

```lspt
Funcao OrcamentoCtaCtbPreencherMemoria(Numero pCodEmp, Numero pCodFil, Numero pMesAno, Numero pCtaRed, Numero pVlrOrc);
```

## Código
834

## Descrição

Adiciona o orçamento na lista de orçamentos que foi previamente instaciada pela função de programador "OrcamentoCtaCtbIniciarMemoria();", para futuramente atualizar o saldo das contas superiores da conta analitica em questão, utilizando a função de programador "OrcamentoCtaCtbAtualizarCtaPai();".

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Código da Empresa do Orçamento por Conta Contábil.
- **pCodFil** (`Numero`) - Entrada: Código da Filial do Orçamento por Conta Contábil.
- **pMesAno** (`Numero`) - Entrada: Competência do Orçamento por Conta Contábil.
- **pCtaRed** (`Numero`) - Entrada: Conta Analítica do Orçamento por Conta Contábil.
- **pVlrOrc** (`Numero`) - Entrada: Valor do Orçamento por Conta Contábil.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
OrcamentoCtaCtbPreencherMemoria();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
