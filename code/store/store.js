// observable 用来创建store的实例对象
import {observable} from 'mobx-miniprogram'

// observable 创建 store 实例对象并导出
export const store = observable({
  numA:1,
  numB:2
})