# Padrões de projeto LSP

Estruturas reutilizáveis para escrever regras seguras. Combine com os modelos do
`SKILL.md` (cursor SQL, HTTP, JSON) e com a `quick-reference.md`.

> Fonte: padrão [brunoleocam](https://github.com/brunoleocam/Documentacao-LSP-Linguagem-Senior-de-Programacao),
> com funções conferidas no `functions.json`.

## Padrão: validação antes de processar

Nunca processe dado sem checar nulo e vazio primeiro.

```lsp
Definir Funcao validarDados();

Funcao validarDados();
  Inicio
    Definir Numero vnEhNulo;
    Definir Numero vnTamanho;

    EstaNulo(vaDado, vnEhNulo);
    Se (vnEhNulo = 1)
      {
        Mensagem(Erro, "Dado não pode ser nulo.");
      }
    Senao
      {
        TamanhoAlfa(vaDado, vnTamanho);
        Se (vnTamanho = 0)
          {
            Mensagem(Erro, "Dado não pode ser vazio.");
          }
        Senao
          {
            @ ... processa apenas quando válido ... @
          }
      }
  Fim;
```

## Padrão: conversão segura

Sempre via variáveis intermediárias — converta, depois concatene, depois passe.

```lsp
Definir Numero vnValor;
Definir Alfa   vaValorStr;
Definir Alfa   vaMensagem;

AlfaParaInt(vaTexto, vnValor);     @ 1. entrada texto → numero @
IntParaAlfa(vnValor, vaValorStr);  @ 2. numero → texto p/ exibir @
vaMensagem = "Valor: " + vaValorStr;  @ 3. concatena só Alfa @
Mensagem(Retorna, vaMensagem);     @ 4. passa pronto @
```

## Padrão: tratamento de erro estruturado

Funções de gravação devolvem um código/flag — sempre verifique e trate.

```lsp
Definir Alfa xErro;
Definir Alfa xMensagem;

ExecSQLEx(vaComando, xErro, xMensagem);
Se (xErro <> 0)
  {
    Mensagem(Erro, xMensagem);   @ falha: notifica @
  }
Senao
  {
    @ ... sucesso ... @
  }
```

## Padrão: validação de entrada externa (ex.: CPF/CEP)

Limpe a máscara, valide o tamanho e só então consulte.

```lsp
Definir Alfa   vaCpf;
Definir Numero vnTamanho;
Definir Numero vnEhNulo;

EstaNulo(vaCpf, vnEhNulo);
Se (vnEhNulo = 0)
  {
    DeixaNumeros(vaCpf);          @ remove pontos e traço (saída na própria var) @
    TamanhoAlfa(vaCpf, vnTamanho);
    Se (vnTamanho = 11)
      {
        @ ... CPF com tamanho válido: prossegue ... @
      }
    Senao
      {
        Mensagem(Erro, "CPF inválido.");
      }
  }
```

## Checklist de revisão de um padrão

- [ ] Toda função existe no `functions.json` (`scripts/buscar_funcao.py <Nome>`) — exceto `SQL_*`/`Http*`, validados nos exemplos reais.
- [ ] Resultados lidos por parâmetro de saída (`→ SAÍDA`), nunca por `=` (salvo exceções como `Truncar`).
- [ ] Nenhuma operação/conversão/concatenação dentro de parâmetro.
- [ ] Variáveis declaradas no topo, com prefixo de tipo.
- [ ] Cursores fechados/destruídos; arquivos fechados; loops com condição que evolui.
