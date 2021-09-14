<template>
	<popup-bottom :show="show" @close="closeSkuBox">
		<view class="sku-box">
			<view class="sku-header container">
				<image class="goods-img" :src="titleImg"></image>

				<view class="sku-goods-info">
					<view class="money" :style="{color:themeColor}">
						<text class="symbol fs-26">￥</text>
						<text class="amount fs-38">{{nowSelectPrice}}</text>
					</view>
					<view class="stock fs-24">
						库存{{stock}}件
					</view>
					<view class="fs-24">
						已选："{{nowSelectTitle}}"
					</view>
				</view>
			</view>
			<scroll-view class="sku-list" scroll-y="true">
				<view class="sku-item container" v-for="specification in specifications" :key="specification.id">
					<view class="sku-name">{{specification.name}}</view>
					<view class="sku-content">
						<text class="sku-content-item" v-for="combination in combinations" :key="combination.id"
							:class="{'selectStyle':selectId == combination.id}"
							@click="selectSku(combination.id)">{{combination.value}}</text>
					</view>
				</view>
			</scroll-view>
			<view class="sku-item container count">
				<view class="sku-name">数量</view>
				<view class="count-box">
					<text class="minus" :class="{disabled:buyCount<=1}" @click="handleBuyCount('minus')">-</text>
					<input class="count-content" v-model="buyCount" />
					<text class="add" @click="handleBuyCount('add')">+</text>
				</view>
			</view>
			<view class="confirm-btn container" @click="handleConfirm">确定加入购物车
			</view>
		</view>
	</popup-bottom>
</template>

<script>
	import PopupBottom from './popup-bottom'
	export default {
		components: {
			PopupBottom
		},
		props: {
			show: {
				type: Boolean,
				default: false
			},
			themeColor: {
				type: String,
				default: '#1ac792'
			},

		},
		data() {
			return {
				nowSelectGoodsName: "",
				goodsId: '',
				stock: 1000,
				titleImg: "",
				specifications: [],
				combinations: [],
				nowSelectPrice: '',
				nowSelectTitle: "",
				buyCount: 1,
				selectId: 0
			}
		},
		created() {
			this.selectSku(this.selectId)
		},
		methods: {
			selectSku(selectId) {
				this.isShow = this.show
				this.selectId = selectId
				const id = uni.getStorageSync("minuteId")
				this.goodsId = id
				const res = this.getDateRequest({
					url: "/cake/goods/detail",
					data: {
						id: id
					}
				}).then(res => {
					this.nowSelectGoodsName = res.data.good_name
					const specification = []
					const newCombinations = []
					this.titleImg = res.data.gallery[0].image_url
					for (let item in res.data.specifications) {
						specification.push(res.data.specifications[item].specification)
						newCombinations.push({
							'id': item,
							"value": res.data.specifications[item].specification,
							"image": res.data.gallery[0].image_url,
							"price": res.data.specifications[item].s_price,
							"stock": "1000",
						})
					}
					this.specifications = [{
						name: '规格',
						id: 0,
						list: specification,
					}]
					this.combinations = JSON.parse(JSON.stringify(newCombinations))
					this.nowSelectTitle = this.combinations[selectId].value + ",￥" + this.combinations[selectId]
						.price
					this.nowSelectPrice = this.combinations[selectId].price
				})

			},
			handleBuyCount(type) {
				if (type == "add") {
					this.buyCount++
				} else if (type == "minus") {
					this.buyCount--
					if (this.buyCount <= 1) {
						this.buyCount = 1
					}
				}
			},
			closeSkuBox() {
				this.$emit('close')
			},
			handleConfirm() {
				const tokenStr = uni.getStorageSync("tokenStr")
				const loginRes = this.getDateRequest({
					url: "/cake/admin/isLogin",
					method: "POST",
					data: {
						token: tokenStr
					}
				}).then(res => {
					if (res.data.code == 100) {
						const user_id = res.data.data.user_id
						const res = this.getDateRequest({
							url: "/cake/goods/car/add",
							method: "POST",
							data: {
								user_id: user_id,
								goods_name: this.nowSelectGoodsName,
								price: this.nowSelectPrice,
								specifi: this.combinations[this.selectId].value,
								collection: 0,
								img_url: this.titleImg,
								goods_id: this.goodsId
							}
						}).then(res => {
							if (res.data == 1) {
								this.closeSkuBox()
								uni.showToast({
									title: "加入成功"
								})
							}
						})
					} else {
						uni.navigateTo({
							url: "../../pages/login/login"
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.flex-center {
		display: flex;
		align-items: center;
	}

	.flex-center-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	$font-color-light: #999999;
	$page-bg-color-grey: #f5f5f5;

	.fs-24 {
		font-size: 24upx;
	}

	.fs-26 {
		font-size: 26upx;
		color: #ff0000;
	}

	.fs-38 {
		font-size: 38upx;
		color: #ff0000;
	}

	.container {
		width: 690upx;
		margin: 0 auto;
	}

	.sku-box {
		min-height: 500upx;
		background-color: white;
		padding-bottom: 20upx;
		font-size: 28upx;
		color: #333333;

		.sku-header {
			display: flex;
			padding: 40upx 0 20upx;

			.goods-img {
				width: 200upx;
				height: 200upx;
				border-radius: 6upx;
				border: 4upx solid white;
				flex: none;
				margin-top: -80upx;
			}
		}

		.sku-goods-info {
			margin-left: 20upx;

			.money {
				border: none;
				padding-bottom: 0;
			}

			.stock {
				color: $font-color-light;
			}
		}

		.sku-list {
			max-height: 500upx;
		}

		.sku-item {
			padding: 30upx 0;

			.sku-name {
				font-size: 30upx;
			}

			.sku-content {
				border-bottom: 2upx solid $page-bg-color-grey;
				padding: 20upx 0;
				@extend .flex-center;
				flex-wrap: wrap;

				.sku-content-item {
					padding: 16upx 20upx;
					border-radius: 6upx;
					margin: 0 30upx 20upx 0;
					border: 2upx solid transparent;
				}

				.selectStyle {
					border-color: #ff0000;
					color: #ff0000;
					background-color: #f5f5f5;
				}
			}

			&.count {
				@extend .flex-center;
				justify-content: space-between;

				.count-box {
					@extend .flex-center;

					text,
					.count-content {
						@extend .flex-center-center;
						width: 70upx;
						height: 70upx;
						font-size: 32upx;
						border: 2upx solid $page-bg-color-grey;
					}

					.add,
					.minus {
						font-size: 44upx;
					}

					.count-content {
						border-width: 2upx 0;
						text-align: center;
					}
				}
			}
		}

		.confirm-btn {
			@extend .flex-center-center;
			height: 80upx;
			border-radius: 80upx;
			color: #000000;
			font-size: 32upx;
			margin-top: 10upx;
			background-color: #ffff7f;
		}
	}

	[class*=disabled] {
		color: $font-color-light;
		opacity: .7;
	}
</style>
