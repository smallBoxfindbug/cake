import axios from 'axios'
import React, { Component } from 'react'

import pageInfor from './index.module.css'

export default class PageInfor extends Component {

  render() {
    const { provins, citys, address, infor } = this.state
    return (
      <div className={pageInfor.infor}>
        <div className={pageInfor.inputBox}>
          <span>用户名</span>
          <input ref={c => this.user_nameDom = c} defaultValue={infor.user_name} type="text" />
        </div>
        <div className={pageInfor.inputBox}>
          <span>邮箱</span>
          <input ref={c => this.emailDom = c} defaultValue={infor.email} type="email" />
        </div>
        <div className={pageInfor.inputBox}>
          <span>省份</span>
          <select ref={c => this.provinSelect = c} onChange={this.changeProvins}>
            <option defaultChecked>{infor.provinal || "---请选择---"}</option>
            {
              provins.map(item => <option key={item.pid}>{item.Provincial}</option>)
            }
          </select>
        </div>
        <div className={pageInfor.inputBox}>
          <span>省份</span>
          <select ref={c => this.citySelect = c} onChange={this.changeCity}>
            <option defaultChecked>{infor.city || "---请选择---"}</option>
            {
              citys.map(item => <option key={item.cid}>{item.city}</option>)
            }
          </select>
        </div>
        <div className={pageInfor.inputBox}>
          <span>地址</span>
          <input defaultValue={address === "" ? infor.addr : address} disabled type="text" />
        </div>
        <button onClick={this.submit} className={pageInfor.btn}>提交修改</button>
      </div>
    )
  }
  state = { infor: {}, provins: [], citys: [], address: "" }
  componentDidMount() {
    axios({
      url: "http://124.71.230.178:8080/cake/provin",
      method: "GET",
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      this.setState({ provins: response.data })
    })
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
  changeProvins = () => {
    const value = this.provinSelect.value
    const { provins } = this.state
    const newProvin = provins.find(item => item.Provincial === value)
    axios({
      url: "http://124.71.230.178:8080/cake/provin/city",
      method: "GET",
      params: {
        pid: newProvin.pid
      },
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      this.setState({ citys: response.data })
    })
  }
  changeCity = () => {
    const address = this.provinSelect.value + this.citySelect.value
    this.setState({ address })
  }
  submit = () => {
    const { address, infor } = this.state
    const user_name = this.user_nameDom.value
    const email = this.emailDom.value
    const provinal = this.provinSelect.value
    const city = this.citySelect.value
    if (provinal === "---请选择---" || city === "---请选择---") {
      alert("请选择您所在的城市！")
      return
    }
    axios({
      url: "http://124.71.230.178:8080/cake/admin/updateInfo",
      method: "POST",
      params: {
        addr: address,
        user_name,
        email,
        provinal,
        city,
        id: infor.id
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
