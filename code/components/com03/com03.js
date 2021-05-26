// components/com03/com03.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myid:{
      type: Number,
      value:18
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    name:'Tom'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handle(){
      // 3.通过triggerEvent 方法接收父组件得自定义事件，第二个参数为传递给父组件的数据
      this.triggerEvent('myevent',this.data.name)
    },
    changeMyid(){
      this.setData({
        myid:20
      })
    }
  }
})
