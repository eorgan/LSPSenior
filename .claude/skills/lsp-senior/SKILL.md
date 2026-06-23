---
name: lsp-senior
description: >-
  Use ao escrever, editar ou revisar código LSP (Linguagem Senior de Programação) —
  arquivos .lsp/.lspt do ERP Senior: regras, cursores SQL, web services e relatórios.
  Cobre o catálogo de 647 funções built-in, incluindo as APIs SQL_* e Http*.
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
4. **Declare variáveis no início** (com `Definir`), não no meio do fluxo.
5. **Funções de usuário não aceitam parâmetros do tipo `Alfa`:** Funções criadas pelo usuário (declaradas com `Definir Funcao`) aceitam apenas parâmetros numéricos (`Numero`) ou nenhum. Para passar ou retornar strings (`Alfa`), utilize variáveis globais como canal de comunicação.
6. **Nunca utilize `SELECT 1` em Cursores da Senior (`Definir Cursor`):** O motor de regras da Senior exige que seja selecionada uma coluna física real existente da tabela (ex: `SELECT SEQTXT FROM ...`), pois constantes como `1` não existem como definição de coluna no banco da Senior e causam erros de definição ou execução no cursor.
7. **Evite campos NULL em inserções diretas via SQL:** As tabelas do ERP Senior normalmente não aceitam valores `NULL` e frequentemente não têm valores padrão configurados diretamente na estrutura física do banco. Portanto, ao executar inserções manuais via SQL (`ExecutarComandoSQL`), informe explicitamente os valores default de todas as colunas não nulas (ex: `' '` para campos do tipo `Alfa`, `0` para campos do tipo `Numero`, ou valores default de negócios do ERP).
8. **Variáveis de sistema (`CodUsu`, `DatSis`, `HorSis`, etc.) nunca entram como texto cru no SQL:** Elas existem apenas no contexto da LSP, não no banco. Extraia o valor antes (`IntParaAlfa(CodUsu, vaUsuGer)`, `vdHoje = DatSis` + `ConverteMascara(3, vdHoje, vaDataGer, "DD/MM/YYYY")`, `IntParaAlfa(HorSis, vaHoraGer)`) e concatene o **valor** no comando. Colocar o literal `"CodUsu"` na string SQL faz o banco tentar interpretá-lo como coluna/identificador e o comando falha.
9. **`ProcuraEnter` em loop pode não terminar:** ao varrer um texto linha a linha com `ProcuraEnter`, a última linha sem `ENTER` final pode fazer a função devolver o restante sem consumir nada — `vaResto` não diminui e o laço entra em **loop infinito**. Use **guarda de progresso**: guarde `vaResto` antes da chamada e, se o retorno `StrResto` for igual ao valor anterior, trate o que sobrou como a última linha e zere `vaResto`. Para leitura de arquivo, `Abrir`/`Lernl` (que sinaliza EOF) é mais seguro que carregar tudo e fatiar.
10. **`ArqExiste` e `ListaQuantidade` não documentam o retorno no catálogo:** o `functions.json` não mostra parâmetro de saída (`end`) nem mecanismo de retorno claro para essas funções. Em código novo, prefira funções com saída inequívoca: valide presença/conteúdo com `EstaNulo(...)` e `TamanhoStr(...)` em vez de depender do retorno de `ListaQuantidade`/`ArqExiste`.
11. **Em condições compostas, cada comparação entre parênteses próprios:** numa condição com `Ou`/`E` dentro de `Se`, `Senao Se` ou `Enquanto`, **cada** comparação (`=`, `<>`, `>`, `<`, `>=`, `<=`) tem que estar entre parênteses individuais, além do parêntese externo do comando. Sem isso o motor de regras interpreta a precedência errado e a condição falha. Comparação **única** pode manter o parêntese único do comando (`Se (vnExiste = 0)`).
    ```lsp
    @ ERRADO @  Se (gnCodResp = 0 Ou gnCodResp >= 500)
    @ CORRETO @ Se ((gnCodResp = 0) Ou (gnCodResp >= 500))

    @ ERRADO @  Enquanto (vnI < vnQtd E vaAchou = "S")
    @ CORRETO @ Enquanto ((vnI < vnQtd) E (vaAchou = "S"))
    ```



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

