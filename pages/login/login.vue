<template>
    <view>
		<view class="status"></view>
		<view class="garden-right"><image src="../../static/garden-right.png" mode=""></image></view>
		<view class="garden-left"><image src="../../static/garden-left.png" mode=""></image></view>
		<view class="login-text">骉轟科技</view>
		<view class="subtitle">BiaoHong  Technology</view>
		<form class="form-login" @submit="formSubmit">
			<label for="userName">ID/手机号</label>
			<view>
				<input id="userName" name="username" focus class="login-input" type="text" v-model="a.b" placeholder="请输入ID/手机号"/>
				<image src="../../static/close.png" mode="widthFix" @tap="closeInput"></image>
			</view>
			<label for="">密码</label>
			<view>
				<input class="login-input" name="password" :type="showType?'text':'password'" value="" placeholder="请输入密码"/>
				<image src="../../static/psd-switch.png" mode="widthFix" @tap="psdShow"></image>
			</view>
			<view class="psd-register">
				<text @tap="goOtherPage('forget-psd')">忘记密码？</text>
				<text style="color: #e60012;" @tap="goOtherPage('register')">新用户注册</text>
			</view>
			<button form-type="submit" type="warn" class="login-btn">登录</button>
			<navigator url="" class="assent">登录即代表阅读并同意<text style="color: #e60012;">《服务条款》</text></navigator>
		</form>
	</view>
</template>

<script>
	import service from '../../common/service.js';
	import appRequest from '../../common/appRequest.js';
	import {
	    mapState,
	    mapMutations
	} from 'vuex'
	export default {
	components:{
		service,
		appRequest
	},
    data() {
        return {
            userName: "",
			showType: false,
			a: {
				b: '123'
			}
        }
    },
	onLoad: function (option) {
		
    },
    methods: {
        closeInput (e) {
			this.a.b = '';
			this.$set(this.a, "b", '');
		},
		psdShow () {
			this.showType = !this.showType;
		},
		sendCode () {
			
		},
		goOtherPage (url) {
			uni.navigateTo({
				url: url
			});
		},
		formSubmit (e) {
			uni.switchTab({
				url: "/pages/index/index"
			});
// 			uni.request({
// 				url: appRequest.getRequestUrl()+"module=Login",
// 				data: JSON.stringify(e.detail.value),
// 				method:"POST",
// 				header:{'content-type':'application/x-www-form-urlencoded'},
// 				success: (result) => {
// 					if (result.statusCode == 200) {
// 						let loginInfo=result.data;
// 						if(loginInfo.error!='0'){
// 							uni.showToast({
// 							    icon: 'none',
// 							    title: loginInfo.msg
// 							});
// 						}else{
// 							service.setToken(loginInfo.Token);
// 							this.toMain(this.mobile);
// 						}
// 					}
// 				}
// 			});
		}
    }
}
</script>

<style>
	.status {
		height: var(--status-bar-height);
		background: #dedede;
	}
	.garden-right {
		float: right;
	}
	.garden-right image {
		width: 257upx;
		height: 313upx;
	}
	.garden-left {
		padding-top: 100upx;
		padding-left: 22upx;
	}
	.garden-left image {
		width: 105upx;
		height: 105upx;
	}
	.login-text {
		margin-top: 54upx;
		padding-left: 23upx;
		font-size: 55upx;
		letter-spacing: 8upx;
		color: #333333;
	}
	.subtitle {
		padding-left: 23upx;
		font-size: 27upx;
		color: #333333;
	}
	.form-login {
		display: block;
		width: 100%;
	}
	.form-login label {
		font-size: 27upx;
		padding: 0 75upx;
		color: #999;
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
		border-bottom: 1upx solid #6d788b;
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
	.go-login {
		padding: 0 75upx;
		margin-top: 25upx;
		display: block;
		font-size: 30upx;
		color: #333;
	}
	.login-btn {
		margin-top: 70upx;
		width: 600upx;
		height: 100upx;
		line-height: 100upx;
		border-radius: 50upx;
		font-size: 33upx;
		color: #fff;
	}
	.assent {
		font-size: 27upx;
		color: #333333;
		margin: 70upx 0 60upx;
		text-align: center;
	}
	.psd-register {
		display: flex;
		justify-content: space-between;
		padding-top: 20upx;
	}
</style>
