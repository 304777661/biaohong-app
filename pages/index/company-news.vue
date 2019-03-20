<template>
	<view class="uni-tab-bar">
		<view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab, index) in tabBars" :key="tab.ref" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
			 :id="tab.ref" :data-current="index" @click="tapTab(index)">{{tab.name}}</view>
		</view>
		<swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item v-for="(tabItem, tabIndex) in newsList" :key="tabIndex">
				<scroll-view class="list" scroll-y @scrolltolower="loadMore(tabIndex)">
					<block v-for="(newsItem, newsIndex) in tabItem.data" :key="newsIndex">
						<uni-info-list :data="newsItem" @close="dislike(tabIndex, newsIndex)" @click="goDetail(newsItem)"></uni-info-list>
					</block>
					<view class="uni-tab-bar-loading">
						<uni-load-more :loadingType="tabItem.loadingText" :contentText="loadingText"></uni-load-more>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import uniInfoList from '@/components/uni-media-list/uni-info-list.vue';
	import uniLoadMore from '@/components/uni-load-more.vue';
	import appRequest from '../../common/appRequest.js';
	import {
		friendlyDate
	} from '@/common/util.js';

	export default {
		components: {
			uniInfoList,
			uniLoadMore
		},
		data() {
			return {
				loadingText: {
					contentdown: '上拉加载更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				},
				scrollLeft: 0,
				refreshing: false,
				refreshText: '下拉可以刷新',
				newsList: [],
				tabIndex: 0,
				tabBars: [{
					name: '视频',
					id: 0,
					ref: 'company'
				},{
					name: '咨询',
					id: 1,
					ref: 'new'
				}]
			}
		},
		onLoad: function() {
			// 初始化列表信息
			this.tabBars.forEach((tabBar) => {
				this.newsList.push({
					data: [],
					requestParams: {
						columnId: tabBar.id,
						pageSize: 10
					},
					loadingText: '加载中...'
				});
			});
			this.getList();
		},
		methods: {
			getList(action = 1) {
				let activeTab = this.newsList[this.tabIndex];
				uni.request({
					url: appRequest.getRequestUrl()+"module=Default&action=NewsInfo",
					data:{TypeID:this.tabIndex+1},
					success: (result) => {
						console.log("result===============>"+JSON.stringify(result));
						if (result.statusCode == 200) {
							let news=result.data;
							if (action === 1) {
								activeTab.data = news;
								this.refreshing = false;
							} else {
								data.forEach((news) => {
									activeTab.data.push(news);
								});
							}
						}
					}
				});
			},
			goDetail(detail) {
				uni.navigateTo({
					url: '/pages/detail/detail?query=' + encodeURIComponent(JSON.stringify(detail))
				});
			},
			dislike(tabIndex, newsIndex) {
				uni.showModal({
					content: '不感兴趣？',
					success: (res) => {
						if (res.confirm) {
							this.newsList[tabIndex].data.splice(newsIndex, 1);
						}
					}
				})
			},
			loadMore() {
				this.getList(2);
			},
			async changeTab(event) {
				let index = event.detail.current;
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize('tab-bar');
				let tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].ref);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].ref),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index;

				// 首次切换后加载数据
				const activeTab = this.newsList[this.tabIndex];
				if (activeTab.data.length === 0) {
					this.getList();
				}
			},
			getNodeSize(node) {
				return new Promise((resolve, reject) => {
					dom.getComponentRect(node, (result) => {
						resolve(result.size);
					});
				});
			},
			onRefresh(event) {
				this.refreshText = '正在刷新...';
				this.refreshing = true;
				this.getList();
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select('#' + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				});
			},
			async tapTab(index) { //点击tab-bar
				if (this.tabIndex === index) {
					return false;
				} else {
					let tabBar = await this.getElSize('tab-bar'),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = index;
					// 首次切换后加载数据
					const activeTab = this.newsList[this.tabIndex];
					if (activeTab.data.length === 0) {
						this.getList();
					}
				}
			},
		}
	}
</script>
<style>
	page {
		background-color: #FFFFFF;
		height: 100%;
		font-size: 11px;
		line-height: 1.8;
	}

	.uni-tab-bar {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
	}

	.uni-tab-bar .list {
		width: 750upx;
		height: 100%;
	}

	.uni-swiper-tab {
		width: 100%;
		display: flex;
		flex-direction:row;
		flex-wrap: nowrap;
		justify-content: center;
		line-height: 100upx;
		height: 100upx;
		border-bottom: 1px solid #c8c7cc;
	}

	.swiper-tab-list {
		font-size: 30upx;
		width: 350upx;
		display: inline-block;
		text-align: center;
		color: #555;
	}

	.uni-tab-bar .active {
		color: #007AFF;
	}

	.uni-tab-bar .swiper-box {
		flex: 1;
		width: 100%;
		height: calc(100% - 100upx);
	}

	.uni-tab-bar-loading {
		padding: 20upx 0;
	}
	.uni-tab-bar .active{
		color: #333333;
		font-size: 36upx;
		font-weight: bold;
		border-bottom:3px solid #E60012;
	}
</style>
