import axios from "axios"

import {
  GETSHOPPING,
  SELECTITEM,
  SELECTALL,
} from '../constans'

export const getShopping = data => ({ type: GETSHOPPING, data })
export const selectItem = data => ({ type: SELECTITEM, data })
export const selectALL = data => ({ type: SELECTALL, data })

export const getShoppingAsync = params => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'http://124.71.230.178:8080/cake/goods/car',
      params: {
        user_id: params
      },
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      const data = response.data.map(item => {
        item.select = false
        return item
      })
      dispatch(getShopping(data))
    })
  }
}

export const increamentAsync = params => {
  return (dispatch) => {
    axios({
      method: 'POST',
      url: 'http://124.71.230.178:8080/cake/goods/car/update/count',
      params: {
        count: params.count + 1,
        goods_id: params.goods_id,
        user_id: params.user_id
      },
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      if (response.data === 1) dispatch(getShoppingAsync(params.user_id))
      else alert("网络繁忙，请稍后访问！")
    })
  }
}
export const decreamentAsync = params => {
  return (dispatch) => {
    axios({
      method: 'POST',
      url: 'http://124.71.230.178:8080/cake/goods/car/update/count',
      params: {
        count: params.count - 1,
        goods_id: params.goods_id,
        user_id: params.user_id
      },
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      if (response.data === 1) dispatch(getShoppingAsync(params.user_id))
      else alert("网络繁忙，请稍后访问！")
    })
  }
}
export const delectGoodsAsync = params => {
  return dispatch => {
    axios({
      method: 'POST',
      url: 'http://124.71.230.178:8080/cake/goods/car/delete',
      params: {
        goods_id: params.goods_id,
        user_id: params.user_id
      },
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      if (response.data === 1) dispatch(getShoppingAsync(params.user_id))
      else alert("网络繁忙，请稍后访问！")
    })
  }
}