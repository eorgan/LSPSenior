# QuebraTexto

## Assinatura

```lspt
Funcao QuebraTexto(Alfa End Texto, Numero TamLin, Numero End NroLin);
```

## Código
31

## Descrição

Esta função pega o texto indicado e faz assinalamentos de quebra de linha conforme o Tamanho_Linha especificado, retornando a quantidade de linhas que será usada para imprimir o texto.

## Parâmetros

- **Texto** (`Alfa End`) - Saída: Campo/Variável que se deseja imprimir em mais de uma linha
- **TamLin** (`Numero`) - Entrada: Variável que indica a quantidade máxima de caracteres por linha
- **NroLin** (`Numero End`) - Saída: Variável que indica qual é a quantidade de linhas que serão necessárias para imprimir o texto

## Valores de Retorno

- Qtde_Linhas: Variável Numérica que indica qual é a quantidade de linhas que serão necessárias para imprimir o texto.

## Exemplo de Uso

```lspt
Definir Alfa vaTexto;
Definir Alfa vaFrase;
Definir Numero vnNumLin;
Definir Numero vnLinAtu;

vaTexto = "Vamos ver o que acontece quando usamos estas funções para controle de impressão de linhas de um texto mais extenso";
QuebraTexto(vaTexto, 30, vnNumLin);

vnLinAtu = 1;
Enquanto (vnLinAtu <= vnNumLin) {
  BuscaLinhaTexto(vaTexto, vnLinAtu, vaFrase);
  @ Processa cada linha @
  vnLinAtu++;
}
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
