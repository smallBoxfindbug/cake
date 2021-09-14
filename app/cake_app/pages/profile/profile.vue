<template>
	<view>
		<view class="title"  @click="goConsulting">
			开店咨询
			<image src="/static/my/images/my_48_48.jpg" mode="scaleToFill" border="0" class="my_48"></image>
		</view>
		<view  class="title" @click="goPlatform">
			平台规则
			<image src="/static/my/images/my_48_48.jpg" mode="scaleToFill" border="0" class="my_48"></image>
		</view>
		<uni-collapse accordion="true">	
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
</template>

<script>
	import MingPicker from "@/components/ming-picker/ming-picker.vue"
	export default {
		components: {
			MingPicker
		},
		data() {
			return {

			}
		},
		methods: {
			goConsulting(){
				uni.navigateTo({
					url:"../consulting/consulting"
				})
			},
			goPlatform() {
				uni.navigateTo({
					url:"../material/platform/platform"
				})
			}
		}
	}
</script>

<style lang="scss">
	@import url("./profile.scss");
	.title{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		color: 30rpx;
		font-size: 30rpx;
		padding-left: 30rpx;
		border-bottom: 2px solid rgb(241,241,241);
		image {margin-left: 550rpx;
			width: 50rpx;
			height: 50rpx;
			vertical-align: middle;
		}
	}
</style>
