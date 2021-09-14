import Vue from 'vue'
import App from './App'
import {
	getDateRequest
} from 'utils/requestUtil.js'
Vue.prototype.getDateRequest = getDateRequest
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
