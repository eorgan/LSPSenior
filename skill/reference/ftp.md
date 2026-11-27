# 📡 Transferência de arquivos por FTP/SFTP (família `Ftp*`)

19 funções nativas, categoria `ftp` no `functions.json`
(`python3 scripts/buscar_funcao.py --listar Ftp`). Antes de escrever, decida o protocolo —
é aqui que a maioria das integrações trava:

| Protocolo | Suporte na LSP |
| --- | --- |
| **FTP** simples (21) | ✅ `FtpConexao` direto |
| **SFTP** — FTP sobre SSH (22) | ✅ `FtpSetaSFTP(x, 1)`; chave SSH com `FtpSSH` |
| **FTPS / FTPES** — FTP sobre TLS | ❌ **não existe** na LSP |

**Decisão:** servidor exige TLS implícito ou explícito? A família nativa **não resolve** —
use cliente externo (WinSCP, `ftpsenior.exe`) via `ExecProg`. Não perca tempo tentando
passar `ftpes://` no `Host`.

**Padrão de envio com tratamento de erro:**

```lsp
Definir Alfa   vaFtp;
Definir Alfa   vaErro;
Definir Alfa   vaMsg;
Definir Numero vnRet;

FtpConexao(vaFtp, "ftp.servidor.com.br", 21, "usuario", "senha");   @ host puro, sem esquema @
FtpModoConexao(vaFtp, 0);          @ 0 passivo (padrao) / 1 ativo @
FtpModoTransferencia(vaFtp, 0);    @ 0 binario (padrao) / 1 texto @

vnRet = FtpUpload(vaFtp, "C:\\temp\\doc.txt", "/arquivos", "doc.txt");   @ retorna por = @

Se (vnRet = 0)
   {
      FtpUltimoErro(vaErro);                       @ leia JA: e o ultimo erro global @
      vaMsg = "Falha no envio. Erro: " + vaErro;   @ concatena ANTES @
      Mensagem(Retorna, vaMsg);
   }
```

**SFTP com chave SSH** — a ordem é obrigatória e a senha do `FtpConexao` fica **vazia**:

```lsp
FtpConexao(vaFtp, "sftp.servidor.com.br", 22, "usuario", "");
FtpSetaSFTP(vaFtp, 1);
FtpSSH(vaFtp, "C:/keys/id_rsa", "");   @ chave OpenSSH; .ppk do PuTTY NAO e aceito @
```

**Armadilhas (todas confirmadas na doc oficial):**

- `FtpConexao`, `FtpUpload` e `FtpDownload` **retornam por `=`** (exceção à regra 2 da LSP):
  `0` = falhou. As demais não retornam nada útil — cheque o efeito.
- `FtpUltimoErro(Alfa end Erro)` **não recebe a conexão**: é o erro global da última
  operação. Leia imediatamente após o `0`, antes de qualquer outra chamada `Ftp*`.
- **A ordem dos parâmetros é invertida entre Upload e Download:**
  `FtpUpload(Ftp, ArquivoLocal, DiretorioFtp, ArquivoFtp)` ×
  `FtpDownload(Ftp, DiretorioFtp, ArquivoFtp, ArquivoLocal)`.
- `Host` aceita **só domínio ou IP** — nada de `ftp://`, `sftp://`, `ftpes://`.
- `FtpSetaSFTP` vai **depois** do `FtpConexao` (ERP 5.8.10.105+); `FtpSSH` exige 5.10.4+.
- Listagem (`FtpListar` → `FtpListaQuantidade` → `FtpListaItem`) é indexada **a partir de 1**;
  `Tipo` volta `"A"` arquivo, `"D"` diretório, `"L"` link.
- `FtpModoErro(x, 2)` transforma erro em **exceção que interrompe a regra**; o padrão `0`
  (silencioso) é o que combina com o `Se (vnRet = 0)`.
- **Não existe função de desconectar** — a conexão é um handle `Alfa` que morre com a regra.
