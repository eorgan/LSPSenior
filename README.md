# LSPT Language Support

![Version](https://img.shields.io/badge/version-1.3.2-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Extensão completa para suporte à **Linguagem Senior de Programação (LSPT)** no VS Code e editores compatíveis.

> **Versão 1.3.0**: 🎨 Paleta de cores redesenhada para **conforto visual**!  
> 🟢 Comentários em **verde** para melhor legibilidade  
> 👁️ Otimizado para **reduzir fadiga ocular** em temas escuros  
> Baseado na [documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/)! 🎉




## 📋 Características

- ✨ **Syntax Highlighting** completo
- 🚀 **Snippets** para estruturas comuns
- 🔧 **Auto-completion** inteligente
- 📦 **Bracket Matching** e indentação automática
- 💡 **Code Folding** para blocos de código
- 📝 **Comentários** com suporte a anotações (@Author, @Date, etc.)

## 🎯 Funcionalidades

### Syntax Highlighting

A extensão reconhece e destaca:

- **Palavras-chave**: `Se`, `Senao`, `Enquanto`, `Para`, `Inicio`, `Fim`, `Funcao`, `Definir`
- **Tipos de dados**: `Alfa`, `Numero`, `Data`, `Decimal`, `Flutuante`
- **Funções SQL**: `SQL_Criar`, `SQL_AbrirCursor`, `SQL_RetornarAlfa`, etc.
- **Funções nativas**: `Mensagem`, `IntParaAlfa`, `ConverteMascara`, `HttpPost`, etc.
- **WebServices**: `interno.com.senior.g5.*`
- **Comentários**: `@-- --@`, `@ @`, `/* */`
- **Strings e números**
- **Operadores**: `=`, `<>`, `>`, `<`, `E`, `OU`, `NAO`

### Snippets Disponíveis

| Prefixo | Descrição |
|---------|-----------|
| `lspt-header` | Cabeçalho padrão com anotações |
| `funcao` | Estrutura completa de função |
| `funcao-params` | Função com parâmetros (entrada/saída) |
| `def-funcao` | Declaração de função |
| `def-alfa` | Definir variável Alfa |
| `def-numero` | Definir variável Numero |
| `def-data` | Definir variável Data |
| `se` | Estrutura condicional Se |
| `se-senao` | Estrutura Se/Senao |
| `se-senao-se` | Estrutura Se/Senao Se/Senao |
| `enquanto` | Loop Enquanto |
| `para` | Loop Para |
| `continue` | Continue (pular iteração do loop) |
| `cancel` | Cancel (cancelar execução) |
| `cursor1` | Cursor Tipo 1 (antigo) |
| `cursor2` | Cursor Tipo 2 (recomendado) |
| `cursor2-enquanto` | Cursor com loop |
| `msg-ret` | Mensagem de retorno |
| `msg-erro` | Mensagem de erro |
| `execsql` | ExecSQL com tratamento de erro |
| `def-ws` | Definir WebService |
| `http-post` | Requisição HTTP POST |
| `abrir-arquivo` | Abrir arquivo (Ler/Gravar) |
| `ler-linha` | Ler linhas de arquivo |
| `atualizar-campos` | Atualizar campos da tela |

## 📦 Instalação

### Via Open VSX Registry

```bash
# Buscar a extensão
code --install-extension eliezer-organ.lspt-language-support
```

### Instalação Manual

1. Baixe o arquivo `.vsix` da release
2. Abra o VS Code
3. Vá em **Extensions** → **...** → **Install from VSIX...**
4. Selecione o arquivo baixado

## 🚀 Uso

1. Crie ou abra um arquivo com extensão `.lspt` ou `.lsp`
2. A extensão será ativada automaticamente
3. Comece a usar os snippets digitando o prefixo e pressionando `Tab`

### Exemplo

Digite `lspt-header` e pressione `Tab` para criar um cabeçalho:

```lspt
@-- Título do arquivo --@

/*
 * @Author: Seu Nome
 * @Email: seu@email.com
 * @Date: 2025-12-09 09:00:00
 * @Last Modified by: Seu Nome
 * @Last Modified time: 2025-12-09 09:00:00
 * @Description: Descrição
 */
```

## 📚 Documentação LSPT

### Links Úteis

- [Sintaxe de Comandos e Operadores](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/sintaxe-de-comandos-e-operadores.htm)
- [Funções Gerais](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais.html)
- [Índice das Funções de Programador](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/#regra_funcoes/indice_funcoes.htm)

### Convenções de Nomenclatura

- **Variáveis Alfa**: prefixo `a` (ex: `aNomeCliente`)
- **Variáveis Numero**: prefixo `n` (ex: `nCodigo`)
- **Variáveis Data**: prefixo `d` (ex: `dDataEmissao`)
- **Variáveis Decimal/Flutuante**: prefixo `r` ou `n` (ex: `rValor`)

### Estruturas de Controle

```lspt
@-- Se com chaves --@
Se(condicao)
   {
      // código
   }

@-- Se com Inicio/Fim --@
Se(condicao)
   Inicio
      // código
   Fim;

@-- Enquanto --@
Enquanto(condicao)
   {
      // código
   }

@-- Para --@
Para(i=0;i<10;i++)
   {
      // código
   }
```

### Cursores SQL

```lspt
@-- Cursor Tipo 2 (recomendado) --@
Definir Alfa aSqlCom;
Definir Alfa aSqlInt;

aSqlCom = "SELECT campo FROM  tabela WHERE condicao";

SQL_Criar(aSqlInt);
SQL_UsarSqlSenior2(aSqlInt, 0);
SQL_UsarAbrangencia(aSqlInt, 0);
SQL_DefinirComando(aSqlInt, aSqlCom);
SQL_AbrirCursor(aSqlInt);
Se(SQL_EOF(aSqlInt) = 0)
   {
      SQL_RetornarAlfa(aSqlInt, "campo", aVariavel);
   }
SQL_FecharCursor(aSqlInt);
SQL_Destruir(aSqlInt);
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Changelog

Veja [CHANGELOG.md](CHANGELOG.md) para detalhes das mudanças.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Eliezer Organ**
- Email: eorgan@organ.eti.br
- GitHub: [@eliezer-organ](https://github.com/eliezer-organ)

## 🙏 Agradecimentos

- Senior Sistemas pela plataforma G5
- Comunidade de desenvolvedores LSPT

---

**Nota**: Esta extensão é compatível com Open VSX Registry e pode ser usada em VS Code, VSCodium, Eclipse Theia, Gitpod e outros editores compatíveis.