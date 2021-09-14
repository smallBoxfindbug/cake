import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginAsync, signAsync } from '../../redux/action/login'

import login from './index.module.css'
class Login extends Component {
  state = {
    toggle: true,
    error: ""
  }
  render() {
    const { toggle, error } = this.state
    return (
      <div className={login.login}>
        <div className={login.bg}>
          <div className={login.bg1}></div>
          <div className={login.bg2}></div>
          <div className={login.bg3}></div>
        </div>
        <div className={login.formBox}>
          {
            toggle ? (<div className={login.loginBox}>
              <h2 className={login.title}>登录</h2>
              <ul className={login.ul}>
                <li className={login.list}>
                  <label>账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号:</label>
                  <input ref={c => this.loginUserName = c} type="text" placeholder="请输入您的账号" /></li>
                <li className={login.list}>
                  <label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
                  <input ref={c => this.loginPassword = c} type="password" placeholder="请输入您的密码" /></li>
                <li className={login.list}>
                  <label>确认密码:</label>
                  <input ref={c => this.loginConfirmPassword = c} type="password" placeholder="请确认您的密码" /></li>
              </ul>
              <p>{error}</p>
              <button onClick={this.login} className={login.btn}>登录</button><br />
              <span onClick={this.toggle} className={login.toSign}>没有账号？去注册</span>
            </div>) :
              (<div className={login.loginBox}>
                <h2 className={login.title}>注册</h2>
                <ul className={login.ul}>
                  <li className={login.list}>
                    <label>账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号:</label>
                    <input ref={c => this.signUserName = c} type="text" placeholder="请输入您的账号" /></li>
                  <li className={login.list}>
                    <label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
                    <input ref={c => this.signPassword = c} type="password" placeholder="请输入您的密码" /></li>
                  <li className={login.list}>
                    <label>确认密码:</label>
                    <input ref={c => this.signConfirmPassword = c} type="password" placeholder="请确认您的密码" /></li>
                  <li className={login.list}>
                    <label>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱:</label>
                    <input ref={c => this.signEmail = c} type="email" placeholder="请输入您的邮箱" /></li>
                </ul>
                <p>{error}</p>
                <button onClick={this.sign} className={login.btn}>注册</button><br />
                <span onClick={this.toggle} className={login.toSign}>已有账号？去登录</span>
              </div>)
          }
        </div>
      </div>
    )
  }

  login = () => {
    let { error } = this.state
    const username = this.loginUserName.value
    const password = this.loginPassword.value
    const confirmPassword = this.loginConfirmPassword.value
    // 校验账号密码完整性
    //判断用户名是否合法
    //前后不允许有空格 可以中文、英文、空格、数字组成
    let BUName = RegExp(
      /^\S[a-zA-Z\s\u4e00-\u9fa5]+\S$/)
      .test(username);
    if (!BUName) {
      error = "请输入正确的用户名！"
      this.setState({ error })
      return;
    }
    //判断密码是否合法
    // 只能输入6-11个字母、数字、下划线 
    let BPwd = RegExp(
      /^(\w){6,11}$/)
      .test(password)
    if (!BPwd) {
      error = "请输入正确的密码！"
      this.setState({ error })
      return;
    }
    //判断密码不能是否空
    if (password === null || password === undefined || password === "") {
      error = "请输入密码！"
      this.setState({ error })
      return
    }
    //两次密码输入是否一致
    if (confirmPassword !== password) {
      error = "两次密码不一致"
      this.setState({ error })
      return;
    }
    error = ""
    this.setState({ error })
    this.props.loginAsync({ username, password })
  }

  sign = () => {
    let { error } = this.state
    const username = this.signUserName.value
    const password = this.signPassword.value
    const confirmPassword = this.signConfirmPassword.value
    const email = this.signEmail.value
    // 校验账号密码邮箱完整性
    //判断用户名是否合法
    //前后不允许有空格 可以中文、英文、空格、数字组成
    let BUName = RegExp(
      /^\S[a-zA-Z\s\u4e00-\u9fa5]+\S$/)
      .test(username);
    if (!BUName) {
      error = "请输入正确的用户名！"
      this.setState({ error })
      return;
    }

    //判断密码是否合法
    // 1.位数大于六
    // 2.必须包含小写字母
    // 3.必须包含大写字母
    // 4.必须包含数字
    let BPwd = RegExp(
      /^[A-Za-z0-9]{6,}$/.test(password) &&
      /[A-Z]+/.test(password) &&
      /[a-z]+/.test(password) &&
      /[0-9]+/.test(password))
    if (!BPwd) {
      error = "请输入正确的密码！"
      this.setState({ error })
      return;
    }
    //判断密码是否为空
    if (password === null || password === undefined || password === "") {
      error = "请输入密码！"
      this.setState({ error })
      return
    }
    //判断两次输入的密码是否一致
    if (confirmPassword !== password) {
      error = "两次密码不一致"
      this.setState({ error })
      return;
    }
    //判断邮箱是否合法
    let BEmail = RegExp(
      /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
      .test(email);
    if (!BEmail) {
      error = "请输入正确的邮箱！"
      this.setState({ error })
      return;
    }
    error = ""
    this.setState({ error })
    this.props.signAsync({ username, password, email }, () => {
      this.toggle()
    })

  }

  toggle = () => {
    let { toggle, error } = this.state
    error = ""
    toggle = !toggle
    this.setState({ toggle })
    this.setState({ error })
  }
}

export default connect(
  state => ({
    login: state.login,
    sign: state.sign
  }),
  {
    loginAsync,
    signAsync,
  }
)(Login)

