import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

import header from './index.module.css'
import NavList from './NavList'
import HeaderRight from './HeaderRight'
import { getSearchDataAsync } from '../../redux/action/header'

class Header extends Component {
  state = {
    block: false,
    isShow: true,
    fuzz: ''
  }
  showSearch = block => {
    this.setState({ block: block })
    this.setState({ isShow: !block })
  }
  search = () => {
    const value = this.inputDom.value
    this.setState({ fuzz: value })
    this.props.getSearchDataAsync(value)
  }
  render() {
    const { block, isShow, fuzz } = this.state
    return (
      <div className={header.header}>
        <div className={header.header_left}>
          <img className={header.logo} src="./images/logo_big.png" alt="logo" />
        </div>
        <div className={header.header_center}>
          <NavList isShow={isShow} showUl={this.showUl}></NavList>
        </div>
        <div className={header.header_right}>
          <HeaderRight block={block} showSearch={this.showSearch}></HeaderRight>
        </div>
        <div className={header.search} style={{ display: block ? 'flex' : "none" }}>
          <input ref={c => this.inputDom = c} 
          placeholder="请输入..." 
          className={header.input} type="text" />
          <NavLink to={{ pathname: "/goodslist", state: { b_id: 4, fuzz } }}>
            <SearchOutlined onClick={this.search} className={header.icon} />
          </NavLink>
        </div>
      </div>
    )
  }
}
export default connect(
  state => ({
    goodsList: state,
  }),
  { getSearchDataAsync }
)(Header)
