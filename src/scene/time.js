/*
 * Author       : OBKoro1
 * Date         : 2021-09-13 16:14:51
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-09-13 16:15:00
 * FilePath     : /js-base/src/scene/time.js
 * description  : JS转换时间戳为刚刚、几分钟前、几小时前、几天前、几周前、几个月前等格式
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */

// 思路：获取时间戳的差
// 时间差除以时间格式需要的倍数 如果超过1 则表示时间差在这个等级中
function getDateDiff(dateTimeStamp) {
    var now = Date.now();
    var diffValue = now - dateTimeStamp;
    if (diffValue < 0) {
        console.error("结束日期不能小于开始日期！")
        return
    }
    // 时间格式转换需要的数字倍数
    var minute = 1000 * 60 // 
    var hour = minute * 60// 
    var day = hour * 24 // 几天前
    var month = day * 30 // 月
    // 时间差 除以时间格式需要的倍数
    var monthC = diffValue / month
    var weekC = diffValue / (7 * day)
    var dayC = diffValue / day
    var hourC = diffValue / hour
    var minC = diffValue / minute
    // 如果超过1 则表示时间差在这个等级中
    if (monthC >= 1) {
        result = "发表于" + parseInt(monthC) + "个月前"
    } else if (weekC >= 1) {
        result = "发表于" + parseInt(weekC) + "周前"
    } else if (dayC >= 1) {
        result = "发表于" + parseInt(dayC) + "天前"
    } else if (hourC >= 1) {
        result = "发表于" + parseInt(hourC) + "个小时前"
    } else if (minC >= 1) {
        result = "发表于" + parseInt(minC) + "分钟前"
    } else
        result = "刚刚发表"
    return result;
}

// 测试代码
console.log(getDateDiff(Date.now() - 10)) // 刚刚
console.log(getDateDiff(Date.now() - 1000 * 60 * 5)) // 五分钟前
console.log(getDateDiff(Date.now() - 1000 * 60 * 60 * 2)) // 2小时前
console.log(getDateDiff(Date.now() - 1000 * 60 * 60 * 24 * 3)) // 3天前
console.log(getDateDiff(Date.now() - 1000 * 60 * 60 * 24 * 30 * 4)) // 四个月前