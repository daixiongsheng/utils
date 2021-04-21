const { resolve } = require('path')
const { name, version, repository } = require('../../package.json')
const sidebar = [
  '/',
  {
    title: '函数',
    children: [
      '/function/noop',
      '/function/debounce',
      '/function/throttle',
      '/function/lock'
    ]
  },
  {
    title: '数据处理',
    children: [
      '/data/isPromise',
      '/data/isObject',
      '/data/isDef',
      '/data/typeOf',
      '/data/clone',
      '/data/strictEqual',
      '/data/isEmptyObject',
      '/data/random',
      '/data/shuffle'
    ]
  },
  {
    title: 'URL处理',
    children: ['/url/object2QueryString', '/url/dealPath', '/url/query2Object']
  },
  {
    title: '数字/单位处理',
    children: [
      '/number/toNumber',
      '/number/numberConvert',
      '/number/dec2bin',
      '/number/dec2hex',
      '/number/bin2dec',
      '/number/bin2hex',
      '/number/hex2bin',
      '/number/hex2dec',
      '/number/bytes2simple',
      '/number/simple2bytes'
    ]
  },
  {
    title: '日期',
    children: ['/date/dayOfTheWeek']
  }
]
function CustomPlugin() {}
CustomPlugin.prototype.apply = function(compiler) {
  compiler.hooks.emit.tapAsync('CustomPlugin', (compilation, callback) => {
    // const changedFiles = compilation.compiler.watchFileSystem.watcher.mtimes
    // if (
    //   !Object.keys(changedFiles).filter(key => key.includes('guide')).length
    // ) {
    //   require('child_process').exec('npm run guide')
    // }
    callback()
  })
}
module.exports = {
  base: '/utils/',
  title: '工具集',
  description: '工具集',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  configureWebpack: (config, isServer) => {
    return {
      resolve: {
        alias: {
          '@img': resolve(__dirname, 'public/img')
        }
      },
      plugins: [new CustomPlugin()]
    }
  },
  chainWebpack: (config, isServer) => {
    // config 是 ChainableConfig 的一个实例
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    name,
    version,
    logo: '/img/logo.png',
    sidebar,
    repo: repository,
    repoLabel: '查看源码',
    lastUpdated: 'Last Updated'
  }
}
