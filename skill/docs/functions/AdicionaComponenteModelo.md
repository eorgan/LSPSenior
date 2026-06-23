# AdicionaComponenteModelo

## Assinatura

```lspt
Funcao AdicionaComponenteModelo (Alfa CodMod, Numero CodEtg, Numero SeqMod, Alfa CodCmp, Alfa TipRdm, Numero VlrRdm);
```

## Código
N/A

## Descrição

Essa função adiciona um novo componente no modelo de produção. É necessário passar todos os parâmetros. Lembrando q o sistema insere os parâmetros definidos na tela de opções do modelo (página seq.). Caso no tipo do componente não existir derivação, e o mesmo for tipo F, o sistema adiciona todos os consumos. Nota Se o sistema estiver [parametrizado](../menu_controladoria/processo-bloco-k.htm#ParametrizacoesIniciais) para a geração do bloco K, algumas consistências e bloqueios podem ser realizadas nessa função, garantindo a correta geração de informações do arquivo, conforme guia prático. Confira estas consistências na tela Parâmetros e consistências da empresa [(F070ECN)](../menu_cadastros/f070ecn.htm).

## Parâmetros

- **CodMod** (`Alfa`) - Entrada: Código do modelo.
- **CodEtg** (`Numero`) - Entrada: Código do estágio.
- **SeqMod** (`Numero`) - Entrada: Sequência do modelo.
- **CodCmp** (`Alfa`) - Entrada: Código do componente.
- **TipRdm** (`Alfa`) - Entrada: Tipo de rendimento do componente. O conteúdo deste parâmetro deve estar entre aspas simples.
- **VlrRdm** (`Numero`) - Entrada: Valor do rendimento do componente.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AdicionaComponenteModelo();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/adicionacomponentemodelo.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
