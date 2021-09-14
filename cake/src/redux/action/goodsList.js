import axios from 'axios';

import { GETPAGE } from '../constans'

export const getPage = data => ({ type: GETPAGE, data })

export const getPageAsync = params => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'http://124.71.230.178:8080/cake/goods/count',
      params: params,
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      if (response.data / 12 <= 1) {
        dispatch(getPage(1))
      }
      else {
        if (Number((response.data / 12 + "").split(".")[0]) === response.data / 12) {
          dispatch(getPage(Number((response.data / 12 + "").split(".")[0])))
          return
        }
        dispatch(getPage(Number((response.data / 12 + "").split(".")[0]) + 1))
      }
    })
  }
}