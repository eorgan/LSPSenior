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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
