<template>
	<view class="common-car">
		<!-- //未登录a -->
		<view class="empty-shop-car" v-if="login">
			<image src="../../static/empty_shop_car.png" class="empty-shop-car-image" mode=""></image>
			<text>您当前未登录</text>
			<view class="empty-shop-car-btn" @click="goLogin">
				<text>去登录</text>
			</view>
		</view>
		<view class="shop-car" v-else>
			<view v-if="isEmpty">
				<view class="shop-car-header">
					<text @tap="cut">{{isCut?'编辑':'完成'}}</text>
				</view>
				<view class="store-box" v-for="(itemq,indexq) in datas" :key="indexq">
					<view class="goodsInfo" v-for="(itemw,indexw) in itemq.goods" :key="indexw">
						<image src="../../static/select.png" v-if="itemw.checked == 2" class="checked-image" mode=""
							@tap="goodsCheck(indexq,indexw,itemw.checked)"></image>
						<image src="../../static/not_select.png" v-else class="checked-image" mode=""
							@tap="goodsCheck(indexq,indexw,itemw.checked)"></image>
						<view class="goodsInfo-right">
							<image :src="itemw.img" class="goods-image" mode=""></image>
							<view class="goodsInfo-box">
								<text class="goods-name">{{itemw.title}}</text>
								<text class="spe">规格：{{itemw.remark}}</text>
								<view class="goods-box">
									<text class="goods-price">¥{{itemw.price}}</text>
									<view class="goods-num-box">
										<view class="goods-image" @tap="sub(indexq,indexw,itemw.number)">
											<text>-</text>
										</view>
										<view class="goods-num">
											<text>{{itemw.number}}</text>
										</view>
										<view class="goods-image" @tap="add(indexq,indexw,itemw.number)">
											<text>+</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="statistics-box">
					<view class="statistics">
						<view class="statistics-left" v-if="statisticsIndex" @tap="allCheck">
							<image src="../../static/select.png" class="checked-image" mode="">
							</image>
							<text>全选</text>
						</view>
						<view class="statistics-left" v-else @tap="allCheck">
							<image src="../../static/not_select.png" class="checked-image" mode="">
							</image>
							<text>全选</text>
						</view>
						<view class="statistics-right" v-if="isCut" @click="accounts">
							<text>总计：</text><text class="text-color">¥{{total}}</text>
							<view class="btn">
								<text>结算</text>
							</view>
						</view>
						<view class="statistics-right" v-else @click="delect">
							<view class="btn">
								<text>删除</text>
							</view>
						</view>
					</view>
					<view class="gap"></view>
				</view>
			</view>
			<!--// 购物车为空 -->
			<view class="empty-shop-car" v-else>
				<image src="../../static/empty_shop_car.png" class="empty-shop-car-image" mode=""></image>
				<text>当前您的购物车是空的</text>
				<view class="empty-shop-car-btn" @click="goSelect">
					<text>去逛逛</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "commonCar",
		data() {
			return {
				login:false,
				isLogin: "",
				goodsProducts: [],
				isEmpty: false,
				iPhoneX: true,
				datas: {},
				statisticsIndex: false,
				total: 0,
				isCut: true,
				list: [],
				goodsList: [{
					name: '',
					checked: 1,
					goods: [],
				}],
				selectIndex: [],
				length: 0,
			}
		},
		created() {
			this.length = uni.getStorageSync("length")
			this.getData()
			if (!this.login) {
				if (this.length == 0) {
					this.isEmpty = false
				} else {
					this.datas = this.list
					this.isEmpty = true
				}
			}
		},
		methods: {
			getData() {
				uni.$on("getGoods", data => {
					this.goodsList[0].goods = data
				})
				uni.$on("login", data => {
					this.login = data
				})
				this.list = this.goodsList
			},
			goSelect() {
				uni.switchTab({
					url: "../../pages/categories/categories"
				})
			},
			goLogin() {
				uni.redirectTo({
					url: "../../pages/login/login",
				})
			},
			//商品选择
			goodsCheck(storeIndex, goodsIndex, goodsChecked) {
				if (goodsChecked == 1) {
					this.datas[storeIndex].goods[goodsIndex].checked = 2
					this.selectIndex.push(goodsIndex)
				} else {
					this.datas[storeIndex].goods[goodsIndex].checked = 1
					this.selectIndex
				}
				//判断是否全选
				let statisticsIndex = true
				this.datas.find((item, index) => {
					if (item.checked == 1) {
						statisticsIndex = false
					}
				})
				if (statisticsIndex == false) {
					this.statisticsIndex = false
				} else {
					this.statisticsIndex = true
				}
				this.statistics()
			},
			//店铺选择
			storeCheck(storeIndex, storeCheck) {
				if (storeCheck == 1) {
					this.datas[storeIndex].checked = 2
					this.datas[storeIndex].goods.find((item, index) => {
						item.checked = 2
					})
				} else {
					this.datas[storeIndex].checked = 1
					this.datas[storeIndex].goods.find((item, index) => {
						item.checked = 1
					})
				}
				//判断是否全选
				let statisticsIndex = true
				this.datas.find((item, index) => {
					if (item.checked == 1) {
						statisticsIndex = false
					}
				})
				if (statisticsIndex == false) {
					this.statisticsIndex = false
				} else {
					this.statisticsIndex = true
				}
				this.statistics()
			},
			//减少
			sub(storeIndex, goodsIndex, goodsnum) {
				if (goodsnum == 1) {
					return
				} else {
					this.datas[storeIndex].goods[goodsIndex].number--
				}
				this.statistics()
			},
			//增加
			add(storeIndex, goodsIndex, goodsnum) {
				this.datas[storeIndex].goods[goodsIndex].number++
				this.statistics()
			},
			//全选
			allCheck() {
				if (this.statisticsIndex) {
					this.datas.find((item, index) => {
						item.checked = 1
						item.goods.find((itemq, indexq) => {
							itemq.checked = 1
						})
					})
					this.statisticsIndex = false
				} else {
					this.datas.find((item, index) => {
						item.checked = 2
						item.goods.find((itemq, indexq) => {
							itemq.checked = 2
						})
					})
					this.statisticsIndex = true
				}
				this.statistics()
			},
			//统计
			statistics() {
				let total = 0
				this.datas.find((item, index) => {
					item.goods.find((itemq, indexq) => {
						if (itemq.checked == 2) {
							total = total + itemq.price * itemq.number
						}
					})
				})
				this.total = total.toFixed(2)
			},
			cut() {
				this.isCut = !this.isCut
				this.statisticsIndex = true
				this.allCheck()
			},
			accounts(e) {
				let judge = this.judgeSelect()
				if (judge) {
					uni.showToast({
						title: '恭喜你，成功购买！',
						icon: 'none'
					})
					this.$emit('delect', this.datas)
				} else {
					uni.showToast({
						title: '您当前未选择任何商品,结算失败',
						icon: 'none'
					})
				}
			},
			delect(e) {
				console.log(e)
				let judge = this.judgeSelect()
				// if (judge) {
					// for (let s of e[0].goods) {
					// 	if (s.checked == 2) {
					// 		const res = this.getDateRequest({
					// 			url: "/cake/goods/car/delete",
					// 			method: "POST",
					// 			data: {
					// 				user_id: this.user_id,
					// 				goods_id: s.goods_id,
					// 			}
					// 		}).then(res => {
					// 			if (res.data == 1) {
					// 				uni.showToast({
					// 					title: "删除成功"
					// 				})
					// 			} else {
					// 				if (res.data == 1) {
					// 					uni.showToast({
					// 						title: "删除失败"
					// 					})
					// 				}
					// 			}
					// 		})
					// 	}
					// }
					// this.$emit('delect', this.datas)
				// } else {
				// 	uni.showToast({
				// 		title: '您当前未选择任何商品,删除失败',
				// 		icon: 'none'
				// 	})
				// }
			},
			judgeSelect() {
				let judge = false
				this.datas.find((item, index) => {
					item.goods.find((itemq, indexq) => {
						if (itemq.checked == 2) {
							judge = true
						}
					})
				})
				return judge
			}
		}
	}
