(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.zbw = factory());
}(this, function () { 'use strict';

  /*
   * @Author: zbw
   * @Date: 2019-03-18 13:31
   */
  function lib() {
    console.log('我是第三方umd模块');
    // console.log('支持多种方式引入');
  }

  return lib;

}));

