# LSPT Language Support - Guia do Usuário

> Extensão completa para desenvolvimento em **LSP** (Linguagem Senior de Programação) com IntelliSense, syntax highlighting e autocomplete para **369+ funções built-in**.

## 🚀 Instalação Rápida

### Método 1: Via VSIX (Recomendado)
```bash
code --install-extension lspt-language-support-1.4.0.vsix
```

### Método 2: Compilar do Código Fonte
```bash
git clone https://github.com/eliezer-organ/LSPSenior.git
cd LSPSenior
npm run package
code --install-extension lspt-language-support-1.4.0.vsix
```

---

## ✨ Funcionalidades

### 🔍 1. Autocomplete de Funções Built-in

Digite `Dev.` e veja **todas as 369 funções** disponíveis:

```lspt
Dev.
```

**O que acontece:**
- Lista de autocomplete aparece automaticamente
- Busque a função digitando o nome (ex: `InserirStr`)
- Selecione com ↑↓ e pressione Enter
- A assinatura completa é inserida: `InserirStr(Alfa Valor, Alfa End Origem, Numero Pos);`

**Exemplo prático:**
```lspt
Funcao ProcessarTexto();
   Inicio
      Definir Alfa aTexto;
      Definir Alfa aResultado;
      Definir Numero nPosicao;
      
      aTexto = "Exemplo";
      nPosicao = 5;
      
      Dev.  → Aparece lista de funções
      InserirStr(Alfa Valor, Alfa End Origem, Numero Pos);  → Assinatura inserida
   Fim;
```

---

### 📝 2. Signature Help (Ajuda de Parâmetros)

Ao digitar `(` após uma função, veja os **parâmetros em tempo real**:

```lspt
InserirStr(
```

**O que aparece:**
```
InserirStr(Alfa Valor, Alfa End Origem, Numero Pos)
           ─────────────
           ↑ Parâmetro atual destacado
```

**Navegação:**
- Digite o primeiro parâmetro: `"texto", `
- Vírgula move para o próximo parâmetro
- O parâmetro atual é sempre destacado

**Exemplo completo:**
```lspt
Definir Alfa aOrigem;
Definir Numero nPos;

aOrigem = "Olá Mundo";
nPos = 5;

InserirStr("NOVO", aOrigem, nPos);
          ↑       ↑        ↑
        param1  param2   param3
```

---

### 💡 3. Hover Documentation (Documentação ao Passar Mouse)

Passe o mouse sobre qualquer função para ver:
- ✅ Assinatura completa
- ✅ Código da função
- ✅ Descrição
- ✅ Lista de parâmetros com tipos

**Exemplo:**
```lspt
InserirStr(...)  ← Passe o mouse aqui
```

**O que aparece:**
```markdown
InserirStr
──────────
Funcao InserirStr(Alfa Valor, Alfa End Origem, Numero Pos);

Código: 11

Função built-in: InserirStr

Parâmetros:
• Valor (Alfa) - Entrada
• Origem (Alfa End) - Saída  
• Pos (Numero) - Entrada
```

---

### 🔗 4. Go to Definition (Ir para Documentação)

**Command+Click** (Mac) ou **Ctrl+Click** (Windows/Linux) em qualquer função abre a documentação completa:

```lspt
InserirStr(...)  ← Command+Click aqui
```

**Abre:** `docs/functions/InserirStr.md` com:
- Assinatura
- Descrição detalhada
- Exemplos de uso
- Notas importantes
- Funções relacionadas

---

## 📚 Lista de Funções Disponíveis

### Manipulação de Strings
- `InserirStr` - Insere string em posição específica
- `DeletarStr` - Remove caracteres de uma string
- `CopiarStr` - Copia parte de uma string
- `TamanhoStr` - Retorna tamanho da string
- `PosicaoStr` - Encontra posição de substring
- `Concatena` - Concatena múltiplas strings
- `LimpaEspacos` - Remove espaços em branco

### Conversão de Dados
- `IntParaStr` - Converte número para string
- `StrParaInt` - Converte string para número
- `AlfaParaData` - Converte string para data
- `DecimalParaAlfa` - Converte decimal para string
- `ConverteDataToDB` - Converte data para formato banco

### Manipulação de Datas
- `MontaData` - Cria data a partir de dia/mês/ano
- `DesMontaData` - Extrai dia/mês/ano de data
- `ExtensoMes` - Nome do mês por extenso
- `ExtensoSemana` - Nome do dia da semana
- `DataExtenso` - Data completa por extenso
- `UltimoDia` - Último dia do mês

### Valores Numéricos
- `ArredondarValor` - Arredonda com precisão
- `TruncarValor` - Trunca valor
- `Potencia` - Calcula potência
- `Raiz` - Calcula raiz
- `Multiplo` - Verifica se é múltiplo

### SQL e Cursores
- `SQL_Criar` - Cria cursor SQL
- `SQL_AbrirCursor` - Abre cursor
- `SQL_Proximo` - Move para próximo registro
- `SQL_EOF` - Verifica fim do cursor
- `SQL_FecharCursor` - Fecha cursor
- `SQL_RetornarAlfa` - Retorna valor alfa
- `SQL_RetornarNumero` - Retorna valor numérico

### Arquivos e I/O
- `Abrir` - Abre arquivo
- `Fechar` - Fecha arquivo
- `LerNL` - Lê linha de arquivo
- `Gravar` - Grava em arquivo
- `CarregarTextoArq` - Carrega texto completo

