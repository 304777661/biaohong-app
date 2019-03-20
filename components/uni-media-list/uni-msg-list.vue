<template>
    <view>
        <view class="list-cell" hover-class="uni-list-cell-hover" @click="bindClick">
			<view v-if="data.isTop === '1'">
				<view style="padding: 10upx;">
					<video style="flex: 1;width: 100%;height: 400upx;" v-if="data.image_url" :src="data.image_url"></video>
				</view>
				<view style="flex-direction: row;padding:5upx 20upx;justify-content: space-between;align-items: center;">
					 <image src="../../static/logo.png" class="title-img"></image>
					 <view style="flex: 1;margin:0 8upx;">
						 <text class="c-0 f-b f-32">标红科技点赞</text>
						 <text class="c-9 f-28">科技</text>
					 </view>
					 <icon class="iconfont icon-fenxiang"></icon>
				</view>
			</view>
			<view v-else style="flex-direction: row;padding:5upx 20upx;justify-content: flex-start;align-items:flex-start;">
				<video style="width: 360upx;height: 240upx;" v-if="data.image_url" :src="data.image_url"></video>
				 <view style="margin:0 15upx;align-content: space-between;">
					 <text class="c-0 f-b f-32" style="height:180upx;">标红科技点赞史蒂芬孙的</text>
					 <view style="flex-direction: row;justify-content: space-between;">
						 <text class="c-9 f-28">飙红科技</text>
						 <icon class="iconfont icon-fenxiang"></icon>
					 </view>
				 </view>
				 
			</view>
		</view>
    </view>
</template>


<script>
    export default {
		name: 'uni-msg-list',
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
	   justify-content: center;
   }
   .title-img{width: 100upx;height: 100upx;border-radius: 50upx;}
  
</style>
