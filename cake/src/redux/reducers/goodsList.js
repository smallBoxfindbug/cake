import {GETPAGE} from '../constans'

const initState = 1 //初始化状态
export default function getPage(preState=initState,action){
	//从action对象中获取：type、data
	const {type,data} = action
	//根据type决定如何加工数据
	switch (type) {
		case GETPAGE: 
			return data
		default:
			return preState
	}

}