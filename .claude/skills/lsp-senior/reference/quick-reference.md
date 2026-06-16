# Referência rápida da LSP

Cartões de consulta por categoria. Os nomes de função foram **validados contra o
`functions.json` e os exemplos reais `.lspt`** deste projeto — onde o padrão externo
divergia do código real (cards de SQL/HTTP), prevaleceu o uso real.

Sempre confirme a assinatura exata e a direção dos parâmetros com:
`python3 scripts/buscar_funcao.py <Nome>`.

## Declaração e fluxo

```lsp
Definir Alfa   vaNome;        @ texto @
Definir Numero vnIdade;       @ inteiro/decimal @
Definir Data   vdNascimento;  @ data @

Se (cond) { ... } Senao { ... }
Para (vnI = 1; vnI <= 10; vnI++) { ... }
Enquanto (cond) { ... }       @ atualize a condição! @
```

## Card: manipulação de strings

| Função | Forma |
| --- | --- |
| `TamanhoAlfa(texto, tamanho)` | tamanho ← Numero (saída) |
| `PosicaoAlfa(busca, texto, pos)` | pos ← posição (saída) |
| `SubstAlfa(antigo, novo, texto)` | texto ← resultado (saída) |
| `CopiarAlfa(texto, posInicial, qtd)` | retorna trecho |
| `LimpaEspacos(texto)` | texto ← sem espaços (saída) |
| `DeletarAlfa(texto, pos, qtd)` | remove trecho |
| `InserirAlfa(valor, texto, pos)` | insere em texto (saída) |
| `ConverteParaMaiusculo` / `ConverteParaMinusculo` | caixa |
| `RetiraAcentuacao(texto)` | texto ← sem acento (saída) |
| `DeixaNumeros(texto)` | texto ← só dígitos (saída) |

## Card: conversões (cast)

| Função | Direção |
| --- | --- |
| `IntParaAlfa(numero, texto)` | Numero → Alfa |
| `AlfaParaInt(texto, numero)` | Alfa → Numero |
| `AlfaParaDecimal(texto, decimal)` | Alfa → Numero decimal |
| `DecimalParaAlfa(decimal, texto)` | Numero → Alfa |
| `StrParaInt(texto, numero)` / `IntParaStr(numero, texto)` | Str ↔ Int |
| `AlfaParaData(texto, data)` | Alfa → Data |
| `ConverteMascara(tipo, origem, dest, mascara)` | aplica máscara |

> **Só `Alfa` concatena.** Converta antes de usar `+` (ver `erros-comuns.md` #4).

## Card: datas

| Função | Observação |
| --- | --- |
| `DataHoje(data)` | data atual (saída) |
| `DataHora(dataHora)` | retorna **Numero** (use com `FormatarData`) |
| `MontaData(dia, mes, ano, data)` | monta data (ano com 4 dígitos) |
| `CodData(dia, mes, ano)` | alternativa a `MontaData` |
| `DecodData(data, dia, mes, ano)` | decompõe (também `DesMontaData`) |
| `FormatarData(numero, formato, saida)` | 1º parâmetro é **Numero** |

## Card: validação

| Função | Uso |
| --- | --- |
| `EstaNulo(dado, ehNulo)` | ehNulo = 1 se nulo (saída) |
| `TamanhoAlfa(texto, tamanho)` | vazio ⇒ tamanho = 0 |
| `DeixaNumeros(texto)` | limpa para validar dígitos |
| `PosicaoAlfa(busca, texto, pos)` | pos = 0 ⇒ não encontrado |

⚠️ Execute a função primeiro, **depois** compare a variável de saída — nunca dentro do `Se`.

## Card: HTTP e APIs

Nomes conforme exemplos reais `.lspt` (não constam no `functions.json`):

| Função | Uso |
| --- | --- |
| `HttpObjeto(http)` | cria o objeto de requisição |
| `HttpDesabilitaErroResposta(http)` | não aborta em status de erro |
| `HttpAlteraCabecalhoRequisicao(http, chave, valor)` | define header |
| `HttpGet(http, url, resposta)` | GET; resposta ← corpo |
| `HttpPost(http, url, corpo, resposta)` | POST |
| `HttpLeCodigoResposta(http, codigo)` | codigo ← status HTTP |

JSON: `ValorElementoJson(json, grupo, elemento, valor)` para campo simples;
`ListaRegraCarregarJson(...)` + `ListaRegra*` para coleções.

## Card: banco de dados (cursor SQL)

Nomes conforme exemplos reais `.lspt` (não constam no `functions.json`).
**Sempre feche e destrua o cursor.**

| Etapa | Função |
| --- | --- |
| Criar | `SQL_Criar(sql)` |
| Configurar | `SQL_UsarSqlSenior2(sql, 0)` · `SQL_UsarAbrangencia(sql, 0)` |
| Comando | `SQL_DefinirComando(sql, comando)` |
| Abrir | `SQL_AbrirCursor(sql)` |
| Iterar | `Enquanto (SQL_EOF(sql) = 0) { ... SQL_Proximo(sql); }` |
| Ler campo | `SQL_RetornarAlfa` / `SQL_RetornarInteiro` / `SQL_RetornarFlutuante` / `SQL_RetornarData` |
| Encerrar | `SQL_FecharCursor(sql)` · `SQL_Destruir(sql)` |
| Escrita | `ExecSQLEx(comando, xErro, xMensagem)` e trate `xErro` |

Modelo completo de cursor está no `SKILL.md`.
