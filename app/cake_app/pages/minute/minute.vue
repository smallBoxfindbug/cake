<template>
	<view>
		<view>
			<!-- 轮播图区域 -->
			<view>
				<swiper class="swiper" indicator-dots="true" circular indicator-active-color="#ffffff" autoplay
					interval="3000" duration="1000">
					<swiper-item v-for="item of swiperList" :key="item.id">
						<view class="swiper-item">
							<image :src="item.image_url"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 商品详细信息区域 -->
			<view class="goods-minute">
				<view class="price">￥{{priceInfor}}</view>
				<text class="goods-title">{{goodsName}}-{{infor}}</text>
			</view>
			<!-- 商品规格选择区 -->
			<view class="selectGoods" @click="showSelectGoods">
				选择规格
			</view>
			<echone-sku :show="isShow" theme-color="#ffff7f" @close="hiddenSelectGoods">
			</echone-sku>
			<!-- 商品其他信息区域 -->
			<uni-list>
				<uni-list-item title="运费" note="部分区域免运费"></uni-list-item>
				<uni-list-item title="服务" note="收货后结算·线下门店·同城配送"></uni-list-item>
			</uni-list>
			<!-- 商品导航区域 -->
			<view class="goods-nav">
				<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
					@buttonClick="buttonClick" />
			</view>
			<view class="good-img">
				<image :src="goodsUrl" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	import echoneSku from '@/components/echone-sku/echone-sku.vue'
	export default {
		data() {
			return {
				combinations: [],
				specificationsObj: [],
				isShow: false,
				goodsInfo: {},
				goodsUrl: '',
				price: [],
				specification: [],
				goodsName: "",
				specifications: [],
				swiperList: [],
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		components: {
			uniGoodsNav,
			echoneSku,
		},
		computed: {
			priceInfor() {
				let infor = ''
				if (this.price.length > 1) {
					infor = this.price[0] + '-' + this.price[this.price.length - 1]
				} else {
					infor = this.price[0]
				}
				return infor
			},
			infor() {
				let infor = ''
				for (let i in this.specification) {
					if (i == this.specification.length - 1) {
						infor += this.specification[i]
					} else {
						infor += this.specification[i] + "/"
					}
				}
				return infor
			},
		},
		async onShow() {
			let list = await this.getSwiperList().then(res => {
				this.swiperList = res.data.gallery
				this.goodsName = res.data.good_name
				this.goodsUrl = res.data.introduc_img
				this.specifications = res.data.specifications
				for (let item in res.data.specifications) {
					this.price.push(res.data.specifications[item].s_price)
					this.specification.push(res.data.specifications[item].specification)
					this.combinations.push({
						'id': item,
						"value": res.data.specifications[item].specification,
						"image": res.data.gallery[0].image_url,
						"price": res.data.specifications[item].s_price,
						"stock": "1000",
					})
				}
				this.specificationsObj = [{
					name: '规格',
					id: 0,
					list: this.specification,
				}]
			})
		},
		methods: {
			showSelectGoods() {
				this.isShow = true
			},
			hiddenSelectGoods() {
				this.isShow = false
			},
			async getSwiperList() {
				const id = await uni.getStorageSync("minuteId")
				return new Promise((resolve, reject) => {
					uni.request({
						url: "http://124.71.230.178:8080/cake/goods/detail",
						data: {
							id: id
						},
						success(r) {
							resolve(r);
						},
						fail(err) {
							reject(err);
						}
					})
				})
			},
			onClick(e) {
				if (e.index == 2) {
					uni.switchTab({
						url: "../cart/cart"
					})
				} else if (e.index == 1) {
					uni.switchTab({
						url: "../index/index"
					})
				} else {
					uni.showToast({
						title: "请联系qq：2690280865"
					})
				}

			},
			buttonClick(e) {
				if (e.index == 0) {
					this.showSelectGoods()
				} else {
					uni.switchTab({
						url: "../cart/cart"
					})
				}
			},

		},
	}
</script>

<style lang="scss">
	.goods-nav {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1000;
	}

	.swiper {
		height: 480rpx;

		.swiper-item {

			// width: 375rpx;
			image {
				width: 750rpx;
			}
		}
	}

	.selectGoods {
		width: 100%;
		padding-left: 30rpx;
		font-size: 30rpx;
		height: 50rpx;
		line-height: 50rpx;
	}

	.goods-minute {
		width: 100%;

		padding: 20rpx {}

		;

		.price {
			font-size: 50rpx;
			color: #FF2400;
			height: 80rpx;
		}

		.goods-title {
			font-size: 25rpx;
			height: 50rpx;
			margin-left: 50rpx;
			color: rgb(153, 153, 153);
		}
	}

	.good-img {
		image {
			width: 100%;
			margin-bottom: 300rpx;
		}
	}


	/* 规格选择弹窗 */
	.attr-content {
		padding: 10upx 30upx;

		.a-t {
			display: flex;

			image {
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;
			}

			.right {
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				font-size: $font-sm + 2upx;
				color: $font-color-base;
				line-height: 42upx;

				.price {
					font-size: $font-lg;
					color: $uni-color-primary;
					margin-bottom: 10upx;
				}

				.selected-text {
					margin-right: 10upx;
				}
			}
		}

		.attr-list {
			display: flex;
			flex-direction: column;
			font-size: $font-base + 2upx;
			color: $font-color-base;
			padding-top: 30upx;
			padding-left: 10upx;
		}

		.item-list {
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;

			text {
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				font-size: $font-base;
				color: $font-color-dark;
			}

			.selected {
				background: #fbebee;
				color: $uni-color-primary;
			}

			.noneActive {
				color: $uni-color-primary;
				background-color: rgba(0, 0, 0, 0.8);
			}
		}
	}

	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}

		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;

			.btn {
				height: 66upx;
				line-height: 66upx;
				border-radius: 100upx;
				width: 80%;
				box-sizing: border-box;
				background: $uni-color-primary;
				font-size: $font-base + 2upx;
				color: #fff;
				margin: 30upx auto 20upx;
			}
		}

		@keyframes showPopup {
			0% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}

		@keyframes hidePopup {
			0% {
				opacity: 1;
			}

			100% {
				opacity: 0;
			}
		}

		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}

			100% {
				transform: translateY(0%);
			}
		}

		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}

			100% {
				transform: translateY(120%);
			}
		}
	}
</style>
