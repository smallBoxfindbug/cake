import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { PhoneOutlined } from '@ant-design/icons'
import footer from './index.module.css'

export default class Footer extends Component {
  render() {
    return (
      <div className={footer.footer}>
        <div className={footer.left}>
          <ul className={footer.ul}>
            <li className={footer.list}>
              <NavLink
                to="/dynamic"
                className={footer.linktitle}
                activeClassName={footer.active}
              >品牌动态</NavLink></li>
            <li className={footer.list}>
              <NavLink
                to="/qualification"
                className={footer.linktitle}
                activeClassName={footer.active}
              >生产经营资质</NavLink></li>
            <li className={footer.list}>企业合作</li>
            <li className={footer.list}>发票申请</li>
            <li className={footer.list}>平台规则</li>
            <li className={footer.list}>帮助服务</li>
            <li className={footer.list}>
              联系我们</li>
          </ul>
          <div className={footer.left_bottom}>
            <p className={footer.left_p}>深圳市幸福商城科技股份有限公司</p>
            <p className={footer.left_p}>粤ICP备16039394号-6</p>
            <p className={footer.left_p}>京公网安备44030702002399</p>
            <p className={footer.left_p}>公司地址：深圳市龙岗区坂田街道布龙339鸿生源工业园A座5楼</p>
          </div>
        </div>
        <div className={footer.right}>
          <div className={footer.right_top}>
            <p className={footer.right_p}><PhoneOutlined />400-999-6666</p>
            <p className={footer.right_p}>WEIBO</p>
            <p className={footer.right_p}>WECHAT</p>
            <p className={footer.right_p}>京东商城</p>
          </div>
          <div className={footer.right_bottom}>
            <img className={footer.img} src="./images/icon3.png" alt="可信网站" />
            <img className={footer.img} src="./images/brand_bottom_large.jpg" alt="品牌官网" />
          </div>
        </div>
      </div>
    )
  }
}
