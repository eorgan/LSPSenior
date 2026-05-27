# MontaAbrangencia

## Assinatura

```lspt
Funcao MontaAbrangencia(Alfa pCpoTab, Alfa pAbgInf, Alfa End pAbgMnt);
```

## Código
147

## Descrição

Função utilizada para retornar uma cláusula SQL de acordo com um campo e uma abrangência de valores.

Para montar abrangências de local quando existem valores especiais ("1.1.111==", por exemplo), deve ser utilizado o campo NumLoc nesta função. O campo CodLoc não é tratado pela função nesta situação.

## Parâmetros

- **pCpoTab** (`Alfa`) - Entrada: Variável que recebe o campo da tabela que vai ser montada a abrangência
- **pAbgInf** (`Alfa`) - Entrada: Variável que contém a faixa de valores na forma de abrangência
- **pAbgMnt** (`Alfa End`) - Saída: Variável alfa que retorna a cláusula SQL correspondente à abrangência informada

## Valores de Retorno

- pAbgMnt: variável Alfanumérica que retorna a abrangência montada.

## Exemplo de Uso

```lspt
Definir Funcao validarCodigos();

  @ Variáveis globais @
  Definir Alfa vaCodigo;
  Definir Numero vnNumero;
  Definir Alfa vaAbrangenciaAlfa;
  Definir Alfa vaAbrangenciaNum;
  Definir Numero vnResultadoAlfa;
  Definir Numero vnResultadoNum;
  Definir Alfa vaMensagem;

vaCodigo = "B";
vnNumero = 150;
vaAbrangenciaAlfa = "A..Z";
vaAbrangenciaNum = "100..200";

validarCodigos();

Funcao validarCodigos(); {
  @ Verifica abrangência alfanumérica @
  VrfAbrA(vaCodigo, vaAbrangenciaAlfa, vnResultadoAlfa);
  Se (vnResultadoAlfa = 1) {
    Definir Alfa vaMensagemCodigo;
    vaMensagemCodigo = "Código '" + vaCodigo + "' válido na abrangência " + vaAbrangenciaAlfa;
    Mensagem(Retorna, vaMensagemCodigo);
  } Senao {
    vaMensagemCodigo = "Código '" + vaCodigo + "' fora da abrangência " + vaAbrangenciaAlfa;
    Mensagem(Erro, vaMensagemCodigo);
  }
  
  @ Verifica abrangência numérica @
  VrfAbrN(vnNumero, vaAbrangenciaNum, vnResultadoNum);
  Se (vnResultadoNum = 1) {
    Definir Alfa vaNumeroStr;
    IntParaAlfa(vnNumero, vaNumeroStr);
    Definir Alfa vaMensagemNumero;
    vaMensagemNumero = " Número " + vaNumeroStr + " válido na abrangência " + vaAbrangenciaNum;
    Mensagem(Retorna, vaMensagemNumero);
  } Senao {
    IntParaAlfa(vnNumero, vaNumeroStr);
    vaMensagemNumero = "Número " + vaNumeroStr + " fora da abrangência " + vaAbrangenciaNum;
    Mensagem(Erro, vaMensagemNumero);
  }
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/montaabrangencia.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
