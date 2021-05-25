// component/com02/com02.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mynum:{
      type:Number,
      value:10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    age:18,
    name:null
  },

  // 在小程序中想要监听数据变化，可以使用observers 节点
  observers: {
    // 对谁进行监听，谁就是键
    // 值是一个函数，接收一个形参作为参数，形参是更改之后最新的值
    age: function (value) {
      console.log(value);
    },
    mynum: function(newNum){
      console.log(newNum);
    },
    // observers 可以对多个数据同时进行监听
    'age,mynum':function(newAge,newNum){
      console.log(newAge,newNum);
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeData(){
      this.setData({
          age: 19,
          name:'ha',
          mynum:20
        })
    }
  }
})
