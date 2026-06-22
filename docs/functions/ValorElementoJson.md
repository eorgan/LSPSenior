# ValorElementoJson

## Assinatura

```lspt
Funcao ValorElementoJson(Alfa aJson, Alfa aGrupo, Alfa aElemento, Alfa End aValor);
```

## Código
N/A

## Descrição

Esta função serve para ler o valor de um campo específico de um arquivo JSON.

## Parâmetros

- **aJson** (`Alfa`) - Entrada: Recebe o conteúdo de um arquivo Json.
- **aGrupo** (`Alfa`) - Entrada: Recebe os grupos que devem ser posicionados para ler o elemento do Json (os grupos devem ser separados por ";").
- **aElemento** (`Alfa`) - Entrada: Recebe o campo a ser lido do Json.
- **aValor** (`Alfa End`) - Saída

## Valores de Retorno

- aValor: variável alfanumérica que recebe o valor do campo lido do Json.

## Exemplo de Uso

```lspt
Funcao processarRespostaAPI(); {
  Definir Alfa vaHTTP;
  Definir Alfa vaJSON;
  Definir Alfa vaStatus;
  Definir Alfa vaMensagem;
  Definir Alfa vaUsuario;
  
  HttpObjeto(vaHTTP);
  HttpGet(vaHTTP, "https://reqres.in/api/users/2", vaJSON);
  
  @ JSON retornado: {"data":{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver"},"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free..."}} @
  
  @ Extrair dados do usuário @
  ValorElementoJson(vaJSON, "data", "first_name", vaUsuario);
  ValorElementoJson(vaJSON, "data", "email", vaStatus);
  
  vaMensagem = "Usuário: " + vaUsuario + " - Email: " + vaStatus;
  Mensagem(Retorna, vaMensagem);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/valorelementojson.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