> ✅ O `functions.json` cobre **647 funções**, incluindo as APIs `SQL_*` (cursores,
> categoria `sql`) e `Http*` (requisições, categoria `http`). Consulte qualquer uma com
> `python3 scripts/buscar_funcao.py <Nome>`; `reference/quick-reference.md` traz os padrões
> de uso prontos (extraídos dos exemplos reais `.lspt`).

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
  palavras reservadas, variáveis de sistema, tipos, declaração (arrays/tamanho), blocos.
- **`reference/erros-comuns.md`** — os 12 erros mais frequentes (incl. `Chr()` inexistente,
  `FormatarData` com `Numero`, atribuição de data, `Truncar`, `p...` em `SQL_Retornar*`).
- **`reference/quick-reference.md`** — cartões por categoria (strings, conversões, datas,
  validação, HTTP, banco de dados) com nomes de função já validados.
- **`reference/padroes.md`** — padrões prontos: validação, conversão segura, tratamento de erro.
- **`reference/parametros-linha-comando.md`** — parâmetros de CLI do executável Senior (G5/G6)
  para depuração/testes: `-mcdebug`/`-candebug` (debug de WS passo a passo), `-sqlmon`, `-log`,
  `-limpar`, `-form:<tela>`. Operacional, não é sintaxe LSP.

## 🧩 Estrutura e sintaxe

- Comentários: `@ comentário @`, `@-- comentário --@` ou `/* bloco */`.
- Blocos: `{ ... }` ou `Inicio ... Fim;`. Comandos terminam com `;`.
- Funções:
  ```lsp
  Definir Funcao MinhaFuncao();   @ declaração no topo @
  ...
  Funcao MinhaFuncao();
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
- **HTTP:** `HttpObjeto` → cabeçalhos → `HttpGet`/`HttpPost` → `HttpLeCodigoResposta`.
- **JSON:** `ValorElementoJson` (campo simples); `ListaRegraCarregarJson` + `ListaRegraPrimeiro`/
  `ListaRegraProximo`/`ListaRegraObterValorAlfa` (coleções).
- **Validação:** `EstaNulo(vaVar, vnNulo)` e cheque `vnNulo = 1`.
- **SQL com escrita:** `ExecutarComandoSQL(vaComando, "N", vnLinhas, vaResSql)` — sucesso quando o
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
  `Abrir`/`Lernl`. Sanitize numéricos com `StrParaInt`→`IntParaAlfa`, limpe CRLF com
  `CaracterParaAlfa(13, vaCR)` + `TrocaString(...)` e espaços com `LimpaEspacos`. Pule cabeçalhos e
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

## ✅ Checklist antes de finalizar

- [ ] Nenhuma operação/concatenação/conversão dentro de parâmetros de função.
- [ ] Resultados obtidos por parâmetro de saída (`end`), não por `=`.
- [ ] Toda função usada existe no `functions.json` com a assinatura/ordem corretas.
- [ ] Variáveis declaradas no topo, com prefixo de tipo (`va`/`vn`/`vd`).
- [ ] Cursores SQL fechados (`SQL_FecharCursor` + `SQL_Destruir`) — o linter avisa se faltar.
- [ ] `Pare;` apenas dentro de `Para`/`Enquanto`.
- [ ] Arquivos abertos com `Abrir` têm `Fechar` correspondente.
- [ ] Cadastro (cliente/fornecedor/produto…) criado/atualizado via **WS interno** (`interno.<pacote>.Gravar…`), não por `INSERT` cru, quando existe porta de escrita.
