// index.js
// 获取应用实例
const app = getApp()
import util, { formatTime } from '../../utils/util.js'

Page({
  data: {
    date: formatTime(new Date()),
    moneyNum: 0,
    suffixStr: 'CNY',
    message: '',
    numAnimation: {}
  },
  // 事件处理函数
  onLoad: function() {
    //  设置定时任务
    setInterval(() => {
        this.data.moneyNum ++
        this.setData({
          moneyNum: this.data.moneyNum,
          date: formatTime(new Date()),
          numAnimation: this.generateAnimation()
        })
    }, 1000)
  },
  generateAnimation(){
    const animation =  wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-in-out'
    })
    animation
      .opacity(0).step()
      .opacity(1).step()
    return animation.export()
  }
})