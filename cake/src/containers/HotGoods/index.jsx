import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getHotAsync } from '../../redux/action/hotGoods'

import hotStyle from './index.module.css'

class HotGoods extends Component {
  componentDidMount() {
    this.props.getHotAsync(4)
  }
  render() {
    const { hotGoods } = this.props.hotGoodsList
    return (
      <div className={hotStyle.hotGoods}>
        <p className={hotStyle.bigTitle}>热门推荐</p>
        <hr />
        <ul className={hotStyle.ul} >
          {
            hotGoods.map(hotList => {
              return (
                <li key={hotList.id} className={hotStyle.list}>
                  <NavLink to={{ pathname: "/goodsdetail", state: { id: hotList.id } }}>
                    <div className={hotStyle.img_box}>
                      <img className={hotStyle.img} src={hotList.index_img} alt="图片加载失败..." />
                      <div className={hotStyle.img_title}>{hotList.introduc}</div>
                    </div>
                  </NavLink>
                  <div className={hotStyle.title_box}>
                    <p className={hotStyle.title}>{hotList.good_name}</p>
                    <p className={hotStyle.price}>￥{hotList.price}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    hotGoodsList: state,
  }),
  { getHotAsync }
)(HotGoods)
