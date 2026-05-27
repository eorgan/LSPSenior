# AlteraControle

## Assinatura

```lspt
Funcao AlteraControle("Nome do Controle","Propriedade","Parametro");
```

## Código
N/A

## Descrição

Permite alterar o conteúdo de algumas **propriedades dos controles**:

## Parâmetros

- **Controle"** (`"Nome`) - Entrada
- **"Propriedade"** - Entrada
- **"Parametro"** - Entrada

## Exemplo de Uso

```lspt
AlteraControle("Subtitulo2","Salto Página","Não");
AlteraControle("Desenho001","Configurar
 Desenho", "Desenho=1;Cor Textura=$005E20;Cor Linha=Preto;Espessura=2");
AlteraControle("Grafico001", "Conf. Gráfico", "Pano
 Fundo;Verdadeiro");
AlteraControle("Grafico001", "Conf. Gráfico", "Pano
 Fundo;Falso");
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
