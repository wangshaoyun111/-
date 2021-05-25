// components/com01/com01.js
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
    obj:{
      num:0,
      max:1
    },
    arr:[1,2,3,4]
  },

  observers:{
    age:function(newAge){
      console.log(newAge);
    },
    mynum:function(newNum){
      console.log(newNum);
    },
    'age,mynum':function(newAge,newNum){
      console.log(newAge,newNum);
    },
    // 'obj.num': function(newNum){
    //   console.log(newNum);
    // },
    // 'arr[1]':function(newArr){
    //   console.log(newArr);
    // },
    // 对 数组和对象 进行监听，对 对象进行监听通过obj.num方式进行监听
    // 对 数组进行监听通过索引方式进行监听
    'obj.num,arr[1]':function(newNum,newArr){
      console.log(newNum,newArr);
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    changeData(){
      // 如果需要对数组或者对象中某一项进行修改
      this.setData({
        'obj.num':10, // 对象修改通过点方式
        'arr[1]':20 // 数组是索引方式
      })
      // this.setData({
      //   age:19,
      //   mynum:20
      // })
    }
  }
})
