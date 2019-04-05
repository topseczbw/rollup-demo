/*
 * @Author: zbw
 * @Date: 2019-03-17 22:19
 */

// 源代码模块引入
import a from './a'
// import { b } from './esModule/b'
// import { b as renameB } from './esModule/b'
import * as bModule from './esModule/b'
import repeatA from './repeat-a'
// 读取json文件属性
import { version } from '../package.json'
// 第三方es6模块
import mock_es6 from '../mock-lib/mock-lib-es6'
// node_modules第三方es6模块
import answer from 'the-answer'
// 第三方umd模块
// const mock_umd = require('../mock-lib/mock-lib-umd')
import mock_umd from '../mock-lib/mock-lib-umd'
// 第三方cjs模块
// 如果这样写就完啦，虽然
// const mock_cjs = require('../mock-lib/mock-lib-cjs')
import mock_cjs from '../mock-lib/mock-lib-cjs'

//
// import express from 'express'
// const app = new express()
// app.listen(3010, (err,data) => {
// })


// const mock_es6 = import('../mock-lib/mock-lib-es6')
const TalTemplate = {
  name: 'zbw张博文',
  age: 18
}
const say = () => {
  console.log(TalTemplate)
  // a = ()=> {
  //   console.log('重写a模块')
  // }
  a()
  // renameB()
  bModule.b()
  repeatA()
  console.log(`读取json文件￥${version}`)
  console.log(`the answer is ${answer}`)
  mock_cjs()
  mock_es6()
  mock_umd()
}
export default say

