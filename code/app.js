// app.js
// 导入api promise化的方法,将微信小程序的顶级对象wx，赋值给新对象
// 从而实现想重新的 promise 化
import { promisifyAll, promisify } from 'miniprogram-api-promise';

const wxp = wx.p = {}

promisifyAll(wx,wxp)

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
