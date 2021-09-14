<template>
	<!-- 商品内容区域 -->
	<view class="rmd">
		<view>
			<!-- 商品导航区域 -->
			<view class="goods-nav" data->
				<view class="nav-item" data-id=1 :class="{active:id==1}" @click="getClassifyCake($event)">
					鲜果蛋糕
				</view>
				<view class="nav-item" data-id=2 :class="{active:id==2}" @click="getClassifyCake($event)">
					芝士慕斯蛋糕
				</view>
				<view class="nav-item" data-id=3 :class="{active:id==3}" @click="getClassifyCake($event)">
					混合型蛋糕
				</view>
			</view>
			<view class="rmd-content">
				<view class="rmd-item" v-for="cake in cakeList" :key="cake.id" @click="goMinute($event,cake.id)">
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cakeList: [],
				isShow: false,
				isActive: false,
				cakeLimit: 10,
				id: 1,
			}
		},
		onLoad() {
			this.getClassifyCake()
		},
		onReachBottom() {
			this.cakeLimit += 10
			this.getClassifyCake()
		},
		methods: {
			goMinute(event,id){
				uni.setStorageSync("minuteId",id)
				uni.navigateTo({
					url: "../minute/minute"
				})
			},
			getClassifyCake(event) {
				if (event !== undefined) {
					this.id = event.currentTarget.dataset.id
				}
				const res = this.getDateRequest({
					url: "/cake/goods/list",
					data: {
						index: 0,
						limit: this.cakeLimit,
						b_id: 0,
						s_id: this.id
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

		.goods-nav {
			width: 100%;
			height: 80rpx;
			display: flex;
			flex-direction: row;
			flex: 1;
			text-align: center;
			border-top: 1px solid rgb(205, 204, 209);
			border-bottom: 1px solid rgb(205, 204, 209);

			.nav-item {
				width: 30%;
				height: 80rpx;
				margin-left: 20rpx;
				line-height: 80rpx;
				text-align: center;
				color: rgb(170, 129, 117);
			}

			.active {
				color: #ff0000;
				border-bottom: 1px solid #ff0000;
			}
		}

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
