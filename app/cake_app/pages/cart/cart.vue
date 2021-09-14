<template>
	<view class="common-car">
		<!-- //未登录a -->
		<view class="empty-shop-car" v-if="login">
			<image src="../../static/cart/empty_shop_car.png" class="empty-shop-car-image" mode=""></image>
			<text>您当前未登录</text>
			<view class="empty-shop-car-btn" @click="goLogin">
				<text>去登录</text>
			</view>
		</view>
		<view class="shop-car" v-else>
			<view v-if="isEmpty">
				<view class="shop-car-header">
					<text @click="cut">{{isCut?'编辑':'完成'}}</text>
				</view>
				<view class="store-box" v-for="(itemq,indexq) in datas" :key="indexq">
					<view class="goodsInfo" v-for="(itemw,indexw) in itemq.goods" :key="indexw">
						<image src="../../static/cart/select.png" v-if="itemw.checked == 2" class="checked-image"
							mode="" @tap="goodsCheck(indexq,indexw,itemw.checked)"></image>
						<image src="../../static/cart/not_select.png" v-else class="checked-image" mode=""
							@tap="goodsCheck(indexq,indexw,itemw.checked)"></image>
						<view class="goodsInfo-right">
							<image :src="itemw.img" class="goods-image" mode=""></image>
							<view class="goodsInfo-box">
								<text class="goods-name">{{itemw.title}}</text>
								<text class="spe">规格：{{itemw.remark}}</text>
								<view class="goods-box">
									<text class="goods-price">¥{{itemw.price}}</text>
									<view class="goods-num-box">
										<view class="goods-image" @click="sub(indexq,indexw,itemw.number)">
											<text>-</text>
										</view>
										<view class="goods-num">
											<text>{{itemw.number}}</text>
										</view>
										<view class="goods-image" @click="add(indexq,indexw,itemw.number)">
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
							<image src="../../static/cart/select.png" class="checked-image" mode="">
							</image>
							<text>全选</text>
						</view>
						<view class="statistics-left" v-else @tap="allCheck">
							<image src="../../static/cart/not_select.png" class="checked-image" mode="">
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
				<image src="../../static/cart/empty_shop_car.png" class="empty-shop-car-image" mode=""></image>
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
		data() {
			return {
				isEmpty: false,
				ifOnShow: false,
				user_id: " ",
				user_name: "游客",
				isLogin: false,
				login: false,
				length: 0,
				goodsList: [{
					name: '',
					checked: 1,
					goods: [],
				}],
				datas: {},
				statisticsIndex: false,
				total: 0,
				isCut: true,
				list: [],
				selectIndex: [],
			}
		},
		async onShow() {
			let codeData = await this.getcode()
			if (codeData.data.code == 100) {
				this.isLogin = true
				this.code = codeData.data.code
				this.user_id = codeData.data.data.user_id
				this.user_name = codeData.data.data.user_name
				this.login = false
				let res = await this.getL().then(res => {
					const goodsProducts = res.data
					const goods = []
					for (let goodsInfor of goodsProducts) {
						goods.push({
							img: goodsInfor.img_url,
							title: goodsInfor.goods_name,
							remark: goodsInfor.specifi,
							price: goodsInfor.price,
							number: goodsInfor.count,
							checked: 1,
							goods_id: goodsInfor.id
						})
					}
					this.length = goods.length
					this.goodsList[0].goods = goods
				});
			} else {
				uni.showToast({
					title: "请先登录"
				})
				this.login = true
				this.isLogin = false
			}
			if (!this.login) {
				if (this.length == 0) {
					this.isEmpty = false
				} else {
					this.datas = this.goodsList
					this.isEmpty = true
				}
			}
		},
		methods: {
			async getcode() {
				const tokenStr = await uni.getStorageSync("tokenStr")
				return new Promise((resolve, reject) => {
					uni.request({
						url: "http://124.71.230.178:8080/cake/admin/isLogin",
						method: "POST",
						data: {
							token: tokenStr
						},
						characterEncoding: "utf-8",
						header: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						success(r) {
							resolve(r);
						},
						fail(err) {
							reject(err);
						}
					});
				});
			},
			getL() {
				return new Promise((resolve, reject) => {
					uni.request({
						url: "http://124.71.230.178:8080/cake/goods/car",
						data: {
							user_id: this.user_id,
						},
						header: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						success(r) {
							resolve(r);
						},
						fail(err) {
							reject(err);
						}
					});
				});
			},
			delect(e) {
				console.log("dd")
				for (let s of e[0].goods) {
					if (s.checked == 2) {
						const res = this.getDateRequest({
							url: "/cake/goods/car/delete",
							method: "POST",
							data: {
								user_id: this.user_id,
								goods_id: s.goods_id,
							}
						}).then(res => {
							if (res.data == 1) {
								uni.showToast({
									title: "删除成功"
								})
							} else {
								if (res.data == 1) {
									uni.showToast({
										title: "删除失败"
									})
								}
							}
						})
					}
				}
			},
			accounts(e) {
				console.log(e);
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
				} else {
					uni.showToast({
						title: '您当前未选择任何商品,结算失败',
						icon: 'none'
					})
				}
			},
			delect(e) {
				let judge = this.judgeSelect()
				if (judge) {
					this.datas[0].goods.map(data => {
						if (data.checked == 2) {
							const res = this.getDateRequest({
								url: "/cake/goods/car/delete",
								method: "POST",
								data: {
									user_id: this.user_id,
									goods_id: data.goods_id,
								}
							}).then(res => {
								console.log(res)
								if (res.data == 1) {
									uni.showToast({
										title: "删除成功"
									})
								} else {
										uni.showToast({
											title: "删除失败"
										})
								}
							})
						}
					})
				} else {
					uni.showToast({
						title: '您当前未选择任何商品,删除失败',
						icon: 'none'
					})
				}
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

<style lang="scss">
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
			top: 0px;
			left: 0;
			z-index: 100;
			background-color: rgb(245, 245, 245);

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
			bottom: 0px;
			left: 0;

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
