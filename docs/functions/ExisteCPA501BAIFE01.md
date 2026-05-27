# ExisteCPA501BAIFE01

## Assinatura

```lspt
Funcao ExisteCPA501BAIFE01(Alfa End aRetorno);
```

## Código
917

## Descrição

Usada dentro da DIRF, para verificar se o identificador de regras [CPA-501BAIFE01](../identificadores_regras/cpa_501baife01.htm) está ativo e vinculado a uma regra. Com isso, será possível trazer o valor líquido dos movimentos para os fornecedores de mercados externos.

## Parâmetros

- **aRetorno** (`Alfa End`) - Saída: Variável que irá retornar **S** se o identificador de regras CPA-501BAIFE01 estiver ativo e vinculado a uma regra. Caso contrário, irá retornar **N**.

## Exemplo de Uso

```lspt
Definir Alfa VExisteRegra;
ExisteCPA501BAIFE01(VExisteRegra);
Se (VExisteRegra = "S") {
@ Se o identificador de regras CPA-501BAIFE01 estiver ativo e vinculado a uma regra, vai entrar nessa condição @
}
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
