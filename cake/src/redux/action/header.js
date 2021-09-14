import axios from 'axios'

import { getData } from './navList'

export const getSearchDataAsync = params => {
  return dispatch => {
    axios({
      method: 'GET',
      url: 'http://124.71.230.178:8080/cake/goods/fuzzy',
      params: {
        fuzz:params
      } ,
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      dispatch(getData(response.data))
    })
  }
}