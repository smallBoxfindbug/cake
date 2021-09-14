import axios from 'axios'
import React, { Component } from 'react'
import { Route, NavLink, Redirect, Switch } from 'react-router-dom'

import PageInfor from './PageInfor'
import ChangePassword from './ChangePassword'
import myInfor from './index.module.css'
export default class MyInfor extends Component {

  render() {
    const { infor } = this.state
    return (
      <div className={myInfor.infor}>
        <ul className={myInfor.titleUl}>
          <li className={myInfor.titleList}>{infor.user_name}</li>
          <li className={myInfor.titleList}>
            <NavLink activeClassName={myInfor.active} className={myInfor.link} to="/myinfor/infor" >
              <span>个人信息</span>
            </NavLink>
          </li>
          <li className={myInfor.titleList}>
            <NavLink activeClassName={myInfor.active} className={myInfor.link}  to="/myinfor/changePassword" >
              <span>修改密码</span>
            </NavLink>
          </li>
          <li onClick={this.customer} className={myInfor.titleList}>联系客服</li>
        </ul>
        <Switch>
          <Route path="/myinfor/infor" component={PageInfor}></Route>
          <Route path="/myinfor/changePassword" component={ChangePassword}></Route>
          <Redirect to="/myinfor/infor"></Redirect>
        </Switch>
      </div>
    )
  }
  state = { infor: {} }
  componentDidMount() {
    const username = window.localStorage.getItem("username")
    axios({
      url: "http://124.71.230.178:8080/cake/admin/info",
      method: "GET",
      params: {
        username
      },
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      this.setState({ infor: response.data })
    })
  }
  customer = () => {
    alert("请联系:\nqq:2690280865\n微信:hyq2690280865\n电话:15329358529")
  }
}
