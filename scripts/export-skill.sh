#!/usr/bin/env bash
#
# Exporta a skill "lsp-senior" (auxílio a agentes de IA para programar em LSP) como
# um bundle autocontido para outro projeto.
#
# Copia para <projeto-destino>/.claude/skills/lsp-senior/:
#   - SKILL.md        (regras + como usar o catálogo)
#   - functions.json  (catálogo de ~600 funções: assinatura, params, retorno, descrição)
#   - AGENTS.md       (cópia na raiz do destino, para agentes que não leem .claude/skills)
#   - docs/functions/ (opcional, com --with-docs: docs completas + exemplos por função)
#
# Uso:
#   bash scripts/export-skill.sh /caminho/do/outro/projeto [--with-docs]

set -euo pipefail

SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGET="${1:-}"
WITH_DOCS="${2:-}"

if [ -z "$TARGET" ]; then
   echo "Uso: bash scripts/export-skill.sh /caminho/do/projeto-destino [--with-docs]" >&2
   exit 1
fi
if [ ! -d "$TARGET" ]; then
   echo "Erro: diretório de destino não existe: $TARGET" >&2
   exit 1
fi

SKILL_DST="$TARGET/.claude/skills/lsp-senior"
mkdir -p "$SKILL_DST"

cp "$SRC_DIR/.claude/skills/lsp-senior/SKILL.md" "$SKILL_DST/SKILL.md"
cp "$SRC_DIR/functions.json" "$SKILL_DST/functions.json"
cp "$SRC_DIR/AGENTS.md" "$TARGET/AGENTS.md"

echo "✅ Skill exportada para: $SKILL_DST"
echo "   - SKILL.md"
echo "   - functions.json ($(grep -c '"signature"' "$SKILL_DST/functions.json") funções)"
echo "✅ AGENTS.md copiado para: $TARGET/AGENTS.md"

if [ "$WITH_DOCS" = "--with-docs" ]; then
   mkdir -p "$SKILL_DST/docs/functions"
   cp "$SRC_DIR"/docs/functions/*.md "$SKILL_DST/docs/functions/"
   echo "✅ docs/functions copiadas ($(ls "$SKILL_DST/docs/functions" | wc -l | tr -d ' ') arquivos)"
fi

echo ""
echo "Próximos passos no projeto destino:"
echo "  - Claude Code: a skill autodispara ao editar .lsp/.lspt (nada a fazer)."
echo "  - Antigravity/outros: aponte o AGENTS.md ou o SKILL.md no contexto do agente."
