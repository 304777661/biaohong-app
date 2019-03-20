<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">账号：</text>
                <m-input class="m-input" type="text" clearable focus v-model="mobile" placeholder="请输入手机号"></m-input>
            </view>
            <view class="input-row">
                <text class="title">密码：</text>
                <m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
            </view>
        </view>
        <view class="btn-row" style="margin: 25upx 0;">
            <button type="primary" class="primary" @tap="bindLogin">登录</button>
        </view>
        <view class="action-row c-6">
            <navigator url="../reg/reg">注册手机</navigator>
            <text>|</text>
            <navigator url="../login/login-test">忘记密码</navigator>
        </view>

    </view>
</template>

<script>
    import service from '../../common/service.js';
	import appRequest from '../../common/appRequest.js';
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import mInput from '../../components/m-input.vue'

    export default {
        components: {
            mInput
        },
        data() {
            return {
                mobile: '',
                password: '',
                positionTop: 0
            }
        },
        computed: mapState(['forcedLogin','hasLogin']),
        methods: {
            ...mapMutations(['login']),
            initPosition() {
                this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
            },
            bindLogin() {
                if (this.mobile.length < 5) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号最短为 5 个字符'
                    });
                    return;
                }
                if (this.password.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    });
                    return;
                }
                let data = {
                    "mobile": this.mobile,
                    "password":this.password
                };
                uni.request({
                	url: appRequest.getRequestUrl()+"module=Login",
                	data: JSON.stringify(data),
					method:"POST",
					header:{'content-type':'application/x-www-form-urlencoded'},
                	success: (result) => {
                		if (result.statusCode == 200) {
							let loginInfo=result.data;
                			if(loginInfo.error!='0'){
                				uni.showToast({
                				    icon: 'none',
                				    title: loginInfo.msg
                				});
                			}else{
                				service.setToken(loginInfo.Token);
								this.toMain(this.mobile);
                			}
                		}
                	}
                });
            },
			toMain(userName) {
                this.login(userName);
                if (this.hasLogin) {
                    uni.reLaunch({url: '../../pages/index/index'});
                }

            }
        },
        onLoad() {
            this.initPosition();
        }
    }
</script>

<style>
	
   body,
	page {
	    min-height: 100%;
	    display: flex;
	}
	page {
	    width: 100%;
	    height: 100%;
	    display: block;
	}
    .action-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .action-row navigator {
        color: #888888;
        padding: 0 20upx;
    }

    .oauth-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .oauth-image {
        width: 100upx;
        height: 100upx;
        border: 1upx solid #dddddd;
        border-radius: 100upx;
        margin: 0 40upx;
        background-color: #ffffff;
    }

    .oauth-image image {
        width: 60upx;
        height: 60upx;
        margin: 20upx;
    }
	.content {
		height: 100%;
	    display: flex;
	    flex: 1;
	    flex-direction: column;
	    background-color: #F0F1F2;
	    padding: 20upx;
	}
</style>
