<template>
	<view class="address-main" :style="{height: winHeight + 'px'}">
		<view class="address-main-search">
			<navigator :url="'address-search?addresss=' + addresssEscape" hover-class="none">
				<input disabled="false" class="address-main-input" type="text" placeholder="输入城市名或拼音"/>
			</navigator>
		</view>
		<view class="addressDirectory">
			<address-list 
			:addresss="addresss" 
			:hotAddress="hotAddress" 
			:letter="letter"
			:scrollAnimationOFF="scrollAnimationOFF" 
			@change="handleaddressListIndex"
			@reset="handleReset"
			@handleClick="handleClick"
			>
			</address-list>
			<address-alphabet 
			:addresss="addresss"
			:addressListIndex="addressListIndex"
			@change="handleDatasetKey" 
			@scrollAnimationOFF="handleScrollAnimationOFF"
			@reset="handleReset"
			>
			</address-alphabet>
		</view>
	</view>
</template>

<script>
	import addressList from './address-list.vue'
	import addressAlphabet from './address-alphabet.vue'
	
	export default {
		name:"address-directory",
		components:{
			addressList,
			addressAlphabet
		},
		props:{
			addresss:Object,
			hotAddress:Array,
			default:false,
			adList:Array
		},
		data () {
			return {
				winHeight:0,
				letter : '',
				scrollAnimationOFF:true,
				addressListIndex:'',
				reset:true
			}
		},
		computed:{
			addresssEscape () {
				return escape(JSON.stringify(this.adList))
			}
		},
		mounted () {
			let windowHeight = uni.getSystemInfoSync().windowHeight
			
			// #ifndef APP-PLUS
			this.winHeight = windowHeight
			//#endif
			
			//#ifdef APP-PLUS
			this.winHeight = windowHeight - 56
			//#endif
			
 			if(!this.addresss){
				uni.showToast({
					title: '没有数据',
					icon:"none",
					mask: false,
					duration: 1500
				})
			}
		},
		methods:{
			handleClick (e) {
				this.$emit('paramClick',e)
			},
			handleDatasetKey (val) {
				this.letter = val
			},
			handleScrollAnimationOFF (val) {
				this.scrollAnimationOFF = val
			},
			handleaddressListIndex(val){
				if(this.reset){
					this.addressListIndex = val
				}
			},
			handleReset (val){
				if(val){
					this.letter = ''
				}
				this.reset = val
			}
			
		}
	}
</script>

<style>
.address-main{
	display: flex;
	flex-direction: column;
	overflow: hidden;
}
.addressDirectory{
	display: flex;
	flex-direction: row;
}
.address-main-search{
	background-color: #fff;
	padding: 10upx 20upx;
	border-bottom: 1px solid #e5e5e5;
}

.address-main-input{
	font-size:28upx;
	border: 1px solid #e5e5e5;
	border-radius: 3px;
	padding: 10upx 20upx 10upx 20upx;
}
</style>
