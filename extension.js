// Extension entry point (minimal for language-only extension)
const vscode = require('vscode');

function activate(context) {
   console.log('LSPT Language Support extension is now active!');

   // Optional: Add custom commands here if needed
   // For now, this is a declarative language extension
}

function deactivate() {
   // Cleanup if needed
}

module.exports = {
   activate,
   deactivate
};
