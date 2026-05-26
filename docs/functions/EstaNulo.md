# EstaNulo

## Assinatura

```lspt
Funcao EstaNulo(Alfa VarStr,Numero End Retorno);
```

## Código
23

## Descrição

Verifica se uma variável está nula (vazia ou não inicializada).

## Parâmetros

- **VarStr** (`Alfa`) - Entrada: Variável a ser verificada
- **Retorno** (`Numero End`) - Saída: Variável numérica que receberá 1 se nula, 0 se não nula

## Exemplo de Uso

```lspt
Definir Alfa vaTexto;
Definir Numero vnEhNulo;

EstaNulo(vaTexto, vnEhNulo);
Se (vnEhNulo = 1) {
  Mensagem(Retorna, "Variável está nula");
} Senao {
  Mensagem(Retorna, "Variável contém dados");
}
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
