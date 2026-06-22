# Truncar

## Assinatura

```lspt
Funcao Truncar(valor);
```

## Código
N/A

## Descrição

Trunca um número para inteiro, removendo a parte fracionária do número.

## Parâmetros

- **valor** - Entrada: Valor do tipo Numero que necessita ter a parte fracionária removida

## Exemplo de Uso

```lspt
Definir Funcao calculosFinanceiros();

  @ Variáveis globais @
  Definir Numero vnValorOriginal;
  Definir Numero vnValorArredondado;
  Definir Numero vnValorTruncado;
  Definir Numero vnPorcentagem;
  Definir Numero vnDesconto;
  Definir Numero vnValorFinal;
  Definir Alfa vaMensagem;

vnValorOriginal = 1234.6789;
vnPorcentagem = 15.5;

calculosFinanceiros();

Funcao calculosFinanceiros(); {
  Definir Numero vnPrecisao2;
  Definir Alfa vaValorArredondadoStr;
  Definir Alfa vaValorTruncadoStr;
  Definir Alfa vaDescontoStr;
  Definir Alfa vaValorFinalStr;

  vnPrecisao2 = 2;

  @ Arredonda para 2 casas (Arredondar de 3 parametros nao existe no LSP) @
  vnValorArredondado = vnValorOriginal;
  ArredondarValor(vnValorArredondado, vnPrecisao2);
  DecimalParaAlfa(vnValorArredondado, vaValorArredondadoStr);
  vaMensagem = "Valor arredondado: R$ " + vaValorArredondadoStr;
  Mensagem(Retorna, vaMensagem);
  
  @ Trunca para inteiro @
  vnValorTruncado = Truncar(vnValorOriginal);
  IntParaAlfa(vnValorTruncado, vaValorTruncadoStr);
  vaMensagem = "Valor truncado: R$ " + vaValorTruncadoStr;
  Mensagem(Retorna, vaMensagem);
  
  @ Calcula desconto @
  vnDesconto = (vnValorOriginal * vnPorcentagem) / 100;
  ArredondarValor(vnDesconto, vnPrecisao2);
  
  @ Valor final @
  vnValorFinal = vnValorOriginal - vnDesconto;
  ArredondarValor(vnValorFinal, vnPrecisao2);
  
  DecimalParaAlfa(vnDesconto, vaDescontoStr);
  DecimalParaAlfa(vnValorFinal, vaValorFinalStr);
  
  vaMensagem = "Desconto aplicado: R$ " + vaDescontoStr;
  Mensagem(Retorna, vaMensagem);
  vaMensagem = "Valor final: R$ " + vaValorFinalStr;
  Mensagem(Retorna, vaMensagem);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/truncar.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
