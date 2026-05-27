# LerPosicaoAlfa

## Assinatura

```lspt
Funcao LerPosicaoAlfa(Origem,Destino,Posicao);
```

## Código
N/A

## Descrição

Identifica qual caracter está em determinada posição do campo/variável de origem.

## Parâmetros

- **Origem** - Entrada: Campo/Variável que se deseja verificar
- **Destino** - Entrada: Variável numérica que receberá o caracter lido
- **Posicao** - Entrada

## Exemplo de Uso

```lspt
Definir Numero vCaracter;
LerPosicaoAlfa (R034Fun.NomEmp,vCaracter,1);
@ A letra obtida fica armazenada pelo código ASCII. @
@ Ao comparar com outro caracter, este deve ser especificado entre apóstrofes. @
Se (vCaracter = 'F')
{
@ Comandos... @
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/lerposicaoalfa.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
