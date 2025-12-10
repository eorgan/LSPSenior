# Como Publicar no Open VSX Registry

Este guia mostra como publicar a extensão LSPT no Open VSX Registry.

## Pré-requisitos

```bash
# Instalar ferramentas necessárias
npm install -g @vscode/vsce ovsx
```

## 1. Criar Conta no Open VSX

1. Acesse https://open-vsx.org
2. Faça login com sua conta GitHub
3. Vá em **Settings** → **Access Tokens**
4. Crie um novo token de acesso (guarde-o em local seguro)

## 2. Empacotar a Extensão

```bash
# No diretório raiz do projeto
cd /Users/eliezer.organ/GitHub/LSPSenior

# Empacotar a extensão (cria arquivo .vsix)
vsce package
```

Isso criará um arquivo `lspt-language-support-1.0.0.vsix`.

## 3. Publicar no Open VSX

### Opção 1: Via CLI (Recomendado)

```bash
# Publicar usando o token
ovsx publish lspt-language-support-1.0.0.vsix -p SEU_TOKEN_AQUI
```

### Opção 2: Via Web Interface

1. Acesse https://open-vsx.org/user-settings/extensions
2. Clique em **Publish Extension**
3. Faça upload do arquivo `.vsix`

## 4. Publicar no VS Code Marketplace (Opcional)

Se também quiser publicar no Marketplace oficial da Microsoft:

1. Crie uma conta em https://marketplace.visualstudio.com
2. Crie um Publisher
3. Obtenha um Personal Access Token (PAT)
4. Execute:

```bash
vsce publish -p SEU_PAT_AQUI
```

## 5. Atualizar a Extensão

Quando fizer mudanças:

1. Atualize a versão no `package.json`
2. Atualize o `CHANGELOG.md`
3. Reempacote e republique:

```bash
vsce package
ovsx publish lspt-language-support-x.x.x.vsix -p SEU_TOKEN
```

## 6. Testar a Extensão Localmente

Antes de publicar, teste localmente:

```bash
# Instalar a extensão empacotada
code --install-extension lspt-language-support-1.0.0.vsix

# Testar em arquivo .lspt
```

## Scripts NPM Úteis

Adicione ao `package.json`:

```json
{
  "scripts": {
    "package": "vsce package",
    "publish:ovsx": "ovsx publish",
    "publish:vsce": "vsce publish"
  }
}
```

Uso:

```bash
npm run package
npm run publish:ovsx -- -p TOKEN
```

## Troubleshooting

### Erro: "Missing publisher name"
- Adicione `"publisher": "seu-username"` no package.json

### Erro: "Missing icon"
- Adicione um ícone 128x128px em `images/icon.png`
- Ou remova a linha `"icon": "images/icon.png"` do package.json

### Erro: "Invalid version"
- Certifique-se de usar Semantic Versioning (ex: 1.0.0)

## Recursos

- [Open VSX Documentation](https://github.com/eclipse/openvsx/wiki/Publishing-Extensions)
- [VSCE Documentation](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [VS Code Extension API](https://code.visualstudio.com/api)
