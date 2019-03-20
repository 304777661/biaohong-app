<template>
	<view>
		<view class="content">
			<view class="mb-card">
			<view class="mb-card-info">
				<view class="mb-card-info-l c-name">
					创始会员卡
				</view>
				<view class="mb-card-info-r c-money">
					￥10000
				</view>
			</view>
			
			<view style="display: flex;flex-direction: column;margin: 30upx 0;">
				<view class="mb-card-info-l c-b-info">
					发行单位 : 汽车圈
				</view>
				<view class="mb-card-info-r c-b-info">
					有效时间 : 2018-12-15 至 2019-12-25
				</view>
			</view>
			<view class="mb-card-info">
				<view class="mb-card-info-l c-b-info" style="font-size: 34upx;">
					基地会员卡说明
				</view>
				<view class="mb-card-info-r">
					<button type="primary" plain="true" style="width: auto;border: none;background: #DB683F;color: #FFFFFF;">立即购买</button>
				</view>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar.vue'
	import uniIcon from '../../components/uni-icon.vue'
	export default {
		data() {
			return {
			}
		},
		components: {
			uniNavBar,
			uniIcon
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		padding: 15upx 30upx;
	}
	.c-name{color: #db683f;font-size: 48upx;}
	.c-money{color: #995036; font-size: 38upx;}
	.c-b-info{color: #f46969; font-size: 34upx;}
	uni-button[type=primary][plain]{}
    .mb-card{
	   width: 100%;
	   height: 360upx;
	   padding: 30upx;
	   border-radius: 32upx;
	   box-sizing: border-box;
	   background: url('../../static/huiyuan/bg.png') center center no-repeat;
	   background-size: cover;
	   color: #ffefef;
   }
   .mb-card-info{
	   display: flex;
	   flex-direction: row;
	   flex-wrap:nowrap;
	   justify-content:space-between;
	   align-items: center;
   }
</style>
