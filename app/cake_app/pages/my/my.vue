<!--本页面由uniapp切片工具生成，uni-app切片-可视化设计工具(一套代码编译到7个平台iOS、Android、H5、小程序)，软件下载地址：http://www.ymznkf.com/new_view_669.htm -->
<template>
	<view class="YmContent">
		<view class="my_1 top">
			<view class="my_3 login">
				<view class="my_5" v-if="isLogin">
					<text decode="true" style="font-size: 40rpx;" class="my_7">用户名：{{user_name}}</text>
					<text decode="true" style="color: #000000;padding-top: 20rpx;margin-top: 20rpx;" class="my_8"> 
					邮箱：{{this.email}}</text>
				</view>
				<view @click="goLogin" v-else class="goLogin">
					请登录
				</view>
			</view>
			<view class="my_2" style="margin-top: 50rpx;">
				<view class="my_36">
					<view @click="goMaterial" class="my_37">
						<image src="/static/my/images/my_38_38.jpg" mode="scaleToFill" border="0" class="my_38"></image>
						<text decode="true" class="my_39">我的资料</text>
						<image src="/static/my/images/my_40_40.jpg" mode="scaleToFill" border="0" class="my_40"></image>
					</view>
					<view @click="goCart" class="my_41">
						<image src="/static/my/images/my_42_42.jpg" mode="scaleToFill" border="0" class="my_42"></image>
						<text decode="true" class="my_43">我的购物车</text>
						<image src="/static/my/images/my_44_44.jpg" mode="scaleToFill" border="0" class="my_44"></image>
					</view>
					<view @click="goProfile" class="my_45">
						<image src="/static/my/images/my_46_46.jpg" mode="scaleToFill" border="0" class="my_46"></image>
						<text decode="true" class="my_47">关于我们</text>
						<image src="/static/my/images/my_48_48.jpg" mode="scaleToFill" border="0" class="my_48"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import my from "./my.js";
	export default {
		name: "my",
		data() {
			return {
				user_name: "游客",
				email: "",
				isLogin: false
			}
		},
		async onShow() {
			await this.getUser()
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: "../login/login"
				})
			},
			goMaterial() {
				const tokenStr = uni.getStorageSync("tokenStr")
				const loginRes = this.getDateRequest({
					url: "/cake/admin/isLogin",
					method: "POST",
					data: {
						token: tokenStr
					}
				}).then(res => {
					if (res.data.code == 100) {
						uni.navigateTo({
							url: "../material/material"
						})
					} else {
						uni.showToast({
							title: "请先登录"
						})
					}
				})

			},
			goIndent() {
				uni.navigateTo({
					url: "../indent/indent"
				})
			},
			async getUser() {
				this.user_name = uni.getStorageSync("user_name")
				const res = await this.getDateRequest({
					url: "/cake/admin/info",
					data: {
						username: this.user_name
					}
				}).then(res => {
					if (res.data != null) {
						this.user_name = res.data.user_name
						this.email = res.data.email
						this.isLogin = true
					} else {
						this.isLogin = false
					}

				})
			},
			goCart() {
				uni.switchTab({
					url: "../cart/cart"
				})
			},
			goProfile() {
				uni.navigateTo({
					url: "../profile/profile"
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import url("/animate.min.css");
	@import './my.scss';

	.top {
		background-color: #F0AD4E;

		.goLogin {
			padding-top: 30rpx;
			font-size: 40rpx;
			padding-left: 50rpx;
		}
	}
</style>
