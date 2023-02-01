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
* [节流函数最后一次调用必须执行](https://github.com/OBKoro1/web-basics/blob/main/src/js/debounceThrottle/throttleLastRun.js)
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
* [数据转换数组](https://github.com/OBKoro1/web-basics/blob/main/src/scene/arrToTree/dataToTree.js)
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
* [ 每4秒输出一次helloWorld, 输出3次](https://github.com/OBKoro1/web-basics/blob/main/src/scene/reportInterval/reportInterval.js)
* [数字转汉语输出](https://github.com/OBKoro1/web-basics/blob/main/src/scene/numberToCn/numberToCn.js)
* [汉语转数字输出](https://github.com/OBKoro1/web-basics/blob/main/src/scene/numberToCn/cnToNumber.js)
* [实现compose函数,类似koa洋葱组件](https://github.com/OBKoro1/web-basics/blob/main/src/scene/compose/compose.js)
* [虚拟dom转真实dom](https://github.com/OBKoro1/web-basics/blob/main/src/scene/vDomToDom/vDomToDom.js)
* [Promise.retry 成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject](https://github.com/OBKoro1/web-basics/blob/main/src/scene/promise/retry.js)

### 算法题

* [删除字符串中出现次数最少的字符](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/deleteLowerStr/index.js)

* [844. 比较含退格的字符串](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/backspaceStringCompare/backspaceStringCompare.js)

动态规划

* [72 编辑距离](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/editDiatance/editDiatance.js)
* [5. 最长回文子串](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/longest-palindromic-substring/longest-palindromic-substring.js)
* [22. 括号生成](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/generate-parentheses/generate-parentheses.js)
* [121. 买卖股票的最佳时机](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/best-time-to-buy-and-sell-stock/best-time-to-buy-and-sell-stock.js)
* [70. 爬楼梯](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/climbing-stairs/climbing-stairs.js)
* [53. 最大子数组和](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/maximum-subarray/maximum-subarray.js)
* [45. 跳跃游戏 II](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/jump-game-ii/jump-game-ii.js)
* [96. 不同的二叉搜索树](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/unique-binary-search-trees/unique-binary-search-trees.js)
* [279. 完全平方数](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/perfect-squares/perfect-squares.js)
* [322. 零钱兑换](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/coin-change/coin-change.js)
* [416. 分割等和子集](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/partition-equal-subset-sum/partition-equal-subset-sum.js)
* [剑指 Offer 42. 连续子数组的最大和](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/lian-xu-zi-shu-zu-de-zui-da-he-lcof/lian-xu-zi-shu-zu-de-zui-da-he-lcof.js)
* [1049. 最后一块石头的重量 II](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/last-stone-weight-ii/last-stone-weight-ii.js)
* [菲波那切数列](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/fei-bo-na-qi-shu-lie-lcof/fei-bo-na-qi-shu-lie-lcof.js)

* [494. 目标和](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/target-sum/target-sum.js)
* [746. 使用最小花费爬楼梯](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/min-cost-climbing-stairs/min-cost-climbing-stairs.js)
* [198. 打家劫舍](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/house-robber/house-robber.js)
* [213. 打家劫舍 II](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/house-robber-ii/house-robber-ii.js)
* [64. 最小路径和](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/minimum-path-sum/minimum-path-sum.js)
* [面试题 17.16. 按摩师](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/the-masseuse-lcci/the-masseuse-lcci.js)
* [面试题 08.01. 三步问题](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/three-steps-problem-lcci/three-steps-problem-lcci.js)
* [剑指 Offer 10- II. 青蛙跳台阶问题](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/qing-wa-tiao-tai-jie-wen-ti-lcof/qing-wa-tiao-tai-jie-wen-ti-lcof.js)

贪心

* [55. 跳跃游戏](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/jump-game/jump-game.js)
* [45. 跳跃游戏 II](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/jump-game-ii/jump-game-ii.js)
* [122. 买卖股票的最佳时机 II](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/best-time-to-buy-and-sell-stock-ii/best-time-to-buy-and-sell-stock-ii.js)
* [面试题 16.17. 连续数列](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/contiguous-sequence-lcci/contiguous-sequence-lcci.js)


dfs深度优先和bfs广度优先

* [ 面试题13. 机器人的运动范围](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/ji-qi-ren-de-yun-dong-fan-wei-lcof/ji-qi-ren-de-yun-dong-fan-wei-lcof.js)
* [200. 岛屿数量](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/number-of-islands/number-of-islands.js)
* [494. 目标和](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/target-sum/target-sum.js)
* [64. 最小路径和](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/minimum-path-sum/minimum-path-sum.js)
* [337. 打家劫舍 III](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/house-robber-iii/house-robber-iii.js)
* [351. 安卓系统手势解锁](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/android-unlock-patterns/android-unlock-patterns.js)


栈

* [20. 有效的括号](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/valid-parentheses/valid-parentheses.js)
* [71. 简化路径](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/simplify-path/simplify-path.js)
* [394. 字符串解码](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/decode-string/decode-string.js)


链表

* [2. 两数相加](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/add-two-numbers/add-two-numbers.js)
* [21. 合并两个有序链表](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/merge-two-sorted-lists/merge-two-sorted-lists.js)
* [19. 删除链表的倒数第 N 个结点](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/remove-nth-node-from-end-of-list/remove-nth-node-from-end-of-list.js)
* [24. 两两交换链表中的节点](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/swap-nodes-in-pairs/swap-nodes-in-pairs.js)
* [83. 删除排序链表中的重复元素](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/remove-duplicates-from-sorted-list/remove-duplicates-from-sorted-list.js)
* [206. 反转链表](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/reverse-linked-list/reverse-linked-list.js)
* [剑指 Offer 22. 链表中倒数第k个节点](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof.js)


树

* [337. 打家劫舍 III](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/house-robber-iii/house-robber-iii.js)
* [104. 二叉树的最大深度](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/maximum-depth-of-binary-tree/maximum-depth-of-binary-tree.js)


双指针

* [392. 判断子序列](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/two-sum/two-sum.js)
* [3. 无重复字符的最长子串](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/longest-substring-without-repeating-characters/longest-substring-without-repeating-characters.js)
* [11. 盛最多水的容器](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/container-with-most-water/container-with-most-water.js)
* [15. 三数之和](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/3sum/3sum.js)
* [19. 删除链表的倒数第 N 个结点](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/remove-nth-node-from-end-of-list/remove-nth-node-from-end-of-list.js)
* [26. 删除有序数组中的重复项](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/remove-duplicates-from-sorted-array/remove-duplicates-from-sorted-array.js)
* [83. 删除排序链表中的重复元素](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/remove-duplicates-from-sorted-list/remove-duplicates-from-sorted-list.js)

递归

* [21. 合并两个有序链表](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/merge-two-sorted-lists/merge-two-sorted-lists.js)


回溯

* [46. 全排列](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/permutations/permutations.js)
* [93. 复原 IP 地址](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/restore-ip-addresses/restore-ip-addresses.js)


哈希字典

* [1. 两数之和](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/is-subsequence/is-subsequence.js)
* [83. 删除排序链表中的重复元素](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/remove-duplicates-from-sorted-list/remove-duplicates-from-sorted-list.js)

算法

* [146. LRU 缓存](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/lru-cache/lru-cache.js)



数组

* [31. 下一个排列](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/next-permutation/next-permutation.js)
* [33. 搜索旋转排序数组](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/search-in-rotated-sorted-array/search-in-rotated-sorted-array.js)
* [54. 螺旋矩阵](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/spiral-matrix/spiral-matrix.js)
* [56. 合并区间](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/merge-intervals/merge-intervals.js)
* [215. 数组中的第K个最大元素](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/kth-largest-element-in-an-array/kth-largest-element-in-an-array.js)
* [剑指 Offer 03. 数组中重复的数字](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/shu-zu-zhong-zhong-fu-de-shu-zi-lcof.js)
* [670. 最大交换](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/maximum-swap/maximum-swap.js)
* [179. 最大数](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/largest-number/largest-number.js)



规律

* [31. 下一个排列](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/next-permutation/next-permutation.js)
* [118. 杨辉三角](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/pascals-triangle/pascals-triangle.js)
* [菲波那切数列](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/fei-bo-na-qi-shu-lie-lcof/fei-bo-na-qi-shu-lie-lcof.js)

数学

* [1025. 除数博弈](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/divisor-game/divisor-game.js)
* [1227. 飞机座位分配概率](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/airplane-seat-assignment-probability/airplane-seat-assignment-probability.js)


其他
* [466. 统计重复个数](https://github.com/OBKoro1/web-basics/blob/main/src/leetCode/count-the-repetitions/count-the-repetitions.js)







### 场景设计

抛砖引玉，一家之言，希望能够触发一些思考。

* [虚拟列表原理](https://github.com/OBKoro1/web-basics/blob/main/src/sceneDesign/大数据列表.md)
* [前端接口防刷](https://github.com/OBKoro1/web-basics/blob/main/src/sceneDesign/前端接口防刷.md)
* [转盘组件设计](https://github.com/OBKoro1/web-basics/blob/main/src/sceneDesign/转盘组件设计.md)


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
3. 插件从2018年5月维护至今, 4K+ Star，关闭issue 500+
4. 目前拥有38.7w的用户，VSCode图表统计日安装用户200多-500多人，帮助用户养成良好的编码习惯，规范整个团队风格。

![头部注释](https://raw.githubusercontent.com/OBKoro1/koro1FileHeader/master/images/example.gif)

![函数注释](https://github.com/OBKoro1/koro1FileHeader/raw/master/images/function-params.gif?raw=true)

#### [stop-mess-around](https://github.com/OBKoro1/stop-mess-around)

减少摸鱼的时间和频率的Chrome插件：**在上班/学习期间很容易下意识的打开摸鱼网站，插件帮助我们减少摸鱼的时间和频率，提高我们上班和学习的效率，节省时间用于学习提升自己或者享受生活**。

![](https://github.com/OBKoro1/stop-mess-around/blob/dev/static/example/run-introduction.gif?raw=true)
#### [AutoCommit](https://github.com/OBKoro1/autoCommit)

这是一个用于Git自动commit的VSCode插件，它可以用来补充之前忘记提交commit，帮助你把首页的绿色格子填满。

![](https://github.com/OBKoro1/autoCommit/raw/master/images/autoCommit.gif?raw=true)
