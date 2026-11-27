---
name: lsp-senior
description: >-
  Use ao escrever, editar ou revisar código LSP (Linguagem Senior de Programação) —
  arquivos .lsp/.lspt do ERP Senior: regras, cursores SQL, web services e relatórios.
  Cobre o catálogo de 676 funções built-in, incluindo as APIs SQL_*, Http* e Ftp*.
---

# Programando em LSP (Linguagem Senior de Programação) com segurança

A LSP é a linguagem de regras do ERP Senior (G5). É **case-insensitive**, sequencial,
e tem limitações específicas que causam a maioria dos erros. Leia as regras abaixo
ANTES de escrever ou revisar código `.lsp`/`.lspt`.

## 🥇 Regra de Ouro: manipule primeiro, chame a função depois

A LSP **NÃO** aceita operações (concatenação, conversão, matemática, chamadas de função)
**dentro dos parâmetros** de uma função. Faça tudo antes, guarde em variável, passe a variável.

```lsp
@ ERRADO @
Mensagem(Retorna, "Idade: " + IntParaAlfa(vnIdade));

@ CORRETO @
Definir Alfa vaIdade;
Definir Alfa vaMensagem;
IntParaAlfa(vnIdade, vaIdade);     @ converte antes @
vaMensagem = "Idade: " + vaIdade;  @ concatena antes @
Mensagem(Retorna, vaMensagem);     @ passa a variável pronta @
```

A função `Mensagem` é a vítima mais comum desse erro.

## ⚠️ Limitações críticas

1. **Sem operações em parâmetros** (regra acima): nada de `+`, `*`, `/`, `-`, nem
   `IntParaAlfa(...)`/`AlfaParaInt(...)` dentro dos argumentos.
2. **Funções retornam por parâmetro de saída, não por `=`.** O resultado vem num
   parâmetro marcado com `end` (Saída), não no retorno da expressão.
   ```lsp
   @ ERRADO @  vnDia = RetDiaSemana(vnData);
   @ CORRETO @ RetDiaSemana(vnData, vnDia);   @ vnDia é o parâmetro de saída @
   ```
   Para saber qual parâmetro é saída, veja a direção (`Saída`/`end`) no catálogo.
3. **Grids/tabelas:** conversões diretas falham — use variável intermediária.
4. **Declare variáveis no início (convenção de estilo, não limitação do motor):** o motor aceita
   `Definir` no meio do fluxo, e quase toda regra real em produção faz isso. Em código novo,
   prefira declarar no topo da regra/função: fica mais fácil ver o que existe e evitar nome
   repetido (ver Limitação 13). Ao editar regra existente, não mova declarações só por isso.
