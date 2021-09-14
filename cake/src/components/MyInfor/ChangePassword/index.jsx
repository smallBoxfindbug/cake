import React, { Component } from 'react'
import axios from 'axios'

import changePassword from './index.module.css'
export default class ChangePassword extends Component {
  state = { err: "" }
  render() {
    return (
      <div className={changePassword.infor}>
        <div className={changePassword.inputBox}>
          <input ref={c => this.oldPwdDom = c} placeholder="请输入旧密码" type="text" />
        </div>
        <div className={changePassword.inputBox}>
          <input ref={c => this.newPwdDom = c} placeholder="请输入新密码" type="text" />
        </div>
        <div className={changePassword.inputBox}>
          <input ref={c => this.comPwdDom = c} placeholder="请确认新密码" type="text" />
        </div>
        <p className={changePassword.error}>{this.state.error}</p>
        <button onClick={this.submit} className={changePassword.btn}>提交修改</button>
      </div>
    )
  }
  submit = () => {
    let error = ""
    const username = window.localStorage.getItem("username")
    const password = window.localStorage.getItem("password")
    const oldpwd = this.oldPwdDom.value
    const newPwd = this.newPwdDom.value
    const comPwd = this.comPwdDom.value
    //判断密码是否合法
    //判断旧密码是否输入正确
    if (oldpwd !== password) {
      error = "您的旧密码输入错误"
      this.setState({ error })
      return
    }
    //判断新密码是否与旧密码相同
    if (newPwd === oldpwd) {
      error = "您输入的密码与旧密码一致"
      this.setState({ error })
      return
    }
    // 只能输入6-11个字母、数字、下划线
    let BPwd = RegExp(
      /^(\w){6,11}$/
    ).test(newPwd)
    if (!BPwd) {
      error = "请输入正确的密码！"
      this.setState({ error })
      return;
    }
    //判断密码不能是否空
    if (newPwd === null || newPwd === undefined || newPwd === "") {
      error = "请输入密码！"
      this.setState({ error })
      return
    }
    //两次密码输入是否一致
    if (comPwd !== newPwd) {
      error = "两次密码不一致"
      this.setState({ error })
      return;
    }
    this.setState({ error: "" })
    axios({
      url: "http://124.71.230.178:8080/cake/admin/resetPassword",
      method: "POST",
      params: {
        username,
        password: newPwd
      },
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      if (response.data === 1) {
        alert("修改成功")
      } else {
        alert("网络繁忙，请稍后重试！")
      }
    })
  }
}
