import React, { Component } from 'react'
import axios from 'axios'

import qualification from './index.module.css'

export default class Qualification extends Component {
  render() {
    const { qualifications } = this.state
    return (
      <div className={qualification.qualification}>
        <div className={qualification.contentBox}>
          <div className={qualification.title}>
            <img src="./images/tit.png" alt="图片加载失败" />
            <p>各站点证件资料汇总表</p>
          </div>
          <ul className={qualification.titleUl}>
            <li className={qualification.titleList}>序号</li>
            <li className={qualification.titleList}>站点</li>
            <li className={qualification.titleList}>营业执照</li>
            <li className={qualification.titleList}>详细地址</li>
            <li className={qualification.titleList}>法人</li>
          </ul>
          <hr />
          <ul className={qualification.contentUl}>
            {
              qualifications.map(item => {
                return (
                  <li key={item.id} className={qualification.contentlist}>
                    <ul className={qualification.listUl}>
                      <li className={qualification.list}>{item.id}</li>
                      <li className={qualification.list}>{item.site}</li>
                      <li className={qualification.list}>{item.license}</li>
                      <li className={qualification.list}>{item.address}</li>
                      <li className={qualification.list}>{item.legal_person}</li>
                    </ul>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
  state = { qualifications: [] }
  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://124.71.230.178:8080/cake/qual',
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      this.setState({ qualifications: response.data })
    })
  }
}
