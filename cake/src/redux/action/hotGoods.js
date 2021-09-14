
import axios from "axios";
import { GETHOT } from "../constans";

export const getHot = data => ({ type: GETHOT, data })

export const getHotAsync = params => {
  return dispatch => axios({
    method: 'GET',
    url: 'http://124.71.230.178:8080/cake/goods/recom',
    params: {
      i: params
    },
    header: {
      'Content-Type': 'Access-Control-Allow-Origin'
    },
    characterEncoding: "utf-8",
  }).then(response => {
    dispatch(getHot(response.data))
  })

}