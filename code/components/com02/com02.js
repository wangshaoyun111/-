import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Component({
  // 将 storeBindingsBehavior 挂在到 behaviors 中
  // 将store中成员映射为组件共享数据
  behaviors:[storeBindingsBehavior],
  // storeBindings 用来配置 store 成员
  storeBindings:{
    store,
    fields:{
      numA:()=>store.numA, // 第一个方法导入成员
      numB:(store) => store.numB, // 第二个方法导入成员
      sum:'sum' // 第三个方法导入成员
    },
    // 导入store中的方法
    // 键自定义 值store中方法
    actions:{
      updataNumA:'updataNumA'
    }
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

  },

  
  /**
   * 组件的方法列表
   */
  methods: {
    changeNumA(){
      console.log(123);
      this.updataNumA(5)
    },
  }
})
