# VerificaAbaAtiva

## Assinatura

```lspt
Funcao VerificaAbaAtiva(Alfa aDescAba);
```

## Código
N/A

## Descrição

Verifica se uma aba específica está ativa na interface.

## Parâmetros

- **aDescAba** (`Alfa`) - Entrada: Descrição da aba a ser verificada

## Exemplo de Uso

```lspt
Definir Funcao verificarContextoInterface();

@ Variáveis globais @
Definir Alfa vaAbaClientes;
Definir Alfa vaAbaProdutos;
Definir Numero vnAbaClientesAtiva;
Definir Numero vnAbaProdutosAtiva;

vaAbaClientes = "Clientes";
vaAbaProdutos = "Produtos";

verificarContextoInterface();

Funcao verificarContextoInterface(); {
  @ Verifica qual aba está ativa @
  VerificaAbaAtiva(vaAbaClientes, vnAbaClientesAtiva);
  VerificaAbaAtiva(vaAbaProdutos, vnAbaProdutosAtiva);
  
  Se (vnAbaClientesAtiva = 1) {
    Mensagem(Retorna, "Contexto: Gestão de Clientes");
    @ Lógica específica para clientes @
  } Senao Se (vnAbaProdutosAtiva = 1) {
    Mensagem(Retorna, "Contexto: Gestão de Produtos");
    @ Lógica específica para produtos @
  } Senao {
    Mensagem(Retorna, "Contexto: Genérico");
    @ Lógica geral @
  }
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/verificaabaativa.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
