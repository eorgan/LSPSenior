# PosicaoStr

## Assinatura

```lspt
Funcao PosicaoStr(Alfa SubStrOri,Alfa StrOri, Numero End PosStr);
```

## Código
24

## Descrição

Procuram por uma parte de texto dentro de um campo/variável, retornando a posição inicial através de parâmetro.

## Parâmetros

- **SubStrOri** (`Alfa`) - Entrada: Texto que se está procurando
- **StrOri** (`Alfa`) - Entrada: Campo/variável onde fazer a busca
- **PosStr** (`Numero End`) - Saída: Variável que receberá a posição inicial (0 se não encontrar)

## Exemplo de Uso

```lspt
Definir Alfa vaEmail;
Definir Numero vnPosArroba;
Definir Numero vnPosPonto;

vaEmail = "usuario@empresa.com.br";
PosicaoAlfa("@", vaEmail, vnPosArroba);
PosicaoAlfa(".", vaEmail, vnPosPonto);

Se (vnPosArroba = 0) {
  Mensagem(Erro, "Email inválido: falta @");
} Senao Se (vnPosPonto = 0) {
  Mensagem(Erro, "Email inválido: falta domínio");
} Senao {
  Mensagem(Retorna, "Email válido!");
}
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
