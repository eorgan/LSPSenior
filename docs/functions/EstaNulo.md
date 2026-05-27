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

## Valores de Retorno

- Ret: Variável tipo Numero que retornará UM caso a variável esteja nula e ZERO caso não esteja nula.

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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
