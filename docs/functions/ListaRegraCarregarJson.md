# ListaRegraCarregarJson

## Assinatura

```lspt
Funcao ListaRegraCarregarJson(Numero aLista, Alfa aJson, Alfa aGrupo, Alfa aCampos);
```

## Código
N/A

## Descrição

**Quando usar:** Para processar arrays de objetos JSON e trabalhar com múltiplos registros.

**Características:**

- Carrega múltiplos registros em uma lista estruturada
- Ideal para dados tabulares ou coleções
- Permite navegar pelos registros usando funções de lista
- Não consegue percorrer arrays aninhados

## Parâmetros

- **aLista** (`Numero`) - Entrada: Recebe o endereço de memória da lista criada.
- **aJson** (`Alfa`) - Entrada: Recebe o conteúdo de um arquivo Json.
- **aGrupo** (`Alfa`) - Entrada: Recebe o grupo que deve ser lido do Json.
- **aCampos** (`Alfa`) - Entrada: Recebe os campos a serem lidos do Json (os campos devem ser separados por ";"). No entanto, caso o campo informado no parâmetro não exista no Json, a função emitirá erro, indicando que o campo é inexistente ou que não pode ser encontrado.

## Valores de Retorno

- ** nenhum.

## Exemplo de Uso

```lspt
Definir Numero vnLista;
Definir Alfa vaAchou;
Definir Alfa vaNome;
Definir Alfa vaEmail;

vaJSON = "{\"usuarios\": [{\"nome\": \"João\", \"email\": \"joao@exemplo.com\"}, {\"nome\": \"Maria\", \"email\": \"maria@exemplo.com\"}]}";

@ Criar lista e carregar usuários @
ListaRegraCriarLista(vnLista);
ListaRegraCarregarJson(vnLista, vaJSON, "usuarios", "nome;email");

@ Navegar pela lista @
ListaRegraPrimeiro(vnLista, vaAchou);
Enquanto (vaAchou = "S") {
  ListaRegraObterValorAlfa(vnLista, "nome", vaNome, vaAchou);
  ListaRegraObterValorAlfa(vnLista, "email", vaEmail, vaAchou);
  
  @ Processar cada usuário @
  Mensagem(Retorna, "Usuário: " + vaNome + " - " + vaEmail);
  
  ListaRegraProximo(vnLista, vaAchou);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/listaregracarregarjson.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
