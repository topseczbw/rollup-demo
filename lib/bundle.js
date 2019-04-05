(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.zbw = factory());
}(this, function () { 'use strict';

  /*
   * @Author: zbw
   * @Date: 2019-03-18 12:18
   */
  function a() {
    console.log('a模块');
  }

  /*
   * @Author: zbw
   * @Date: 2019-03-19 14:11
   */
  function b() {
    console.log('b模块');
  }

  /*
   * @Author: zbw
   * @Date: 2019-03-18 14:02
   */
  function a$1() {
    console.log('重名方法：a模块');
  }

  var version = "1.1.0";

  /*
   * @Author: zbw
   * @Date: 2019-03-18 13:31
   */
  function lib() {
    console.log('我是第三方es6模块'); // console.log('只可以import方式引入');
  }

  var index = 42;

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var mockLibUmd = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
      module.exports = factory();
    })(commonjsGlobal, function () {
      /*
       * @Author: zbw
       * @Date: 2019-03-18 13:31
       */

      function lib() {
        console.log('我是第三方umd模块'); // console.log('支持多种方式引入');
      }

      return lib;
    });
  });

  /*
   * @Author: zbw
   * @Date: 2019-03-18 13:15
   */

  function lib$1() {
    console.log('我是第三方cjs模块'); // console.log('只可以require方式引入');
  }

  var mockLibCjs = lib$1;

  /*
   * @Author: zbw
   * @Date: 2019-03-17 22:19
   */
  // import express from 'express'
  // const app = new express()
  // app.listen(3010, (err,data) => {
  // })
  // const mock_es6 = import('../mock-lib/mock-lib-es6')

  var TalTemplate = {
    name: 'zbw张博文',
    age: 18
  };

  var say = function say() {
    console.log(TalTemplate); // a = ()=> {
    //   console.log('重写a模块')
    // }

    a(); // renameB()

    b();
    a$1();
    console.log("\u8BFB\u53D6json\u6587\u4EF6\uFFE5".concat(version));
    console.log("the answer is ".concat(index));
    mockLibCjs();
    lib();
    mockLibUmd();
  };

  return say;

}));
