<script>
	export default {
		onLaunch: function() {
		    uni.getSystemInfo({
		        success: function(e) {
		            let barHeight = 0;
		            // #ifndef MP  
		            if (e.platform == 'android') {
		                barHeight = e.statusBarHeight + 50
		            } else {
		                barHeight = e.statusBarHeight + 45
		            }
		            // #endif
		
		            // #ifdef MP-WEIXIN  
		            let custom = wx.getMenuButtonBoundingClientRect()
		            barHeight = custom.bottom + custom.top - e.statusBarHeight
		            // #endif  
		
		            // #ifdef MP-ALIPAY  
		            barHeight = e.statusBarHeight + e.titleBarHeight
		            // #endif
		
		            // 本地缓存
		            // uni.setStorageSync('bar_height', barHeight);  // 状态栏加导航栏的高度
		            // uni.setStorageSync('screen_width', e.screenWidth);  // 屏幕宽度
					console.log(barHeight)
		        }
		    })
		}
	}
</script>

<style>
	/*每个页面公共css */
	.bgc {
		background-color: rgb(244,244,244);
	}
</style>
