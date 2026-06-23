# BuscarAbrEntUsuario

## Assinatura

```lspt
Funcao BuscarAbrEntUsuario(Numero aCodUsu, Alfa End aAbrEnt);
```

## Código
639

## Descrição

Retornar a abrangência de entidades ligadas ao usuário.

## Parâmetros

- **aCodUsu** (`Numero`) - Entrada: Variável para informar o código do usuário a ser verificado.
- **aAbrEnt** (`Alfa End`) - Saída: Variável que recebe a abrangência de entidades (usuários e grupos) que têm ligação com o usuário. Nesta abrangência são retornados os códigos: do usuário, do grupo "todos", dos grupos "pais", dos grupos "avós", etc.

## Valores de Retorno

- aAbrEnt: Variável alfanumérica que recebe a abrangência de
- entidades (usuários e grupos) que têm ligação com o usuário. Nesta abrangência são
- retornados os códigos: do usuário, do grupo "todos", dos grupos
- "pais", dos grupos "avós", etc.
- Importante: quando um usuário estiver atrelado a um
- Grupo e este Grupo fizer parte de outro Grupo, ao listar a função
- "todos" os grupos serão listados.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscarAbrEntUsuario();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/buscarabrentusuario.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
