# GeraHash

## Assinatura

```lspt
Funcao GeraHash(aTexto, aAlgoritmo, aRetorno);
```

## Código
N/A

## Descrição

Retorna um *Hash* do texto informado. Esta função não é recomendada para arquivos que não sejam de texto. Entende-se por **arquivo de texto**, todo aquele que é possível editar pelo **Bloco de Notas**, disponível nos Sistemas Operacionais Windows. Documentos com extensões **DOC**, **DOCX** e **PDF** não são considerados arquivos de texto neste contexto.

## Parâmetros

- **aTexto** - Entrada: Texto original
- **aAlgoritmo** - Entrada: É o algoritmo de dispersão, gerador do Hash. Atualmente permite os modos MD5, SHA1, SHA256 e SHA512
- **aRetorno** - Entrada: Hash gerado

## Exemplo de Uso

```lspt
Definir Numero arq;
Definir Numero qtdlido;
Definir Alfa dados;
Definir Alfa linhas;
Definir Alfa hashGerado;
linhas = "";
hashGerado = "";
qtdLido = 100;
arq = Abrir("c:\\arquivo.xml", Ler);
@ LENDO O ARQUIVO. @
Enquanto(qtdlido = 100){
  QtdLido = Ler(arq, dados, 100);
  linhas = linhas + dados;
}
Fechar(arq);
@ GERANDO O HASH DO ARQUIVO. @
GeraHash(linhas, "SHA1", hashGerado);
@ RETORNANDO UMA MENSAGEM COM O HASH GERADO. @
Mensagem(retorna, hashGerado);
@ A variável "hashGerado" retorna a "assinatura" do texto. @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/gerahash.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
