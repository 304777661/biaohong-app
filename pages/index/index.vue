<template>
	<view>
		<view class="uni-card" >
		    <view class="uni-list">
		        <block v-for="(list,index) in lists" :key="index">
		            <view class="uni-list-cell uni-collapse">
		                <view class="uni-collapse-content" :class="list.show ? 'uni-active' : ''">
		                    <swiper v-if="list.type === 'swiper'" autoplay="true" indicator-dots="true" circular="true" style="height: 320upx;">
		                        <swiper-item v-for="(img,key) in imgUrls" :key="key">
		                            <image :src="img" style="height: 320upx;" />
		                        </swiper-item>
		                    </swiper>
						</view>
		            </view>
		        </block>
		    </view>
		</view>
		<view class="tags">
			<block v-for="(value, index) in data" :key="index">
				<view class="tag" @tap="goList(value)">
					<image class="tag-img" :src="value.icon"></image>
					<text class="tag-text">{{value.type}}</text>
				</view>
			</block>
		</view>
		<view class="info">
			<view class="uni-padding-wrap uni-common-mt">
				<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" :styleType="styleType"
				 :activeColor="activeColor"></uni-segmented-control>
			</view>
			<view class="content">
				<view v-show="current === 0">
					<view style="margin: 20upx;">
						<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" style="border-radius: 20upx;height: 420upx;"></image>
						<view class="card-img-info">
							<text>汽车圈圈文推荐</text>
							<text>2019-02-02</text>
						</view>
					</view>
				</view>
				<view v-show="current === 1">
					<view style="margin: 20upx;">
						<view style="display: flex;">
							<image class="head-img" src="../../static/logo.png"></image>
							<view style="display: flex;flex-direction: column;margin-left: 20upx;">
								<text class="head-title">广告裁判</text>
								<text class="head-title-1">标题：<font>泰国超萌广告，狗主人的救星来了</font></text>
							</view>
						</view>
						<view style="width: 100%;">
							<p class="p-content">
								相信每一个家里有宠物的人都有童颜问题，这些顽皮的狗狗真是让人又爱又恨。有了这些高科技来帮你打扫卫生是不是很开心
							</p>
							<p style="line-height: 40upx;display: flex;">
								<span class="tag-item">科技广告</span>
							</p>
							<image style="height: 400upx;" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg"></image>
						</view>
						<view class="card-footer">
							<view style="display:inline-flex; line-height: 40upx;"><image src="../../static/index/dianzan.png"></image><font>233</font></view>
							<view style="display:inline-flex;line-height: 40upx;line-height: 40upx;"><image src="../../static/index/pinglun.png"></image><font>233</font></view>
							<view style="display:inline-flex;line-height: 40upx;">2019-02-02</view>
							<view style="display:inline-flex;line-height: 40upx;"><image src="../../static/index/fenxiang.png"></image><font>233</font></view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '../../components/uni-segmented-control.vue';
	import uniLoadMore from '@/components/uni-load-more.vue';
	import uniNavBar from '../../components/uni-nav-bar.vue'
	import uniIcon from '../../components/uni-icon.vue'
	import {mapState,mapMutations} from 'vuex'
