# ObterVersaoSistema

## Assinatura

```lspt
Funcao ObterVersaoSistema(majorVersion, minorVersion, release, build);
```

## Código
N/A

## Descrição

Esta função retorna a versão do sistema Senior.

## Parâmetros

- **majorVersion** - Entrada: Versão de primeiro dígito do sistema
- **minorVersion** - Entrada: Versão de segundo dígito do sistema
- **release** - Entrada: Versão de terceiro dígito do sistema (release)
- **build** - Entrada: Versão de quarto dígito do sistema (build)

## Exemplo de Uso

```lspt
Definir Numero vnMajorVersion;
Definir Numero vnMinorVersion;
Definir Numero vnRelease;
Definir Numero vnBuild;
Definir Alfa vaMensagem;

ObterVersaoSistema(vnMajorVersion, vnMinorVersion, vnRelease, vnBuild);

@ Após a chamada da função as variáveis conterão a versão do sistema @
Definir Alfa vaMajorStr;
Definir Alfa vaMinorStr;
Definir Alfa vaReleaseStr;
Definir Alfa vaBuildStr;

IntParaAlfa(vnMajorVersion, vaMajorStr);
IntParaAlfa(vnMinorVersion, vaMinorStr);
IntParaAlfa(vnRelease, vaReleaseStr);
IntParaAlfa(vnBuild, vaBuildStr);

vaMensagem = "Versão: " + vaMajorStr + "." + vaMinorStr + "." + vaReleaseStr + "." + vaBuildStr;
Mensagem(Retorna, vaMensagem);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/obter-versao-sistema.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
