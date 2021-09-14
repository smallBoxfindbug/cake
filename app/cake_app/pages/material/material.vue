<template>
	<view>
		<view class="YmContent">
			<text decode="true" class="my_7">{{user_name}}</text>
			<text decode="true" class="my_8"> email: {{email}}</text>
		</view>
		<!-- 手风琴效果 -->
		<view class="content">
			<uni-collapse accordion="true">
				<uni-collapse-item title="修改个人信息">
					<view style="padding-left: 30rpx;">
						<label>用户名:</label>
						<input v-model="changeUserName" :placeholder="changeUserName" class="input_css" />
					</view>
					<view style="padding-left: 30rpx;">
						<label>邮箱:</label>
						<input type="text" v-model="changeEmail" :placeholder="changeEmail" class="input_css" />
					</view>
					<view style="padding-left: 30rpx;">
						<picker mode="selector" :value="value" @change="confirmSex" :range="sex"><label>选择性别</label>
						</picker>
					</view>
					<view style="padding-bottom: 30rpx;padding-left: 30rpx;	">
						<label>性别:</label>
						<text>{{selectSex}}</text>
					</view>
					<view style="padding-left: 30rpx;">
						<ming-picker @address="address" @close="close" :defaultAddress="defaultAddress">
							<label>地区选择</label>
						</ming-picker>
					</view>
					<view style="padding-left: 30rpx;">
						<label>省份:</label>
						<input disabled class="input_css" type="text" :placeholder="provinal" />
					</view>
					<view style="padding-left: 30rpx;">
						<label>城市:</label>
						<input disabled class="input_css" type="text" :placeholder="city" />
					</view>
					<view style="padding-left: 30rpx;">
						<label>地址:</label>
						<input disabled class="input_css" type="text" :placeholder="addr" />
					</view>
					<view style="padding-left: 30rpx;">
						<view class="btn" @click="saveInfor">保存修改</view>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="修改密码">
					<view style="padding: 30rpx;">
						<label>请输入旧密码:</label>
						<input password="true" v-model="oldPassword" placeholder="请输入旧密码" class="input_css" />
					</view>
					<view style="padding: 30rpx;">
						<label>请输入新密码:</label>
						<input password="true" v-model="newPassword" placeholder="请输入新密码" class="input_css" />
					</view>
					<view style="padding: 30rpx;">
						<label>请确认密码:</label>
						<input password="true" v-model="confirmPassword" placeholder="请确认密码" class="input_css" />
					</view>
					<view style="padding: 30rpx;">
						<view v-if="error" class="error">{{error}}</view>
						<view class="btn" @click="changePassword">修改</view>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="联系客服">
					<view style="padding: 30rpx;">
						电话:15329358529
					</view>
					<view style="padding: 30rpx;">
						qq:2690280865
					</view>
					<view style="padding: 30rpx;">
						微信:2690280865
					</view>

				</uni-collapse-item>
			</uni-collapse>
		</view>
		<view style="padding: 30rpx;">
			<view class="btn" @click="logOut">退出登录</view>
		</view>
	</view>
</template>

