# EntradaValor

## Assinatura

```lspt
funcao EntradaValor(alfa pCaption, alfa pDesTit, numero pTipDad, alfa pMasc,alfa pIniAlfa, numero pIniNum,alfa end pRetAlfa,numero end pRetNum, numero end pTipSai);
```

## Código
56

## Descrição

Função utilizada para entrada de valores nas regras.

## Parâmetros

- **pCaption** (`alfa`) - Entrada: Valor ou variável que indicará o nome da tela.
- **pDesTit** (`alfa`) - Entrada: Valor ou variável que indicará o nome da descrição do título do campo de entrada.
- **pTipDad** (`numero`) - Entrada: Valor ou variável que indicará o tipo do dado para o campo de entrad;.  (1=Números inteiros, 2=Números com casas decimais, 3=Data, 4=Hora, 5=Alfa e 6=Senha).
- **pMasc** (`alfa`) - Entrada: Valor ou variável que indicará a mascara para ser aplicada no campo de entrada.
- **pIniAlfa** (`alfa`) - Entrada: Valor ou variável que indicará o valor inicial alfanumérico para o campo de entrada.
- **pIniNum** (`numero`) - Entrada: Valor ou variável que indicará o valor inicial numérico para o campo de entrada. Observação: esse parâmetro possui um limite, onde o valor máximo suportado pelo sistema é de 2.147.483.647.
- **pRetAlfa** (`alfa end`) - Saída: Variável que receberá o retorno informado no campo de entrada.
- **pRetNum** (`numero end`) - Saída: Variável que receberá o retorno informado no campo de entrada.
- **pTipSai** (`numero end`) - Saída: Variável que receberá o tipo que o usuário saiu da tela; (1-OK;0-Só fechou a form).

## Valores de Retorno

- - RetAlfa: Variável alfanumérica que receberá
- o retorno informado no campo de entrada.
- - pRetNum: Variável numérica que receberá o retorno informado no campo de
- entrada.
- - pTipSai: Variável numérica que receberá o tipo que o usuário saiu da
- tela; (1-OK;0-Só fechou a form).
- Características: A tela da função salva a posição onde o
- usuário a definiu na última exibição, sendo a tela sempre reexibida
- nessa posição. Essa característica não ocorre se a função for chamada
- por alguma regra executada na entrada do sistema, antes da exibição da
- tela principal do sistema.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
EntradaValor();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
