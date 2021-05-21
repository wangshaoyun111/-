// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:{}, // 传递过来参数
    shopList:[], // 商品列表数据
    page:1, // 请求页码
    pagesize:10, // 每次请求条数
    total: 0 // 数据总数
  },

  // 获取商品列表的方法
  getShopList() {
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method:'GET',
      data:{
        _page:this.data.page,
        _limit:this.data.pagesize
      },
      success:(data)=>{
        console.log(data);
        this.setData({
          shopList:data.data,
          total:data.header['X-Total-Count']
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      query:options, //  传递参数
    })
    wx.setNavigationBarTitle({
      title: this.data.query.title
    })

    // 调用获取数据方法
    this.getShopList()
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