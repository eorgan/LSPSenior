#!/usr/bin/env bash
#
# Exporta a skill "lsp-senior" (auxílio a agentes de IA para programar em LSP) como
# um bundle autocontido para outro projeto.
#
# Copia para <projeto-destino>/.claude/skills/lsp-senior/:
#   - SKILL.md        (regras + como usar o catálogo)
#   - functions.json  (catálogo de ~600 funções: assinatura, params, retorno, descrição)
#   - reference/      (sintaxe, erros comuns, padrões, web services, parâmetros de CLI)
#   - scripts/        (buscar_funcao.py, buscar_ws.py — usados pelo SKILL.md)
#   - docs/functions/ (docs completas + exemplos por função — incluído por padrão)
#   - AGENTS.md       (cópia na raiz do destino, para agentes que não leem .claude/skills)
#
# Uso:
#   bash scripts/export-skill.sh /caminho/do/outro/projeto          # bundle completo (com docs)
#   bash scripts/export-skill.sh /caminho/do/outro/projeto --lean   # sem docs/functions

set -euo pipefail

SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGET="${1:-}"
MODE="${2:-}"

if [ -z "$TARGET" ]; then
   echo "Uso: bash scripts/export-skill.sh /caminho/do/projeto-destino [--lean]" >&2
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

# reference/ e scripts/ — leves e referenciados pelo SKILL.md (links e buscar_*.py).
# Sempre incluídos (mesmo em --lean) para não deixar referências quebradas no destino.
mkdir -p "$SKILL_DST/reference" "$SKILL_DST/scripts"
cp "$SRC_DIR"/.claude/skills/lsp-senior/reference/*.md "$SKILL_DST/reference/"
cp "$SRC_DIR"/.claude/skills/lsp-senior/scripts/*.py "$SKILL_DST/scripts/"

echo "✅ Skill exportada para: $SKILL_DST"
echo "   - SKILL.md"
echo "   - functions.json ($(grep -c '"signature"' "$SKILL_DST/functions.json") funções)"
echo "   - reference/ ($(ls "$SKILL_DST/reference" | wc -l | tr -d ' ') arquivos)"
echo "   - scripts/ ($(ls "$SKILL_DST/scripts"/*.py | wc -l | tr -d ' ') scripts)"
echo "✅ AGENTS.md copiado para: $TARGET/AGENTS.md"

if [ "$MODE" != "--lean" ]; then
   mkdir -p "$SKILL_DST/docs/functions"
   cp "$SRC_DIR"/docs/functions/*.md "$SKILL_DST/docs/functions/"
   echo "✅ docs/functions copiadas ($(ls "$SKILL_DST/docs/functions" | wc -l | tr -d ' ') arquivos)"
else
   echo "ℹ️  --lean: docs/functions não incluídas (functions.json já cobre assinatura/params/retorno)."
fi

echo ""
echo "Próximos passos no projeto destino:"
echo "  - Claude Code: a skill autodispara ao editar .lsp/.lspt (nada a fazer)."
echo "  - Antigravity/outros: aponte o AGENTS.md ou o SKILL.md no contexto do agente."
