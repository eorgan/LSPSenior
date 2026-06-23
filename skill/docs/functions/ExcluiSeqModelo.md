# ExcluiSeqModelo

## Assinatura

```lspt
Funcao ExcluiSeqModelo(Alfa CodMod, Alfa CodEtg, Alfa SeqMod);
```

## Código
755

## Descrição

Realizar a exclusão dos: - Componentes do modelo (E700CMM); - Consumos dos componentes por derivação do modelo (E700CTM); - Narrativas por sequência dos componentes do modelo (E700NSR). Nota Se o sistema estiver [parametrizado](../menu_controladoria/processo-bloco-k.htm#ParametrizacoesIniciais) para a geração do bloco K, algumas consistências e bloqueios podem ser realizadas nessa função, garantindo a correta geração de informações do arquivo, conforme guia prático. Confira estas consistências na tela Parâmetros e consistências da empresa [(F070ECN)](../menu_cadastros/f070ecn.htm).

## Parâmetros

- **CodMod** (`Alfa`) - Entrada: Variável que indica o nome do modelo.
- **CodEtg** (`Alfa`) - Entrada: Variável abrangência que indica os códigos dos estágios de produção.
- **SeqMod** (`Alfa`) - Entrada: Variável abrangência que indica as sequências do componentes.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ExcluiSeqModelo();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/excluiseqmodelo.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
