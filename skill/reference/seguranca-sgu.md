# 🔐 Segurança SGU — saber a quem o usuário pertence (grupos/papéis)

Quando a regra precisa decidir **com base em quem é o usuário** (ex.: só a contabilidade pode
ativar um cadastro), use a API de **entidades do SGU** (`SegEnt*` / `SegUsu*`) em vez de ler tabelas
`E099USU`/grupos por SQL. Vantagens: respeita a hierarquia de grupos e a segurança nativa.

> ⚠️ **Não estão no `functions.json`** — `buscar_funcao.py` não acha. Origem: doc dos identificadores
> de regras (ex.: `VEN-120EXPGR01`).
>
> ⚠️ **Exceção à regra "retorno por parâmetro de saída":** a família `SegEnt*` **retorna por `=`**
> (valor de retorno da expressão), diferente da maioria das funções LSP.

| Função | Forma | O que faz |
|---|---|---|
| `SegEntExistePorNome(nomeLogon)` | `n = SegEnt...` (retorna 1/0) | usuário/entidade existe no SGU? |
| `SegEntLePorNome(nome, xObj)` | out `xObj` | lê a entidade (usuário/grupo) **pelo nome** p/ o objeto |
| `SegEntLe(codGrupo, xObj)` | out `xObj` | lê a entidade **pelo código** p/ o objeto |
| `SegEntLeCodigo(nomeGrupo)` | `n = SegEnt...` (retorna código) | código do grupo a partir do nome |
| `SegEntCodigo(xObj)` | `n = SegEnt...` (retorna código) | código da entidade já lida no objeto |
| `SegEntNome(xObj, aNome)` | out `aNome` | nome da entidade já lida no objeto |
| `SegEntEhMembro(xObjUsu, codGrupo)` | `n = SegEnt...` (retorna 1/0) | **usuário é membro do grupo?** |
| `SegEntAdicGrp(xObjUsu, codGrupo)` / `SegEntRemvGrp(...)` | — | adiciona/remove usuário do grupo |
| `SegUsuSetaAtivado(xObjUsu, 0\|1)` + `SegEntGrava(xObj)` | — | (in)ativa o usuário e persiste |

**Padrão — usuário pertence a um grupo (adotado neste projeto):**

```lsp
@-- canal global p/ devolver o resultado (funcao de usuario nao retorna Alfa - ver Limitacao 5) --@
Definir Alfa   vaPerMit;
Definir Numero nCodGrp;     @ codigo do grupo SGU a checar (setar antes de chamar) @
Definir Alfa   aNomUsu;     @ nome de logon do usuario @
Definir Alfa   aNomGrp;
Definir Numero xObjGrp;     @ objeto entidade grupo @
Definir Numero xObjUsu;     @ objeto entidade usuario @
Definir Numero xMbo;

Definir Funcao VerificaUsuarioGrupo();

Funcao VerificaUsuarioGrupo();
   Inicio
      SegEntLe(nCodGrp, xObjGrp);            @ le o grupo pelo codigo @
      SegEntNome(xObjGrp, aNomGrp);          @ nome do grupo (out) @
      nCodGrp = SegEntCodigo(xObjGrp);       @ codigo do grupo (retorna por =) @

      SegEntLePorNome(aNomUsu, xObjUsu);     @ le o usuario pelo nome @
      xMbo = SegEntEhMembro(xObjUsu, nCodGrp);  @ membro? 1=sim / 0=nao (retorna por =) @

      Se (xMbo = 1) { vaPerMit = "S"; }
      Senao        { vaPerMit = "N"; }
   Fim;
```

Para o **nome de logon** do usuário corrente, normalmente vem por variável do identificador
(ex.: `GerANomeLogon`) ou converta `CodUsu` conforme o contexto. Depois de `VerificaUsuarioGrupo()`,
teste `vaPerMit = "S"`.

**Decisão:** a regra precisa gatear comportamento por perfil de usuário? **Prefira `SegEnt*`/grupos do
SGU** a consultar `E099USU` por SQL — sobretudo onde não há flag nativa (ex.: produto não tem
permissão nativa de ativação, ao contrário de fornecedor=`E099USU.CprAfo` e cliente=`E099USU.VenAcl`).
