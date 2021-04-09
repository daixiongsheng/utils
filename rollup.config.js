import path from 'path'
import ts from 'rollup-plugin-typescript2'
import replace from '@rollup/plugin-replace'
import json from '@rollup/plugin-json'

const { version, name } = require('./package.json')
const resolve = p => path.resolve(__dirname, p)

const banner =
  '/*!\n' +
  ` * dxs-utils v${version}\n` +
  ` * (c) 2020-${new Date().getFullYear()} Xiongsheng Dai\n` +
  ' * Released under the MIT License.\n' +
  ' */'

const outputConfigs = {
  cjs: {
    file: resolve(`dist/${name}.cjs.js`),
    format: 'cjs',
    banner
  },
  esm: {
    file: resolve(`dist/${name}.esm.js`),
    format: 'es',
    banner
  },
  global: {
    file: resolve(`dist/${name}.global.js`),
    format: `iife`,
    banner
  }
}

const defaultFormats = Object.keys(outputConfigs)
const packageConfigs = defaultFormats.map(format =>
  createConfig(format, {
    ...outputConfigs[format],
    file: outputConfigs[format].file.replace(/\.js$/, '.dev.js')
  })
)

if (process.env.NODE_ENV === 'production') {
  defaultFormats.forEach(format => {
    if (format === 'cjs') {
      packageConfigs.push(createProductionConfig(format))
    }
    if (/^(global|esm)?/.test(format)) {
      packageConfigs.push(createMinifiedConfig(format))
    }
  })
}

export default packageConfigs

function createConfig(format, output, plugins = []) {
  if (!output) {
    console.log(require('chalk').yellow(`invalid format: "${format}"`))
    process.exit(1)
  }

  output.sourcemap = !!process.env.SOURCE_MAP
  output.externalLiveBindings = false

  const isProductionBuild =
    process.env.__DEV__ === 'false' || /\.prod\.js$/.test(output.file)
  const isNodeBuild = format === 'cjs'
  const isGlobalBuild = /global/.test(format)

  const tsPlugin = ts({
    check: process.env.NODE_ENV === 'production',
    tsconfig: resolve('tsconfig.json'),
    cacheRoot: resolve('node_modules/.rts2_cache'),
    tsconfigOverride: {
      compilerOptions: {
        sourceMap: output.sourcemap,
        declaration: true,
        declarationMap: true
      },
      exclude: ['**/__tests__', 'test-dts']
    }
  })
  if (isGlobalBuild) {
    output.name = 'DxsUtil'
  }

  const entryFile = `src/index.ts`

  const external = isGlobalBuild
    ? // externalize postcss for @vue/compiler-sfc
      // because @rollup/plugin-commonjs cannot bundle it properly
      ['postcss']
    : // normal browser builds - non-browser only imports are tree-shaken,
      // they are only listed here to suppress warnings.
      ['source-map', '@babel/parser', 'estree-walker']

  // the browser builds of @vue/compiler-sfc requires postcss to be available
  // as a global (e.g. http://wzrd.in/standalone/postcss)
  output.globals = {
    postcss: 'postcss'
  }

  const nodePlugins =
    format !== 'cjs'
      ? [
          require('@rollup/plugin-node-resolve').nodeResolve({
            preferBuiltins: true
          }),
          require('@rollup/plugin-commonjs')({
            sourceMap: false
          }),
          require('rollup-plugin-node-builtins')(),
          require('rollup-plugin-node-globals')()
        ]
      : []

  return {
    input: resolve(entryFile),
    external,
    plugins: [
      json({
        namedExports: false
      }),
      tsPlugin,
      createReplacePlugin(
        isProductionBuild,
        isGlobalBuild,
        isGlobalBuild,
        isNodeBuild
      ),
      ...nodePlugins,
      ...plugins
    ],
    output,
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    },
    treeshake: {
      moduleSideEffects: false
    }
  }
}

function createReplacePlugin(
  isProduction,
  isBrowserBuild,
  isGlobalBuild,
  isNodeBuild
) {
  const replacements = {
    __COMMIT__: `"${process.env.COMMIT}"`,
    __VERSION__: `"${version}"`,
    __DEV__: !isProduction,
    __TEST__: false,
    __BROWSER__: isBrowserBuild,
    __GLOBAL__: isGlobalBuild,
    __NODE_JS__: isNodeBuild
  }
  Object.keys(replacements).forEach(key => {
    if (key in process.env) {
      replacements[key] = process.env[key]
    }
  })
  return replace({
    values: replacements,
    preventAssignment: true
  })
}

function createProductionConfig(format) {
  return createConfig(format, {
    file: resolve(`dist/${name}.${format}.prod.js`),
    format: outputConfigs[format].format
  })
}

function createMinifiedConfig(format) {
  const { terser } = require('rollup-plugin-terser')
  return createConfig(
    format,
    {
      file: outputConfigs[format].file.replace(/\.js$/, '.prod.js'),
      format: outputConfigs[format].format
    },
    [
      terser({
        module: /^esm/.test(format),
        compress: {
          ecma: 2015,
          pure_getters: true
        },
        safari10: true
      })
    ]
  )
}
