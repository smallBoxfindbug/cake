<template>
	<view class="rmd">
		<view class="rmd-content">
			<view class="rmd-item" v-for="cake in cakeList" :key="cake.id"  @click="goMinute($event,cake.id)">
				<view class="rmd-img">
					<image :src="cake.index_img" mode="widthFix"></image>
				</view>
				<view class="rmd_text">
					<text class="title">{{cake.good_name}}</text>
					<text class="synopsis">{{cake.introduc}}</text>
					<text class="price">￥{{cake.price}}</text>
				</view>
			</view>
			<view class="isShow" v-show="isShow">
				~~我是有底线的~~
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cakeList: [],
				cakeLimit: 10,
				isShow: false
			}
		},
		onLoad() {
			this.getCake()
		},
		onReachBottom() {
			this.cakeLimit += 10
			this.getCake()
		},
		methods: {
			goMinute(event, id) {
				uni.setStorageSync("minuteId",id)
				uni.navigateTo({
					url: "../minute/minute"
				})
			},
			getCake() {
				const res = this.getDateRequest({
					url: "/cake/goods/list",
					data: {
						index: 0,
						limit: this.cakeLimit,
						b_id: 3,
						s_id: 1
					}
				}).then(res => {
					const cakeObj = res.data
					const arrLength = this.cakeList.length
					this.cakeList = [...this.cakeList, ...cakeObj]
					this.cakeList = cakeObj.filter(item => item != "")
					if (this.cakeList.length == arrLength) {
						this.isShow = true
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.rmd {
		width: 100%;
		margin: 0 auto;
		background-color: rgb(244, 244, 244);

		.rmd-content {

			.rmd-item {
				border: 1px solid #f1f1f1;
				width: 90%;
				margin: 20rpx auto;
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
