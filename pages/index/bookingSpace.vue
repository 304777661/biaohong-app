<template>
	<view class="content">
		<image src="../../static/2.png" style="border-radius: 10upx;width: 100%;"></image>
		<view class="card-img-info">
			汽车圈圈文推荐
		</view>
		<view class="l-info">
			<view class="base-info">
				<view class="base-item">
					<image class="i-icon" src="../../static/yy/yyrq.png"/>
					<text class="c-3 f-18">预约日期</text>
				</view>
				<view class="base-item">
					<text class="c-9 f-16">开始日期</text>
					<text class="c-3 m-0-5 f-16">至</text>
					<text class="c-9 f-16">结束日期</text>
				</view>
			</view>
			<view class="base-info">
				<view class="base-item"><text class="c-3 f-16">预约总名额: 15人</text></view>
				<view class="base-item"> <text class="c-3 f-16">剩余名额:</text> <text class="c-r f-16 m-0-5"> 25</text> </view>
			</view>
			<view class="base-info">
				<view class="base-item"><text class="c-3 f-16"> 类型: 创始会员</text></view>
				<view class="base-item"> <text class="c-3 f-16">使用:</text> <text class="c-r f-16 m-0-5"> 永久使用</text> </view>
			</view>
			<view class="base-info base-fg m-15-0">
				<image class="i-icon" src="../../static/yy/tishi.png"/> <text class="c-3 f-18">温馨提示</text>
			</view>
			<view class="base-info c-6 f-16">
				基地每张会员卡同时段限制预约一次
			</view>
			<view class="base-info ">
				<text class="f-16 c-3">开发时间: 全天</text>
			</view>
			<view class="base-info ">
				<text class="f-16 c-3">门票价格: 150/人</text>
			</view>
			<view class="base-info ">
				<text class="f-16 c-3">会员价格: 50元/人</text>
			</view>
		</view>
		<button type="primary" plain="true" style="border: none;background: red;color: #FFFFFF;">立即预约</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {
			pay(){
				uni.requestPayment({
					provider: 'wxpay',
					orderInfo: 'orderInfo', //微信、支付宝订单数据
					success: function (res) {
						console.log('success:' + JSON.stringify(res));
					},
					fail: function (err) {
						console.log('fail:' + JSON.stringify(err));
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		padding: 8upx;
	}
	.base-fg{border-top: 1px solid #F0F1F2;}
	.base-item{flex: 1;}
	.i-icon{height: 50upx;width: 50upx;vertical-align: middle;margin-right: 5upx;}
	.base-info{display: flex;align-items:center;flex-flow:nowrap;height: 52upx;}
   .card-img-info{position: absolute;line-height: 40upx;color: #fff;margin-top: -60upx; padding: 0 30upx;font-size: 30upx;}
   .c-3{color: #333333;}
   .c-9{color: #999999;}
   .c-r{color: #e60312;}
   .c-6{color: #666666;}
   .m-0-5{margin: 0 8upx;}
   .f-16{font-size: 28upx;}
   .f-18{font-size: 34upx;}
   .m-15-0{margin-top: 20upx;padding-top: 20upx;}
   .l-info{padding: 15upx;}
</style>
