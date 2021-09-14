import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './containers/Header'
import Home from './components/Home'
import GoodsList from './containers/GoodsList'
import Consulting from './components/Consulting'
import Profile from './components/Profile';
import ShoppingCart from './containers/ShoppingCart'
import Login from './containers/Login'
import MyInfor from './components/MyInfor'
import GoodsDetail from './components/GoodsDetail'
import Dynamic from './components/Dynamic'
import Qualification from './components/Qualification'

import Footer from './components/Footer'

import './index.css'


export default class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/goodsList" component={GoodsList}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/consulting" component={Consulting}></Route>
          <Route path="/shoppingCart" component={ShoppingCart}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/myinfor" component={MyInfor}></Route>
          <Route path="/goodsdetail" component={GoodsDetail}></Route>
          <Route path="/qualification" component={Qualification}></Route>
          <Route path="/dynamic" component={Dynamic}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer></Footer>
      </>
    )
  }
}
