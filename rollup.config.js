import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import builtins from 'rollup-plugin-node-builtins'
import pkg from './package.json'

import * as react from 'react'
import * as reactDom from 'react-dom'
import * as reactIs from 'react-is'

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.ts',
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      resolve({preferBuiltins: true}),   // so Rollup can find deps
      builtins(),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'react': Object.keys(react),
          'react-dom': Object.keys(reactDom),
          'react-is': Object.keys(reactIs),
        }
      }),  // so Rollup can convert deps to an ES module
      typescript(), // so Rollup can convert TypeScript to JavaScript,
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom', 'styled-components'],
    plugins: [
      typescript(), // so Rollup can convert TypeScript to JavaScript
    ],
    output: [
      { file: pkg.module, format: 'es' }
    ]
  }
];
