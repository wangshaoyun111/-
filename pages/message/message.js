// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 发起get请求
  getHandle(){
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method:"GET",
      data:{
        id:2
      },
      success:({data:res})=>{
        console.log(res);
      }
    })
  },

  // 发起post请求
  postHandle(){
    wx.request({
      url: 'https://www.escook.cn/api/post',
      method:'POST',
      data:{
        id:2,
        name:'Tom'
      },
      success:({data:res})=>{
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getHandle()
    // this.postHandle()
    // console.log({}+{})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})