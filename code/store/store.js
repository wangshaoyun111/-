// observable 用来创建store的实例对象
// action 方法主要用来对 store 中的数据进行修改
import {action, observable} from 'mobx-miniprogram'

// observable 创建 store 实例对象并导出
export const store = observable({
  // 创建两个全局共享数据
  numA: 1,
  numB: 2,

  // 计算属性的创建
  // 必须在计算属性前面加 get 关键字
  // 加上了 get 属性以后，代表只读属性的计算属性
  get sum () {
    return this.numA + this.numB
  },
  // 创建 修改numA的方法
  updataNumA: action(function(step) {
    // 修改numA
    // 对全局修改 不是 this.setData 而是直接 this
    this.numA = step
  })
})