const JSZip = require('jszip');
const fs = require('fs');
const prettyBytes = require('pretty-bytes')
const chalk = require('chalk')

const filename = 'js13k.zip'

const limit = 13 * 1024 // 13kB

const zip = new JSZip();
zip.file('index.html', fs.readFileSync('./dist/index.html', { encoding: 'utf-8' }))
zip.file('main.js', fs.readFileSync('./dist/main.js', { encoding: 'utf-8' }))

zip
  .generateNodeStream({ type: 'nodebuffer', streamFiles: true, compression: 'DEFLATE', compressionOptions: { level: 9 } })
  .pipe(fs.createWriteStream(filename))
  .on('finish', () => {
    const fsStats = fs.statSync(filename)
    const size = fsStats.size
    const percentage = (size * 100 / limit).toFixed(2)
    const prettySize = prettyBytes(size)
    const prettyLimit = prettyBytes(limit)
    const prettySpace = prettyBytes(limit - size)
    console.log(chalk.bgCyan(' ZIPPED! '))
    console.log(chalk.yellow(`Size: ${prettySize} / ${prettyLimit}`))
    if (size <= limit) {
      console.log(chalk.green(`Only ${percentage}% of space used! Still ${prettySpace} left!`))
    } else {
      console.log(chalk.red(`Uh-oh, you are over the ${prettyLimit} limit! (${percentage}% used!)`))
    }
  })
