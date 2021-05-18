// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[], // 轮播图数据
    cateList:[] // 分类数据
  },

  // 获取轮播图数据
  getSwiperList(){
    wx.request({
      url: 'https://www.escook.cn/slides',
      success:({data:res})=>{
        console.log(res);
        this.setData({
          swiperList:res
        })
      }
    })
  },

  // 获取九宫格数据
  getGirdList(){
    wx.request({
      url: 'https://www.escook.cn/categories',
      success:({data:res})=>{
        console.log(res);
        this.setData({
          cateList:res
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getGirdList()
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
    // setTimeout(()=>{
    //   wx.stopPullDownRefresh()
    // },2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(123);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})