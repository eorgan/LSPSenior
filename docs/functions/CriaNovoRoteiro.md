# CriaNovoRoteiro

## Assinatura

```lspt
Funcao CriaNovoRoteiro (Alfa CodRot, Alfa DesRot, Alfa CodFam, Numero QtdBas, Numero LotTec , Numero SitRot);
```

## Código
N/A

## Descrição

Identica a função CriaNovoModelo, essa gera um novo roteiro de produção. É necessário passar todos os parâmetros. Caso a situação for passada com A, o sistema irá consistir se o roteiro poderá ficar ativo. Também nesse momento caso existir um produto com mesmo código do roteiro o sistema já faz ligação automaticamente. Nota Se o sistema estiver [parametrizado](../menu_controladoria/processo-bloco-k.htm#ParametrizacoesIniciais) para a geração do bloco K, algumas consistências e bloqueios podem ser realizadas nessa função, garantindo a correta geração de informações do arquivo, conforme guia prático. Confira estas consistências na tela Parâmetros e consistências da empresa [(F070ECN)](../menu_cadastros/f070ecn.htm).

## Parâmetros

- **CodRot** (`Alfa`) - Entrada: Código do roteiro a ser criado.
- **DesRot** (`Alfa`) - Entrada: Descrição do roteiro a ser criado.
- **CodFam** (`Alfa`) - Entrada: Código da família do roteiro.
- **QtdBas** (`Numero`) - Entrada
- **LotTec** (`Numero`) - Entrada
- **SitRot** (`Numero`) - Entrada

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CriaNovoRoteiro();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/crianovoroteiro%20.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
