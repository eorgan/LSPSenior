# 📄 Dicionário do eDocs (documentos eletrônicos — banco separado)

O **eDocs** (SDE) tem banco próprio, com 344 tabelas no padrão `Nxxx…` (uma faixa por documento
eletrônico) mais as tabelas legadas da camada de interface (`INTERF_*`, `LOTE_*`, `EVENTO_NFE`).
**Não são as tabelas `E0*` do ERP** — se a regra precisa de dados de NF-e/CT-e/NFS-e autorizados,
confirme primeiro em qual conexão está consultando.

```
python3 scripts/buscar_tabela_edocs.py <termo>            # busca por nome ou descrição
python3 scripts/buscar_tabela_edocs.py <TABELA> --campos  # campos, tipos por SGBD, FKs, índices
python3 scripts/buscar_tabela_edocs.py --modulo N130      # tabelas de um módulo
python3 scripts/buscar_tabela_edocs.py --modulos          # índice dos módulos
```

**Faixas por documento eletrônico:**

| Prefixo | Módulo | Prefixo | Módulo |
| --- | --- | --- | --- |
| `N010` | Sistema, segurança, parâmetros, multitenant | `N220` | GNRE |
| `N100` | Cadastros gerais (filiais, certificados, e-mail, XML) | `N230` | Bloco X |
| `N130` | NF-e (produto) e seus eventos | `N240` | GRF-GTS |
| `N140` | NFS-e (serviço) | `N250` | Receituário agronômico |
| `N150` | CT-e | `N260` | Recintos aduaneiros |
| `N170` | MDF-e | `N270` | SISDEV |
| `N180` | eSocial | `N280` | IDAF |
| `N190` | NFC-e | `N290` | DT-e |
| `N200` | CF-e / SAT | `N310` | NF3-e |
| `N210` | EFD-Reinf | `N320`/`N330`/`N340` | NFTS / DC-e / NFCom |

**Padrões que se repetem em todos os módulos:**
- `<mod>` + documento (`N130NFE`, `N140NFS`, `N150CTE`, `N170MDF`, `N190NFC`, `N220GNR`) — o documento em si.
- `*EVT` — eventos de sistema (histórico de estados/ações) do documento.
- `*XML` — associação documento/evento ↔ XML armazenado; o conteúdo fica em `N100XML`.
- `*CAN`, `*INU`, `*CCE` — cancelamento, inutilização, carta de correção.
- `*LOT` / `*NNL` / `*LTC` — lote e as N-N entre lote e documento (0 campos próprios, 2 FKs).
- Chave primária sempre `SEQ<xxx>` (`NUMBER(15,0)`); FK da filial é `SEQFIL → N100FIL`.

**Campos de uso frequente em `N130NFE` (NF-e):** `IDENFE` (chave de 44), `IDEERP` (chave do ERP,
para casar com o documento de origem), `SITNFE` (situação), `NUMNFE`/`SERNFE`, `DATEMI`, `PROREC`
(protocolo), `CNPEMI`/`EMIALF` (CNPJ numérico × alfanumérico), `TIPOPE` (0=entrada, 1=saída),
`TIPAMB` (ambiente). Detalhamento campo a campo existe para **N130, N140 e N220**; nos demais
módulos o script mostra o resumo (nº de campos/FKs/índices e versão de criação).

**Decisão:** precisa gravar algo no eDocs? **Nunca por SQL direto** — a entrada é pela camada de
interface (`INTERF_*`, alimentada pelo ERP) ou pelos web services do próprio eDocs. Leitura por
SELECT é aceitável para conferência/monitoramento.
