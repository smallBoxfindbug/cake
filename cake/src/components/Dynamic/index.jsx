import axios from 'axios'
import React, { Component } from 'react'

import dynamic from './index.module.css'
export default class Dynamic extends Component {
  render() {
    const { dynamics } = this.state
    console.log(dynamics);
    return (
      <div className={dynamic.dynamic}>
        <div className={dynamic.contentBox}>
          <div className={dynamic.title}>
            <img src="./images/tit.png" alt="图片加载失败" />
            <p>品牌动态</p>
          </div>
          <hr />
          <ul className={dynamic.ul}>
            {
              dynamics.map(item => {
                return (
                  <li key={item.id} className={dynamic.list}>
                    <div className={dynamic.left}>
                      <span className={dynamic.line}></span>
                      <div className={dynamic.titleBox}>
                        <p>{item.d_time} <br /> {item.d_year}</p>
                      </div>
                    </div>
                    <div className={dynamic.right}>
                      <p className={dynamic.rightTitle}>{item.d_title}</p>
                      <p className={dynamic.rightContent}>{item.d_content}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
  state = { dynamics: [] }
  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://124.71.230.178:8080/cake/dynamics',
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      this.setState({ dynamics: response.data })
    })
  }
}
