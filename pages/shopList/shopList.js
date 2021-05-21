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
    total: 0, // 数据总数
    isLoading:false // 节流阀
  },

  // 获取商品列表的方法
  getShopList(cb) {
    this.setData({
      isLoading:true
    })
    wx.showLoading({
      title: '数据加载中...',
    })
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
          shopList:[...this.data.shopList,...data.data],
          total:data.header['X-Total-Count']
        })
      },
      complete:()=>{
        // 隐藏loading，
        wx.hideLoading()
        // 重置loading
        this.setData({
          isLoading:false
        })
        cb&cb()
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
   * 页面相关事件处理函数--监听用户下拉动作 下拉刷新
   */
  onPullDownRefresh: function () {
    // 重置数据
    this.setData({
      page:1,
      pagesize:10,
      total:0
    })
    this.getShopList(()=>{
      // 停止用户下拉
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数 上拉加载更多
   */
  onReachBottom: function () {
    const {isLoading,page,pagesize,total} = this.data
    if (isLoading) return
    if(page * pagesize >= total) {
      wx.showToast({
        title: '数据加载完毕',
        icon: 'none'
      })
      return
    }
    this.setData({
      page:page+1,
    })
    this.getShopList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})