5. **Funções de usuário não aceitam parâmetros do tipo `Alfa`:** Funções criadas pelo usuário (declaradas com `Definir Funcao`) aceitam apenas parâmetros numéricos (`Numero`) ou nenhum. Para passar ou retornar strings (`Alfa`), utilize variáveis globais como canal de comunicação.
6. **Nunca utilize `SELECT 1` na lista de colunas do SELECT principal de um cursor nativo (`Definir Cursor`):** O motor de regras da Senior exige que seja selecionada uma coluna física real existente da tabela (ex: `SELECT SEQTXT FROM ...`), pois constantes como `1` não existem como definição de coluna no banco da Senior e causam erros de definição ou execução no cursor.
   **Pelo mesmo motivo, a lista de colunas do SELECT principal não aceita função de agregação nem alias de coluna**
   (`SELECT MIN(SEQISC) MINISC ...` → *"Erro de sintaxe, Comando SQL definido incorretamente: O campo
   precisa ser informado com a tabela no método TSSQLGen.Select"*, confirmado 20/10/2026). Para o
   menor/maior valor, selecione a coluna física com `ORDER BY` e leia a primeira linha; para `MIN`/
   `MAX`/`COUNT`/`SUM`/`UNION` de verdade, use a API `SQL_*` (`SQL_Criar` → `SQL_DefinirComando`),
   que aceita SQL livre.
   **A proibição vale só para a lista de colunas do SELECT principal.** Dentro de subconsulta no
   `WHERE` o SQL vai para o banco como está, e tanto `SELECT 1` quanto agregação funcionam e são
   comuns em regras reais: `WHERE EXISTS (SELECT 1 FROM ...)`, `WHERE CAMPO = (SELECT MAX(...) FROM ...)`.
7. **Evite campos NULL em inserções diretas via SQL:** As tabelas do ERP Senior normalmente não aceitam valores `NULL` e frequentemente não têm valores padrão configurados diretamente na estrutura física do banco. Portanto, ao executar inserções manuais via SQL (`ExecutarComandoSQL`), informe explicitamente os valores default de todas as colunas não nulas (ex: `' '` para campos do tipo `Alfa`, `0` para campos do tipo `Numero`, ou valores default de negócios do ERP).
8. **Variáveis de sistema (`CodUsu`, `DatSis`, `HorSis`, etc.) nunca entram como texto cru no SQL:** Elas existem apenas no contexto da LSP, não no banco. Extraia o valor antes (`IntParaAlfa(CodUsu, vaUsuGer)`, `vdHoje = DatSis` + `ConverteMascara(3, vdHoje, vaDataGer, "DD/MM/YYYY")`, `IntParaAlfa(HorSis, vaHoraGer)`) e concatene o **valor** no comando. Colocar o literal `"CodUsu"` na string SQL faz o banco tentar interpretá-lo como coluna/identificador e o comando falha.
9. **`ProcuraEnter` em loop pode não terminar:** ao varrer um texto linha a linha com `ProcuraEnter`, a última linha sem `ENTER` final pode fazer a função devolver o restante sem consumir nada — `vaResto` não diminui e o laço entra em **loop infinito**. Use **guarda de progresso**: guarde `vaResto` antes da chamada e, se o retorno `StrResto` for igual ao valor anterior, trate o que sobrou como a última linha e zere `vaResto`. Para leitura de arquivo, `Abrir`/`Lernl` (que sinaliza EOF) é mais seguro que carregar tudo e fatiar.
10. **`ArqExiste` e `ListaQuantidade` não documentam o retorno no catálogo:** o `functions.json` não mostra parâmetro de saída (`end`) nem mecanismo de retorno claro para essas funções. Em código novo, prefira funções com saída inequívoca: valide presença/conteúdo com `EstaNulo(...)` e `TamanhoAlfa(...)` em vez de depender do retorno de `ListaQuantidade`/`ArqExiste`.
11. **Em condições compostas, cada comparação entre parênteses próprios:** numa condição com `Ou`/`E` dentro de `Se`, `Senao Se` ou `Enquanto`, **cada** comparação (`=`, `<>`, `>`, `<`, `>=`, `<=`) tem que estar entre parênteses individuais, além do parêntese externo do comando. Sem isso o motor de regras interpreta a precedência errado e a condição falha. Comparação **única** pode manter o parêntese único do comando (`Se (vnExiste = 0)`).
    ```lsp
    @ ERRADO @  Se (gnCodResp = 0 Ou gnCodResp >= 500)
    @ CORRETO @ Se ((gnCodResp = 0) Ou (gnCodResp >= 500))

    @ ERRADO @  Enquanto (vnI < vnQtd E vaAchou = "S")
    @ CORRETO @ Enquanto ((vnI < vnQtd) E (vaAchou = "S"))
    ```
12. **Linha física longa demais estoura o compilador da regra:** o motor de regras rejeita
    linhas de código muito compridas, **independente da técnica usada**. O caso típico é
    o SQL grande (`SQL_DefinirComando`, `ExecutarComandoSQL`, `Cur.SQL`): nunca gere o
    comando numa linha só. Quebre em **várias linhas curtas** — uma cláusula por linha,
    3 a 5 colunas por linha. Regra prática: **nada acima de ~120 caracteres por linha**. A conta é da **linha física
    inteira, com a indentação** — um `SQL_DefinirComando(vaCur, "SELECT ... WHERE ... AND ...")` dentro de
    dois `Se` aninhados passa de 120 fácil. SQL com mais de uma cláusula `WHERE`/`AND`: monte em `vaCmd`.

    Há duas técnicas de quebra e elas **não podem ser misturadas no mesmo comando**:

    - **`+` (concatenação em variável `Alfa`) — preferida.** É a única que permite
      **injetar valores de variáveis LSP** no meio do comando (SQL dinâmico: filtro
      opcional, nome de tabela variável, dialeto do banco).
    - **`\` (continuação de linha dentro de um literal único) — só para SQL 100% estático.**
      O literal é um texto só: não aceita `+` nem variável no meio.

    ```lsp
    @ ERRADO @ comando inteiro numa linha (300+ caracteres) — não compila
    SQL_DefinirComando(xCur,"INSERT INTO USU_TTAB (COD, NOM, DAT, VLR, OBS) SELECT USU_COD, USU_NOM, USU_DAT, USU_VLR, USU_OBS FROM USU_TORI WHERE USU_CHV = :xChv");

    @ ERRADO @ misturar as duas técnicas no mesmo comando
    vaCmd = "INSERT INTO USU_TTAB (COD, NOM) \
             VALUES (:xCod, :xNom) " + vaFiltro;

    @ CORRETO @ '+' em pedaços curtos — permite SQL dinâmico
    Definir Alfa vaCmd;
    vaCmd = "INSERT INTO USU_TTAB (COD, NOM, DAT, VLR, OBS) ";
    vaCmd = vaCmd + "SELECT USU_COD, USU_NOM, USU_DAT, USU_VLR, USU_OBS ";
    vaCmd = vaCmd +   "FROM USU_TORI ";
    vaCmd = vaCmd +  "WHERE USU_CHV = :xChv";
    SQL_DefinirComando(xCur, vaCmd);

    @ CORRETO @ '\' num literal único e estático (sem '+', sem variável no meio)
    SQL_DefinirComando(xCur,"SELECT USU_COD, USU_NOM \
                               FROM USU_TORI \
                              WHERE USU_CHV = :xChv");
    ```

    Atenção ao espaço no fim de cada pedaço concatenado (`"... COD, NOM) "`): sem ele as
    cláusulas colam (`...NOM)SELECT...`) e o banco recusa o comando.

    **Muitos `+` num único comando também não compila** (`O Comando é muito complexo`),
    mesmo com cada linha física curta: um `vaCmd = "..." + "..." + ... ;` que atravessa
    dezenas de linhas estoura o limite de complexidade da expressão. Monte o SQL em
    **vários comandos** `vaCmd = vaCmd + "...";`, uma cláusula por comando — foi o que
    destravou o `ORDER BY` com 13 `Case When` do WS `scania.DeterminaST_Tic` (06/10/2026).
13. **Variáveis de função NÃO são isoladas por função** `[fato de campo — 08/09/2026, ColetaEVT 0.8]`:
    uma função chamada que declara um `va*`/`vn*` com o mesmo nome de uma variável do chamador
    **sobrescreve o valor do chamador**. Regra prática: **nome único por função** (prefixo curto da
    função depois do prefixo de tipo, ex.: `vaTkResto`), sobretudo em funções chamadas dentro de
    laços. Sintoma clássico: laço que processa **só o primeiro item**.
    ```lsp
    @ ERRADO — TokenizarChave() declara o proprio vaResto e zera o do chamador @
    Funcao ReobservarEstado();  Inicio  Definir Alfa vaResto; ... TokenizarChave(); ... Fim;
    Funcao TokenizarChave();    Inicio  Definir Alfa vaResto; ...                     Fim;

    @ CORRETO — prefixo da funcao depois do prefixo de tipo @
    Funcao TokenizarChave();    Inicio  Definir Alfa vaTkResto; ...                   Fim;
    ```



14. **Função de usuário não pode ter o nome de uma função nativa** `[campo — 30/10/2026]`: o
    compilador resolve o nome pela built-in e acusa *"Faltam parâmetros na chamada da função
    GERAMOVIMENTO"* (a nativa `GeraMovimento(Numero)` existe no catálogo). Antes de nomear uma
    `Definir Funcao`, confira: `python3 scripts/buscar_funcao.py <Nome>` — se achar, use outro
    nome (ex.: sufixo do contexto, `GeraMovimentoWs`).

15. **Colchetes em `Mensagem` viram botões** `[campo — 29/10/2026]`: em `Mensagem(Retorna, texto)` o trecho
    entre `[` `]` é a lista de botões da caixa (`"Confirma? [Sim][Nao]"`). Um `[AVISO]` decorativo corta a
    mensagem e vira um botão truncado. Destaque com parênteses ou travessão (`"AVISO - ..."`). **Ao revisar
    código existente, troque também os colchetes decorativos** — o texto parece inofensivo, mas é bug.
16. **Nunca escreva `@` dentro do texto de um comentário `@ ... @`:** o segundo `@` fecha o comentário e o
    resto da linha vira código (ex.: `@ conecta em usuario@host @` quebra a regra). Comentário que precisa
    citar e-mail, URL `usuario@host` ou `@Author` vai em `/* ... */`.

## 🏷️ Nomenclatura de variáveis

Prefixo por tipo + CamelCase, descritivo, sem acento, sem palavra reservada:

- `va` → Alfa (texto): `vaNomeCompleto`
- `vn` → Numero: `vnValorTotal`
- `vd` → Data: `vdDataVencimento`
- parâmetros de função usam prefixo `p` (`pTela`, `pData`).

## 🔎 Como consultar o catálogo de funções (deste projeto)

Antes de usar uma função, confirme a assinatura real — **não invente**. A LSP é
case-insensitive, então compare nomes ignorando a caixa.

- **`scripts/buscar_funcao.py`** (forma recomendada): busca no catálogo e já mostra a
  **direção** de cada parâmetro (`→ SAÍDA` vs `entrada`).
  `python3 scripts/buscar_funcao.py <Nome>` · `--full` inclui exemplo · `--listar <prefixo>` só lista nomes.
- **`functions.json`**: mapa `Nome → { signature, params[{name,type,direction,description}], returns[], description, code }`.
  Procure-o **na raiz do projeto** (ou nesta pasta de skill, se houver bundle).
  Para localizar manualmente: `grep -i '"nomeFuncao"' functions.json`.
- **`docs/functions/<Nome>.md`** (quando presente no projeto): documentação completa por
  função, com **exemplo de uso real**. Use o nome canônico do `functions.json`.

Sempre cheque a `direction` de cada parâmetro: `in` = você fornece; `out` (`end`) = recebe o resultado.

> ✅ O `functions.json` cobre **676 funções**, incluindo as APIs `SQL_*` (cursores,
> categoria `sql`), `Http*` (requisições, categoria `http`) e `Ftp*` (transferência de
> arquivos, categoria `ftp` — ver `reference/ftp.md`). Consulte qualquer uma com
> `python3 scripts/buscar_funcao.py <Nome>`; `reference/quick-reference.md` traz os padrões
> de uso prontos (extraídos dos exemplos reais `.lspt`).

> ⚠️ **Ausência no catálogo não prova que a função não existe.** O `functions.json` nasce
> da documentação oficial, que tem buracos: a família de bind `SQL_DefinirAlfa` /
> `SQL_DefinirInteiro` / `SQL_DefinirFlutuante` / `SQL_DefinirData` faltava nele e é usada
> em mais de 1500 pontos de regras em produção. Antes de concluir "não existe" e escrever
> um contorno, procure a função nas regras `.lspt` reais
> (`grep -rn "NomeDaFuncao" --include="*.lspt" --include="*.sfr" --include="*.sit" .`).

## 🩺 O que o linter da extensão detecta automaticamente

A extensão LSPT (v1.11.3+) emite `Warning` para:

| Situação | Onde aparece |
|---|---|
| Operação/concatenação/chamada dentro de parâmetro de função | Linha da chamada problemática |
| `Pare`/`Continue` fora de loop `Para`/`Enquanto` | Linha do `Pare`/`Continue` |
| `SQL_AbrirCursor(cursor)` sem `SQL_FecharCursor`/`SQL_Destruir` correspondente | Linha do `SQL_AbrirCursor` |

A checagem de cursor funciona tanto dentro de funções (`Funcao...Inicio...Fim`) quanto
no nível raiz do arquivo. Controlado por `lspt.diagnostics.sqlCursorLeak` (padrão: ativado).

## 📚 Referência detalhada (carregue sob demanda)

Mantenha este SKILL.md como guia rápido; abra o arquivo de referência quando precisar:

- **`reference/sintaxe.md`** — operadores (incl. ausência de `%` → `RestoDivisao`),
  palavras reservadas, variáveis de sistema, variáveis de regras por evento
  (`NumRegraEvento`, `Formulario`, `AbaAtiva`), tipos, declaração (arrays/tamanho), blocos.
- **`reference/erros-comuns.md`** — os 13 erros mais frequentes (incl. `Chr()` inexistente,
  `FormatarData` com `Numero`, atribuição de data, `Truncar`, `p...` em `SQL_Retornar*`,
  colchetes em `Mensagem`).
- **`reference/quick-reference.md`** — cartões por categoria (strings, conversões, datas,
  validação, HTTP, banco de dados) com nomes de função já validados.
- **`reference/padroes.md`** — padrões prontos: validação, conversão segura, tratamento de erro.
- **`reference/parametros-linha-comando.md`** — parâmetros de CLI do executável Senior (G5/G6)
  para depuração/testes: `-mcdebug`/`-candebug` (debug de WS passo a passo), `-sqlmon`, `-log`,
  `-limpar`, `-form:<tela>`. Operacional, não é sintaxe LSP.
- **`reference/identificadores.md`** — índice dos 3157 Identificadores de Regras (pontos onde o ERP
  aciona sua regra), por módulo. Detalhe (variáveis ENTRADA/SAÍDA + exemplo):
  `scripts/buscar_identificador.py <código|tela|termo> [--full]`. Ver seção 🧩 abaixo.
- **`reference/tabelas.md`** — índice das 3120 tabelas nativas do dicionário de dados (R996TBL),
  agrupadas por módulo. Campos de uma tabela:
  `scripts/buscar_tabela.py <TABELA> --campos`. Ver seção 🗃️ abaixo.
- **`reference/seguranca-sgu.md`**, **`reference/ftp.md`**, **`reference/edocs.md`**,
  **`reference/banco-sgbd.md`** — temas específicos; resumo na seção 🧰 abaixo.
- **`reference/tabelas-edocs.md`** — dicionário das 344 tabelas do **eDocs** (banco separado do
  ERP): NF-e, NFS-e, CT-e, MDF-e, eSocial, GNRE, NFC-e… Busca:
  `scripts/buscar_tabela_edocs.py <termo|TABELA> [--campos]`. Ver `reference/edocs.md`.

## 🧩 Estrutura e sintaxe

- **Comentários — dois estilos, cada um no seu lugar:**
  - **`@ ... @` = comentário de LINHA.** Fica numa única linha (`@-- ... --@` é a mesma coisa). Nunca abra `@` numa linha e feche em outra, e nunca empilhe vários `@ ... @` seguidos para formar um "bloco".
  - **`/* ... */` = comentário de BLOCO.** Todo comentário com **mais de uma linha** (cabeçalho do arquivo, explicações longas, tabelas de parâmetros) usa `/* ... */`.
  ```lsp
  @ ERRADO — @ empilhado fazendo as vezes de bloco @
  @ Parametros: @
  @   aNomTab -> tabela @
  @   aTipLog -> tipo @

  @ CORRETO — bloco multilinha em /* */ @
  /*
   * Parametros:
   *   aNomTab -> tabela
   *   aTipLog -> tipo
   */
  vaChave = " ";   @ linha unica: @ ... @ aqui e certo @
  ```
- Blocos: `{ ... }` ou `Inicio ... Fim;`. Comandos terminam com `;`.
- Funções — **corpo no FIM do arquivo, senão a regra não roda**: no topo ficam só as
  declarações `Definir Funcao`; os corpos (`Funcao ... Inicio ... Fim;`) vêm **depois**
  de todo o código principal, no final do arquivo.
  ```lsp
  Definir Funcao MinhaFuncao();   @ declaração no topo @
  ...
  @ codigo principal da regra @
  ...
  Funcao MinhaFuncao();           @ corpo no FIM do arquivo @
     Inicio
        @ corpo @
     Fim;
  ```
- Condicional: `Se (cond) { ... } Senao Se (cond) { ... } Senao { ... }`
- Loops: `Para (vn=0; vn<vnQtd; vn++) { ... }` · `Enquanto (cond) { ... }`
  (`Pare;` só dentro de loop; `Continue;` pula iteração).
- `Cancel(1)` cancela impressão/registro; `ValRet`/`ValStr` + `Cancel(2)` definem valor impresso.
- **Cabeçalho de arquivo (snippet `header`):** todo arquivo `.lsp`/`.lspt` começa com o bloco de
  cabeçalho do snippet do editor, **antes** de qualquer comentário/código:
  ```lsp
  /*
   * @Author: eliezer.organ
   * @Email: eorgan@organ.eti.br
   * @Date: AAAA-MM-DD HH:MM:SS
   * @Last Modified by: eliezer.organ
   * @Last Modified time: AAAA-MM-DD HH:MM:SS
   * @Description: <objetivo da regra>
   */
  ```

## 📐 Padrões seguros (há snippets prontos em `snippets/lspt-snippets.json`)

- **Cursor SQL (recomendado):** `SQL_Criar` → `SQL_UsarSqlSenior2` → `SQL_DefinirComando`
  → `SQL_AbrirCursor` → loop `Enquanto (SQL_EOF(...) = 0)` com `SQL_RetornarAlfa/Inteiro/...`
  → `SQL_Proximo` → `SQL_FecharCursor` → `SQL_Destruir`.
  ⚠️ O linter avisa se `SQL_AbrirCursor` for usado sem `SQL_FecharCursor`/`SQL_Destruir`.
- **Cursor nativo (`Definir Cursor`, o "tipo 1"):** é o que mais aparece em regra já existente;
  saiba ler e manter. Em regra nova prefira `SQL_*`; use o nativo para SELECT simples ou para
  seguir o estilo da regra que está sendo alterada.
  ```lsp
  Definir Cursor Cur_E075PRO;            @ convencao: Cur_ + tabela @
  Definir Alfa   vaDesPro;

  Cur_E075PRO.SQL "SELECT CODPRO, DESPRO FROM E075PRO \
                    WHERE CODEMP = :vnCodEmp AND CODFAM = :vaCodFam \
                    ORDER BY CODPRO";
  Cur_E075PRO.AbrirCursor();
  Enquanto (Cur_E075PRO.Achou)
     {
        vaDesPro = Cur_E075PRO.DesPro;   @ coluna lida como Cursor.Campo @
        Cur_E075PRO.Proximo();
     }
  Cur_E075PRO.FecharCursor();
  ```
  - O SQL é um **literal** logo depois de `.SQL` (sem `=` e sem parênteses); quebre a linha com
    `\` no fim (Limitação 12).
  - `:variavel` dentro do texto faz o bind direto com a variável da regra, já tipado: não
    concatene nem ponha aspas em volta.
  - Um registro só: `Se (Cur.Achou)`. Vários: `Enquanto (Cur.Achou)` com `Cur.Proximo()` no fim
    do laço. Também existe `Cur.NaoAchou`. Sempre `FecharCursor()`.
  - A lista de colunas do SELECT principal não aceita `SELECT 1`, agregação nem alias
    (Limitação 6). Em subconsulta do `WHERE` os dois funcionam: `EXISTS (SELECT 1 ...)`,
    `... = (SELECT MAX(...) ...)`.
- **Comando `ExecSql` (escrita com bind):** executa `INSERT`/`UPDATE`/`DELETE` escrito como
  literal, com o mesmo bind `:variavel` do cursor nativo. Não é função: não tem parênteses nem
  parâmetro de saída, e um erro de banco interrompe a regra com a mensagem do banco.
  ```lsp
  ExecSql "UPDATE USU_TLOGIMP SET USU_SITIMP = :vaSitImp \
            WHERE USU_CODEMP = :vnCodEmp AND USU_SEQIMP = :vnSeqImp";
  ```
  Qual usar para gravar:
  | Situação | Use |
  |---|---|
  | Comando fixo, valores em variáveis | `ExecSql "..."` (bind, sem concatenar) |
  | Comando montado em variável Alfa, erro tratado na regra | `ExecSQLEx(vaComando, vnErro, vaMsg)` (`vnErro = 0` é sucesso) |
  | Precisa das linhas afetadas, `DELETE` não entra | `ExecutarComandoSQL` (abaixo) |
  | Várias gravações que valem juntas | `IniciarTransacao()` … `FinalizarTransacao()`; no erro, `DesfazerTransacao()` |
- **HTTP:** `HttpObjeto` → cabeçalhos → `HttpGet`/`HttpPost` → `HttpLeCodigoResposta`.
- **JSON:** `ValorElementoJson` (campo simples); `ListaRegraCarregarJson` + `ListaRegraPrimeiro`/
  `ListaRegraProximo`/`ListaRegraObterValorAlfa` (coleções).
- **Validação:** `EstaNulo(vaVar, vnNulo)` e cheque `vnNulo = 1`.
- **SQL com escrita (comando em variável):** `ExecutarComandoSQL(vaComando, "N", vnLinhas, vaResSql)`
  — só `INSERT`/`UPDATE`; **não executa `SELECT`** (leitura é sempre por cursor). Sucesso quando o
  parâmetro de saída `vaResSql` retorna `"OK"`; em erro, `vaResSql` traz o texto da exceção. (`"N"` = sem
  conexão paralela; com `"S"` o `vnLinhas` volta 0.)
- **UPSERT (atualiza-ou-insere) via cursor:** antes de gravar, verifique se a chave já existe e
  decida entre `UPDATE` e `INSERT`. Torna a importação **idempotente** (reexecutável sem erro de
  chave duplicada) e reflete alterações em registros existentes. Custo: um `SELECT` por linha.
  ```lsp
  @ monta o SELECT da chave - coluna fisica real (regra 6: nunca SELECT 1) @
  vaSelect = "SELECT SEQTXT FROM E001TXT WHERE CODEMP = " + vaCodEmpSql;
  vaSelect = vaSelect + " AND SEQTXT = " + vaSeqTxtSql;

  SQL_DefinirComando(vaCursor, vaSelect);   @ cursor criado 1x com SQL_Criar/SQL_UsarSqlSenior2 @
  SQL_AbrirCursor(vaCursor);
  vnExiste = SQL_EOF(vaCursor);             @ 0 = achou registro / 1 = nao achou @
  SQL_FecharCursor(vaCursor);

  Se (vnExiste = 0) { @ UPDATE dos campos variaveis + auditoria @ }
  Senao            { @ INSERT com defaults explicitos @ }
  ```
  Crie o cursor uma vez (`SQL_Criar`→`SQL_UsarSqlSenior2`→`SQL_UsarAbrangencia`), reutilize com
  `SQL_DefinirComando`/`SQL_AbrirCursor`/`SQL_FecharCursor` por linha e `SQL_Destruir` ao final.
- **Segurança SQL:** prefira placeholders; nunca concatene entrada do usuário cru no SQL.
- **Leitura de CSV linha a linha:** use guarda de progresso com `ProcuraEnter` (ver Limitação 9) ou
  `Abrir`/`Lernl`. Sanitize numéricos com `AlfaParaInt`→`IntParaAlfa`, limpe CRLF com
  `CaracterParaAlfa(13, vaCR)` + `SubstAlfa(vaCR, "", vaLinha)` (altera `vaLinha` no lugar;
  `TrocaString` faz o mesmo devolvendo em outra variável) e espaços com `LimpaEspacos`. Pule cabeçalhos e
  valide campos obrigatórios com `EstaNulo` antes de gravar.

## 🔁 Exemplo completo (antes → depois)

**Antes (com 3 erros típicos):**

```lsp
Funcao MostraTotal();
   Inicio
      @ ERROS: matemática, conversão e concatenação dentro do parâmetro @
      Mensagem(Retorna, "Total: " + IntParaAlfa(vnQtdA + vnQtdB) + " itens");
   Fim;
