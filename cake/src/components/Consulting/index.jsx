import React, { Component } from 'react'

import consulting from './index.module.css'
export default class Consulting extends Component {
  render() {
    return (
      <div className={consulting.box}>
        <img className={consulting.img} src="./images/comsult/ShopConsulting.png" alt="图片加载失败" />
      </div>
    )
  }
}
