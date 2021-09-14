import axios from 'axios'
import React, { Component } from 'react'
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

import detail from './index.module.css'

export default class GoodsDetail extends Component {
  render() {
    const { goods, price, count } = this.state
    return (
      <div className={detail.detail}>
        <h3>{goods.type_name + " > "}{goods.s_type_name + " > "}{goods.good_name}</h3>
        <div className={detail.inforBox}>
          <div className={detail.Ibanner}>
            <div className={detail.bigImg} ref={c => this.imgDom = c}>
              {
                goods.gallery.map((item, index) => <div index={index} className={detail.imgBox} key={item.good_id + index}><img src={item.image_url} alt="图片加载失败" /></div>)
              }
            </div>
            <div className={detail.smallImg} ref={c => this.smallImgDom = c}>
              {
                goods.gallery.map((item, index) => <img onMouseEnter={this.cut(index)} key={item.good_id + index} src={item.image_url} alt="图片加载失败" />)
              }
            </div>
          </div>
          <div className={detail.infor}>
            <h2 className={detail.title}>{goods.good_name}</h2>
            <p className={detail.tatolPrice}>￥{price}</p>
            <p className={detail.specif}>选择规格</p>
            <div className={detail.specifList}>
              {
                goods.specifications.map((item, index) => <p onClick={this.selectPrice(index)} key={item.good_s_id + index}>{item.specification}</p>)
              }
            </div>
            <div className={detail.countBox}>
              <span>数量</span>
              <div className={detail.inputBox}>
                <input ref={c => this.inputDom = c} onChange={this.changeCount} value={count} type="text" />
                <div className={detail.creamentBox}>
                  <UpOutlined onClick={this.increatement} id={detail.creament} />
                  <DownOutlined onClick={this.decreatement} id={detail.creament} />
                </div>
              </div>
            </div>
            <NavLink to="/shoppingCart" className={detail.move}>
              <button className={detail.buy}>立即购买</button>
            </NavLink>
            <button onClick={this.addCart} className={detail.addCart}>加入购物车</button>
          </div>
        </div>
        <div className={detail.goodsDetail}>
          <p>商品详情</p>
          <img src={goods.introduc_img} alt="图片加载失败" />
        </div>
      </div>
    )
  }
  state = {
    goods: { gallery: [], specifications: [] },
    price: '',
    count: 1,
    specifi: ""
  }
  componentDidMount() {
    const { id } = this.props.location.state
    axios({
      method: 'GET',
      url: 'http://124.71.230.178:8080/cake/goods/detail',
      params: {
        id
      },
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      this.setState({ goods: response.data })
      this.setState({ price: response.data.specifications[0].s_price })
    })

  }
  cut = index => {
    return () => {
      for (let i = 0; i < this.imgDom.children.length; i++) {
        this.imgDom.children[i].style.opacity = 0
        this.smallImgDom.children[i].style.border = "none"
      }
      this.smallImgDom.children[index].style.border = 1 + "px solid red"
      this.imgDom.children[index].style.opacity = 1
    }
  }
  selectPrice = index => {
    return () => {
      const { goods } = this.state
      const price = goods.specifications[index].s_price
      const specifi = goods.specifications[index].specification
      this.setState({ price })
      this.setState({ specifi })
    }
  }
  changeCount = () => {
    const count = this.inputDom.value
    this.setState({ count })
  }
  increatement = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }
  decreatement = () => {
    const { count } = this.state
    if (count > 1) this.setState({ count: count - 1 })
  }
  addCart = () => {
    const username = window.localStorage.getItem("username")
    const { price, goods, specifi } = this.state
    if (username === null) {
      window.location.assign("/login")
      return
    }
    axios({
      method: 'GET',
      url: 'http://124.71.230.178:8080/cake/admin/info',
      params: {
        username
      },
      header: {
        'Content-Type': 'Access-Control-Allow-Origin'
      },
      characterEncoding: "utf-8",
    }).then(response => {
      axios({
        method: 'POST',
        url: 'http://124.71.230.178:8080/cake/goods/car/add',
        params: {
          user_id: response.data.id,
          goods_name: goods.good_name,
          price,
          specifi,
          collection: 0,
          img_url: goods.gallery[0].image_url,
          goods_id: goods.id
        },
        header: {
          'Content-Type': 'Access-Control-Allow-Origin'
        },
        characterEncoding: "utf-8",
      }).then(response => {
        if(response.data===1){
          alert("添加成功")
        }else{
          alert("网络繁忙，添加失败，请稍后再试")
        }
      })
    })
  }
}