/*
 * Author       : OBKoro1
 * Date         : 2021-09-22 13:41:03
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-09-22 13:41:07
 * FilePath     : /js-base/src/js/array-splice.js
 * description  : 实现数组的splice
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */

Array.prototype._splice = function (start, deleteCount, ...addList) {
  if (start < 0) {
    if (Math.abs(start) > this.length) {
      start = 0
    } else {
      start += this.length
    }
  }

  if (typeof deleteCount === 'undefined') {
    deleteCount = this.length - start
  }

  const removeList = this.slice(start, start + deleteCount)

  const right = this.slice(start + deleteCount)

  let addIndex = start
  addList.concat(right).forEach((item) => {
    this[addIndex] = item
    addIndex++
  })
  this.length = addIndex

  return removeList
}
