# MontarSQLHistoricoSeq

## Assinatura

```lspt
Funcao MontarSQLHistoricoSeq("Tabela", Data, xretorno);
```

## Código
N/A

## Descrição

Esta função monta o comando SQL para uso com os históricos do sistema, com base em uma data e sequência.

## Parâmetros

- **"Tabela"** - Entrada: Nome da tabela
- **Data** - Entrada: Data do histórico
- **xretorno** - Entrada: Variável alfanumérica que conterá o SQL montado

## Exemplo de Uso

```lspt
@  Relacionamento Histórico
 Tipo Salário (DINÂMICO) @

Se (EAbrTsa <> "")
 {
@ Monta a restrição para data de alteração @
  MontarSqlHistoricoSeq ("R038HSA",EDatRef,AuxSQLHist);
@ Monta a restrição para campo de abrangência @
  MontaAbrangencia("R038HSA.TipSal",EAbrTsa,AuxSQLAbr);
  AuxSql = AuxRelac + " R038HSA.NUMEMP = R034FUN.NUMEMP
 "
      + " AND R038HSA.TIPCOL = R034FUN.TIPCOL
 "
      + " AND R038HSA.NUMCAD = R034FUN.NUMCAD
 "
      + " AND "+AuxSQLHist
      + " AND "+AuxSQLAbr;
   InsClauSqlWhere("Detalhe_1",AuxSql);
   AuxRelac = " AND ";
 };
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/montarsqlhistoricoseq.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
