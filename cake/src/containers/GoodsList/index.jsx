import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import HotGoods from '../../containers/HotGoods'
import { getDataAsync } from '../../redux/action/navList'
import { getSearchDataAsync } from '../../redux/action/header'
import { getPageAsync } from '../../redux/action/goodsList'
import listStyle from './index.module.css'

class GoodsList extends Component {
  state = { page: 0, count: 0, newPage: 1 }
  componentDidMount() {
    const { b_id, fuzz, s_id } = this.props.location.state
    if (b_id < 4) {
      this.props.getDataAsync({ index: 0, limit: 12, b_id, s_id })
      this.props.getPageAsync({ b_id, s_id })
    } else {
      this.props.getSearchDataAsync(fuzz)
      this.setState({ page: 1 })
    }

  }
  prePage = (newPage) => {
    return () => {
      const { b_id, s_id } = this.props.location.state
      if (newPage - 2 < 0) return
      this.props.getDataAsync({ index: 12 * (newPage - 2), limit: 12, b_id, s_id })
      this.setState({ newPage: newPage - 1 })
    }
  }

  switchPage = (index, newPage) => {
    return () => {
      const { b_id, s_id } = this.props.location.state
      if (index + 1 === newPage) return
      this.props.getDataAsync({ index: 12 * index, limit: 12, b_id, s_id })
      this.setState({ newPage: index + 1 })
    }
  }
  nextPage = (newPage) => {
    return () => {
      const { page } = this.props
      const { b_id, s_id } = this.props.location.state
      if (newPage + 1 > page) return
      this.props.getDataAsync({ index: 12 * newPage , limit: 12, b_id, s_id })
      this.setState({ newPage: newPage + 1 })
    }
  }
  render() {
    const { b_id } = this.props.location.state
    const { goodsList, page } = this.props
    const { newPage } = this.state
    let pageArr = []
    if (b_id < 4) {
      for (let i = 0; i < page; i++) {
        pageArr = [...pageArr, i]
      }
    } else {
      pageArr = [0]
    }
    return (
      <div className={listStyle.goodsList}>
        <ul className={listStyle.ul} >
          {
            goodsList.map(goods => {
              return (
                <li key={goods.id} className={listStyle.list}>
                  <NavLink to={{ pathname: "/goodsdetail", state: { id: goods.id } }}>
                    <div className={listStyle.img_box}>
                      <img className={listStyle.img} src={goods.index_img} alt="图片加载失败..." />
                      <div className={listStyle.img_title}>{goods.introduc}</div>
                    </div>
                  </NavLink>
                  <div className={listStyle.title_box}>
                    <p className={listStyle.title}>{goods.good_name}</p>
                    <p className={listStyle.price}>￥{goods.price}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <ul className={listStyle.pagination}>
          <li className={listStyle.paginationList} onClick={this.prePage(newPage)}>
            <LeftOutlined id={listStyle.btn} />
          </li>
          {
            pageArr.map((item, index) => <li onClick={this.switchPage(index, newPage)} id={`${item + 1 === newPage ? listStyle.active : ""}`} key={item} className={listStyle.paginationList}>{item + 1}</li>)
          }
          <li className={listStyle.paginationList} onClick={this.nextPage(newPage)}>
            <RightOutlined id={listStyle.btn} />
          </li>
        </ul>
        <HotGoods />
      </div>
    )
  }
}

export default connect(
  state => ({
    goodsList: state.navList,
    page: state.page
  }),
  {
    getDataAsync,
    getSearchDataAsync,
    getPageAsync
  }
)(GoodsList)

