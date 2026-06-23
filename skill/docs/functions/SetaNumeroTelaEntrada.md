# SetaNumeroTelaEntrada

## Assinatura

```lspt
Funcao SetaNumeroTelaEntrada(Alfa NomeCampo, Numero Valor);
```

## Código
602

## Descrição

Permite alterar os valores numéricos da tela de entrada do modelo de relatório.

## Parâmetros

- **NomeCampo** (`Alfa`) - Entrada: Nome do campo da tela de entrada (tipo Alfa)
- **Valor** (`Numero`) - Entrada: Valor para o campo (tipo Numero)

## Exemplo de Uso

```lspt
Definir Funcao exemploSetaParametrosRelatorio();

@ Variáveis globais @
Definir Numero vnCodEmpresa;
Definir Numero vnCodFilial;
Definir Alfa vaAbrangenciaEmpresa;

exemploSetaParametrosRelatorio();

Funcao exemploSetaParametrosRelatorio(); {
  @ Definir parâmetros de entrada @
  vnCodEmpresa = 1;
  vnCodFilial = 5;
  vaAbrangenciaEmpresa = "1..3";
  
  @ Configurar campos numéricos da tela de entrada @
  SetaNumeroTelaEntrada("ECodEmp", vnCodEmpresa);
  SetaNumeroTelaEntrada("ECodFil", vnCodFilial);
  
  @ Configurar campos alfa da tela de entrada @
  SetaAlfaTelaEntrada("EAbrEmp", vaAbrangenciaEmpresa);
  
  @ Executar relatório com parâmetros pré-definidos @
  ExecutaRelatorio("REL001.GER", "S");
  
  Mensagem(Retorna, "Relatório executado com parâmetros automatizados");
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/setanumerotelaentrada.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