### Sistema e Utilitários
- `Mensagem` - Exibe mensagem ao usuário
- `ExecutaRelatorio` - Executa relatório
- `AbrirTelaSistema` - Abre tela do sistema
- `Sleep` - Pausa execução
- `GeraLog` - Gera log de debug

**🔍 Veja a lista completa:** Digite `Dev.` no VS Code!

---

## 🎯 Exemplos Práticos

### Exemplo 1: Manipular String
```lspt
Funcao ExemploString();
   Inicio
      Definir Alfa aTexto;
      Definir Alfa aResultado;
      Definir Numero nTamanho;
      
      aTexto = "Hello World";
      
      @-- Obter tamanho
      TamanhoStr(aTexto, nTamanho);
      
      @-- Inserir texto
      InserirStr(" Beautiful", aTexto, 6);
      @-- Resultado: "Hello Beautiful World"
      
      @-- Copiar parte
      CopiarStr(aResultado, 1, 5);
      @-- Resultado: "Hello"
   Fim;
```

### Exemplo 2: Trabalhar com Datas
```lspt
Funcao ExemploData();
   Inicio
      Definir Numero nData;
      Definir Numero nDia;
      Definir Numero nMes;
      Definir Numero nAno;
      Definir Alfa aDataExtenso;
      
      @-- Montar data
      MontaData(19, 12, 2025, nData);
      
      @-- Desmontar data
      DesMontaData(nData, nDia, nMes, nAno);
      
      @-- Extenso
      DataExtenso(nData, aDataExtenso);
      @-- Resultado: "19 de Dezembro de 2025"
   Fim;
```

### Exemplo 3: Cursor SQL
```lspt
Funcao ExemploCursor();
   Inicio
      Definir Alfa aSqlInt;
      Definir Alfa aSqlCom;
      Definir Alfa aNomeCli;
      Definir Numero nCodCli;
      
      aSqlCom = "SELECT CODCLI, NOMCLI FROM E070CLI WHERE CODCLI > 100";
      
      SQL_Criar(aSqlInt);
      SQL_UsarSqlSenior2(aSqlInt, 0);
      SQL_DefinirComando(aSqlInt, aSqlCom);
      SQL_AbrirCursor(aSqlInt);
      
      Enquanto(SQL_EOF(aSqlInt) = 0)
         {
            SQL_RetornarAlfa(aSqlInt, "NOMCLI", aNomeCli);
            SQL_RetornarNumero(aSqlInt, "CODCLI", nCodCli);
            
            Mensagem(Retorna, "Cliente: " + aNomeCli);
            
            SQL_Proximo(aSqlInt);
         }
      
      SQL_FecharCursor(aSqlInt);
      SQL_Destruir(aSqlInt);
   Fim;
```

---

## 📖 Documentação das Funções

Todas as 369 funções têm documentação em `docs/functions/`:

- **Assinatura completa** com tipos de parâmetros
- **Código identificador** da função
- **Descrição** (template para preencher)
- **Parâmetros** detalhados (entrada/saída)
- **Exemplos de uso** (template)
- **Notas importantes**

**Como contribuir:**
1. Abra `docs/functions/NomeFuncao.md`
2. Preencha a descrição e exemplos
3. Envie um Pull Request!

---

## ⚙️ Configurações

A extensão funciona automaticamente ao abrir arquivos `.lspt` ou `.lsp`. Não requer configuração adicional!

### Desativar Autocomplete (opcional)
```json
// settings.json
{
  "lspt.enableIntelliSense": false
}
```

---

## 🐛 Solução de Problemas

### Autocomplete não aparece?
1. Verifique se o arquivo tem extensão `.lspt` ou `.lsp`
2. Recarregue o VS Code: `Cmd+Shift+P` → "Reload Window"
3. Verifique se a extensão está ativada: `Cmd+Shift+X` → pesquise "LSPT"

### Função não encontrada na lista?
- 369 de 530 funções do CSV foram processadas
- Algumas funções têm formatação inconsistente no arquivo original
- Você pode adicionar manualmente em `functions.json`

### Documentação incompleta?
- Templates foram gerados automaticamente
- Você pode editar `docs/functions/NomeFuncao.md` para adicionar mais informações
- Contribuições são bem-vindas!

---

## 🤝 Contribuindo

### Adicionar Documentação de Função
1. Abra `docs/functions/NomeFuncao.md`
2. Preencha descrição e exemplos
3. Commit e Pull Request

### Reportar Bugs
- [GitHub Issues](https://github.com/eliezer-organ/LSPSenior/issues)

### Sugerir Funcionalidades
- [GitHub Discussions](https://github.com/eliezer-organ/LSPSenior/discussions)

---

## 📝 Changelog

Veja [CHANGELOG.md](CHANGELOG.md) para histórico completo de versões.

### Versão 1.4.0 (Atual)
- ✨ IntelliSense para 369+ funções built-in
- 🔍 Autocomplete com `Dev.`
- 📝 Signature Help
- 💡 Hover Documentation
- 🔗 Go to Definition

---

## 📄 Licença

MIT © Eliezer Organ

---

## 🌟 Apoie o Projeto

Se esta extensão te ajudou, considere:
- ⭐ Dar uma estrela no [GitHub](https://github.com/eliezer-organ/LSPSenior)
- 🐛 Reportar bugs e sugerir melhorias
- 📖 Contribuir com documentação das funções
- 📢 Compartilhar com outros desenvolvedores LSPT

---

**Desenvolvido com ❤️ para a comunidade Senior Sistemas**