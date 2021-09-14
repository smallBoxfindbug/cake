import axios from "axios";
import { LOGIN } from "../constans";

export const login = data => ({ type: LOGIN, data })

export const loginAsync = params => {
  return dispacth => {
    axios({
      url: "http://124.71.230.178:8080/cake/admin/login",
      method: "POST",
      params: {
        username: params.username,
        password: params.password
      },
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      if (response.data.code === 100) {
        dispacth(login(response.data.data))
        alert("登录成功！")
        window.localStorage.setItem("token",response.data.data.tokenStr)
        window.localStorage.setItem("user_id",response.data.data.user_id)
        window.localStorage.setItem("password", params.password)
        window.location.assign("/home")
      } else {
        alert("登录失败！")
      }
    })
  }
}

export const signAsync = (params,callback) => {
  return dispacth => {
    axios({
      url: "http://124.71.230.178:8080/cake/admin/regist",
      method: "POST",
      params: {
        username: params.username,
        password: params.password,
        email: params.email
      },
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      if (response.data === 1) {
        alert("注册成功")
        callback()
      } else {
        alert("注册失败")
      }
    })
  }
}