# 大厂前端需要的能力(持续更新中)

欢迎提issue和PR。

### JS基础核心-API实现原理

<!-- TODO: vscode 打断点调试 -->
大部分题目附带测试代码, 建议VSCode(其他编辑器应该也有类似的插件，自行查找)用户安装[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)插件，直接右键点击`run code` 即可在编辑器中执行测试代码，查看输出结果。

<!-- TODO: 添加链接 -->
<!-- TODO: 空闲的时候 添加到web网站中 -->
* 加强版防抖节流与常规防抖、节流
* 深拷贝（正则、时间类型处理、循环引用问题解决。）
* 继承
* instanceOf实现原理
* new实现原理
* 数组方法forEach、filter map reduce some every 实现原理
* 实现数组的splice方法
* reduce组合函数、reduce多维数组展开
* 排序
    * 插入排序
    * 冒泡排序
    * 选择排序
* 实现bind函数
* 实现call、apply方法
* 函数柯里化
* ES6
    * 完整实现promise
    * generator 实现原理
    * await实现原理

### 大厂实战场景代码题

* 异步任务，控制并发数目
* 实战event-loop任务优先级
* 实现一个event类(订阅发布) 含有on off once emit方法
* 实现红绿灯算法
* 缓存异步接口
* LRU算法
* 累乘和累乘缓存
* promise.allsettled的polify
* 数据转换数组
* 实现一个方法，参数是一个 generator 函数，执行结果是执行完所有 generator 中的 yield
* 数字千分位处理
* 数组的对象key值相同的去重
* 解析URL链接
* 数组基本类型去重
* 如何遍历一个dom树
* 如何通过代码解决浮点数计算不准的问题以及浮点数不准的原因。
* 求出一个二维数组[[A, B], [a, b], [1, 2]]所有排列组合
* 获取页面中的所有标签名