```

**Depois (correto — manipule primeiro, chame depois):**

```lsp
Definir Funcao MostraTotal();

Funcao MostraTotal();
   Inicio
      Definir Numero vnTotal;
      Definir Alfa vaTotal;
      Definir Alfa vaMensagem;

      vnTotal = vnQtdA + vnQtdB;       @ 1. matemática antes @
      IntParaAlfa(vnTotal, vaTotal);   @ 2. conversão por parâmetro de saída @
      vaMensagem = "Total: " + vaTotal + " itens";  @ 3. concatenação antes @
      Mensagem(Retorna, vaMensagem);   @ 4. passa a variável pronta @
   Fim;
```

## 📦 Exemplos de padrões prontos

**Cursor SQL (forma recomendada) — sempre feche e destrua:**

```lsp
Definir Alfa vaComando;
Definir Alfa vaSql;
Definir Alfa vaNome;

vaComando = "SELECT NomFun FROM R034FUN WHERE NumCpf = '12345678900'";

SQL_Criar(vaSql);
SQL_UsarSqlSenior2(vaSql, 0);
SQL_UsarAbrangencia(vaSql, 0);
SQL_DefinirComando(vaSql, vaComando);
SQL_AbrirCursor(vaSql);
Enquanto (SQL_EOF(vaSql) = 0)
   {
      SQL_RetornarAlfa(vaSql, "NomFun", vaNome);
      @ ... usa vaNome ... @
      SQL_Proximo(vaSql);
   }
