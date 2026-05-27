# ObterVersaoSistema

## Assinatura

```lspt
Funcao ObterVersaoSistema(majorVersion, minorVersion, release, build);
```

## Código
N/A

## Descrição

Esta função retorna a versão do sistema.

## Parâmetros

- **majorVersion** - Entrada: Versão de primeiro dígito do sistema.
- **minorVersion** - Entrada: Versão de segundo dígito do sistema
- **release** - Entrada: Versão de terceiro dígito do sistema (release)
- **build** - Entrada: Versão de quarto dígito do sistema (build).

## Exemplo de Uso

```lspt
Definir Numero majorVersion;
Definir Numero minorVersion;
Definir Numero release;
Definir Numero build;
ObterVersaoSistema(majorVersions, minorVersion, release, build);
@ Após a chamada da função as variáveis informadas conterão a versão do sistema. @
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
