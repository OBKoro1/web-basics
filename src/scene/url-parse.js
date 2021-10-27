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
    let protocolArr = url.split('://')
    let protocol = protocolArr[0]
    let hostnameArr = protocolArr[1].split('/')
    let hoshostname = hostnameArr[0]
    let pathArr = hostnameArr[1].split('?')
    let path = pathArr[0]
    let queryArr = pathArr[1].split('&')
    let query = {}
    queryArr.forEach(item => {
        // 未指定值得 key 约定为 true
        if (item.indexOf('=') === -1) {
            query[item] = true
            return
        }
        let itemArr = item.split('=')
        let key = itemArr[0]
        // 解析中文参数
        let value = decodeURI(itemArr[1])
        // 重复出现的 key 要组装成数组
        if (query[key] !== undefined) {
            if (!Array.isArray(query[key])) {

                query[key] = [query[key]]
            }
            query[key].push(value)
        } else {
            query[key] = value
        }

    })
    return {
        protocol,
        hoshostname,
        path,
        query,
    }
}