SQL_FecharCursor(vaSql);
SQL_Destruir(vaSql);
```

**HTTP GET + leitura de JSON:**

```lsp
Definir Alfa  vaHTTP;
Definir Alfa  vaJson;
Definir Alfa  vaCidade;
Definir Numero vnCodResp;

HttpObjeto(vaHTTP);
HttpDesabilitaErroResposta(vaHTTP);
HttpAlteraCabecalhoRequisicao(vaHTTP, "Accept", "application/json");
HttpGet(vaHTTP, "https://viacep.com.br/ws/01001000/json/", vaJson);
HttpLeCodigoResposta(vaHTTP, vnCodResp);
Se (vnCodResp = 200)
   {
      ValorElementoJson(vaJson, "", "localidade", vaCidade);  @ campo simples @
   }
```

**Lista dinâmica a partir de array JSON:**

```lsp
Definir Numero vnLista;
Definir Alfa   vaAchou;
Definir Alfa   vaId;
Definir Alfa   vaNomeProd;

ListaRegraCriarLista(vnLista);
ListaRegraCarregarJson(vnLista, vaJsonProdutos, "produtos", "id;nome");
ListaRegraPrimeiro(vnLista, vaAchou);
Enquanto (vaAchou = "S")
   {
      ListaRegraObterValorAlfa(vnLista, "id", vaId, vaAchou);
      ListaRegraObterValorAlfa(vnLista, "nome", vaNomeProd, vaAchou);
      @ ... processa ... @
      ListaRegraProximo(vnLista, vaAchou);
   }
