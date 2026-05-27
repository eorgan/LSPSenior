# ConverteCodificacaoString

## Assinatura

```lspt
Funcao ConverteCodificacaoString(Alfa aString, Alfa aCodificacao, Alfa End aResultado);
```

## Código
N/A

## Descrição

Nota Função disponível para os sistemas Gestão Empresarial PME | GO UP, Gestão Empresarial | ERP, Gestão de Pessoas | HCM e Ronda Senior. Esta função altera a codificação de um texto contido em uma variável, onde este texto com a codificação alterada pode ser utilizado para comunicação com web services. Se o sistema não suportar a codificação informada, será emitida a seguinte mensagem: "A codificação X não é suportada. Verifique a documentação". Quando o texto possuir algum caractere não suportado pela codificação, a função retornará 1. Caso contrário, a função retornará 0.

## Parâmetros

- **aString** (`Alfa`) - Entrada: Contém o texto original que necessita ter sua codificação alterada
- **aCodificacao** (`Alfa`) - Entrada: Nome da codificação para a qual o texto será convertido, suporta as codificações: "UTF-8" ou "WINDOWS-1252"
- **aResultado** (`Alfa End`) - Saída: Contém o texto com a codificação alterada

## Exemplo de Uso

```lspt
Definir Alfa xTextoOriginal;
Definir Alfa xTextoCodificacaoAlterada;
xRetorno = ConverteCodificacaoString(xTextoOriginal,
"UTF-8"
, xTextoCodificacaoAlterada);
se (xRetorno = 1)
{
Mensagem (Retorna, "Encontrado caracteres incompatíveis!");
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/convertecodificacaostring.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
