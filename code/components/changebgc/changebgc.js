// components/changebgc/changebgc.js
Component({
  options:{
    pureDataPattern:/^_/
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    age:11,
    _rgb:{
      r:0,
      g:0,
      b:0
    },
    fullColor:'0,0,0'
  },
  // 官方推荐在lifetimes中使用钩子函数
  lifetimes:{
    // setData 不生效
    created(){},
    attached(){
      this.setData({
        // age:111
      })
    },
  },
  // 组件所在页面，父组件的状态
  pageLifetimes:{
    // 父组件打开成功
    show(){},
    // 父组件隐藏
    hide(){}
  },

  observers:{
    // 'rgb.r,rgb.g,rgb.b':function(newR,newG,newB){
    //   this.setData({
    //     fullColor:`${newR},${newG},${newB}`
    //   })
    // }
    // 如果需要对对象中每一项进行监听,可以使用通配符 ** 监听所有对象的字段
    // 监听器函数参数为 对象 ,对象有更新以后所有的值
    '_rgb.**':function(obj){
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
        '_rgb.r': this.data._rgb.r >= 255 ? '255' : this.data._rgb.r + 5
      })
    },
    changeG () {
      this.setData({
        '_rgb.g': this.data._rgb.g >= 255 ? '255' : this.data._rgb.g + 5
      })
    },
    changeB () {
      this.setData({
        '_rgb.b': this.data._rgb.b >= 255 ? '255' : this.data._rgb.b + 5
      })
    }
  }
})
