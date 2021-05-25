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
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    changeData(){
      this.setData({
        age:19,
        mynum:20
      })
    }
  }
})
