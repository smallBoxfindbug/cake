<template>
	<view class="bgc">
		<!-- 搜索框区域 -->
		<jm-search></jm-search>
		<!-- 轮播图区域 -->
		<view>
			<swiper indicator-dots="true" circular indicator-active-color="#ffffff" autoplay interval="3000"
				duration="1000">
				<swiper-item v-for="(img,index) in swiperList" :key="index">
					<view class="swiper-item">
						<image :src="img.img_url"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 分类导航 -->
		<view class="categories-nav">
			<view class="categories-item" @click="navigationTo($event)" data-path="../cake/cake">
				<view class="categories-img">
					<image src="../../static/img/categories/cake.png" mode="widthFix"></image>
				</view>
				<text>蛋糕</text>
			</view>
			<view class="categories-item" @click="navigationTo($event)" data-path="../tea/tea">
				<view class="categories-img">
					<image src="../../static/img/categories/tea.png" mode="widthFix"></image>
				</view>
				<text>下午茶</text>
			</view>
			<view class="categories-item" @click="navigationTo($event)" data-path="../gift/gift">
				<view class="categories-img">
					<image src="../../static/img/categories/gift.png" mode="widthFix"></image>
				</view>
				<text>手信</text>
			</view>
		</view>
		<!-- 热门推荐 -->
		<view class="rmd">
			<text class="rmd-title">热门推荐</text>
			<view class="rmd-content">
				<view class="rmd-item" v-for="(recom,index) in recomList" :key="index" @click="navigationTo($event,recom.id)"
					data-path="../minute/minute">
					<view class="rmd-img">
						<image :src="recom.index_img" mode="widthFix"></image>
					</view>
					<view class="rmd_text">
						<text class="title">{{recom.good_name}}</text>
						<text class="synopsis">{{recom.introduc}}</text>
						<text class="price">￥{{recom.price}}</text>
					</view>

				</view>
				<view class="isShow" v-show="isShow">
					~~我是有底线的~~
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	import jmSearch from "../search/jm-search.vue"
	export default {
		name: 'index',
		comments: {
			jmSearch
		},
		data() {
			return {
				searchValue: "",
				swiperList: [],
				recomList: [],
				recomI: 10,
				isShow: false
			}
		},
		onLoad() {
			this.getSwiper()
			this.getRecom()
		},
		onReachBottom() {
			this.recomI = +10
			this.getRecom()
		},
		methods: {
			input() {},
			navigationTo(event, id) {
				uni.setStorageSync("minuteId", id)
				uni.navigateTo({
					url: event.currentTarget.dataset.path
				})

			},
			getSwiper() {
				const res = this.getDateRequest({
					url: "/cake/goods/Ibanner",
					data: {
						i: 5
					}
				}).then((res) => {
					this.swiperList = res.data
				})
			},
			getRecom() {
				const res = this.getDateRequest({
					url: "/cake/goods/recom",
					data: {
						i: this.recomI
					}
				}).then((res) => {
					const newRecomList = res.data
					const arrLength = this.recomList.length
					this.recomList = [...this.recomList, ...newRecomList]
					this.recomList = this.recomList.filter(item => item !== "")
					if (this.recomList.length == arrLength) {
						this.isShow = true
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.swiper-item {
		image {
			width: 750rpx;
		}
	}

	.drawer {
		width: 500rpx;
		position: fixed;
		top: 100rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		z-index: 100;
		padding: 10px 0px;
		opacity: 0.8;
		background-color: #FFFFFF;
		border-radius: 0 0 15px 0;

		.drawer_item {
			width: 28%;
			margin-left: 10px;

			.drawer_item_img {
				display: block;
				width: 65rpx;
				margin: 0 auto;
			}

			text {
				display: block;
				font-size: 30rpx;
				text-align: center;
			}
		}

	}

	.categories-nav {
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-top: 20px;

		.categories-item {
			width: 25%;
			text-align: center;
			margin: 0 auto;

			.categories-img {
				width: 100rpx;
				height: 100rpx;
				border: 1px solid #ffff00;
				border-radius: 100rpx;
				padding: 10px;
				margin: 0 auto;

				image {
					display: block;
					margin: 0 auto;
					width: 80%;
				}
			}

			text {
				display: block;
				padding: 10px;
			}
		}
	}

	.rmd {
		width: 100%;
		margin: 0 auto;

		.rmd-title {
			text-align: center;
			font-size: 50rpx;
			height: 100rpx;
			line-height: 100rpx;
			display: block;
			background-color: #FFFFFF;
		}

		.rmd-content {
			background-color: rgb(244, 244, 244);

			.rmd-item {
				border: 1px solid #f1f1f1;
				width: 90%;
				margin: 3% auto;
				background-color: rgb(255, 255, 255);
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				padding: 20rpx;
				border-radius: 20rpx;

				.rmd-img {
					width: 60%;
					height: 80%;
					vertical-align: middle;

					image {
						width: 90%;
						height: 100%;
					}
				}

				.rmd_text {
					width: 40%;
					display: flex;
					flex-direction: column;

					.synopsis {
						font-size: 20rpx;
						color: rgb(170, 129, 117);
						display: block;
						width: 100%;
					}

					.title {
						font-size: 30rpx;
						color: #000000;
						width: 100%;
						height: 80rpx;
					}

					.price {
						text-align: left;
						margin-top: 5px;
						display: block;
						color: rgb(255, 0, 0);
						font-size: 20rpx;
						width: 100%;
						margin-top: 20rpx;
						height: 60rpx;
					}
				}



			}

			.isShow {
				width: 90%;
				margin: 0 auto;
				margin-top: -40rpx;
				padding: 20rpx;
				text-align: center;
				font-size: rbg(170, 129, 117);
				font-size: 30rpx;
				background-color: #FFFFFF;
			}
		}
	}
</style>
