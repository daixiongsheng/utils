const path = require('path')
process.exit(0)
const resolve = (...p) => path.resolve(__dirname, '..', ...p)
const config = require(resolve('docs', '.vuepress', 'config.js'))
const { sidebar } = config.themeConfig
const fs = require('fs')
const outStream = fs.createWriteStream(resolve('docs', 'guide', 'index.md'))
outStream.on('open', () => {
  console = {
    log(...args) {
      outStream.write(args.join('') + '\n', 'utf8')
    }
  }
  console.log(
    '---\n' + 'title: 目录\n' + 'search: true\n' + '---\n' + '\n' + '# 开始\n'
  )
  const title = []
  const re = /title:\s*(.+)\n(.|\n)*/
  const rshape = /^#\B[^#]\s*(.+)\n?(.|\n)*/
  sidebar.forEach(key => {
    key = typeof key === 'object' ? key.children[0] : key
    key = key.replace(/\//g, '')
    if (key && !key.includes('guide')) {
      const data = fs.readFileSync(resolve('docs', key, 'index.md')).toString()
      let i = data.indexOf('title:')
      if (~i) {
        const t = data.substr(i, 30).replace(re, '$1')
        title.push([`/${key}/`, t])
      } else {
        i = data.indexOf('#')
        if (~i) {
          const t = data.substr(i, 30).replace(rshape, '$1')
          title.push([`/${key}/`, t])
        }
      }
    }
  })

  console.log('目前工具划分为' + title.map(key => key[1]).join(',') + '...')
  console.log()

  title.forEach(([key, title]) => {
    console.log(`### [${title}](${key})`)
    console.log()
  })
  outStream.on('close', () => {
    process.exit(0)
  })
  outStream.close()
})
