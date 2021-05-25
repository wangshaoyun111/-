// component/com01/com01.js
Component({
  options:{
    // 这个属性是用来修改组件样式隔离特性的
    // isolated 开启组件样式隔离，父子组件样式不受影响
    // apply-shared 父组件能影响子组件 子组件影响不到父组件
    // shared 父组件能影响子组件 子组件影响父组件
    // styleIsolation:"isolated"
    // styleIsolation:"apply-shared"
    styleIsolation:"shared"
  },
  /**
   * 组件的属性列表 接收父组件传递数据
   */
  properties: {
    // 接收父组件传递数据
    // 第一种
    // myid:String
    // 第二种 有默认值
    myid:{
      type:String,
      value:18
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    age:10,
    name:'马可波罗',
    myid:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    btnHandle(){
    
    },
    changeProps(){
      this.setData({
        myid:'666'
      })
    }
  }
})
