module.exports = Behavior({
  // 共享属性
  properties:{
    mynum:{
      type:Number,
      value:11
    }
  }, 
  // 共享数据
  data:{
    name:'Jerry',
    age:20
  },
  // 共享方法
  methods:{
    myHandle(){
      console.log('我是 behaviors 中共享方法');
    }
  }
})