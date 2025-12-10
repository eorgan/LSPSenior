# 🚀 Guia de Início Rápido - Extensão LSPT

## ✅ Status da Extensão

A extensão LSPT foi criada com sucesso! Aqui está o que foi construído:

### 📁 Estrutura de Arquivos

```
LSPSenior/
├── package.json                     # Manifesto da extensão
├── extension.js                     # Ponto de entrada
├── language-configuration.json      # Configuração da linguagem
├── README.md                        # Documentação principal
├── CHANGELOG.md                     # Histórico de versões
├── LICENSE                          # Licença MIT
├── PUBLISHING.md                    # Guia de publicação
├── .vscodeignore                    # Arquivos a ignorar no pacote
├── syntaxes/
│   └── lspt.tmLanguage.json        # Grammar TextMate
├── snippets/
│   └── lspt-snippets.json          # Snippets de código
├── Formatação/
│   └── Exemplo de formatação e codigos.md
└── Exemplos de Arquivos/
    ├── Botão Processar devolução ...lspt
    ├── Busca Movimentação Financeira.lspt
    ├── Busca Vendas internas ...lspt
    ├── Enviar Pendencias ...lspt
    ├── Importar Arquivo CSV ...lspt
    └── Inclusão dos itens ...lspt
```

## 🎯 Próximos Passos

### 1. Instalar Dependências

```bash
cd /Users/eliezer.organ/GitHub/LSPSenior
npm install --save-dev @vscode/vsce ovsx
```

### 2. Testar Localmente

#### Opção A: Executar no VS Code

1. Abra o projeto no VS Code
2. Pressione `F5` para abrir uma nova janela com a extensão carregada
3. Crie ou abra um arquivo `.lspt`
4. Teste os snippets e syntax highlighting

#### Opção B: Instalar como VSIX

```bash
# Empacotar
npx vsce package

# Instalar localmente
code --install-extension lspt-language-support-1.0.0.vsix
```

### 3. Publicar no Open VSX

```bash
# 1. Criar conta em https://open-vsx.org (via GitHub)
# 2. Gerar token de acesso em Settings → Access Tokens

# 3. Empacotar a extensão
npx vsce package

# 4. Publicar
npx ovsx publish lspt-language-support-1.0.0.vsix -p SEU_TOKEN_AQUI
```

## 🎨 Recursos Implementados

### ✨ Syntax Highlighting
- ✅ Palavras-chave (Se, Enquanto, Para, Funcao, etc.)
- ✅ Tipos de dados (Alfa, Numero, Data, etc.)
- ✅ Funções SQL (SQL_Criar, SQL_AbrirCursor, etc.)
- ✅ Funções nativas (Mensagem, IntParaAlfa, HttpPost, etc.)
- ✅ WebServices Senior
- ✅ Comentários com anotações
- ✅ Strings e números
- ✅ Operadores

### 🚀 Snippets (20+)
- ✅ `lspt-header` - Cabeçalho com anotações
- ✅ `funcao` - Estrutura de função
- ✅ `se`, `se-senao`, `se-senao-se` - Condicionais
- ✅ `enquanto`, `para` - Loops
- ✅ `cursor1`, `cursor2` - Cursores SQL
- ✅ `def-alfa`, `def-numero`, `def-data` - Definir variáveis
- ✅ `msg-ret`, `msg-erro` - Mensagens
- ✅ `execsql` - Executar SQL
- ✅ `http-post` - HTTP requests
- ✅ E muito mais!

### 🔧 Configuração
- ✅ Auto-closing de brackets
- ✅ Indentação automática
- ✅ Code folding
- ✅ Bracket matching
- ✅ Comentários configurados

## 📝 Testando os Snippets

Abra um arquivo `.lspt` e digite:

```lspt
lspt-header<Tab>
```

Resultado:
```lspt
@-- Título do arquivo --@

/*
 * @Author: Nome do Autor
 * @Email: email@example.com
 * @Date: 2025-12-09 09:39:12
 * @Last Modified by: Nome do Autor
 * @Last Modified time: 2025-12-09 09:39:12
 * @Description: Descrição
 */
```

Experimente outros:
- `funcao<Tab>` - Criar uma função
- `cursor2<Tab>` - Criar um cursor SQL
- `se-senao<Tab>` - Estrutura condicional

## 🐛 Troubleshooting

### Problema: Extensão não ativa
**Solução**: Certifique-se de que o arquivo tem extensão `.lspt` ou `.lsp`

### Problema: Snippets não aparecem
**Solução**: Verifique se está digitando o prefixo correto e pressione `Ctrl+Space`

### Problema: Syntax highlighting não funciona
**Solução**: Recarregue a janela do VS Code (`Cmd+R` ou `Ctrl+R`)

## 📚 Documentação

- **README.md** - Documentação completa da extensão
- **PUBLISHING.md** - Como publicar no Open VSX
- **CHANGELOG.md** - Histórico de versões
- **Formatação/** - Documentação da sintaxe LSPT
- **Exemplos de Arquivos/** - Exemplos práticos

## 🎁 Extras

### Personalizar o Publisher

Edite `package.json`:

```json
{
  "publisher": "seu-username-aqui"
}
```

### Adicionar Ícone

1. Crie um ícone 128x128px
2. Salve em `images/icon.png`
3. O package.json já está configurado!

### Versionamento

Use Semantic Versioning:
- **1.0.0** - Release inicial
- **1.0.1** - Bug fixes
- **1.1.0** - Novas features
- **2.0.0** - Breaking changes

## ✅ Checklist de Publicação

- [ ] Testar extensão localmente
- [ ] Criar conta no Open VSX
- [ ] Gerar token de acesso
- [ ] (Opcional) Adicionar ícone personalizado
- [ ] Empacotar extensão (`npx vsce package`)
- [ ] Publicar no Open VSX (`npx ovsx publish`)
- [ ] Testar instalação do Open VSX
- [ ] Criar release no GitHub
- [ ] Compartilhar com a comunidade!

## 🎉 Pronto!

Sua extensão LSPT está completa e pronta para ser publicada no Open VSX Registry!

**Próximo comando para executar:**

```bash
cd /Users/eliezer.organ/GitHub/LSPSenior
npm install --save-dev @vscode/vsce ovsx
```

---

💡 **Dica**: Leia o arquivo `PUBLISHING.md` para instruções detalhadas de publicação!
