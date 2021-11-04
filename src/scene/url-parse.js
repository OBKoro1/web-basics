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
const url = 'http://www.domain.com/order?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'
parse(url)

function parse(url) {
  const protocolArr = url.split('://')
  const protocol = protocolArr[0]
  const hostnameArr = protocolArr[1].split('/')
  const hoshostname = hostnameArr[0]
  const pathArr = hostnameArr[1].split('?')
  const path = pathArr[0]
  const queryArr = pathArr[1].split('&')
  const query = {}
  queryArr.forEach((item) => {
    // 未指定值得 key 约定为 true
    if (item.indexOf('=') === -1) {
      query[item] = true
      return
    }
    const itemArr = item.split('=')
    const key = itemArr[0]
    // 解析中文参数
    const value = decodeURI(itemArr[1])
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
