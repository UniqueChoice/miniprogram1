/**
 * @author King
 * @date 2021-11-08 13:44
 * 通用工具类，提供如下公用变量及函数
 * @Variable
 *
 * @Function
 *      formatTime(time, option)：时间格式化
 */

const formatTime = (time, option="") => {
  const date = new Date(time)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const week = date.getDay()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  switch (option) {
    case "YY-MM-DD":
      return [year, month, day].map(formatNumber).join('-')
    case "YY-MM":
      return [year, month].map(formatNumber).join('-')
    case 'YY':
      return [year].map(formatNumber).toString()
    case "MM":
      return [year, month, day].map(formatNumber).join('-')
    case "DD":
      return [year, month].map(formatNumber).join('-')
    case 'YY-MM-DD Week':
      return [year, month, day].map(formatNumber).join('-') + ' ' + getWeek(week)
    case "Week":
      return getWeek(week)
    case "hh:mm:ss":
      return [hour, minute, second].map(formatNumber).join(':')
    case 'hh:mm':
      return [hour, minute].map(formatNumber).join(':')
    case "mm:ss":
      return [minute, second].map(formatNumber).join(':')
    case "mm":
      return [minute].map(formatNumber).join('')
    case "ss":
      return [second].map(formatNumber).join('')
    case "":
    default:
      return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  }
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getWeek = n => {
  switch (n) {
    case 1:
      return '星期一'
    case 2:
      return '星期二'
    case 3:
      return '星期三'
    case 4:
      return '星期四'
    case 5:
      return '星期五'
    case 6:
      return '星期六'
    case 7:
      return '星期日'
  }
}

module.exports = {
  formatTime: formatTime
}