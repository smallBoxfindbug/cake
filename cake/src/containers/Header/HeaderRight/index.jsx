import React, { Component } from 'react'
import axios from 'axios';
import {
  SearchOutlined,
  DownOutlined,
  ShoppingCartOutlined,
  UserOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css'

import { NavLink } from 'react-router-dom';
import headerRight from './index.module.css';

export default class HeaderRight extends Component {
  state = {
    username: '登录',
    login: false
  }
  componentDidMount() {
    const token = window.localStorage.getItem("token")
    axios({
      url: "http://124.71.230.178:8080/cake/admin/isLogin",
      method: "POST",
      params: {
        token
      },
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      if (response.data.code === 100) {
        this.setState({ username: response.data.data.user_name })
        window.localStorage.setItem("username",response.data.data.user_name)
        this.setState({ login: true })
      }
    })

  }
  render() {
    const { username, login } = this.state
    return (
      <div className={headerRight.headerRight}>
        <SearchOutlined 
        onClick={this.showSearch} 
        style={{ height: 70 + "px", 
        lineHeight: 70 + "px", fontSize: 25 + "px" }} />&nbsp;&nbsp;&nbsp;
        {
          login ? (<NavLink to="/shoppingCart">
            <ShoppingCartOutlined
              className={headerRight.mounEnter}
              style={{ height: 70 + "px", lineHeight: 70 + "px", fontSize: 25 + "px" }} />&nbsp;&nbsp;
          </NavLink>)
            : (<NavLink to="/login">
              <ShoppingCartOutlined
                className={headerRight.mounEnter}
                style={{ height: 70 + "px", lineHeight: 70 + "px", fontSize: 25 + "px" }} />&nbsp;&nbsp;
            </NavLink>)
        }
        {
          !login ? (
            <NavLink to="/login">
              <UserOutlined
                className={headerRight.mounEnter}
                style={{ marginLeft: 20 + "px", height: 70 + "px", lineHeight: 70 + "px", fontSize: 25 + "px" }} />
            </NavLink>
          )
            : (<div className={headerRight.item} onClick={this.showUl}>
              <span>{username}</span>
              &nbsp;
              <DownOutlined />
              <ul className={headerRight.ul}>
                <NavLink
                  className={headerRight.mounEnter}
                  to={{pathname : "/myinfor", state : { username }}}>
                  <li className={headerRight.li}>我的幸福</li>
                </NavLink>
                <li onClick={this.exit} className={headerRight.li}>退出登录</li>
              </ul>
            </div>)
        }
        <div>
        </div>
      </div>
    )
  }

  exit = () => {
    const token = window.localStorage.getItem("token")
    axios({
      url: "http://124.71.230.178:8080/cake/admin/delete",
      method: "POST",
      params: {
        token
      },
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      if (response.data) {
        this.setState({ username: "登录" })
        this.setState({ login: false })
        window.localStorage.clear()
        window.location.assign("/home")
      }
    })
  }

  showSearch = () => {
    const { block } = this.props
    this.props.showSearch(!block)
  }

}

