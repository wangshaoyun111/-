// app.js
App({
  /**
  * 小程序初始化完成时，触发 onlaunch 全局只会触发一次
  * @param {*} options 
  */
 
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
  /**
   * 小程序启动， 或者后台进入前台显示，会触发 onShow
   */
  onShow:function(){},
  /**
   * 小程序从前台进入后台，会触发 onHide
   */
  onHide:function(){},
  globalData: {
    userInfo: null
  }
})
