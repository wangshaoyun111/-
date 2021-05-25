// components/changebgc/changebgc.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    rgb:{
      r:0,
      g:0,
      b:0
    },
    fullColor:'0,0,0'
  },

  observers:{
    // 'rgb.r,rgb.g,rgb.b':function(newR,newG,newB){
    //   this.setData({
    //     fullColor:`${newR},${newG},${newB}`
    //   })
    // }
    // 如果需要对对象中每一项进行监听,可以使用通配符 ** 监听所有对象的字段
    // 监听器函数参数为 对象 ,对象有更新以后所有的值
    'rgb.**':function(obj){
        this.setData({
          fullColor:`${obj.r},${obj.g},${obj.b}`
        })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR () {
      this.setData({
        'rgb.r': this.data.rgb.r >= 255 ? '255' : this.data.rgb.r + 5
      })
    },
    changeG () {
      this.setData({
        'rgb.g': this.data.rgb.g >= 255 ? '255' : this.data.rgb.g + 5
      })
    },
    changeB () {
      this.setData({
        'rgb.b': this.data.rgb.b >= 255 ? '255' : this.data.rgb.b + 5
      })
    }
  }
})
