# 大厂前端需要的能力(持续更新中)


大部分题目附带测试代码, 建议VSCode(其他编辑器应该也有类似的插件，自行查找)用户安装[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)插件，直接右键点击`run code` 即可在编辑器中执行测试代码，查看输出结果。

### 欢迎提issue和PR

欢迎贡献最新面试题，场景题，面试实战题目。

### JS基础核心-API实现原理

<!-- TODO: 空闲的时候 添加到web网站中 -->
<!-- TODO: vscode 打断点调试 -->

* [加强版防抖节流与常规防抖、节流](https://github.com/OBKoro1/web-basics/blob/main/src/js/debounce-throttle.js)
* [深拷贝(正则、时间类型处理、循环引用问题解决)](https://github.com/OBKoro1/web-basics/blob/main/src/js/deepClone.js)
* [继承](https://github.com/OBKoro1/web-basics/blob/main/src/js/es5-es6extend.js)
* [instanceOf实现原理](https://github.com/OBKoro1/web-basics/blob/main/src/js/intanceof.js)
* [new实现原理](https://github.com/OBKoro1/web-basics/blob/main/src/js/new.js)
* [数组方法forEach、filter map reduce some every 实现原理](https://github.com/OBKoro1/web-basics/blob/main/src/js/arrary-function.js)
* [实现数组的splice方法](https://github.com/OBKoro1/web-basics/blob/main/src/js/array-splice.js)
* [reduce组合函数、reduce多维数组展开](https://github.com/OBKoro1/web-basics/blob/main/src/js/array-reduce.js)
* 排序
    * [冒泡排序](https://github.com/OBKoro1/web-basics/blob/main/src/js/arrary-sort-modifiedBubbleSort.js)
    * [插入排序](https://github.com/OBKoro1/web-basics/blob/main/src/js/arrary-sort-insertionSort.js)
    * [选择排序](https://github.com/OBKoro1/web-basics/blob/main/src/js/arrary-sort-modifiedBubbleSort.js)
* [实现bind函数](https://github.com/OBKoro1/web-basics/blob/main/src/js/bind.js)
* [实现call、apply方法](https://github.com/OBKoro1/web-basics/blob/main/src/js/call-apply.js)
* [函数柯里化](https://github.com/OBKoro1/web-basics/blob/main/src/js/curry.js)
* ES6
    * [完整实现promise](https://github.com/OBKoro1/web-basics/blob/main/src/js/es6/promise.js)
    * [generator 实现原理](https://github.com/OBKoro1/web-basics/blob/main/src/js/es6/generator.js)
    * [await实现原理](https://github.com/OBKoro1/web-basics/blob/main/src/js/es6/await.js)

### 面试真题

大厂面试真题组合，在面试之前做一做这类型题目来模拟一下场景。

#### 定时

根据题目量，和复杂程度，闹钟定时半个小时，或者一个小时，看在规定的时间看能不能做出来。

#### 紧张

实际上面试的心态会紧张很多，建议同学们也可以紧张一点，尽量的模拟面试的真实场景。


[链接](https://github.com/OBKoro1/web-basics/tree/main/src/interview)

### 欢迎提issue和PR 贡献自己遇到的实战场景题

建议文件名格式为：

大厂.日期.js

比如: alibaba.20211020.js
如果重名，也可以加上数字: alibaba.20211020-1.js、alibaba.20211020-2.js

文件格式：

规定时间：半个小时 或者一个小时。 大概估量即可。

附上题目。

提供测试运行代码。

然后空几十行，再写上答案，避免同学一上来就看到答案。

答案注释掉 避免影响同学自己写的答案运行。


比如：

```js
// 规定的时间

题目

测试用例

空十几行，避免同学一上来就看到答案。

// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看


// 答案注释掉 避免影响同学自己写的答案运行
// 答案

```

### 大厂实战场景代码题

* [对象扁平化](https://github.com/OBKoro1/web-basics/blob/main/src/scene/flattenObj.js)
* [根据表达式计算字母数](https://github.com/OBKoro1/web-basics/blob/main/src/scene/countOfAtoms.js)
* [异步任务，控制并发数目](https://github.com/OBKoro1/web-basics/blob/main/src/scene/task-concurrent.js)
* [实战event-loop任务优先级](https://github.com/OBKoro1/web-basics/blob/main/src/scene/event-loop.js)
* [实现一个event类(订阅发布) 含有on off once emit方法](https://github.com/OBKoro1/web-basics/blob/main/src/scene/event.js)
* [缓存异步接口](https://github.com/OBKoro1/web-basics/blob/main/src/scene/cacheApi.js)
* [LRU算法](https://github.com/OBKoro1/web-basics/blob/main/src/scene/LRU.js)
* [promise.allsettled的polify](https://github.com/OBKoro1/web-basics/blob/main/src/scene/%20promise-allsettled.js)
* [数据转换数组](https://github.com/OBKoro1/web-basics/blob/main/src/scene/dataToTree.js)
* [实现一个方法，参数是一个 generator 函数，执行结果是执行完所有 generator 中的 yield](https://github.com/OBKoro1/web-basics/blob/main/src/scene/await.js)
* [实现红绿灯算法](https://github.com/OBKoro1/web-basics/blob/main/src/scene/traffic-lights.js)
* [累乘和累乘缓存](https://github.com/OBKoro1/web-basics/blob/main/src/scene/multiplication.js)
* [解析URL链接](https://github.com/OBKoro1/web-basics/blob/main/src/scene/url-parse.js)
* [数组基本类型去重](https://github.com/OBKoro1/web-basics/blob/main/src/scene/uniqueArray1.js)
* [数组的对象key值相同的去重](https://github.com/OBKoro1/web-basics/blob/main/src/scene/uniqueArray2.js)
* [数字千分位处理](https://github.com/OBKoro1/web-basics/blob/main/src/scene/toThousands.js)
* [JS转换时间戳为刚刚、几分钟前、几小时前、几天前、几周前、几个月前等格式](https://github.com/OBKoro1/web-basics/blob/main/src/scene/time.js)
* [如何遍历一个dom树](https://github.com/OBKoro1/web-basics/blob/main/src/scene/dom.js)
* [如何通过代码解决浮点数计算不准的问题以及浮点数不准的原因](https://github.com/OBKoro1/web-basics/blob/main/src/scene/numAdd.js)
* [获取页面中的所有标签名](https://github.com/OBKoro1/web-basics/blob/main/src/scene/getAllTag.js)
* [求出一个二维数组[[A, B], [a, b], [1, 2]]所有排列组合](https://github.com/OBKoro1/web-basics/blob/main/src/scene/findAll.js)
