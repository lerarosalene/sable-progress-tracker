const path = require('node:path');
const fs = require('node:fs');
const {glob} = require('glob');
const pug = require('pug');
const esbuild = require('esbuild');

const fsp = fs.promises;

async function main() {
  const templates = await glob('src/**/*.pug');
  for (const template of templates) {
    const compiled = pug.compileFileClient(template, { inlineRuntimeFunctions: false, compileDebug: false });
    const dir = path.dirname(template);
    const fname = path.basename(template, '.pug');
    const compiledFname = `${fname}_pug.js`;
    const compiledPath = path.join(dir, compiledFname);
    await fsp.writeFile(compiledPath, `import pug from "pug-runtime";\n\n` + compiled + `\n\nexport default template;\n`);
  }

  await fsp.mkdir('dist', { recursive: true });
  const indexHTML = pug.renderFile(path.join('src', 'index.pug'));
  await fsp.writeFile(path.join('dist', 'index.html'), indexHTML);

  await esbuild.build({
    entryPoints: [path.join('src', 'index.js')],
    outfile: path.join('dist', 'index.js'),
    bundle: true,
    minify: true,
  });

  await fsp.copyFile(path.join('src', 'index.css'), path.join('dist', 'index.css'));
  await fsp.copyFile(require.resolve('bootstrap/dist/css/bootstrap.min.css'), path.join('dist', 'bootstrap.min.css'));
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
