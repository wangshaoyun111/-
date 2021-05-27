// pages/transfer/transfer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getSonComponent(){
    // 在父组件中可以使用 this.selectComponent 获取子组件实例
    // 在获取得实例中包含子组件得所有实例和方法
    // 在父组件中可以直接调用
    const sonComponent = this.selectComponent('.sonclass')
    console.log(sonComponent);
    console.log(sonComponent.data.myid);
    sonComponent.changeMyid()
  },
  // 1.在父组件声明事件处理程序，需要传递给子组件，接收子组件传递数据
  getSonData(e){
    // 4.在父组件得事件处理程序中使用 e.detail获取子组件传递得数据
    console.log(e.detail);
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