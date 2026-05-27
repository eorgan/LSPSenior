# GerarMDFeSaidaAutomatico

## Assinatura

```lspt
Funcao GerarMDFeSaidaAutomatico(Numero CodEmp, Numero CodFil, Alfa ChaveMDFeAuto, Alfa ListaChvDoe, Alfa GerarXml, Numero End NumEbq);
```

## Código
930

## Descrição

Ver [Geração automática de MDF-e](../manuais_processos/mercado/mdf-e-automatica.htm).

## Parâmetros

- **CodEmp** (`Numero`) - Entrada
- **CodFil** (`Numero`) - Entrada
- **ChaveMDFeAuto** (`Alfa`) - Entrada
- **ListaChvDoe** (`Alfa`) - Entrada
- **GerarXml** (`Alfa`) - Entrada
- **NumEbq** (`Numero End`) - Saída

## Exemplo de Uso

```lspt
definir numero numebq;
definir alfa ListaChvDoe;
definir alfa ChaveMDFeAuto;
definir alfa GerarXml;
definir alfa NumEbqAlfa;
definir alfa MensagemUsuario;

ChaveMDFeAuto = "1234"; @Campo de chave a ser utilizado a critério do usuário. O valor informado nesse campo estará disponível em todos os IRs do MDF-e Automático@

GerarXml = "S"; @Indica a geração automática do XML ao gerar o MDF-e@

/* Caso deseje, é possível passar a chave dos documentos fiscais a serem inseridos no MDF-e através do campo ListaChvDoe.
   É recomendado utilizar apenas ao emitir MDF-e para até 2 documentos fiscais por limitações do campo Alfa.
   Ao utilizar um volume maior de documentos, recomenda-se utilizar o Identificador de Regras VEN-140MDFEA00 "MDF-e Automático - Documentos Fiscais para Emissão do MDF-e"
   !IMPORTANTE! Caso haja doumentos informados tanto na chamada da função quanto na regra, o sistema irá priorizar os documentos da regra! */
ListaChvDoe = "'42201080680093000181557030000003451151683329','42201080680093000181557030000003461158757600'";

GerarMDFeSaidaAutomatico(CodEmp, CodFil, ChaveMDFeAuto, ListaChvDoe, GerarXml, NumEbq);

IntParaAlfa(NumEbq, NumEbqAlfa);

MensagemUsuario = "Número do Embarque gerado: "+NumEbqAlfa+".";

mensagem(Retorna, MensagemUsuario);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
