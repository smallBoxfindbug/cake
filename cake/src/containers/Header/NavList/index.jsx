import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPageAsync } from '../../../redux/action/goodsList'
import { getDataAsync } from '../../../redux/action/navList'
import navList from './index.module.css'
class NavList extends Component {
  getDataAsync = (params) => {
    return () => {
      this.props.getDataAsync(params)
      this.props.getPageAsync({ b_id: params.b_id, s_id: params.s_id })
    }
  }

  render() {
    const { isShow } = this.props
    return (
      <>
        <ul className={navList.ul}>
          <li className={navList.list}>
            <NavLink
              className={navList.mousEnter}
              activeClassName={navList.active}
              to="/home">首页</NavLink>
          </li>
          <li className={navList.list}>
            <ul className={navList.categories}>
              <li className={navList.categories_list} id={`${isShow ? navList.isShow : ""}`}>
                <NavLink
                  className={navList.mousEnter}
                  activeClassName={navList.active}
                  onClick={this.getDataAsync({ index: 0, limit: 12, b_id: 1, s_id: 0 })}
                  to={{ pathname: "/goodslist", state: { b_id: 1, s_id: 0 } }}>
                  <span>蛋糕</span></NavLink>
                <ul className={navList.twoUl}>
                  <NavLink
                    activeClassName={navList.active}
                    className={navList.twoList}
                    onClick={this.getDataAsync({ index: 0, limit: 12, b_id: 0, s_id: 1 })}
                    to={{ pathname: "/goodslist", state: { b_id: 0, s_id: 1 } }}>
                    <li className={navList.twoList}>
                      <img className={navList.img} src="./images/type/6.png" alt="鲜果蛋糕" />
                      <p className={navList.p}>鲜果蛋糕</p>
                    </li>
                  </NavLink>
                  <NavLink activeClassName={navList.active}
                    className={navList.twoList}
                    onClick={this.getDataAsync({ index: 0, limit: 12, b_id: 0, s_id: 2 })}
                    to={{ pathname: "/goodslist", state: { b_id: 0, s_id: 2 } }}>
                    <li className={navList.twoList}>
                      <img className={navList.img} src="./images/type/3.png" alt="芝士慕思蛋糕" />
                      <p className={navList.p}>芝士慕思蛋糕</p>
                    </li>
                  </NavLink>
                  <NavLink
                    activeClassName={navList.active}
                    className={navList.twoList}
                    onClick={this.getDataAsync({ index: 0, limit: 12, b_id: 0, s_id: 3 })}
                    to={{ pathname: "/goodslist", state: { b_id: 0, s_id: 3 } }} >
                    <li className={navList.twoList}>
                      <img className={navList.img} src="./images/type/8.png" alt="混合蛋糕" />
                      <p className={navList.p}>混合蛋糕</p>
                    </li>
                  </NavLink>
                  <NavLink
                    activeClassName={navList.active}
                    className={navList.twoList}
                    onClick={this.getDataAsync({ index: 0, limit: 12, b_id: 0, s_id: 4 })}
                    to={{ pathname: "/goodslist", state: { b_id: 0, s_id: 4 } }}>
                    <li className={navList.twoList}>
                      <img className={navList.img} src="./images/type/7.png" alt="多层蛋糕" />
                      <p className={navList.p}>多层蛋糕</p>
                    </li>
                  </NavLink>
                </ul>
              </li>
              <li className={navList.categories_list} id={`${isShow ? navList.isShow : ""}`}>
                <NavLink
                  className={navList.mousEnter}
                  activeClassName={navList.active}
                  onClick={this.getDataAsync({ index: 0, limit: 12, b_id: 2, s_id: 0 })}
                  to={{ pathname: "/goodslist", state: { b_id: 2, s_id: 0 } }}>
                  <span>下午茶</span></NavLink>
                <ul className={navList.twoUl}>
                  <NavLink
                    className={navList.mousEnter
                    } activeClassName={navList.active}
                    onClick={this.getDataAsync({ index: 0, limit: 12, b_id: 0, s_id: 7 })}
                    to={{ pathname: "/goodslist", state: { b_id: 0, s_id: 7 } }}>
                    <li className={navList.twoList}>
                      <img className={navList.img} src="./images/type/1.png" alt="下午茶系列" />
                      <p className={navList.p}>下午茶系列</p>
                    </li>
                  </NavLink>
                </ul>
              </li>
              <li className={navList.categories_list} id={`${isShow ? navList.isShow : ""}`}>
                <NavLink
                  className={navList.mousEnter}
                  activeClassName={navList.active}
                  onClick={this.getDataAsync({ index: 0, limit: 12, b_id: 3, s_id: 0 })}
                  to={{ pathname: "/goodslist", state: { b_id: 3, s_id: 0 } }}>
                  <span>手信</span></NavLink>
                <ul className={navList.twoUl}>
                  <NavLink
                    className={navList.mousEnter}
                    activeClassName={navList.active}
                    onClick={this.getDataAsync({ index: 0, limit: 12, b_id: 0, s_id: 8 })}
                    to={{ pathname: "/goodslist", state: { b_id: 0, s_id: 8 } }}>
                    <li className={navList.twoList}>
                      <img className={navList.img} src="./images/type/9.png" alt="全国包邮" />
                      <p className={navList.p}>全国包邮</p>
                    </li>
                  </NavLink>
                </ul>
              </li>
            </ul>
          </li>
          <li className={navList.list}>
            <NavLink
              className={navList.mousEnter}
              activeClassName={navList.active}
              to="/profile">关于我们</NavLink>
          </li>
          <li className={navList.list}>
            <NavLink className={navList.mousEnter} activeClassName={navList.active} to="/consulting">开店咨询</NavLink>
          </li>
        </ul>
      </>
    )
  }
}

export default connect(
  state => ({
    goodsList: state,
  }),
  { getDataAsync, getPageAsync }
)(NavList)
