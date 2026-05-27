# BuscaMascModPlano

## Assinatura

```lspt
Funcao BuscaMascModPlano(Numero CodMpc,Alfa end M1,Alfa end M2,Alfa end M3,Alfa end M4,Alfa end M5,Alfa end M6,Alfa end M7,Alfa end M8,Alfa end M9);
```

## Código
39

## Descrição

Função exclusiva para contabilidade. Passando o modelo do plano de Contas da Empresa, retorna as 9 máscaras de acordo com o nível das contas.

## Parâmetros

- **CodMpc** (`Numero`) - Entrada: Variável com o código do plano.
- **M1** (`Alfa end`) - Saída: Variável com o retorno da máscara do primeiro nível da conta.
- **M2** (`Alfa end`) - Saída: Variável com o retorno da máscara do segundo nível da conta.
- **M3** (`Alfa end`) - Saída: Variável com o retorno da máscara do terceiro nível da conta.
- **M4** (`Alfa end`) - Saída: Variável com o retorno da máscara do quarto nível da conta.
- **M5** (`Alfa end`) - Saída: Variável com o retorno da máscara do quinto nível da conta.
- **M6** (`Alfa end`) - Saída: Variável com o retorno da máscara do sexto nível da conta.
- **M7** (`Alfa end`) - Saída: Variável com o retorno da máscara do sétimo nível da conta.
- **M8** (`Alfa end`) - Saída: Variável com o retorno da máscara do oitavo nível da conta.
- **M9** (`Alfa end`) - Saída: Variável com o retorno da máscara do nono nível da conta.

## Valores de Retorno

- - M1 = Variável alfanumérica com o retorno da máscara do primeiro nível da conta.
- - M2 = Variável alfanumérica com o retorno da máscara do segundo nível da conta.
- - M3 = Variável alfanumérica com o retorno da máscara do terceiro nível da conta.
- - M4 = Variável alfanumérica com o retorno da máscara do quarto nível da conta.
- - M5 = Variável alfanumérica com o retorno da máscara do quinto nível da conta.
- - M6 = Variável alfanumérica com o retorno da máscara do sexto nível da conta.
- - M7 = Variável alfanumérica com o retorno da máscara do sétimo nível da conta.
- - M8 = Variável alfanumérica com o retorno da máscara do oitavo nível da conta.
- - M9 = Variável alfanumérica com o retorno da máscara do nono nível da conta.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscaMascModPlano();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
