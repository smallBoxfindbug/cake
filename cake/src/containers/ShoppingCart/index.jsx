import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CloseOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

import {
  getShoppingAsync,
  selectItem,
  selectALL,
  increamentAsync,
  decreamentAsync,
  delectGoodsAsync
} from '../../redux/action/shopingCart'
import HotGoods from '../HotGoods'
import shoppingCart from './index.module.css'

class ShoppingCart extends Component {
  state = {
    selectAll: false,
    select: false,
    isDisabled: true
  }
  selectItem = (id) => {
    return () => {
      this.props.selectItem(id)
    }
  }
  selectAll = () => {
    const { selectAll } = this.state
    const newSelect = !selectAll
    this.props.selectALL(newSelect)
    this.setState({ selectAll: newSelect })
  }
  increamentAsync = (goods) => {
    return () => {
      this.props.increamentAsync(goods)
    }
  }
  decreamentAsync = (goods) => {
    return () => {
      if (goods.count > 1) {
        this.setState({ isDisabled: false }, () => {
          this.props.decreamentAsync(goods)
        })
      } else {
        this.setState({ isDisabled: true })
      }
    }
  }
  delectGoods = (goods) => {
    return () => {
      this.props.delectGoodsAsync(goods)
    }
  }
  componentDidMount() {
    const user_id = window.localStorage.getItem("user_id")
    this.props.getShoppingAsync(user_id)

  }
  render() {
    const { isDisabled, shoppingData } = this.props
    const total = shoppingData.reduce((pre, item) => {
      if (item.select) {
        return item.count * item.price + pre
      }
      return pre
    }, 0.00)
    const selectLength = shoppingData.reduce((pre, item) => item.select ? pre + 1 : pre, 0)
    const allLength = shoppingData.length
    return (
      <div className={shoppingCart.shoppingCart}>
        <div className={shoppingCart.cart_top}>
          <p className={shoppingCart.cartTitle}>幸福商城购物车</p>
          <div className={shoppingCart.cart_price}>
            <p className={shoppingCart.cart_priceTit}>总金额 (已包含运费金额￥ 00.00 )
              <b><span>￥<span></span>{total}</span></b>
            </p>
            <p className={shoppingCart.top_btn}>下单结算</p>
          </div>
        </div>
        <hr />
        <div className={shoppingCart.cart_content}>
          <ul className={shoppingCart.ul}>
            <li className={shoppingCart.titleList}>
              <input onChange={this.selectAll} checked={selectLength === allLength && allLength !== 0} className={shoppingCart.selectAll} type="checkbox" />
              <span>全选</span>
            </li>
            <li className={shoppingCart.titleList}>商品信息</li>
            <li className={shoppingCart.titleList}>单价</li>
            <li className={shoppingCart.titleList}>数量</li>
            <li className={shoppingCart.titleList}>合计</li>
            <li className={shoppingCart.titleList}>删除</li>
          </ul>
          <div className={shoppingCart.goodsList}>
            <ul className={shoppingCart.goodsUl}>
              {
                shoppingData.map(item => {
                  return (
                    <li key={item.goods_id} className={shoppingCart.goods}>
                      <ul className={shoppingCart.conten_ul}>
                        <li className={shoppingCart.conten_list}>
                          <input onChange={this.selectItem(item.goods_id, item.price, item.count)} checked={item.select} className={shoppingCart.checked} type="checkbox" /></li>
                        <li className={shoppingCart.conten_list}>
                        <NavLink to={{ pathname: "/goodsdetail", state: { id: item.goods_id } }}>
                          <img className={shoppingCart.img} src={item.img_url} alt="图片加载失败" />
                        </NavLink>
                          <div className={shoppingCart.conten_title}>
                            <span className={shoppingCart.goodsTitle}>{item.goods_name}</span>
                            <span className={shoppingCart.size}>规格：{item.specifi}</span>
                          </div>
                        </li>
                        <li className={shoppingCart.conten_list}>￥{item.price}</li>
                        <li className={shoppingCart.conten_list}>
                          <button disabled={isDisabled}
                            onClick={this.decreamentAsync(item)}
                            className={shoppingCart.createment}>-</button>
                          <span className={shoppingCart.num}>{item.count}</span>
                          <button disabled={isDisabled}
                            onClick={this.increamentAsync(item)}
                            className={shoppingCart.createment}>+</button>
                        </li>
                        <li className={shoppingCart.conten_list}>
                          <span className={shoppingCart.allPrice}>￥{item.count * item.price}</span>
                        </li>
                        <li className={shoppingCart.conten_list}>
                          <CloseOutlined onClick={this.delectGoods(item)} id={shoppingCart.delect} />
                        </li>
                      </ul>
                    </li>
                  )
                })
              }
            </ul>
            <div className={shoppingCart.cart_bottom}>
              <input onChange={this.selectAll} checked={selectLength === allLength && allLength !== 0} className={shoppingCart.select} type="checkbox" />
              <div className={shoppingCart.bottom_price}>
                <p className={shoppingCart.bottom_priceTit}>
                  合计：<b><span>￥{total}</span></b>
                </p>
                <p style={{ backgroundColor: selectLength === allLength ? "#3d2d23" : "#979797" }} className={shoppingCart.bottom_btn}>下单结算</p>
              </div>
            </div>
          </div>
        </div>
        <HotGoods />
      </div>
    )
  }
}

export default connect(
  state => ({
    shoppingData: state.shoppingCart,
  }),
  {
    getShoppingAsync,
    selectItem,
    selectALL,
    increamentAsync,
    decreamentAsync,
    delectGoodsAsync
  }
)(ShoppingCart)
