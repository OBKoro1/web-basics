// 小红书一面
// 编码：
// 解析url为：
// {
//     "protocol": "http",
//         "hoshostname": "www.domain.com",
//             "path": "order",
//                 "query": {
//         "user": "anonymous",
//             "id": "456",
//                 "city": "北京",
//                     "enabled": true
//     }
// }

// 需要解析的链接：
let url = 'http://www.domain.com/order?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
parse(url)

function parse(url) {
}


// 二面
// 实现promise.allsettled的polify
// 解释：数组内都是异步任务，返回所有异步任务的结果 无论是否成功


Promise.allSettled = function(promises) {
}














// 慎看答案




















// function parse(url) {
//     let protocolArr = url.split('://')
//     let protocol = protocolArr[0]
//     let hostnameArr = protocolArr[1].split('/')
//     let hoshostname = hostnameArr[0]
//     let pathArr = hostnameArr[1].split('?')
//     let path = pathArr[0]
//     let queryArr = pathArr[1].split('&')
//     let query = {}
//     queryArr.forEach(item => {
//         // 未指定值得 key 约定为 true
//         if (item.indexOf('=') === -1) {
//             query[item] = true
//             return
//         }
//         let itemArr = item.split('=')
//         let key = itemArr[0]
//         // 解析中文参数
//         let value = decodeURI(itemArr[1])
//         // 重复出现的 key 要组装成数组
//         if (query[key] !== undefined) {
//             if (!Array.isArray(query[key])) {

//                 query[key] = [query[key]]
//             }
//             query[key].push(value)
//         } else {
//             query[key] = value
//         }

//     })
//     return {
//         protocol,
//         hoshostname,
//         path,
//         query,
//     }
// }


// 小红书二面

// 编译数组，执行结果的方式


// Promise.allSettled = function(promises) {
//     return new Promise((resolve, reject) => {
//         let total = 0
//         let resArr = []
//         // 循环promise
//         promises.forEach((item, index) => {
//             // 执行promise
//             Promise.resolve(item).then(res => {
//                 resArr[index] = {
//                     status: 'fulfilled',
//                     value: res
//                 }
//                 // 记录完成数量 数量达到则返回结果
//                 total++
//                 if (total === promises.length) {
//                     resolve(resArr)
//                 }
//             }).catch(err => {
//                 resArr[index] = {
//                     status: 'rejected',
//                     value: err
//                 }
//                 total++
//                 if (total === promises.length) {
//                     resolve(resArr)
//                 }
//             })
//         });
//     })
// }


// // 重写数组
// Promise.allSettled = function(promises) {
//     // 重写每个promise 将结果返回到数组元素中 使其都能成功
//     let mappedPromises = promises.map((p) => {
//         return p
//             .then((value) => {
//                 // 直接返回结果
//                 return {
//                     status: 'fulfilled',
//                     value,
//                 }
//             })
//             .catch((reason) => {
//                 // 直接返回结果
//                 return {
//                     status: 'rejected',
//                     value: reason,
//                 }
//             })
//     });
//     return Promise.all(mappedPromises)
// };