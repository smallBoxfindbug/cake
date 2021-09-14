<template>
	<view>
		<view class="categories-nav">
			<view class="categories-item" @click="getCategories($event)" data-id=1>
				<view class="categories-img">
					<image src="../../static/img/categories/cake.png" mode="widthFix"></image>
				</view>
				<text>蛋糕</text>
			</view>
			<view class="categories-item" @click="getCategories($event)" data-id=2>
				<view class="categories-img">
					<image src="../../static/img/categories/tea.png" mode="widthFix"></image>
				</view>
				<text>下午茶</text>
			</view>
			<view class="categories-item" @click="getCategories($event)" data-id=3>
				<view class="categories-img">
					<image src="../../static/img/categories/gift.png" mode="widthFix"></image>
				</view>
				<text>手信</text>
			</view>
		</view>
		<view class="rmd">
			<view class="rmd-content">
				<view class="rmd-item" v-for="goods in goodsList" :key="goods.id" @click="goMinute($event,goods.id)"
					data-path="../minute/minute">
					<view class="rmd-img">
						<image :src="goods.index_img" mode="widthFix"></image>
					</view>
					<view class="rmd_text">
						<text class="title">{{goods.good_name}}</text>
						<text class="synopsis">{{goods.introduc}}</text>
						<text class="price">￥{{goods.price}}</text>
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
	export default {
		data() {
			return {
				cakeLimit: 10,
				goodsList: [],
				isShow: false,
				id: 1
			}
		},
		onLoad() {
			this.getCategories()
		},
		onReachBottom() {
			this.cakeLimit += 10
			this.getCategories()
		},
		methods: {
			goMinute(event,id) {
				uni.setStorageSync("minuteId",id)
				uni.navigateTo({
					url:"../minute/minute"
				})
			},
			getCategories(event) {
				if (event !== undefined) {
					this.id = event.currentTarget.dataset.id
				}
				const res = this.getDateRequest({
					url: "/cake/goods/list",
					data: {
						index: 0,
						limit: this.cakeLimit,
						b_id: this.id,
						s_id: 0
					}
				}).then(res => {
					const arrLength = this.goodsList.length
					this.goodsList = res.data
					if (arrLength == this.goodsList.length) {
						this.isShow = true
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.categories-nav {
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: row;
		padding-top: 20px;
		background-color: #FFFFFF;
		z-index: 1000;

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
		margin: 300rpx auto 0;

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
