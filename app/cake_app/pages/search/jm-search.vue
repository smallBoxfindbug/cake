<template>
	<view>
		<!-- 搜索条 -->
		<view class="searchTopBox">
			<view class="searchBoxRadius">
				<view class="grace-search-icon searchBoxIcon"></view>
				<input class="searchBoxIpt" type="search" v-model="ipt" @focus="isShow=true"
					@confirm="searchNow($event)" :placeholder="ipt"></input>
			</view>
			
		</view>
		<!-- 搜索历史 -->
		<view class="searchBotBox" v-show="isShow">
			<view class="searchHistoryBox" v-show="isSearch">
				<view class="searchHistoryBoxItem" @click="goGoods" v-for="item of searchList" :key='item.id'
					:data-id="item.id">
					{{item.good_name}}
				</view>
			</view>
			<view class="ov">
				<view class="fl">搜索历史</view>
				<view @click="clearKey" class="fr grace-more-r grace-search-remove">清除搜索历史</view>
			</view>
			<view class="searchHistoryBox">
				<view class="searchHistoryBoxItem" v-for="(item,index) in searchKey" :key='index' :data-str="item" @click="setStr">
					{{item}}
				</view>
			</view>
			<view class="close"  @click="isShow=false">
				收起
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				searchList: [],
				searchKey: [],
				ipt: '',
				searchClose: true,
				isShow: false,
				isSearch: false

			}
		},
		created() {
			this.getRecom()
		},
		onShow() {
			var vv = uni.getStorageSync('searchLocal');
			var arr = vv.split("-");
			this.searchKey = arr;
		},
		methods: {
			async getRecom() {
				const res = await this.getDateRequest({
					url: "/cake/goods/recom",
					data: {
						i: 1
					}
				}).then((res) => {
					this.ipt = res.data[0].good_name
				})
			},
			setStr(event){
				console.log(event)
				const str = event.currentTarget.dataset.str
				this.ipt =str
				this.searchNow()
			},
			goGoods(event) {
				// console.log(event)
				const searchId = event.currentTarget.dataset.id
				uni.setStorageSync("minuteId", searchId)
				uni.navigateTo({
					url: "../../pages/minute/minute"
				})
			},
			clearKey: function() {
				var that = this;
				uni.showModal({
					title: '提示',
					content: '点击确定将删除所有历史信息，确定删除吗？',
					success: function(res) {
						if (res.confirm) {
							that.searchKey = [];
							uni.setStorage({
								key: 'searchLocal',
								data: that.searchKey
							});

						} else if (res.cancel) {

						}
					}
				});

			},
			 searchNow(e) {
				if (this.ipt == '') {
					uni.showToast({
						title: '未输入搜索关键字',
						icon: 'none',
						duration: 1000
					});
					return;
				}
				var that = this;
				var newArr = that.searchKey;
				newArr.push(this.ipt);
				this.searchKey = newArr;
				var newStr = newArr.join('-');
				const res = this.getDateRequest({
					url: "/cake/goods/fuzzy",
					data: {
						fuzz: this.ipt
					}
				}).then(res => {
					// console.log(res)
					this.searchList = res.data
					console.log(res)
					if (res.data.length != 0) {
						this.isSearch = true
					}
				})
			}
		}
	}
</script>
<style>
	page {
		background: #FFF;
	}

	.ov {
		overflow: hidden;
	}

	.fl {
		float: left;
	}

	.fr {
		float: right;
		font-size: 30rpx;
	}

	.searchTopBox {
		width: 100%;
		background-color: rgb(240, 173, 78);
		height: 100upx;
		box-sizing: border-box;
		padding-top: 15upx;
	}

	.searchBoxRadius {
		width: 90%;
		height: 70upx;
		background-color: #fff;
		margin-left: 5%;
		overflow: hidden;
		border-radius: 35upx;
	}

	.searchBoxIcon {
		font-size: 40upx;
		margin-top: 20upx;
		margin-left: 20upx;
		float: left;
	}

	.searchBoxIpt {
		height: 70upx;
		line-height: 70upx;
		margin-left: 20upx;
		float: left;
	}

	.searchBotBox {
		background-color: rgb(244, 244, 244);
		width: 100%;
		margin-top: 30upx;
		padding: 15upx 3%;
		box-sizing: border-box;
		position: absolute;
		left: 0;
		right: 0;
		top: 70upx;
		padding-bottom: 30upx;
		z-index: 1;
		opacity: 0.8;
	}

	.searchHistoryBox {
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		margin-top: 40upx;
	}

	.searchHistoryBoxItem {
		float: left;
		font-size: 26upx;
		color: #666;
		line-height: 46upx;
		height: 46upx;
		padding: 0 20upx;
		border-radius: 23upx;
		margin-left: 15upx;
		margin-bottom: 20upx;
		border: 1px solid #ccc;
	}
	.close {
		position: absolute;
		right: 0;
		bottom: 0;
		font-size: 20rpx;
		padding: 50upx 20upx 20upx;
	}
</style>
