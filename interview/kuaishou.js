/*
 * Author       : OBKoro1
 * Date         : 2021-10-15 14:56:02
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-10-22 15:37:16
 * FilePath     : /js-base/interview/kuaishou.js
 * description  : 快手一面
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */

// 给了差不多半个小时时间写
// 第二题没写好


// LRU算法

// LRU数组实现

// // 一般解法，维护一个数组，数组元素为key-value键值对对象，每次获取需要遍历数组
// // 工厂函数，具有两个属性 capacity 保存限量，cache 保存缓存
// let LRUCache = function(capacity){
//     this.capacity = capacity;
//     this.cache = [];
//  }

//  // 实现 get 方法
//  LRUCache.prototype.get = function (key) {
//    let index = this.cache.findIndex((item) => item.key === key);
//    if (index === -1) {
//      return -1;
//    }
//    // 删除此元素后插入到数组第一项
//    let value = this.cache[index].value;
//    this.cache.splice(index, 1);
//    this.cache.unshift({
//      key,
//      value,
//    });
//    return value;
//  };

//  // 实现 put 方法
//  LRUCache.prototype.put = function (key, value) {
//    let index = this.cache.findIndex((item) => item.key === key);
//    // 想要插入的数据已经存在了，那么直接提升它就可以
//    if (index > -1) {
//      this.cache.splice(index, 1);
//    } else if (this.cache.length >= this.capacity) {
//      // 若已经到达最大限制，先淘汰一个最久没有使用的
//      this.cache.pop();
//    }
//    this.cache.unshift({ key, value });
//  };


// LRU map实现


// // 上述代码来自 LRU 缓存机制-官方
// // 时间复杂度 O(1)，因为 Map 既能保持键值对，还能记住插入顺序。
// var LRUCache = function(capacity) {
//     this.cache = new Map();
//     this.capacity = capacity;
// };

// LRUCache.prototype.get = function(key) {
//     if (this.cache.has(key)) {
//         // 存在即更新
//         let temp = this.cache.get(key);
//         this.cache.delete(key);
//         this.cache.set(key, temp);
//         return temp;
//     }
//     return -1;
// };

// LRUCache.prototype.put = function(key, value) {
//     if (this.cache.has(key)) {
//         // 存在即更新（删除后加入）
//         this.cache.delete(key);
//     } else if (this.cache.size >= this.capacity) {
//         // 不存在即加入
//         // 缓存超过最大值，则移除最近没有使用的
//         // new Map().keys() 返回一个新的 Iterator 对象
//         this.cache.delete(this.cache.keys().next().value);
//     }
//     this.cache.set(key, value);
// };

// TODO: 这个感觉蛮麻烦的

/**
 * 缓存异步接口
 * - 第一次请求缓存接口的时候，和调用原异步接口效果一样
 * - 缓存接口根据入参缓存原异步接口返回值
 * - 有缓存值的时候，马上返回缓存值，并发起请求更新缓存值
 * - 对于同样的入参，缓存接口同一时刻，最多只会发起一个请求
 * @param fn 原异步接口
 * @returns 缓存接口
 */
function cacheApi(...args) {
    // 补充代码实现
    let map = {}
    let list = []
    let fn = args[0]
    return async function help(key) {
        // 同时只有一个接口，判断锁
        if (map[key] && map[key].lock === true) {
            // 接口已经有过值了 直接返回接口
            if (map[key].data) {
                return map[key].data
            } else {
                // 接口正在进行第一次请求
               return await map[key].promise
            }
        }
        // 初始化
        if (!map[key]) {
            map[key] = {}
            // 缓存同一个promise 同一个参数等待他完成
            map[key].promise = fn(key)
            map[key].lock = true
            map[key].data = null
        }

        // 返回缓存值
        if (map[key].data) {
            map[key].lock = true
            map[key].promise = fn(key)
            // 下次异步更改数据
            map[key].promise.then(res => {
                map[key].data = res
                map[key].lock = false
            })
            return map[key].data
        } else {
            // 第一次请求
            let res = await map[key].promise
            map[key].data = res
            map[key].lock = false
            return res
        }
    }
}

/**
 * mock api
 */
const mockApi = (() => {
    let id = 0;
    return async (req) => {
        await new Promise((r) => setTimeout(r, 1000));
        return {
            req,
            id: id++,
        };
    };
})();

/**
 * 缓存的接口
 */
const cachedApi = cacheApi(mockApi);

(async () => {
    console.log('111',
        await Promise.all([cachedApi("a"), cachedApi("b"), cachedApi("a")])
    );
    // 一秒钟后输出 [ { req: "a", id: 0 }, { req: "b", id: 1 }, { req: "a", id: 0 } ]

    console.log(
        await Promise.all([cachedApi("a"), cachedApi("b"), cachedApi("a")])
    );
    // 马上输出 [ { req: "a", id: 0 }, { req: "b", id: 1 }, { req: "a", id: 0 } ]

    await new Promise((r) => setTimeout(r, 1000));
    console.log(
        await Promise.all([cachedApi("a"), cachedApi("b"), cachedApi("a")])
    );
    // 马上输出 [ { req: "a", id: 2 }, { req: "b", id: 3 }, { req: "a", id: 2 } ]
})();