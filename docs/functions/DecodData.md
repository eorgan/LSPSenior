# DecodData

## Assinatura

```lspt
Funcao DecodData(data, dia, mes, ano);
```

## Código
N/A

## Descrição

Decompõe uma data em dia, mês e ano separadamente.

## Parâmetros

- **data** - Entrada: Corresponde a uma data em formato numérico.
- **dia** - Entrada: Valor correspondente ao dia.
- **mes** - Entrada: Valor correspondente ao mês.
- **ano** - Entrada: Valor correspondente ao ano.

## Exemplo de Uso

```lspt
Definir Funcao validarDataNascimento();

@ Variáveis globais @
Definir Numero vnDia;
Definir Numero vnMes;
Definir Numero vnAno;
Definir Data vdDataNascimento;
Definir Data vdDataAtual;
Definir Numero vnIdade;

vnDia = 15;
vnMes = 8;
vnAno = 1990;

validarDataNascimento();

Funcao validarDataNascimento(); {
  @ 1. Monta a data @
  CodData(vnDia, vnMes, vnAno, vdDataNascimento);
  
  @ 2. Obtém data atual para validação @
  DataHoje(vdDataAtual);
  
  @ 3. Verifica se a data é válida (não futura) @
  Se (vdDataNascimento > vdDataAtual) {
    Mensagem(Erro, "Data de nascimento não pode ser futura!");
  } Senao {
    @ 4. Calcula idade aproximada @
    vnIdade = vnAno - 2024; @ Simplificado para exemplo @
    Se (vnIdade < 0) {
      vnIdade = vnIdade * -1;
    }
    
    Definir Alfa vaIdadeStr;
    IntParaAlfa(vnIdade, vaIdadeStr);
    Definir Alfa vaMensagem;
    vaMensagem = "Data válida! Idade aproximada: " + vaIdadeStr;
    Mensagem(Retorna, vaMensagem);
  }
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/decoddata.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
