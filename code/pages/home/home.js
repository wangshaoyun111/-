// 导入 createStoreBindings 将store 中数据映射到当前组件
import {createStoreBindings} from 'mobx-miniprogram-bindings'
// 导入创建的store仓库
import {store} from '../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 创建方法修改store仓库数据
  changeNumA(){
    this.updataNumA(3)
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
    // 调用 createStoreBindings 接收两个参数 this 代表需要绑定当前组件
    // 第二个参数 一个对象 用来配置和 store 仓库有关的属性
    this.storeBindings = createStoreBindings(this,{
      store, // 将那个仓库映射到组件
      fields:['numA','numB','sum'], // 需要将 store 中的哪些数据映射到当前组件
      actions:['updataNumA'] // 需要将store 中的那些action方法映射到当前组件
    })
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
    // 组件卸载时 销毁实例
    this.storeBindings.destroyStoreBindings()
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