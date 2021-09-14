import axios from "axios"

import { UPDATAGOODSLIST } from '../constans'

export const getData = data => ({ type: UPDATAGOODSLIST, data })

export const getDataAsync = params => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'http://124.71.230.178:8080/cake/goods/list',
      params: params ,
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      dispatch(getData(response.data))
    })
  }
}