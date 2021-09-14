<template>
	<view class="shop-car">
		<commonCar :list="goodsProducts" @delect="delect" @accounts="accounts">
			<text>123456</text>
		</commonCar>
		<image src="" mode=""></image>
	</view>
</template>

<script>
	import commonCar from '@/components/shopCar/shopCar.vue'
	export default {
		data() {
			return {
				goodsProducts: [{
					name: '华为旗舰店',
					checked: 1,
					goods: [{
						img: '../../static/goods_avatar.png',
						title: '华为荣耀',
						remark: '256G',
						price: '128.80',
						number: 1,
						checked: 1
					}, {
						img: '../../static/goods_avatar.png',
						title: 'mate40',
						remark: '128G',
						price: '116.80',
						number: 1,
						checked: 1
					}]
				},{
					name: '华为旗舰店',
					checked: 1,
					goods: [{
						img: '../../static/goods_avatar.png',
						title: 'P40',
						remark: '64G',
						price: '129.80',
						number: 1,
						checked: 1
					}, {
						img: '../../static/goods_avatar.png',
						title: 'P50',
						remark: '32G',
						price: '156.80',
						number: 1,
						checked: 1
					}]
				}],
			}
		},
		components: {
			commonCar
		},
		methods: {
			delect(e){
				console.log(e);
			},
			accounts(e){
				console.log(e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shop-car {
		width: 750rpx;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #F5F5F5;
	}
</style>
