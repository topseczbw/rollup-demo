/*
 * @Author: zbw
 * @Date: 2019-03-18 13:34
 */
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
export default {
  input: 'src/main.js',
  output: {
    file: 'lib/bundle.js',
    // 代表着打包完成后以什么样的模块类型输出
    format: 'umd',
    name: 'zbw'
  },
  plugins: [
    commonjs(),
    json(),
    resolve({
      jsnext: true,
      main: true
    }),
    babel({
      exclude: 'node_modules/**',
    })
  ],
  external: ['express']
};