```

**Validação + INSERT com tratamento de erro:**

```lsp
Definir Numero vnNulo;
Definir Numero vnLinhas;
Definir Alfa   vaComando;
Definir Alfa   vaResSql;

EstaNulo(vaEmail, vnNulo);
Se (vnNulo = 1)
   {
      Mensagem(Erro, "E-mail obrigatório.");
   }
Senao
   {
      vaComando = "INSERT INTO MinhaTabela (Email) VALUES ('" + vaEmail + "')";
      ExecutarComandoSQL(vaComando, "N", vnLinhas, vaResSql);   @ "N" = sem conexão paralela @
      Se (vaResSql <> "OK")
         {
            Mensagem(Erro, vaResSql);   @ vaResSql traz o texto da exceção @
         }
   }
```

## 🧩 Identificadores de Regras (onde a sua regra se acopla ao ERP)

Uma regra LSP **não roda sozinha** — ela é acionada pelo ERP num **Identificador de Regra**: um
ponto de extensão (hook) que o código-fonte do sistema dispara em rotinas específicas. É o elo que
fecha o ciclo: **identificador (onde) → variáveis (o quê) → funções/SQL/WS (como)**.

**Como funciona:**
- Em pontos do código, o ERP faz um `select` na tabela **E098REG** e só executa a sua regra se o
  identificador estiver cadastrado e **ativo** (`E098REG.SitReg = 'A'`).
- Cadastro/ativação é por **empresa**, na tela **F098REG** (Cadastros > Identificadores e parâmetros).
  Para usar em várias empresas, cadastre em cada uma.
- Nomenclatura: `MOD-CODTELANN` (ex.: `CHA-900BACMC01` = módulo CHA, tela F900BAC).
- Um identificador **pode não usar regra** — aí funciona como um parâmetro/flag (liga/desliga
  comportamento) e não tem variáveis.

**Variáveis: ENTRADA vs SAÍDA.** A ficha de cada identificador traz uma tabela com a coluna
**Retorna Valor**:
- **`N` = ENTRADA** — contexto que o ERP fornece; você só **lê** (use em consistências, SQL, cálculo).
- **`S` = SAÍDA** — você **atribui** na regra para devolver o resultado e alterar o comportamento padrão.
- Sufixo **`<9>`** no nome = **grade multi-registro**: repita o campo com `1`, `2`, `3`… (ex.:
  `ChaACodCmp1`, `ChaACodCmp2`). Comece em 1 e **não pule número** — o ERP para no primeiro ausente.

```lsp
@-- declare as variáveis do identificador (mesmo nome da ficha) e atribua as de SAÍDA @
Definir Alfa ChaAAbrOri;     @ ENTRADA: você lê @
Definir Alfa ChaACodCmp1;    @ SAÍDA: você preenche (1º registro da grade) @
Definir Numero ChaNQtdUti1;
...
ChaACodCmp1 = "1405";        @ devolve ao ERP @
ChaNQtdUti1 = 7;
```

**Rollback (importante):** identificadores rodam **dentro da transação nativa**. Qualquer erro de
consistência ou `GeraLog` faz **rollback de tudo** — inclusive tabelas/campos de usuário. Para
persistir apesar do rollback: grave numa tabela auxiliar via **trigger** ou via **WS no Middleware**
(`ModoExecucao` 2/3 — **não** Modo Local, que é desfeito junto). Ver seção de Web Service abaixo.

**Onde consultar** (não inlinar — são 3157 identificadores):
- Índice por módulo: `reference/identificadores.md`.
- Detalhe de um identificador (variáveis ENTRADA/SAÍDA + exemplo de regra):
  `python3 scripts/buscar_identificador.py <código|tela|termo> [--full]`
  (ex.: `... CHA-900BACMC01 --full`, ou por tela `... F900BAC`).

## 🌐 Acionar um Web Service interno da Senior (preferir ao INSERT cru)

Para **criar/atualizar entidades de cadastro** (cliente, fornecedor, produto, movimento de estoque,
nota fiscal…) **não faça `INSERT`/`UPDATE` direto na tabela física** — o SQL cru pula as validações de
negócio, a numeração automática e os gatilhos do ERP. Se existe um WS com porta de escrita
(`Gravar*`, `Importar*`, `Incluir*`), use o **proxy interno**:

```lsp
@-- 1. declarar o proxy no topo: interno.<pacote>.<Porta>[_<versao>] @
Definir interno.com.senior.g5.co.ger.cad.clientes.GravarClientes_5 vCliente;

