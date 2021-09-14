# luanqing-login

##参数简要说明

名称|说明
--|--
avatar|应用头像或用户头像
loginBtnText|主按钮文字
unLoginBtnText|次按钮文字
appName|应用名字或用户名字
versionName|应用版本号
checkVaild|是否需要检验账号密码完整性 默认需要(true)
doLogin|点击主按钮的回调，会带回已经输入的账号密码{account:xxx,password:xxxx}
doCancel|点击次按钮的回调，一般为取消登录

##使用方法：
```
<template>
	<view class="content">
		<luanqing-login appName="栾青科技" checkVaild="true" versionName="" @doLogin="login" @doCancel="cancel"></luanqing-login>
	</view>
</template>
```