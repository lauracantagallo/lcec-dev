import { readFileSync, readdirSync, statSync } from 'fs';
import { join, resolve, relative } from 'path';
import { createRequire } from 'module';
import { JSDOM } from 'jsdom';

const require = createRequire(import.meta.url);
const axeSource = readFileSync(require.resolve('axe-core'), 'utf8');
const distDir = resolve('dist');

const origError = console.error.bind(console);
console.error = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('Not implemented')) return;
  origError(...args);
};

function getHtmlFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...getHtmlFiles(full));
    } else if (entry.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

async function scanFile(filePath) {
  const html = readFileSync(filePath, 'utf8');
  const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    url: 'http://localhost',
  });
  dom.window.eval(axeSource);
  const results = await dom.window.axe.run(dom.window.document.body, {
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'] },
  });
  return results.violations;
}

const files = getHtmlFiles(distDir);
if (!files.length) {
  console.error('No HTML files found in dist/ — run npm run build first.');
  process.exit(1);
}

let totalViolations = 0;
let totalFiles = 0;

for (const file of files) {
  const violations = await scanFile(file);
  const rel = relative(distDir, file);
  if (violations.length) {
    totalFiles++;
    console.log(`\n${rel}`);
    for (const v of violations) {
      const impact = v.impact.toUpperCase().padEnd(8);
      console.log(`  [${impact}] ${v.id}`);
      console.log(`           ${v.description}`);
      for (const node of v.nodes) {
        console.log(`           ${node.html.slice(0, 120)}`);
      }
    }
    totalViolations += violations.length;
  }
}

if (totalViolations > 0) {
  console.log(`\n${totalViolations} violation(s) across ${totalFiles} file(s).`);
  process.exit(1);
} else {
  console.log(`Scanned ${files.length} file(s) — no axe violations found.`);
}
