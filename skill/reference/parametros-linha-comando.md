# Parâmetros de linha de comando do executável Senior (G5/G6)

No ecossistema da Senior Sistemas (Tecnologia G5/G6 — ERP Senior, Sapiens, Vetorh, Ronda,
entre outros), os parâmetros passados na **linha de comando do executável** (campo *Destino*
do atalho do Windows ou via `CMD`) ativam modos de teste, depurações avançadas e otimizações
de infraestrutura.

> ⚠️ **Escopo:** isto é **operacional/diagnóstico** — diz respeito a como *iniciar* o cliente
> Senior, **não** à sintaxe da LSP. Não muda como você escreve regras; serve para depurar e
> testar regras/WebServices já escritos. Use em ambiente de teste/homologação.

Para uso na regra LSP, o mais relevante é a dupla **`-mcdebug` + `-candebug`**: permite parar
passo a passo no Editor de Regras nas linhas de LSP disparadas por um WebService em **Modo
Local** (`ModoExecucao = 1`; ver a seção de WS interno no `SKILL.md`).

## Depuração e testes de integração

| Parâmetro | Comportamento |
|---|---|
| `-mcdebug` | Inicia o sistema direto na tela de **Multicamada/MCDebug** (Teste de Funcionamento de Web Services). Permite preencher os parâmetros de entrada e testar qualquer WebService nativo ou customizado. |
| `-candebug` | Habilita o **"Canal de Depuração"** local da aplicação. Usado em conjunto com `-mcdebug` para o Editor de Regras interceptar e parar **passo a passo** nas linhas de LSP disparadas por WebServices executados em **Modo Local**. |
| `-agendador:?` | Força a inicialização ou a listagem técnica de controle associada aos **Processos Agendados** executados pelo sistema, permitindo isolar a execução dos serviços automáticos diretamente pelo atalho. |

## Diagnóstico, banco de dados e logs

| Parâmetro | Comportamento |
|---|---|
| `-sqlmon` | Abre automaticamente o utilitário nativo de **monitoramento de banco** da Senior. Rastreia em tempo real todas as instruções SQL (`PREPARE`, `EXECUTE`, filtros do *DATA IN* e retornos do *DATA OUT*) enviadas pela aplicação local ao banco. |
| `-log` | Ativa a gravação geral de **logs locais** de processamento de rotinas internas e do motor de regras. |
| `-logservico` | Incrementa a **verbosidade** dos arquivos de log, registrando toda a comunicação com as camadas de negócio e as filas do Middleware da Senior. |

## Otimizações e limpeza de cache

| Parâmetro | Comportamento |
|---|---|
| `-limpar` | Faz uma **limpeza pesada do cache local** da máquina (definições de tabelas, esquemas XML, layouts e cache de telas) imediatamente antes de renderizar a interface. Útil quando o sistema apresenta erros inexplicáveis após atualização de versão. |
| `-ENABLE_NEW_SHOW_USER` | (Notas de Versão) Força os **novos algoritmos** internos, mais otimizados, para a rotina de controle e renderização de **usuários ativos**. |
| `-DISABLE_NEW_SHOW_USER` | **Desativa** os novos mecanismos de controle de usuários ativos — chave de segurança para o caso de a nova funcionalidade causar instabilidade/lentidão no ambiente do cliente. |

## Navegação e automação de interface

| Parâmetro | Comportamento |
|---|---|
| `-form:<CÓDIGO_DA_TELA>` | Instancia o ERP **pulando o menu padrão** e abrindo direto uma tela pré-configurada no comando. Ex.: `-form:F070EMP` abre o cadastro de Empresas logo após a validação do login. |
