# 大厂前端需要的能力(持续更新中)

本仓库在于收集和整理大厂前端需要掌握能力，分为JS基础能力，大厂场景题、大厂面试真题。

希望能够帮助大家提升自己的能力，在面试的时候能够游刃有余，轻松拿到高薪offer。

#### 欢迎提issue和PR

欢迎贡献最新面试题，场景题，面试实战题目。

## 快速开始

 1. 项目目录结构介绍
 2. 运行代码和调试代码

[快速开始](https://github.com/OBKoro1/web-basics/blob/main/Quick-start.md)

### JS基础核心-API实现原理


* [数组基本类型去重](https://github.com/OBKoro1/web-basics/blob/main/src/js/uniqueArray/uniqueArray1.js)
* [数组的对象key值相同的去重](https://github.com/OBKoro1/web-basics/blob/main/src/js/uniqueArray/uniqueArray2.js)
* [加强版防抖节流与常规防抖、节流](https://github.com/OBKoro1/web-basics/blob/main/src/js/debounceThrottle/debounce-throttle.js)
* [深拷贝(正则、时间类型处理、循环引用问题解决)](https://github.com/OBKoro1/web-basics/blob/main/src/js/deepClone/deepClone.js)
* [继承](https://github.com/OBKoro1/web-basics/blob/main/src/js/extend/es5-es6extend.js)
* [instanceOf实现原理](https://github.com/OBKoro1/web-basics/blob/main/src/js/intanceof/intanceof.js)
* [new实现原理](https://github.com/OBKoro1/web-basics/blob/main/src/js/new/new.js)
* [Object.assgin的模拟实现](https://github.com/OBKoro1/web-basics/blob/main/src/js/assign/Object-assign.js)
* [数组方法forEach、filter map reduce some every 实现原理](https://github.com/OBKoro1/web-basics/blob/main/src/js/arrayFunction/arrary-function.js)
* [实现数组的splice方法](https://github.com/OBKoro1/web-basics/blob/main/src/js/arrayFunction/array-splice.js)
* [reduce组合函数、reduce多维数组展开](https://github.com/OBKoro1/web-basics/blob/main/src/js/arrayFunction/array-reduce.js)
* 排序
    * [冒泡排序](https://github.com/OBKoro1/web-basics/blob/main/src/js/sort/arrary-sort-modifiedBubbleSort.js)
    * [插入排序](https://github.com/OBKoro1/web-basics/blob/main/src/js/sort/arrary-sort-insertionSort.js)
    * [选择排序](https://github.com/OBKoro1/web-basics/blob/main/src/js/sort/arrary-sort-modifiedBubbleSort.js)
* [实现bind函数](https://github.com/OBKoro1/web-basics/blob/main/src/js/callApplyBind/bind.js)
* [实现call、apply方法](https://github.com/OBKoro1/web-basics/blob/main/src/js/callApplyBind/call-apply.js)
* [函数柯里化](https://github.com/OBKoro1/web-basics/blob/main/src/js/curry/curry.js)
* ES6
    * [完整实现promise](https://github.com/OBKoro1/web-basics/blob/main/src/js/promiseAwaitGenerator/es6/promise.js)
    * [generator 实现原理](https://github.com/OBKoro1/web-basics/blob/main/src/js/promiseAwaitGenerator/es6/generator.js)
    * [await实现原理](https://github.com/OBKoro1/web-basics/blob/main/src/js/es6/promiseAwaitGenerator/await.js)
* [LRU算法](https://github.com/OBKoro1/web-basics/blob/main/src/js/LRU/LRU.js)
* [promise.allsettled的polify](https://github.com/OBKoro1/web-basics/blob/main/src/js/promiseAwaitGenerator/promise-allsettled.js)

### 面试真题

大厂面试真题组合，在面试之前做一做这类型题目来模拟一下场景。

#### 定时

根据题目量，和复杂程度，闹钟定时半个小时，或者一个小时，看在规定的时间看能不能做出来。

#### 紧张

实际上面试的心态会紧张很多，建议同学们也可以紧张一点，尽量的模拟面试的真实场景。

[链接](https://github.com/OBKoro1/web-basics/tree/main/src/interview)

### 欢迎提issue和PR 贡献自己遇到的大厂面试题来丰富题库

建议文件名格式为：

大厂.日期.js

比如: alibaba.20211020.js
如果重名，也可以加上数字: alibaba.20211020-1.js、alibaba.20211020-2.js

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

* [实现一个简单的模板引擎（用replace 和不用 replace）](https://github.com/OBKoro1/web-basics/blob/main/src/scene/template.js)
* [对象扁平化](https://github.com/OBKoro1/web-basics/blob/main/src/scene/flattenObj.js)
* [根据表达式计算字母数](https://github.com/OBKoro1/web-basics/blob/main/src/scene/countOfAtoms.js)
* [异步任务，控制并发数目](https://github.com/OBKoro1/web-basics/blob/main/src/scene/task-concurrent.js)
* [实战event-loop任务优先级](https://github.com/OBKoro1/web-basics/blob/main/src/scene/event-loop.js)
* [实现一个event类(订阅发布) 含有on off once emit方法](https://github.com/OBKoro1/web-basics/blob/main/src/scene/event.js)
* [缓存异步接口](https://github.com/OBKoro1/web-basics/blob/main/src/scene/cacheApi.js)
* [数据转换数组](https://github.com/OBKoro1/web-basics/blob/main/src/scene/dataToTree.js)
* [实现红绿灯算法](https://github.com/OBKoro1/web-basics/blob/main/src/scene/traffic-lights.js)
* [累乘和累乘缓存](https://github.com/OBKoro1/web-basics/blob/main/src/scene/multiplication.js)
* [解析URL链接](https://github.com/OBKoro1/web-basics/blob/main/src/scene/url-parse.js)

* [数字千分位处理](https://github.com/OBKoro1/web-basics/blob/main/src/scene/toThousands.js)
* [JS转换时间戳为刚刚、几分钟前、几小时前、几天前、几周前、几个月前等格式](https://github.com/OBKoro1/web-basics/blob/main/src/scene/time.js)
* [如何遍历一个dom树](https://github.com/OBKoro1/web-basics/blob/main/src/scene/dom.js)
* [如何通过代码解决浮点数计算不准的问题以及浮点数不准的原因](https://github.com/OBKoro1/web-basics/blob/main/src/scene/numAdd.js)
* [获取页面中的所有标签名](https://github.com/OBKoro1/web-basics/blob/main/src/scene/getAllTag.js)
* [求出一个二维数组[[A, B], [a, b], [1, 2]]所有排列组合](https://github.com/OBKoro1/web-basics/blob/main/src/scene/findAll.js)
* [2021-11-9: event-loop输出](https://github.com/OBKoro1/web-basics/blob/main/src/scene/event-loop2.js)
* [2021-11-9: 拼多多 原型链输出](https://github.com/OBKoro1/web-basics/blob/main/src/scene/proto-console.js)
* [2021-11-9: 判断符号组成的字符串是否正确](https://github.com/OBKoro1/web-basics/blob/main/src/scene/symbol-close.js)
* [2021-11-9: 找到数组中相加为target的两个值](https://github.com/OBKoro1/web-basics/blob/main/src/scene/find-target.js)
### 欢迎赞助

如果觉得插件还不错，对你有所帮助的话，就请我喝杯水吧~

十块八块不嫌多，三块五块也是爱 😘

![](https://github.com/OBKoro1/koro1FileHeader/raw/master/images/money1.jpg?raw=true)

### License

[MIT](http://opensource.org/licenses/MIT)

### 求Star

如果觉得还不错的话，就给个 [Star](https://github.com/OBKoro1/koro1FileHeader) ⭐️ 鼓励一下我吧~

## 联系我

[掘金](https://juejin.im/user/78820536236951)、[前端进阶积累](http://obkoro1.com/web_accumulate/)、[公众号](https://user-gold-cdn.xitu.io/2018/5/1/1631b6f52f7e7015?w=344&h=344&f=jpeg&s=8317)、[GitHub](https://github.com/OBKoro1)、[微信](https://raw.githubusercontent.com/OBKoro1/articleImg_src/master/weibo_img_move/005Y4rCogy1fsnslyz5pnj309j0cdgm6.jpg):OBkoro1、邮箱：obkoro1@foxmail.com

### 我的其他开源推荐

#### [koroFileHeader](https://github.com/OBKoro1/koro1FileHeader)

1. 它是用于一键生成文件头部注释并自动更新最后编辑人和编辑时间、函数注释自动生成和参数提取。
2. 插件支持所有主流语言,功能强大，配置灵活方便，文档齐全，食用简单！
3. 插件从2018年5月维护至今, 3K+ Star，关闭issue 300+
4. 目前拥有250K+的用户，VSCode图表统计日安装用户100多-400多人，帮助用户养成良好的编码习惯，规范整个团队风格。

![头部注释](https://raw.githubusercontent.com/OBKoro1/koro1FileHeader/master/images/example.gif)

![函数注释](https://github.com/OBKoro1/koro1FileHeader/raw/master/images/function-params.gif?raw=true)

#### [stop-mess-around](https://github.com/OBKoro1/stop-mess-around)

chrome插件**通过强制的手段禁止大家浪费时间摸鱼**，在上班/学习期间下意识的打开摸鱼网站, 自动检测摸鱼网站, 提示激励信息后, 关闭摸鱼网站。

![](https://github.com/OBKoro1/stop-mess-around/blob/dev/static/example/run-introduction.gif?raw=true)
#### [AutoCommit](https://github.com/OBKoro1/autoCommit)

这是一个用于Git自动commit的VSCode插件，它可以用来补充之前忘记提交commit，帮助你把首页的绿色格子填满。

![](https://github.com/OBKoro1/autoCommit/raw/master/images/autoCommit.gif?raw=true)