@-- 2. preencher. CriarLinha() SÓ se o WS aceita mais de um registro (bloco repetível) @
vCliente.DadosGeraisCliente.CriarLinha();
vCliente.DadosGeraisCliente.NomCli = vaNomCli;   @ tipo do campo = tipo do WS: String→Alfa, Integer→Numero @
vCliente.DadosGeraisCliente.DefinicoesCliente.CriarLinha();   @ bloco filho = nova CriarLinha @
vCliente.DadosGeraisCliente.DefinicoesCliente.CodEmp = vnCodEmp;

@-- 3. modo de execução (ver tabela) @
vCliente.ModoExecucao = 2;

@-- 4. executar @
vCliente.Executar();

@-- 5. ler retorno pelos campos do próprio objeto @
vaRet  = vCliente.RetornosClientes.Retorno;   @ contrato de sucesso VARIA por WS @
vaErro = vCliente.erroExecucao;               @ erro de servidor @
Se ((vaRet = "OK")) { @ ok @ } Senao { @ trata erro @ }
```

**`ModoExecucao`:** `1` Local (mesma instância/banco, como função nativa — testes) · `2` Síncrono
(envia ao app server, **pausa e aguarda** o retorno) · `3` Assíncrono (enfileira e **segue sem esperar**
— o retorno não vem na hora, acompanhe por tabela `tmp_` + status) · `4` Agendado.

**Regras:**
- `CriarLinha()` **só** quando o WS aceita mais de um registro (bloco repetível); WS de registro único
  atribui o campo direto (ex.: `wFec.eCodFil = vaCodFil;`).
- O campo do proxy exige a variável **no tipo declarado do WS** (sem coerção): converta antes
  (`IntParaAlfa(vnCgcCpf, vaCgcCpf)`).
- O **contrato de sucesso varia**: uns retornam `.Retorno = "OK"`, outros
  `mensagemRetorno = "Processado com sucesso."`. `erroExecucao` é o erro de servidor.
- Se você **não passar a chave** (ex.: `codCli`), o próprio WS gera a numeração e a devolve no retorno —
  **não** use `MAX(...)+1`.
- Os **nomes de pacote/porta/bloco/campo** vêm da doc do WS (**não** do `functions.json`):
  consulte `reference/webservices.md` ou `scripts/buscar_ws.py <NomeWS>`.

**Decisão:** a entidade tem porta `Gravar`/`Importar`/`Incluir`? **Prefira o WS ao `INSERT` cru.**

## 🧰 Temas específicos (abra o arquivo quando o pedido tocar no assunto)

O detalhe saiu daqui para não pesar em toda regra. Fica só a armadilha de cada tema:

- **Permissão por usuário/grupo (SGU)** → `reference/seguranca-sgu.md`. Use a família `SegEnt*`
  em vez de SQL em `E099USU`. Ela **não está no `functions.json`** e **retorna por `=`**
  (exceção à Limitação 2).
- **FTP/SFTP** → `reference/ftp.md`. FTP simples e SFTP (`FtpSetaSFTP`) funcionam; **FTPS/FTPES
  (TLS) não existe na LSP**: use cliente externo via `ExecProg`.
- **eDocs (NF-e, CT-e, NFS-e…)** → `reference/edocs.md`. Banco **separado** do ERP, tabelas
  `Nxxx`/`INTERF_*`; busque com `scripts/buscar_tabela_edocs.py <termo|TABELA> [--campos]`.
- **SQL nativo que muda por banco (Oracle, SQL Server, PostgreSQL)** → `reference/banco-sgbd.md`.
  Se der, escreva em Senior SQL 2 (`SQL_UsarSqlSenior2`) e não detecte nada. Se precisar,
  `RetornaValorCFG` na chave `com.senior.database.sapiens.db_kind` e compare pelo **prefixo**
  (`ORACLE`, `MSSQL`), nunca por igualdade.

## 🗃️ Dicionário de Tabelas e Campos (quando precisar escrever SELECTs)

O ERP Senior usa tabelas Oracle nomeadas no padrão `XNNNYYY` (ex.: `E070EMP`, `E028SNF`).
Para descobrir o nome correto de uma tabela ou campo antes de escrever um `ExecutarComandoSQL`:

```
python3 scripts/buscar_tabela.py <termo>             # busca tabelas por nome ou descrição
python3 scripts/buscar_tabela.py <TABELA> --campos   # campos com tipo, tamanho e enum
python3 scripts/buscar_tabela.py <TABELA> --joins    # FKs: campo → tabela destino
python3 scripts/buscar_tabela.py --enum <LSTNAM>     # valores possíveis de uma lista/enum
```

Exemplos práticos:
```
buscar_tabela.py "nota fiscal entrada"   → encontra E440NFC, E440DPR, etc.
buscar_tabela.py E070EMP --campos        → mostra CodEmp (Num/4), NomEmp (Alfa/100), etc.
buscar_tabela.py E440NFC --joins         → CodFor → E095FOR.NomFor, CodEmp → E070EMP.NomEmp…
buscar_tabela.py --enum LTipNfe          → 1=Normal, 2=Complementar… (via ENUNAM no --campos)
```

**Tipos de campo (DATTYP):**

| Código | Tipo | Uso em LSP |
| --- | --- | --- |
| 1 | Alfa (texto) | variável `va…` / parâmetro Alfa |
| 2 | Num (numérico) | variável `vn…` / parâmetro Numero |
| 3 | Lóg (lógico, tamanho 1) | `'S'`/`'N'` no banco → `SQL_RetornarAlfa` / variável `va…` |
| 4 | Data | variável `vd…` / parâmetro Data |
| 5 | Hora (minutos desde 00:00) | variável `vn…` (ex.: 13:30 = 810) |
| 8 | Blob (memo/binário: XML, JSON, imagem) | raro em regra; o catálogo não tem `SQL_Retornar` próprio para Blob |

**Regras ao escrever SELECTs em LSP:**
- Use `SQL_Criar` → `SQL_DefinirComando` → `SQL_AbrirCursor` → `SQL_Retornar*` → `SQL_FecharCursor` → `SQL_Destruir`.
- Leitura de coluna: `SQL_RetornarAlfa`, `SQL_RetornarInteiro`, `SQL_RetornarFlutuante`,
  `SQL_RetornarData` — prefixo `p` se a coluna tem alias `p<campo>`.
  **Não existe `SQL_RetornarNumero`**: escolha entre `Inteiro` e `Flutuante`.
- **Parâmetros bind, sempre que houver valor variável no SQL:** escreva `:nome` no comando e
  atribua com `SQL_DefinirAlfa` / `SQL_DefinirInteiro` / `SQL_DefinirFlutuante` /
  `SQL_DefinirData` (o nome vai **sem** os dois-pontos). Bind depois de `SQL_DefinirComando`
  e antes de `SQL_AbrirCursor`. **Não existe `SQL_DefinirNumero`.**
  ```lsp
  SQL_DefinirComando(vaCursor, "SELECT NOMCLI FROM E085CLI WHERE CODCLI = :xCodCli");
  SQL_DefinirInteiro(vaCursor, "xCodCli", vnCodCli);   @ sem os ":" aqui @
  SQL_AbrirCursor(vaCursor);
  ```
  Concatenar o valor direto no texto do SELECT é o último recurso — só quando o valor já
  foi convertido e re-serializado (`AlfaParaInt` → `IntParaAlfa`), nunca com Alfa vindo de fora.
- Chave primária da tabela está em `PKFLDS` no índice — sempre inclua no `WHERE` de joins.
- Confirmação de tabela/campo: consulte `reference/tabelas.md` ou o script acima.

**Decisão — leitura:** sempre por cursor (`SQL_*` ou cursor nativo). `ExecutarComandoSQL` não lê.

**Decisão — escrita:** depende do que está sendo gravado.
| Alvo | Caminho |
|---|---|
| Tabela de usuário (`USU_T...`) | SQL direto (`ExecSql`, `ExecSQLEx`, `ExecutarComandoSQL`) é o normal |
| Campo de usuário (`USU_...`) em tabela nativa | `UPDATE` direto, com a chave primária completa no `WHERE` |
| Campo nativo de registro já existente | Prefira WS interno ou a variável de saída do identificador de regra; `UPDATE` direto só para campo sem regra de negócio atrelada, e avise o usuário |
| Registro novo ou exclusão em tabela nativa (cadastro, pedido, título, nota) | WS interno (seção 🌐). `INSERT`/`DELETE` direto pula validações, numeração e tabelas filhas: só a pedido explícito, com todos os defaults (Limitação 7) |

## ✅ Checklist antes de finalizar

- [ ] Nenhuma operação/concatenação/conversão dentro de parâmetros de função.
- [ ] Resultados obtidos por parâmetro de saída (`end`), não por `=`.
- [ ] Toda função usada existe no `functions.json` com a assinatura/ordem corretas.
- [ ] Variáveis com prefixo de tipo (`va`/`vn`/`vd`); em código novo, declaradas no topo (estilo).
- [ ] Nenhuma função chamada reutiliza nome de variável do chamador (nome único por função — ver Limitação 13).
- [ ] Nenhuma `Definir Funcao` com nome de função nativa do catálogo (`buscar_funcao.py <Nome>` não acha — ver Limitação 14).
- [ ] Cursores SQL fechados (`SQL_FecharCursor` + `SQL_Destruir`) — o linter avisa se faltar.
- [ ] `Pare;` apenas dentro de `Para`/`Enquanto`.
- [ ] Nenhuma linha de código muito comprida (~120 caracteres): SQL grande quebrado em
      linhas curtas, com `+` (preferido, aceita variável) **ou** `\` (só literal estático) —
      nunca as duas técnicas no mesmo comando.
- [ ] Corpos das funções (`Funcao ... Inicio ... Fim;`) no **fim** do arquivo; no topo só as declarações `Definir Funcao`.
- [ ] Comentários de mais de uma linha em `/* ... */`; `@ ... @` só em linha única (nunca `@ @` empilhado como bloco).
- [ ] Nenhum `@` dentro do texto de comentário `@ ... @` (e-mail, `usuario@host`) — use `/* ... */` (Limitação 16).
- [ ] Nenhum colchete decorativo em texto de `Mensagem` (`[AVISO]`, `[OK]`) — vira botão (Limitação 15).
- [ ] Arquivos abertos com `Abrir` têm `Fechar` correspondente.
- [ ] Cadastro (cliente/fornecedor/produto…) criado/atualizado via **WS interno** (`interno.<pacote>.Gravar…`), não por `INSERT` cru, quando existe porta de escrita.
- [ ] Regra acoplada a um **Identificador de Regra** existente: variáveis de **SAÍDA** (`Retorna Valor = S`) atribuídas, **ENTRADA** apenas lidas; grades `<9>` numeradas a partir de 1 sem pular (confira em `scripts/buscar_identificador.py <código>`).
- [ ] Transferência de arquivo: protocolo do servidor confere com o que a LSP faz (FTP/SFTP **sim**, FTPS/FTPES **não** — ver `reference/ftp.md`); `FtpUpload`/`FtpDownload` com retorno testado por `= 0` e `FtpUltimoErro` lido em seguida.
- [ ] Nomes de tabelas e campos em SELECTs verificados contra o dicionário (`scripts/buscar_tabela.py`;
      tabelas `N*` do eDocs em `scripts/buscar_tabela_edocs.py`).
- [ ] SQL com sintaxe nativa (`ROWNUM`/`TOP`/`LIMIT`, `NVL`/`ISNULL`…): dialeto **detectado em execução** (`RetornaValorCFG` da chave `db_kind` → `RowNum` → sonda); `db_kind` vem como `oracle_19`/`mssql_2019`, então case o **prefixo** (`ORACLE`/`MSSQL`) com `PosicaoStr` após `ConverteParaMaiusculo` — nunca igualdade exata — e mantenha fallback quando nenhum ramo casar.

---

## 📋 Snippets e Templates LSP

Use snippets como blocos de construção ao gerar regras LSP. Disponível em dois modos:

**Busca explícita** — quando o usuário pede um template específico:
```bash
python3 scripts/buscar_snippet.py cursor              # busca por keyword
python3 scripts/buscar_snippet.py --categoria sql     # todos de uma categoria
python3 scripts/buscar_snippet.py --lista             # índice completo
python3 scripts/buscar_snippet.py cursor --full       # com código LSP completo
python3 scripts/buscar_snippet.py --tipo padrao       # só padrões completos
```

**Categorias disponíveis:** `sql` · `ws` · `http` · `parametros` · `funcoes` · `log`

**Granularidade:**
- `BLOCO` — trecho cirúrgico (ex: só o loop de cursor, só a declaração do WS)
- `PADRÃO` — função completa pronta para copiar e adaptar

**Ao gerar uma regra nova:** consulte os snippets da categoria relevante com `--full` e componha a regra usando os blocos e padrões como ponto de partida. Os snippets usam `@ TODO: @` nos pontos de personalização.
