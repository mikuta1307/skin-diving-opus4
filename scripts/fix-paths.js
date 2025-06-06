const fs = require('fs');
const path = require('path');

const BASE_PATH = '/skin-diving-opus4';
const OUT_DIR = 'out';

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.css')) {
      let content = fs.readFileSync(full, 'utf8');

      // CSS や JS、HTML中のあらゆる `'`, `"`, `(`, `=` の直後のパスを補正
      content = content.replace(/(['"(=])\/(svg|images|styles|_next|favicon)/g, `$1${BASE_PATH}/$2`);
//      // HTML: src="/svg/..."
//      content = content.replace(/(src|href)=["']\/(?!skin-diving-opus4\/)/g, `$1="${BASE_PATH}/`);
//
//      // JS: 'image': '/svg/...'
//      content = content.replace(/(['"`])\/(svg|images|styles|_next|favicon)/g, `$1${BASE_PATH}/$2`);

      fs.writeFileSync(full, content, 'utf8');
      console.log(`✅ Patched: ${full}`);
    }
  }
}

walk(OUT_DIR);
