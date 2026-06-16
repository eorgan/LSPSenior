# Guia Rápido - LSPT IntelliSense

## ⚡ Início Rápido (30 segundos)

### Passo 1: Instale
```bash
code --install-extension lspt-language-support-1.9.0.vsix
```
> Ou instale pela galeria (Open VSX) — busque por **"LSPT Language Support"**.

### Passo 2: Abra um arquivo `.lspt`

### Passo 3: Use!
Digite `Dev.` e veja a mágica acontecer! 🎉

---

## 💡 5 Recursos Principais

### 1️⃣ Autocomplete (Dev.)
```lspt
Dev.█
```
→ Lista com **369 funções** aparece
→ Digite para filtrar: `Inser...`
→ Enter para inserir: `InserirStr(Alfa Valor, Alfa End Origem, Numero Pos);`

### 2️⃣ Parâmetros ao Vivo
```lspt
InserirStr(█
```
→ Popup mostra: `Alfa Valor, Alfa End Origem, Numero Pos`
→ Parâmetro atual destacado conforme você digita

### 3️⃣ Hover = ℹ️ Info Rápida
Passe o mouse → veja assinatura, código e parâmetros

### 4️⃣ Command+Click = 📖 Docs Completa
Command+Click na função → abre documentação detalhada

### 5️⃣ Formatar Documento (Format Document)
Tecle **`Shift+Alt+F`** (ou clique direito → *Formatar Documento*) → o recuo é
ajustado automaticamente no estilo LSP:
```lspt
Se(Condição)
   {
      @-- corpo um nível abaixo do { --@
   }
```
→ Ajusta **só o recuo à esquerda** — nunca muda o conteúdo, strings ou comentários
→ *Format Selection*: selecione um trecho e use `Cmd+K Cmd+F`
→ Recuo configurável em `lspt.format.indentSize` (padrão **3**)

---

## 📌 Funções Mais Usadas

| Categoria | Funções |
|-----------|---------|
| **Strings** | `InserirStr`, `TamanhoStr`, `Concatena`, `PosicaoStr` |
| **Datas** | `MontaData`, `DesMontaData`, `DataExtenso` |
| **Números** | `ArredondarValor`, `IntParaStr`, `StrParaInt` |
| **SQL** | `SQL_Criar`, `SQL_AbrirCursor`, `SQL_Proximo` |
| **Arquivos** | `Abrir`, `LerNL`, `Gravar`, `Fechar` |

**Lista completa:** Digite `Dev.` no VS Code!

---

## 🎓 Exemplo Completo

```lspt
Funcao ProcessarClientes();
   Inicio
      Definir Alfa aSqlInt;
      Definir Alfa aNome;
      Definir Numero nCodigo;
      
      @-- PASSO 1: Digite Dev. para ver funções disponíveis
      Dev.
      
      @-- PASSO 2: Selecione SQL_Criar
      SQL_Criar(aSqlInt);
      
      @-- PASSO 3: Hover sobre SQL_AbrirCursor = ver info
      @-- PASSO 4: Command+Click = ver docs completa
      SQL_AbrirCursor(aSqlInt);
      
      @-- PASSO 5: Ao digitar ( veja parâmetros ao vivo
      SQL_RetornarAlfa(aSqlInt, "NOMCLI", aNome);
      
      SQL_FecharCursor(aSqlInt);
   Fim;
```

---

## ❓ Dúvidas Comuns

**P: Funciona offline?**
R: ✅ Sim! Tudo local, sem internet necessária.

**P: Tem todas as funções?**
R: 369 de 530 disponíveis. Lista completa digitando `Dev.`

**P: Posso adicionar minhas funções?**
R: Sim! Edite `functions.json` e adicione.

**P: Onde está a documentação completa?**
R: `docs/functions/NomeFuncao.md` (Command+Click sobre função)

---

## 🆘 Precisa de Ajuda?

1. 📘 [README Completo](README.md) - Documentação detalhada
2. 🐛 [Issues](https://github.com/eliezer-organ/LSPSenior/issues) - Reportar bugs
3. 💬 [Discussions](https://github.com/eliezer-organ/LSPSenior/discussions) - Fazer perguntas

---

**🚀 Produtividade em LSPT agora é muito mais rápida!**
