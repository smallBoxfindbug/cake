<template>
	<view class="content">
		<view class="content">
			<image class="logo" :src="avatar"></image>
			<view class="info">
				<view class="appname">{{appName}}</view>
				<view class="version">{{versionName}}</view>
			</view>
			<input v-model="username" placeholder="请输入账号" class="input_css" />
			<input password="true" v-model="password" placeholder="请输入密码" class="input_css" />
			<input password="true" v-model="confirmPassword" placeholder="请确认密码" class="input_css" />
			<input v-show="isShowRegister" type="text" v-model="email" placeholder="请输入邮箱" class="input_css" />
			<view v-if="error" class="error">{{error}}</view>
			<view v-show="isShowLogin" class="btn" @click="doLogin">{{loginBtnText}}</view>
			<text v-show="isShowLogin" class="text_class" @click="showRegister">没有账号？去注册!</text>
			<view v-show="isShowRegister" class="btn" @click="doRegister">{{registerBtnText}}</view>
			<text v-show="isShowRegister" class="text_class" @click="showLogin">已有账号？去登录!</text>
			<view class="btn_un" @click="doBack">{{unLoginBtnText}}</view>
		</view>
	</view>
</template>

<script>
	const app = getApp();
	export default {
		data() {
			return {
				username: undefined,
				password: undefined,
				confirmPassword: undefined,
				email: undefined,
				error: "",
				isShowRegister: false,
				isShowLogin: true
			}
		},
		props: {
			avatar: {
				type: String,
				default: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdiy.qqjay.com%2Fu%2Ffiles%2F2012%2F0217%2Fb693a3b6d232ffe861da22287c888729.jpg&refer=http%3A%2F%2Fdiy.qqjay.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623147216&t=a2af93e9fdced335cca87e4a4c77ca24",
			},
			loginBtnText: {
				type: String,
				default: "登录"
			},
			registerBtnText: {
				type: String,
				default: "注册"
			},
			unLoginBtnText: {
				type: String,
				default: "暂不登录"
			},
			appName: {
				type: String,
				default: "登录模块"
			},
			versionName: {
				type: String,
				default: "v1.0"
			},
		},
		methods: {
			showLogin() {
				//显示登录按钮和提示信息
				this.isShowLogin = true
				//隐藏注册按钮和提示信息
				this.isShowRegister = false
				this.error = ""
			},
			showRegister() {
				//隐藏登录按钮和提示信息
				this.isShowLogin = false
				//显示注册按钮和提示信息
				this.isShowRegister = true
				this.error = ""
			},
			doLogin() {
				// 校验账号密码完整性
				//判断用户名是否合法
				//前后不允许有空格 可以中文、英文、空格、数字组成
				let BUName = RegExp(
						/^\S[a-zA-Z\s\u4e00-\u9fa5]+\S$/)
					.test(this.username);
				if (!BUName) {
					this.error = "请输入正确的用户名！"
					return;
				}
				//判断密码是否合法
				// 只能输入6-11个字母、数字、下划线 
				let BPwd = RegExp(
					/^(\w){6,11}$/)
					.test(this.password)
				if (!BPwd) {
					this.error = "请输入正确的密码！"
					return;
				}
				//判断密码不能是否空
				if (this.password == null || this.password == undefined || this.password == "") {
					this.error = "请输入密码！"
					return
				}
				//两次密码输入是否一致
				if (this.confirmPassword !== this.password) {
					this.error = "两次密码不一致"
					this.password = ""
					this.confirmPassword = ""
					return;
				}
				//将用户信息作为参数进行登录
				//用户名：username
				//密码：password
				const res = this.getDateRequest({
					url: "/cake/admin/login",
					method: "POST",
					data: {
						username: this.username,
						password: this.password,
					},
				}).then(res => {
					if (res.data.code == 100) {
						uni.setStorageSync("user_name", res.data.data.user_name)
						uni.setStorageSync("password", this.password)
						uni.setStorageSync("tokenStr", res.data.data.tokenStr)
						uni.switchTab({
							url: "../index/index",
							success() {
								console.log("fffff")
								window.location.reload("http://localhost:8081/pages/cart/cart")
							}
						})
					}else{
						uni.showToast({
							title:"密码错误，登录失败"
						})
					}
				})
			},
			doRegister() {
				// 校验账号密码邮箱完整性
				//判断用户名是否合法
				//前后不允许有空格 可以中文、英文、空格、数字组成
				let BUName = RegExp(
						/^\S[a-zA-Z\s\u4e00-\u9fa5]+\S$/)
					.test(this.username);
				if (!BUName) {
					this.error = "请输入正确的用户名！"
					return;
				}

				//判断密码是否合法
				// 1.位数大于六
				// 2.必须包含小写字母
				// 3.必须包含大写字母
				// 4.必须包含数字
				let BPwd = RegExp(
					/^[A-Za-z0-9]{6,}$/.test(this.password) &&
					/[A-Z]+/.test(this.password) &&
					/[a-z]+/.test(this.password) &&
					/[0-9]+/.test(this.password))
				if (!BPwd) {
					this.error = "请输入正确的密码！"
					return;
				}
				//判断密码是否为空
				if (this.password == null || this.password == undefined || this.password == "") {
					this.error = "请输入密码！"
					return
				}
				//判断两次输入的密码是否一致
				if (this.confirmPassword !== this.password) {
					this.error = "两次密码不一致"
					this.password = ""
					this.confirmPassword = ""
					return;
				}
				this.error = ""
				//判断邮箱是否合法
				let BEmail = RegExp(
						/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
					.test(this.email);
				if (!BEmail) {
					this.error = "请输入正确的邮箱！"
					return;
				}
				//将用户信息作为参数进行注册
				//用户名：username
				//密码：password
				//邮箱：email
				const res = this.getDateRequest({
					url: "/cake/admin/regist",
					method: "POST",
					data: {
						username: this.username,
						password: this.password,
						email: this.email
					}
				}).then(res => {
					console.log(res)
					if (res.data == 1) {
						uni.showToast({
							title: "注册成功!"
						})
						this.showLogin()
					} else if (res == -1) {
						uni.showToast({
							title: "注册失败!"
						})
					}
				})
			},
			doBack() {
				uni.switchTab({
					url: "../index/index"
				})
			}
		}
	}
</script>

<style lang="scss">
	@import url("login.css");

	.text_class {
		font-size: 20rpx;
	}
</style>
