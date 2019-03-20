<template>
	<view class="center" style="background-color: #F0F1F2;">
		<view class="logo" @click="goLogin" :hover-class="!hasLogin ? 'logo-hover' : ''">
			<view style="display: flex;flex-wrap:nowrap;align-items:center">
				<image class="logo-img" :src="hasLogin ? avatarUrl :avatarUrl"></image>
				<view style=" margin: auto 12upx;width: 300upx" >
					<view v-if="hasLogin">
						<p>{{uerInfo.name}}</p>
						<p>id:{{uerInfo.id}}</p>
					</view>
					<view v-else>
						<p>请登录</p>
					</view>
					
				</view>
				<view class="user-level"><text style="margin-top: 20upx;display: inline-flex;">1</text></view>
			</view>
		</view>
		
		<view >
			<view class="center-list">
				<view class="center-list-item">
					<image class="center-list-item-img" src="../../static/my/hyk.png"/>
					<text class="list-text">我的会员卡</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
			</view>
			<view class="center-list">
				<view class="center-list-item ">
					<image class="center-list-item-img" src="../../static/my/yuyue.png"/>
					<text class="list-text border-bottom">我的预约</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
				<view class="center-list-item">
					<image class="center-list-item-img" src="../../static/my/tuijian.png"/>
					<text class="list-text border-bottom">我的推荐</text>
					<text class="navigat-arrow border-bottom">&#xe65e;</text>
				</view>
				<view class="center-list-item">
					<image class="center-list-item-img" src="../../static/my/fanyong.png"/>
					<text class="list-text">我的反拥</text>
					<text class="navigat-arrow border-bottom">&#xe65e;</text>
				</view>
			</view>
			<view class="center-list">
				<view class="center-list-item" @click="goAbout">
					<image class="center-list-item-img" src="../../static/my/xiaoxi.png"/>
					<text class="list-text border-bottom">系统消息</text>
					<text class="navigat-arrow border-bottom">&#xe65e;</text>
				</view>
				<view class="center-list-item">
					<image class="center-list-item-img" src="../../static/my/guanfang.png"/>
					<text class="list-text">联系官方</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar.vue'
	import uniIcon from '../../components/uni-icon.vue'
	import {mapState} from 'vuex'
	export default {
		components: {
			uniNavBar,
			uniIcon
		},
		computed: mapState(['hasLogin']),
		data() {
			return {
				avatarUrl:"../../static/def.jpg",
				uerInfo:{
					id:'48956212',
					name:'kiki'
				}
			}
		},
		methods: {
			goLogin() {
				if(!this.hasLogin){
					uni.navigateTo({url: '/pages/login/login'});
				}
			},
			goAbout() {
				uni.navigateTo({
				});
				uni.navigateTo({
				});
			}
		}
	}
</script>
<style>
	.logo {
		width: 750upx;
		height: 420upx;
		padding: 30upx;
		box-sizing: border-box;
		flex-direction: row;
		align-items: center;
		background: url('../../static/my/bg02.png') center center no-repeat;
		background-size: cover;
		color: #ffefef;
	}
	.title {
		font-size: 15px;
		line-height: 20px;
		color: #333333;
		padding: 15px;
	}

	.city {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-left:8px;
	}

	.input-view {
		width: 92%;
		display: flex;
		background-color: #e7e7e7;
		height: 30px;
		border-radius: 15px;
		padding: 0 4%;
		flex-wrap:nowrap;
		margin:7px 0;
		line-height:30px;
	}
	
	.input-view .uni-icon{
		line-height:30px !important;
	}

	.input-view .input {
		height:30px;
		line-height:30px;
		width:94%;
		padding: 0 3%;
	}
	.uni-navbar-container-title{
		font-size: 16px;
		text-align: center;
		padding-right: 30px;
		font-weight: bold;
	}
	.center-list-item-img{
		width: 80upx;
		height: 80upx;
		margin-right: 15upx;
	}
</style>
