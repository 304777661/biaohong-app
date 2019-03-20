<template>
    <view>
        <view class="list-cell" hover-class="uni-list-cell-hover" @click="bindClick">
            <view class="media-list" v-if="data.title">
                <view class="media-image-right media-image-left">
                    <view class="media-title media-titl2">
						<text class="b">{{data.title}}</text>
						<text class="f-16">
							<icon class="iconfont icon-shoucang-tianchong icon-c-r f-16 m-0-5"></icon> 
							<text class="icon-c-r">4.5</text>
							<text class="c-6 m-0-5">月销25225</text>
							<text class="c-6 m-0-5">距我25225</text>
						</text>
						<text class="f-16">
							<icon class="iconfont icon-dianpu f-16 m-0-5"></icon> 
							<text class="c-3 m-0-5">中式简餐</text>
							<icon class="iconfont icon-shijian f-16 m-0-5"></icon> 
							<text class="c-6 m-0-5">营业时间：8:00-22:00</text>
						</text>
					</view>
                    <view class="image-section image-section-left">
                        <image class="image-list2" v-if="data.image_url"
                            :src="data.image_url"></image>
                    </view>
                </view>
              
			</view>
        </view>
    </view>
</template>


<script>
    export default {
		name: 'uni-media-list',
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
   }
   
   .list-cell {
       width: 750upx;
       padding: 0 30upx;
   }
   
   .uni-list-cell-hover {
       background-color: #eeeeee;
   }
   
   .media-list {
       flex: 1;
       flex-direction: column;
       border-bottom-width: 1upx;
       border-bottom-style: solid;
       border-bottom-color: #c8c7cc;
       padding: 20upx 0;
   }
   
   .media-image-right {
       flex-direction: row;
   }
   
   .media-image-left {
       flex-direction: row-reverse;
   }
   
   .media-title {
       flex: 1;
   }
   
   .media-title {
       overflow: hidden;
	   white-space: nowrap;
       text-overflow: ellipsis;
       font-size: 24upx;
   }
   
   .media-title2 {
       flex: 1;
       margin-top: 6upx;
       line-height: 40upx;
   }
   
   .image-section {
       margin-top: 20upx;
       flex-direction: row;
       justify-content: space-between;
   }
   
   .image-section-right {
       margin-top: 0upx;
       margin-left: 10upx;
       width: 225upx;
       height: 146upx;
   }
   
   .image-section-left {
       margin-top: 0upx;
       margin-right: 10upx;
       width: 225upx;
       height: 146upx;
   }
   
   .image-list1 {
       width: 690upx;
       height: 481upx;
   }
   
   .image-list2 {
       width: 225upx;
       height: 146upx;
	   border-radius: 10upx;
   }
   
   .image-list3 {
       width: 225upx;
       height: 146upx;
   }
   
   .media-info {
       flex-direction: row;
   }
   
   .info-text {
       margin-right: 20upx;
       color: #999999;
       font-size: 24upx;
   }
   
   .media-foot {
       margin-top: 20upx;
       flex-direction: row;
       justify-content: space-between;
   }
   
   .max-close-view {
       align-items: center;
       justify-content: flex-end;
       flex-direction: row;
       height: 40upx;
       width: 80upx;
   }
   
   .close-view {
       border-style: solid;
       border-width: 1px;
       border-color: #999999;
       border-radius: 10upx;
       justify-content: center;
       height: 30upx;
       width: 40upx;
       line-height: 30upx;
   }
   
   .close {
       text-align: center;
       color: #999999;
       font-size: 28upx;
   }
    
	.icon-c-r{color: #E60012;}
	.f-16{font-size: 20upx;}
	.m-0-5{margin: 0 8upx;}
	.b{font-weight: bold;}
</style>
