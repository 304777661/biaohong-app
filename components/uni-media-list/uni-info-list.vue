<template>
    <view v-if="data.ctype=='2'">
        <view class="list-cell" hover-class="uni-list-cell-hover" @click="bindClick">
			<text class="info-img"><icon class="iconfont icon-xinwenzixun"/></text>
			<view class="border-b info-title-box">
				<text class="info-title f-28 f-b">苹果发布新产品了，赶紧来看看吧</text>
				<text class="c-9 f-24">8.00</text>
				<text class="c-6 f-24 txt-content">赶紧来看看吧赶紧来看看吧赶紧来看看吧赶紧来看看吧赶紧来看看吧</text>
			</view>
			<text class="navigat-arrow">&#xe65e;</text>
		</view>
    </view>
	<view v-else-if="data.ctype=='1' ">
	    <view class="list-cell" hover-class="uni-list-cell-hover" @click="bindClick">
			<view v-if="data.IsTop === '1'" style="width: 100%;">
				<view style="padding: 10upx;">
					<video style="width:100%;height: 400upx;"  :poster="data.ImgUrl" :src="data.VideoUrl"></video>
				</view>
				<view style="flex-direction: row;padding:5upx 20upx;justify-content: space-between;align-items: center;">
					 <image src="../../static/logo.png" class="title-img"></image>
					 <view style="flex: 1;margin:0 8upx;">
						 <text class="c-0 f-b f-32">标红科技点赞</text>
						 <text class="c-9 f-28">科技</text>
					 </view>
					 <span class="iconfont icon-fenxiang"></span>
				</view>
			</view>
			<view v-else style="flex-direction: row;padding:5upx 20upx;justify-content: flex-start;align-items:flex-start;">
				<video style="width: 360upx;height: 240upx;" :poster="data.ImgUrl" :src="data.VideoUrl"></video>
				 <view style="margin:0 15upx;align-content: space-between;">
					 <text class="c-0 f-b f-32" style="height:180upx;">标红科技点赞史蒂芬孙的</text>
					 <view style="flex-direction: row;justify-content: space-between;">
						 <text class="c-9 f-28">飙红科技</text>
						 <span class="iconfont icon-fenxiang"></span>
					 </view>
				 </view>
			</view>
		</view>
	</view>
</template>


<script>
    export default {
		name: 'uni-info-list',
        props: {
            data: {
                type: Object,
                default: function(e) {
                    return {}
                }
            }
        },
        computed: {
            isImgRight() {
                return this.data.article_type === 2
            },
            isImgLeft() {
                return this.data.article_type === 1
            },
            showImg() {
                return this.data.image_list || this.data.image_url
            }
        },
        methods: {
            close(e) {
                this.$emit('close');
            },
            bindClick() {
                this.$emit('click');
            }
        }
    }
</script>

<style>
	@import '../../static/icon/iconfont.css';
     view {
       display: flex;
       flex-direction: column;
       box-sizing: border-box;
	   justify-content: flex-start;
   }
   .list-cell{
	   flex-direction: row;
	   margin: 10upx;
	   align-items: center;
   }
   .info-img{
	   width: 80upx;
	   height: 80upx;
	   border-radius: 50upx;
	   border: 3px solid #F0F1F2;
	   text-align: center;
	   }
  .iconfont {
    font-size: 24px;
	color: #999;
  }
  .border-b{
	  border-bottom: 1px solid #F0F1F2;
  }
  .info-title-box{flex: 1;margin-left: 10upx;padding-bottom: 8upx;}
  .txt-content{width: 560upx;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
  .title-img{width: 100upx;height: 100upx;border-radius: 50upx;}
</style>
