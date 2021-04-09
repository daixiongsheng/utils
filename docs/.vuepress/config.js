const { resolve } = require('path')

const sidebar = ['/', '/guide/', '/url/']

module.exports = {
  base: '/utils/',
  title: '工具集',
  description: '工具集',
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
      const { alias = {} } = config.resolve
      config.resolve.alias = {
        ...alias,
        '@img': resolve(__dirname, 'public/img')
      }
    }
  },
  chainWebpack: (config, isServer) => {
    // config 是 ChainableConfig 的一个实例
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/img/logo.png',
    sidebar,
    repo: 'template',
    repoLabel: '查看源码',
    lastUpdated: 'Last Updated'
  }
}
