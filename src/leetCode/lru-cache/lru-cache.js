/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map() // map默认记住插入的顺序
  this.max = capacity // 最大数量
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const value = this.map.get(key) || -1
  if (value !== -1) {
    this.map.delete(key) // 删除更新插入顺序
    this.map.set(key, value)
  }
  return value
}
/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key) // 删除更新插入顺序
  }
  this.map.set(key, value)
  if (this.max < this.map.size) {
    const mapKeys = this.map.keys() // 获取遍历值
    const oldKey = mapKeys.next().value // map插入顺序 默认第一个即最早插入的值
    this.map.delete(oldKey) // 删除最早的值
  }
}
