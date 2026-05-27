# IncluirOperacaoOP

## Assinatura

```lspt
Funcao IncluirOperacaoOP(CodOri,NumOrp,CodEtg,SeqRot,CodOpr,TipPos,NumCad,DtrIni,DtrFim,HorIni,HorFim,MovAut,Retorno);
```

## Código
N/A

## Descrição

Possibilitar a inclusão de uma sequência de roteiro em uma O.P. finalizada. A operação poderá ser incluída em qualquer posição (primeira, última ou entre outras duas), mas sempre a operação (ou as operações) que a cercam, deverão estar finalizadas. A função também pode ser utilizada para inserir estágios, inclusive quando não estiverem previstos originalmente no roteiro da Ordem de Produção, respeitando as consistências do processo. **Consistências para inserção de estágio** Para inserir um estágio por meio da função IncluirOperacaoOP, devem ser atendidas as seguintes consistências: - A Ordem de Produção deve permitir alteração conforme seu status. - A posição informada deve respeitar a sequência lógica do roteiro. - A operação ou as operações que antecedem e sucedem o estágio devem estar finalizadas. - As datas e horários informados devem estar coerentes com a estrutura e o período da Ordem de Produção. Nota Se o sistema estiver [parametrizado](../menu_controladoria/processo-bloco-k.htm#ParametrizacoesIniciais) para a geração do bloco K, algumas consistências e bloqueios podem ser realizadas nessa função, garantindo a correta geração de informações do arquivo, conforme guia prático. Confira estas consistências na tela Parâmetros e consistências da empresa [(F070ECN)](../menu_cadastros/f070ecn.htm).

## Parâmetros

- **CodOri** - Entrada
- **NumOrp** - Entrada
- **CodEtg** - Entrada
- **SeqRot** - Entrada
- **CodOpr** - Entrada
- **TipPos** - Entrada
- **NumCad** - Entrada
- **DtrIni** - Entrada
- **DtrFim** - Entrada
- **HorIni** - Entrada
- **HorFim** - Entrada
- **MovAut** - Entrada: Se estiver definida com o valor "S" (Sim), a operação posterior a que será inserida, deverá ter um movimento de início.
- **Retorno** - Entrada

## Valores de Retorno

- Tipo de retorno: variável alfanumérica.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
IncluirOperacaoOP();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
