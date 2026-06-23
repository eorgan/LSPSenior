# HttpLeMostrarProgresso

## Assinatura

```lspt
Funcao HttpLeMostrarProgresso(Alfa Objeto, Numero end Mostrar);
```

## Código
N/A

## Descrição

Controla a exibição da barra de progresso durante downloads de arquivos.

## Parâmetros

- **Objeto** (`Alfa`) - Entrada: 0 = Não exibir progresso, 1 = Exibir progresso
- **Mostrar** (`Numero end`) - Saída: 0 = Não exibir progresso, 1 = Exibir progresso

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Numero vnMostrarProgresso;

HttpObjeto(vaHTTP);

@ Habilitar barra de progresso para downloads @
HttpAlteraMostrarProgresso(vaHTTP, 1);

@ Verificar configuração atual @
HttpLeMostrarProgresso(vaHTTP, vnMostrarProgresso);

Se (vnMostrarProgresso = 1) {
  Mensagem(Retorna, "Progresso de download habilitado");
}

@ Fazer download com progresso visível @
HttpDownload(vaHTTP, "https://exemplo.com/arquivo-grande.zip", "C:\\Downloads\\arquivo.zip");

@ Desabilitar progresso para próximas operações @
HttpAlteraMostrarProgresso(vaHTTP, 0);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httplemostrarprogresso.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