<script>
	import MingPicker from "@/components/ming-picker/ming-picker.vue"
	import uniCollapse from "components/uni-collapse/uni-collapse"
	export default {
		components: {
			uniCollapse,
			MingPicker
		},
		onShow() {
			this.getUser()
		},
		data() {
			return {
				changeUserName:"",
				changeEmail:"",
				value: [0],
				selectSex: "男",
				sex: ["男", "女"],
				addr: "暂未填写",
				provinal: "暂未填写",
				city: "暂未填写",
				defaultAddress: ["广东省", "广州市", "番禺区"],
				user_name: " ",
				email: "",
				oldPassword: undefined,
				newPassword: undefined,
				confirmPassword: undefined,
				error: "",
				id: ""
			}
		},
		methods: {
			saveInfor() {
				console.log(this.provinal)
				console.log(this.city)
				console.log(this.addr)
				console.log(this.changeEmail)
				//判断用户名是否合法
				//前后不允许有空格 可以中文、英文、空格、数字组成
				let BUName = RegExp(
					/^\S[a-zA-Z\s\u4e00-\u9fa5]+\S$/).test(this.changeUserName);
				if (!BUName) {
					uni.showToast({
						title: '请输入正确的用户名！'
					});
					return;
				}
				//判断地址是否填写
				if(this.provinal == "暂未填写" || this.city == "暂未填写"||this.addr == "暂未填写"){
					uni.showToast({
						title: '请选择地址！'
					});
					return;
				}
				//判断邮箱是否正确
				let BEmail = RegExp(
						/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
					.test(this.changeEmail);
				if (!BEmail) {
					this.error = "请输入正确的邮箱！"
					return;
				}
				const res = this.getDateRequest({
					url: "/cake/admin/updateInfo",
					method: "POST",
					data: {
						id: this.id,
						user_name: this.changeUserName,
						provinal: this.provinal,
						city: this.city,
						addr: this.addr,
						email: this.changeEmail
					}
				}).then(res => {
					console.log(res)
					if(res.data == 1) {
						uni.showModal({
							title:"修改成功！"
						})
					}else {
						uni.showModal({
							title:"修改失败！"
						})
					}
				})
			},
			confirmSex(e) {
				const index = e.detail.value
				this.selectSex = this.sex[index]
			},
			address(e) {
				this.addr = ""
				this.city = e.value[1]
				this.provinal = e.value[0]
				for (let addr of e.value) {
					this.addr += addr
				}
				this.res = e.value.join("-");
			},
			close() {},
			async getUser() {
				this.user_name = uni.getStorageSync("user_name")
				const res = await this.getDateRequest({
					url: "/cake/admin/info",
					data: {
						username: this.user_name
					}
				}).then(res => {
					if (res.data != null) {
						if (res.data.addr != undefined) {
							this.addr = res.data.addr
							this.provinal = res.data.provinal
							this.city = res.data.city
						}
						this.id = res.data.id
						this.changeUserName = this.user_name
						this.email = res.data.email
						this.changeEmail = this.email
						this.isLogin = true
					} else {
						this.isLogin = false
					}

				})
			},
			logOut() {
				const tokenStr = uni.getStorageSync("tokenStr")
				const res = this.getDateRequest({
					url: "/cake/admin/delete",
					method: "POST",
					data: {
						token: tokenStr
					}
				}).then(res => {
					uni.showToast({
						title: "您已退出登录！"
					})
					uni.clearStorageSync();
					uni.switchTab({
						url: "../index/index"
					})
				})
			},
			changePassword() {
				//判断密码是否合法
				const oldPassword = uni.getStorageSync("password")
				//判断旧密码是否输入正确
				if (this.oldPassword != oldPassword) {
					this.error = "您的旧密码输入错误"
					return
				}
				//判断新密码是否与旧密码相同
				if (this.newPassword == oldPassword) {
					this.error = "您输入的密码与旧密码一致"
					return
				}
				// 只能输入6-11个字母、数字、下划线
				let BPwd = RegExp(
					/^(\w){6,11}$/
				).test(this.newPassword)
				if (!BPwd) {
					this.error = "请输入正确的密码！"
					return;
				}
				//判断密码不能是否空
				if (this.newPassword == null || this.newPassword == undefined || this.newPassword == "") {
					this.error = "请输入密码！"
					return
				}
				//两次密码输入是否一致
				if (this.confirmPassword !== this.newPassword) {
					this.error = "两次密码不一致"
					this.newPassword = ""
					this.confirmPassword = ""
					return;
				}
				this.error = ""
				const res = this.getDateRequest({
					url: "/cake/admin/resetPassword",
					method: "POST",
					data: {
						username: this.user_name,
						password: this.newPassword
					}
				}).then(res => {
					if (res.data == 1) {
						uni.showToast({
							title: "修改成功！"
						})
					} else {
						uni.showToast({
							title: "修改失败！"
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	// @import './../../pages/my/my.scss';
	.YmContent {
		height: 100%;
		width: 100%;
		background-color: #F0AD4E !important;

		text:first-of-type {
			font-size: 20px;
			color: #FFFFFF;
		}

		text {
			font-size: 30rpx;
			display: inline-block;
			width: 100%;
			height: 60rpx;
			line-height: 60rpx;
			padding-left: 30rpx;
		}
	}

	label {
		font-size: 30rpx;
		padding-right: 30rpx;
	}

	.error {
		font-size: 0.85rem;
		color: #FF2400;
	}

	.input_css {
		border: 1rpx solid #AAA;
		border-radius: 15rpx;
		padding: 10rpx 5rpx;
		text-align: center;
		margin-bottom: 20rpx;
	}


	.btn {
		width: 80%;
		margin: 0 auto;
		color: #000000;
		font-size: 0.9rem;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		border-radius: 15rpx;
		font-weight: bold;
		text-align: center;
		background-color: #F0AD4E;
	}
</style>
