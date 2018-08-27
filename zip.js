const JSZip = require('jszip');
const fs = require('fs');
const prettyBytes = require('pretty-bytes')
const chalk = require('chalk')
const path = require('path')

const filename = 'js13k.zip'

const limit = 13 * 1024 // 13kB

const match_files = /(.*)\.(js|css|html)$/

const zip = new JSZip();
const files = fs.readdirSync('dist/')
  .filter(file => match_files.test(file))
  .forEach(file => {
    zip.file(file, fs.readFileSync(path.join(__dirname, 'dist', file), { encoding: 'utf-8' }))
  })

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
