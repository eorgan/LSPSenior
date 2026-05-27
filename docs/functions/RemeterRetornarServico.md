# RemeterRetornarServico

## Assinatura

```lspt
Funcao RemeterRetornarServico(Alfa pParam,Alfa End Retorno);
```

## Código
673

## Descrição

Executar remessa e retorno de serviço via disponível móvel ou coletores em geral, na condição de não ter OC (ordem de compra de serviço).

## Parâmetros

- **pParam** (`Alfa`) - Entrada: Empresa.
- **Retorno** (`Alfa End`) - Saída: Origem da OP.

## Valores de Retorno

- "OK" se for processado com sucesso.
- Exemplos:
- pParametros = "CodOri="+codori+",NumOrp="+numorp+",codetg="+codetg+",seqrot="+seqrot+",numcad="+numcad+",CodFor="+codfor+"CodSer="+codser;
- RemeterRetornarServico(pParametros,pRetorno);
- Identificadores utilizados:
- <!-- source: https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/retdiasemana.htm -->

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
RemeterRetornarServico();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
