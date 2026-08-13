# Sleep

## Assinatura

```lspt
Funcao Sleep(Numero aTempo);
```

## Código
895

## Descrição

Pausa (bloqueia) a execução da regra pelo tempo informado. Uso típico: aguardar
entre tentativas de consulta a um Web Service, dar tempo para um processo externo
responder antes de checar o resultado novamente, etc.

## Parâmetros

- **aTempo** (`Numero`) - Entrada: tempo de pausa em **milissegundos** (confirmado por teste).

## Exemplo de Uso

```lspt
Definir Numero vnTempoMs;

vnTempoMs = 5000;   @ 5000 ms = 5 segundos @
Sleep(vnTempoMs);
```

## Notas

- Unidade confirmada como **milissegundos**, não segundos.
- A regra fica **bloqueada** durante o `Sleep` — não use valores altos em regras
  síncronas/identificadores de regra (rodam dentro da transação nativa e podem
  segurar lock/travar a tela do usuário). Prefira reservar `Sleep` para regras
  independentes (WS assíncrono, rotina de importação, etc.), não para
  identificadores acoplados a telas interativas.
- Não é uma função de execução periódica (cronômetro/agendador) — para rodar
  algo de tempos em tempos sem bloquear a sessão, use processo agendado do ERP
  ou `ModoExecucao = 4` (Agendado) do WS interno.

## Veja Também

- Lista de funções relacionadas
