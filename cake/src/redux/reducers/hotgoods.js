import {GETHOT} from '../constans'

const initState = [] //初始化状态
export default function navListReducer(preState=initState,action){
	//从action对象中获取：type、data
	const {type,data} = action
	//根据type决定如何加工数据
	switch (type) {
		case GETHOT: 
			return data
		default:
			return preState
	}

}