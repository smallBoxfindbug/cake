import {combineReducers} from 'redux'
//引入为Count组件服务的reducer
import navList from './navList'
import hotGoods from './hotgoods'
import shoppingCart from './shoppingCart'
import login from './login'
import page from './goodsList'

//汇总所有的reducer变为一个总的reducer
export default  combineReducers({
	navList,
	hotGoods,
	shoppingCart,
	login,
	page
})
