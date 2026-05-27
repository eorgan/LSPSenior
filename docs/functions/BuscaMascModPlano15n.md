# BuscaMascModPlano15n

## Assinatura

```lspt
Funcao BuscaMascModPlano15n(CodMpc,M10,M11,M12,M13,M14,M15);
```

## Código
N/A

## Descrição

Função exclusiva para contabilidade. Passando o modelo do plano de Contas da Empresa, retorna as máscaras de acordo com o nível das contas.

## Parâmetros

- **CodMpc** - Entrada: Variável com o código do plano.
- **M10** - Entrada: Variável com o retorno da máscara do décimo nível da conta.
- **M11** - Entrada: Variável com o retorno da máscara do décimo primeiro nível da conta.
- **M12** - Entrada: Variável com o retorno da máscara do décimo segundo nível da conta.
- **M13** - Entrada: Variável com o retorno da máscara do décimo terceiro nível da conta.
- **M14** - Entrada: Variável com o retorno da máscara do décimo quarto nível da conta.
- **M15** - Entrada: Variável com o retorno da máscara do décimo quinto nível da conta.

## Valores de Retorno

- M10 = Variável alfanumérica com o retorno da máscara do
- décimo nível da conta.
- M11 = Variável alfanumérica com o retorno da máscara do décimo primeiro nível da
- conta.
- M12 = Variável alfanumérica com o retorno da máscara do décimo segundo nível da
- conta.
- M13 = Variável alfanumérica com o retorno da máscara do décimo terceiro nível da
- conta.
- M14 = Variável alfanumérica com o retorno da máscara do décimo quarto nível da conta.
- M15 = Variável alfanumérica com o retorno da máscara do décimo quinto nível da conta.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscaMascModPlano15n();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
