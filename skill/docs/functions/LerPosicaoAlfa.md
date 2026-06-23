# LerPosicaoAlfa

## Assinatura

```lspt
Funcao LerPosicaoAlfa(Origem,Destino,Posicao);
```

## Código
N/A

## Descrição

**Quando usar:** Quando as funções padrão não conseguem atender suas necessidades, especialmente para:

- Arrays aninhados
- Estruturas JSON complexas
- Extração de dados específicos com lógica customizada
- Controle total sobre o parsing

**Características:**

- Controle total sobre a extração de dados
- Pode processar qualquer estrutura JSON
- Mais complexo de implementar
- Requer conhecimento de manipulação de strings e códigos ASCII

## Parâmetros

- **Origem** - Entrada: Campo/Variável que se deseja verificar
- **Destino** - Entrada: Variável numérica que receberá o caracter lido
- **Posicao** - Entrada

## Exemplo de Uso

```lspt
Definir Funcao extrairDadosJSONManual(); {
  Definir Alfa vaJSONResposta;
  Definir Alfa vaValorFrete;
  Definir Alfa vaPrazo;
  Definir Numero vnPosicaoVlTotal;
  Definir Numero vnPosicaoPrazo;
  Definir Numero vnTamanhoJSON;
  Definir Numero vnInicioVal;
  Definir Numero vnFimVal;
  Definir Numero vnCodigoCaractere;
  Definir Numero vnCodigoVirgula; vnCodigoVirgula = 44; @ Código ASCII da vírgula @
  Definir Numero vnCodigoChaveFecha; vnCodigoChaveFecha = 125; @ Código ASCII de } @
  
  @ JSON de exemplo @
  vaJSONResposta = "{\"frete\": {\"vltotal\": 25.50, \"prazo\": 3, \"status\": \"ok\"}}";
  
  @ Obter tamanho total do JSON @
  TamanhoAlfa(vaJSONResposta, vnTamanhoJSON);
  
  @ === EXTRAIR VALOR TOTAL === @
  PosicaoAlfa("\"vltotal\":", vaJSONResposta, vnPosicaoVlTotal);
  Se (vnPosicaoVlTotal > 0) {
    @ Posicionar após "vltotal": @
    vnPosicaoVlTotal = vnPosicaoVlTotal + 10; @ Tamanho de "vltotal": @
    
    @ Pular espaços @
    Enquanto (vnPosicaoVlTotal < vnTamanhoJSON) {
      LerPosicaoAlfa(vaJSONResposta, vnCodigoCaractere, vnPosicaoVlTotal);
      Se (vnCodigoCaractere = 32) { @ Código ASCII do espaço @
        vnPosicaoVlTotal++;
      } Senao {
        Pare;
      }
    }
    
    @ Extrair valor até vírgula ou chave @
    vnInicioVal = vnPosicaoVlTotal;
    vnFimVal = vnInicioVal;
    
    Enquanto (vnFimVal < vnTamanhoJSON) {
      LerPosicaoAlfa(vaJSONResposta, vnCodigoCaractere, vnFimVal);
      Se ((vnCodigoCaractere <> vnCodigoVirgula) e (vnCodigoCaractere <> vnCodigoChaveFecha)) {
        vnFimVal++;
      } Senao {
        Pare;
      }
    }
    
    @ Extrair o valor @
    Se (vnFimVal > vnInicioVal) {
      vaValorFrete = vaJSONResposta; @ Fazer cópia primeiro @
      CopiarAlfa(vaValorFrete, vnInicioVal, vnFimVal - vnInicioVal);
      SubstAlfa(" ", "", vaValorFrete); @ Remover espaços @
    }
  }
  
  @ === EXTRAIR PRAZO === @
  PosicaoAlfa("\"prazo\":", vaJSONResposta, vnPosicaoPrazo);
  Se (vnPosicaoPrazo > 0) {
    @ Posicionar após "prazo": @
    vnPosicaoPrazo = vnPosicaoPrazo + 8; @ Tamanho de "prazo": @
    
    @ Pular espaços @
    Enquanto (vnPosicaoPrazo < vnTamanhoJSON) {
      LerPosicaoAlfa(vaJSONResposta, vnCodigoCaractere, vnPosicaoPrazo);
      Se (vnCodigoCaractere = 32) { @ Código ASCII do espaço @
        vnPosicaoPrazo++;
      } Senao {
        Pare;
      }
    }
    
    @ Extrair prazo até vírgula ou chave @
    vnInicioVal = vnPosicaoPrazo;
    vnFimVal = vnInicioVal;
    
    Enquanto (vnFimVal < vnTamanhoJSON) {
      LerPosicaoAlfa(vaJSONResposta, vnCodigoCaractere, vnFimVal);
      Se ((vnCodigoCaractere <> vnCodigoVirgula) e (vnCodigoCaractere <> vnCodigoChaveFecha)) {
        vnFimVal++;
      } Senao {
        Pare;
      }
    }
    
    @ Extrair o prazo @
    Se (vnFimVal > vnInicioVal) {
      vaPrazo = vaJSONResposta; @ Fazer cópia primeiro @
      CopiarAlfa(vaPrazo, vnInicioVal, vnFimVal - vnInicioVal);
      SubstAlfa(" ", "", vaPrazo); @ Remover espaços @
    }
  }
  
  @ Mostrar resultados @
  Mensagem(Retorna, "Valor do Frete: R$ " + vaValorFrete + " - Prazo: " + vaPrazo + " dias");
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/lerposicaoalfa.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
