<template>
	<view>
		<scroll-view class="scroll-list"
		:scroll-top="1"
		scroll-y="true"
		:scroll-with-animation="scrollAnimationOFF" 
		:scroll-into-view="scrollViewId" 
		:style="{height:winHeight + 'px'}" 
		@scroll="handleScroll">
			<view style=" background-color: #F0F1F2;padding: 15upx;">
				<p class="t-tip">最近访问</p>
				<view class="bj-item-list">
					<text class="bj-item">长沙</text>
					<text class="bj-item">株洲</text>
				</view>
				<p class="t-tip" >热门城市</p>
				<view class="bj-item-list">
					<text class="bj-item" v-for="(item, key) of hotAddress"  :key="item.id" 
						:data-id="item.id" :data-name="item.name" @click="handleClick">{{item.name}}</text>
				</view>
			</view>
			<view class="address-list">
				<view class="list-item" 
				v-for="(item, key) of addresss" 
				:key="key" 
				:id="key">
					<view class="list-item-title">{{key}}</view>
					<view class="list-item-address" 
					@click="handleClick"
					hover-class="commonly-hover" 
					:hover-start-time="20" 
					:hover-stay-time="70" 
					v-for="innerItem in item"
					:key="innerItem.id"
					:data-name="innerItem.name"
					:data-id="innerItem.id"
					:data-addressNumber="innerItem.addressNumber"
					>
					{{innerItem.name}}
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		name:"address-list",
		props:{
			addresss:Object,
			hotAddress:Array,
			letter:String,
			scrollAnimationOFF:Boolean
		},
		data () {
			return {
				winHeight:0,
				scrollTop:0,
				letterDetails:[],
				timer:null,
				recentAddress:[]
			}
		},
		computed:{
			scrollViewId () {
				return this.letter
			}
		},
		onLoad(){
			
		},
		mounted(){
			// #ifndef APP-PLUS
			this.winHeight = uni.getSystemInfoSync().windowHeight - 49.50
			//#endif
			
			//#ifdef APP-PLUS
			this.winHeight = uni.getSystemInfoSync().windowHeight - 100
			//#endif

		},
		methods:{
			...mapMutations(['setLocationAddress']),
			handleClick (e) {
				this.setLocationAddress(e.target.dataset.name);
				uni.reLaunch({ url: 'index'});
			},
			handleScroll (e){
				if(this.letterDetails.length === 0){
					let view = uni.createSelectorQuery().selectAll('.list-item')
					view.boundingClientRect(data=>{
						let top = data[0].top
						data.forEach((item,index)=>{
							item.top = item.top - top
							item.bottom  = item.bottom - top
							this.letterDetails.push({
								id:item.id,
								top:item.top,
								bottom:item.bottom
							})
						})
					}).exec()	
				}
				
				const scrollTop = e.detail.scrollTop
				this.letterDetails.some((item,index)=>{
					if(scrollTop>=item.top && scrollTop <= item.bottom - 5){
						this.$emit('change',item.id)
						this.$emit('reset',true)
						return true
					}
				})
			}
		}
			
	}
</script>

<style>
	
	.commonly-hover{
		background-color: #eee;
	}
	
	.scroll-list{
		flex: 1;
		height: 100vh;
		overflow-y: hidden;
	}

	.address-list{
		display: flex;
		background-color: #fff;
		flex-direction:column;
		position:relative;
		width: 100%;
	}
	
	.list-item {
		width: 100%;
		display: flex;
		align-items: center;
		flex-wrap:wrap;
		height: 92upx;
		background-color: #fff;
		height: 100%;
		
	}
	
	.list-item >.list-item-address{
		font-weight: normal;
	}
	
	.list-item-title{
		background-color: #eee;
	}
	
	.list-item-title,.list-item-address{
		width: 100%;
		height: 92upx;
		line-height: 92upx;
		font-size: 32upx;
		font-weight: bold;
		padding: 0 20upx;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.t-tip{
		color: #666666;
		font-size: 30upx;
	}
	.bj-item-list{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.bj-item{
		padding: 15upx 15upx;
		background-color: #FFFFFF;
		font-size: 28upx;
		margin: 8upx;
		border-radius: 12upx;
		display: inline-block;
		width: 90upx;
		align-items: center;
		text-align: center;
	}
</style>
