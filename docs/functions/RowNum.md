# RowNum

## Assinatura

```lspt
Funcao RowNum(Numero pLinhas, Alfa pPosicao, Alfa pInsAnd, Alfa End pCmdRet);
```

## Código
978

## Descrição

Para limitar a quantidade de registros que um comando SQL retorna, é necessário utilizar funções específicas para cada banco de dados. Por exemplo, no SQL utilizamos o delimitador TOP antes do FROM, enquanto no Oracle usa-se o delimitador ROWNUM junto da cláusula WHERE; e, no PostgreSql, usa-se o delimitador LIMIT ao final do comando. Com base nisso, percebe-se que montar um comando que sirva para todos os bancos é algo inviável. Para resolver esse desafio de forma transparente, pode-se utilizar a função LSP ROWNUM que trata o banco de dados e a posição onde o delimitador é colocado. Descrição: A função ROWNUM retorna um trecho de SQL para limitar a quantidade de linhas de resultados em consultas, adaptando o comando conforme o tipo de banco de dados (SQL Server, Oracle ou PostgreSQL) e a posição da cláusula no comando SQL. Características: Ao utilizar essa função, é importante sempre gerar três variáveis do tipo Alfa, as quais devem ser concatenadas ao comando SQL: uma na cláusula SELECT, uma no WHERE e outra ao final do comando. Isso deve ser feito independentemente do banco. Proceder dessa forma garante o funcionamento e não gera nenhum tipo de erro, pois a própria função preencherá as próprias variáveis de acordo com o banco de dados.

## Parâmetros

- **pLinhas** (`Numero`) - Entrada: Quantidade de linhas que deve ser retornada no comando realizado
- **pPosicao** (`Alfa`) - Entrada: Indica a posição que o comando será montado: “S” - Select; “C” - Condição (Where); “F” - Final - Deve ser utilizado sempre após o ORDER BY, caso houver.
- **pInsAnd** (`Alfa`) - Entrada: Indicativo se o comando retornado deve conter a cláusula AND na frente ou não.  O valor desse parâmetro somente será utilizado quando o parâmetro pPosicao for igual a “C - Condição”. Nos demais valores de pPosicao esse valor será ignorado. “S” - Sim: adiciona o AND; “N” - Não: não adiciona o AND.
- **pCmdRet** (`Alfa End`) - Saída: Retorna o comando com a quantidade de registros retornados de acordo com o banco utilizado pelo cliente e a posição no comando SQL.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
RowNum();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