export default {
	computed: mapState(['locationAddress']),
	data() {
		return {
			title: 'accordion',
			lists: [{
					title: "1",
					type: 'swiper',
					show: false
				},
				{
					title: "2",
					type: 'list',
					show: false
				},
				{
					title: "3",
					type: 'font',
					show: false
				}],
			imgUrls: ['https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
				'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
				'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg'],
			data: [{
					type: '公司介绍',
					id: 1,
					icon: '../../static/index/gsjs.png',
					url:'/pages/index/company-news'
				},
				{
					type: '场地预约',
					id: 2,
					icon: '../../static/index/cdyy.png'
				},
				{
					type: '基地周边',
					id: 3,
					icon: '../../static/index/jdzb.png',
					url:'/pages/index/arround-list'
				},
				{
					type: '基地活动',
					id: 4,
					icon: '../../static/index/jdhd.png'
				},
				{
					type: '紧急救援',
					id: 5,
					icon: '../../static/index/jjjy.png'
				}],
			items: [
				'汽车圈',
				'广告区'
			],
			current: 0,
			activeColor: '#e60012',
			styleType: 'text',
			styleIndex: 0,
			colorIndex: 0
			}
        },
	onLoad() {
		console.log(this.locationAddress);
		this.setStyle(0,this.locationAddress);
	},
	onNavigationBarButtonTap(e) {
		uni.navigateTo({ url: '/pages/index/address'});
	},
	components: {
		uniSegmentedControl,
		uniNavBar,
		uniIcon
	},
	methods: {
	    trigerCollapse(e) {
	        for (let i = 0, len = this.lists.length; i < len; ++i) {
	            if (e === i) {
	                this.lists[i].show = !this.lists[i].show;
	            } else {
	                this.lists[i].show = false;
	            }
	        }
	    },
		goList(e) {
			uni.navigateTo({
				url: e.url
			});
		},
		onClickItem(index) {
			if (this.current !== index) {
				this.current = index;
			}
		},
		paramClick (e) {
			console.log(e);
		},
		/**
		 * 修改导航栏buttons
		 * index[number] 修改的buttons 下标索引，最右边索引为0
		 * text[string] 需要修改的text 内容
		 */
		setStyle(index,text) {
			let pages = getCurrentPages();
			let page = pages[pages.length - 1];
			// #ifdef APP-PLUS
			let currentWebview = page.$getAppWebview();
			let titleNView = currentWebview.getStyle().titleNView;
			titleNView.buttons[0].text = text;
			currentWebview.setStyle({
				titleNView:titleNView
			});
			// #endif
		}
	}	
}
</script>


<style>
	.page {
	    padding-top: 60upx; background: #efeff4;
	}
	
	.image-view {
	    height: 360upx;
	    overflow: hidden;
	}
	
    .list-collapse {
        padding-left: 36upx;
        box-sizing: border-box;
    }

    image {
        width: 100%;
    }

    .page-pd {
        padding: 36upx;
    }
	.uni-common-mt{
		border-bottom: 1px solid #e5e5e5;
		border-top: 10upx solid #F0F1F2;
		padding: 10px 0 0 0;
		font-size: 44upx;
		font-weight: bold;
		font-family: serif;
		background-color: #fff;
	}
	.uni-card-content.image-view{
		width: auto;
		margin: 30upx;
	}
	.swiper-box{height: 740upx;}
	.head-img{width: 120upx;height: 120upx;border-radius: 60upx;}
	.head-title{font-size: 38upx;font-weight: bold;color: #333333;margin-bottom: 15upx;}
	.head-title-1{font-size: 34upx;color: #999999; white-space:nowrap;overflow-x: hidden;display: inline-block;width:560upx;text-overflow:ellipsis;}
	.head-title-1 font{color: #333333;}
	.p-content{ 
				font-size: 28upx;
				padding: 5px 0 0 0;
				lines: 2;
				text-overflow: -o-ellipsis-lastline; 
				overflow: hidden; 
				text-overflow: ellipsis; 
				display: -webkit-box; 
				-webkit-line-clamp: 2; 
				line-clamp: 2;
				-webkit-box-orient: vertical;
				}
	.tag-item{padding: 12upx;background-color: #fae6e6;color: #e60012;margin: 12upx 20upx 12upx 0px;border-radius:20upx;font-size: 30upx;}
	.card-footer{display: flex;justify-content: space-between;font-size: 20upx;color: #999;position: relative;}
	.card-footer image{height: 40upx;width: 40upx; margin-right: 8upx;}
	.card-img-info{width: 88%;display: flex;position: absolute;line-height: 40upx;color: #fff;margin-top: -60upx; padding: 0 30upx;font-size: 30upx;justify-content: space-between;}
</style>