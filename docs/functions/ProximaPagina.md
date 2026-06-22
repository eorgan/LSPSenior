# ProximaPagina

## Assinatura

```lspt
Funcao ProximaPagina (Alfa Secao, Numero End Retorno);
```

## Código
N/A

## Descrição

Permite verificar se uma determinada seção será impressa na próxima página.

## Parâmetros

- **Secao** (`Alfa`) - Entrada: Nome da seção a ser verificada
- **Retorno** (`Numero End`) - Saída: Retorna 1 quando a seção será impressa na próxima página, e 0 quando não será

## Exemplo de Uso

```lspt
Definir Numero RetProx;
ProximaPagina("Subtitulo_Horario", RetProx);
Se (RetProx = 1) {
  ListaSecao("Adicional_Saltar");
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/proximapagina.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
