// @hugeicons/core-free-icons ships a barrel file (dist/esm/index.js) whose
// re-export paths for the Grid2x2/Grid3x2 icons don't match the actual file
// names on disk (lowercase "x" vs the real uppercase "X", e.g. it imports
// './Grid2x2Icon.js' but the shipped file is 'Grid2X2Icon.js'). Case-insensitive
// filesystems (Windows, default macOS) mask this; case-sensitive ones (Linux,
// which Netlify builds on) fail to resolve the import. This patches the barrel
// file to reference the real on-disk filenames after every npm install.
const fs = require('fs')
const path = require('path')

const esmDir = path.join(__dirname, '..', 'node_modules', '@hugeicons', 'core-free-icons', 'dist', 'esm')
const indexPath = path.join(esmDir, 'index.js')

if (!fs.existsSync(indexPath)) process.exit(0)

const files = new Set(fs.readdirSync(esmDir))
let content = fs.readFileSync(indexPath, 'utf8')
let fixedCount = 0

content = content.replace(/from '\.\/([^']+)'/g, (match, name) => {
  if (files.has(name)) return match
  const realName = [...files].find((f) => f.toLowerCase() === name.toLowerCase())
  if (!realName) return match
  fixedCount++
  return `from './${realName}'`
})

if (fixedCount > 0) {
  fs.writeFileSync(indexPath, content)
  console.log(`fix-hugeicons: corrected ${fixedCount} case-mismatched import path(s)`)
}
