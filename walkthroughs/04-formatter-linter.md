## Formatter e Linter

Mantenha o código limpo e seguro:

- **Format Document** (`Shift+Alt+F`) reindenta o arquivo conforme `lspt.format.indentSize`.
- O **linter** avisa em tempo real sobre armadilhas da LSP: `Pare`/`Continue` fora de loop,
  operação em parâmetro e cursor `SQL_*` aberto sem fechamento.
- O cursor não fechado traz a lâmpada 💡 de **Quick Fix** para inserir `SQL_FecharCursor`.
