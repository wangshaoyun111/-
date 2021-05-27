// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // promise的编译有问题，需要降低调试基础库版本才能使用
  async setRequest(){
    const res = await wx.p.request({
      url:'https://www.escook.cn/api/get',
      method:'GET',
      data:{
        name:'亚瑟'
      }
    })
    console.log(res);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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