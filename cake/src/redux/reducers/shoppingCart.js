import {
  GETSHOPPING,
  SELECTITEM,
  SELECTALL,
} from '../constans'

const initState = [] //初始化状态
export default function shoppingCart(preState = initState, action) {
  //从action对象中获取：type、data
  const { type, data } = action
  //根据type决定如何加工数据
  switch (type) {
    case GETSHOPPING:
      return data
    case SELECTITEM:
      return preState.map(item => {
        if (item.goods_id === data) {
          item.select = !item.select
        }
        return item
      })
    case SELECTALL:
      return preState.map(item => {
        item.select = data
        return item
      })
    default:
      return preState
  }

}