</script>

<style lang="scss" scoped>
	.common-car {
		width: 750rpx;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #F5F5F5;
		margin-bottom: 100rpx;
	}

	.empty-shop-car {
		width: 750rpx;
		min-height: 680rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.empty-shop-car-image {
			width: 340rpx;
			height: 278rpx;
			margin-top: 102rpx;
		}

		text {
			margin-top: 40rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #666666;
		}

		.empty-shop-car-btn {
			width: 240rpx;
			height: 90rpx;
			background: #FBBC02;
			border-radius: 200rpx;
			margin-top: 40rpx;
			text-align: center;
			line-height: 90rpx;
			font-size: 30rpx;
			font-weight: 400;
			color: #313133;
		}
	}

	.shop-car {
		width: 750rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.shop-car-header {
			width: 750rpx;
			height: 80rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
			position: fixed;
			top: 6%;
			z-index: 100;
			background-color: rgb(245,245,245);
			text {
				font-size: 30rpx;
				font-weight: 400;
				color: #313133;
			}
		}

		.store-box {
			width: 750rpx;
			margin-bottom: 20rpx;
			margin-top: 5%;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #FFFFFF;

			.store-header {
				width: 690rpx;
				height: 78rpx;
				padding: 0 30rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				font-size: 28rpx;
				font-weight: 400;
				color: #313133;

				.checked-image {
					width: 36rpx;
					height: 36rpx;
				}

				text {
					font-size: 28rpx;
					font-weight: 400;
					color: #313133;
					margin-left: 20rpx;
				}

				.label {
					width: 14rpx;
					height: 24rpx;
					margin-left: 10rpx;
					margin-top: 5rpx;
				}
			}

			.goodsInfo {
				width: 690rpx;
				height: 246rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 2rpx solid #EDEDED;

				&:nth-last-child(1) {
					border: none;
				}

				.checked-image {
					width: 36rpx;
					height: 36rpx;
				}

				.goodsInfo-right {
					width: 634rpx;
					height: 246rpx;
					margin-left: 20rpx;
					display: flex;
					flex-direction: row;
					align-items: center;

					.goods-image {
						width: 180rpx;
						height: 180rpx;
					}

					.goodsInfo-box {
						width: 428rpx;
						margin-left: 24rpx;
						display: flex;
						flex-direction: column;
						align-items: center;

						.goods-name {
							width: 428rpx;
							font-size: 26rpx;
							font-weight: 400;
							color: #313133;
						}

						.spe {
							width: 428rpx;
							margin-top: 10rpx;
							font-size: 24rpx;
							font-weight: 400;
							color: #919298;
						}

						.goods-box {
							width: 428rpx;
							margin-top: 18rpx;
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: space-between;

							.goods-price {
								font-size: 32rpx;
								font-weight: 400;
								color: #313133;
							}

							.goods-num-box {
								width: 168rpx;
								height: 46rpx;
								display: flex;
								flex-direction: row;
								align-items: center;

								.goods-image {
									width: 46rpx;
									height: 44rpx;
									text-align: center;
									line-height: 44rpx;
									border: 1rpx solid #CFCFCF;
									font-size: 38rpx;
								}

								.goods-num {
									width: 76rpx;
									height: 44rpx;
									text-align: center;
									line-height: 44rpx;
									font-size: 33rpx;
									font-weight: 400;
									color: #666666;
									border-top: 1px solid #CFCFCF;
									border-bottom: 1px solid #CFCFCF;
								}
							}
						}
					}
				}
			}
		}

		.statistics-box {
			width: 750rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #FFFFFF;
			position: fixed;
			left: 0;
			bottom: 40px;
			.statistics {
				width: 720rpx;
				padding: 0 0 0 30rpx;
				height: 98rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				.statistics-left {
					width: 120rpx;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;

					image {
						width: 36rpx;
						height: 36rpx;
					}

					text {
						font-size: 30rpx;
						font-weight: 400;
						color: #313133;
					}
				}

				.statistics-right {
					width: 600rpx;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: flex-end;

					.btn {
						width: 218rpx;
						height: 98rpx;
						background: #FBBC02;
						text-align: center;
						line-height: 98rpx;
						font-size: 30rpx;
						font-weight: 400;
						color: #313133;
						margin-left: 40rpx;
					}

					text {
						font-size: 30rpx;
						font-weight: 400;
						color: #313133;
					}

					.text-color {
						color: rgba(242, 18, 18, 1);
					}
				}
			}

			.gap {
				width: 750rpx;
				height: 40rpx;
			}
		}
	}
</style>
