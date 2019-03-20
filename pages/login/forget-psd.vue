<template>
	<view>
		<form class="form-login" @submit="formSubmit">
			<label for="userName">ID/手机号</label>
			<view>
				<input id="userName" name="username" focus class="login-input" type="text" v-mode="userName" placeholder="请输入ID/手机号"/>
				<image src="../../static/close.png" mode="widthFix" @tap="closeInput"></image>
			</view>
			<label for="">验证码</label>
			<view>
				<input class="login-input" name="verifCode" type="text" value="" placeholder="验证码"/>
				<image class="verif-code" src="../../static/verif-code.png" mode="widthFix" @tap="sendCode"></image>
			</view>
			<label for="">新密码</label>
			<view>
				<input class="login-input" name="password" :type="showType?'text':'password'" value="" placeholder="至少6位数"/>
				<image src="../../static/psd-switch.png" mode="widthFix" @tap="psdShow"></image>
			</view>
			<button form-type="submit" type="warn" class="login-btn">确定</button>
		</form>
	</view>
</template>

<script>
</script>

<style>
	.form-login {
		display: block;
		width: 100%;
	}
	.form-login label {
		font-size: 27upx;
		padding: 0 75upx;
		color: #333333;
		margin-top: 30upx;
		display: block;
		
	}
	.form-login view {
		margin: 0 75upx;
		position: relative;
		/* height: 75upx;
		line-height: 75upx;
		border-bottom: 1upx solid #6d788b; */
		box-sizing: content-box;
	}
	.form-login .login-input {
		padding: 0 150upx 0 0;
		height: 70upx;
		line-height: 60upx;
		color: #333333;
		/* padding-right: 150upx; */
		/* border-bottom: 1upx solid #6d788b; */
		background-color: #f5f5f5;
		padding-left: 24upx;
	}
	.form-login .login-input:focus {
		border-bottom-color: #e60012;
	}
	.form-login image {
		width: 40upx;
		position: absolute;
		top: 20upx;
		right: 45upx;
	}
	.form-login image.verif-code {
		width: 150upx;
		height: 29upx;
		right: 0;
	}
	.login-btn {
		margin-top: 100upx;
		width: 600upx;
		height: 80upx;
		border-radius: 40upx;
	}
</style>
