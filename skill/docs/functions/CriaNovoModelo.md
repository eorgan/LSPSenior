# CriaNovoModelo

## Assinatura

```lspt
Funcao CriaNovoModelo (Alfa CodMod, Alfa DesMod, Alfa CodFam, Numero QtdBas, Numero SitMod);
```

## Código
N/A

## Descrição

Essa função cria um novo modelo de produção. É necessário passar todos os parâmetros. Caso a situação for passada com "A", o sistema irá consistir se o modelo poderá ficar ativo. Também nesse momento caso existir um produto com mesmo código do modelo, o sistema já faz a ligação automaticamente e também cria as derivações do modelo se baseando nas derivações do produto. Nota Se o sistema estiver [parametrizado](../menu_controladoria/processo-bloco-k.htm#ParametrizacoesIniciais) para a geração do bloco K, algumas consistências e bloqueios podem ser realizadas nessa função, garantindo a correta geração de informações do arquivo, conforme guia prático. Confira estas consistências na tela Parâmetros e consistências da empresa [(F070ECN)](../menu_cadastros/f070ecn.htm).

## Parâmetros

- **CodMod** (`Alfa`) - Entrada: Código do modelo a ser criado.
- **DesMod** (`Alfa`) - Entrada: Descrição do modelo a ser criado.
- **CodFam** (`Alfa`) - Entrada: Código da família do modelo.
- **QtdBas** (`Numero`) - Entrada: Quantidade base do modelo.
- **SitMod** (`Numero`) - Entrada: Situação do modelo. O conteúdo deste parâmetro deve estar entre aspas simples.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CriaNovoModelo();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/crianovomodelo.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
