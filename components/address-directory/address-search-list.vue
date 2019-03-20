<template>
	<view>
		<view class="search">
			<input 
			@input="handleInput"
			class="search-input" 
			type="text" 
			focus  
			placeholder="输入城市名或拼音"
			/>
		</view>
		<view class="search-main" v-if="keyword">
			<view class="search-main-errtitle" v-if="hasNoData">无搜索结果</view>
			<view class="search-main-title"
			hover-class="hover" 
			@click="handleClick"
			:hover-start-time="20" 
			:hover-stay-time="70" 
			v-for="item of list" 
			:key="item.GroupID"
			:data-name="item.G_CName"
			:data-id="item.GroupID"
			:data-addressNumber="item.G_Level">
				{{item.G_CName}}
			</view>
		</view>
	</view>		
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	import service from '../../common/service.js';
	export default {
		name:"address-search-list",
		props:{
			addresss:Array
		},
		data() {
			return {
				keyword:'',
				list:[],
				timer:null
			}
		},
		computed:{
			hasNoData () {
				return !this.list.length
			}
		},
		watch:{
			keyword () {
				if(this.timer) {
					clearTimeout(this.timer)
				}
				if(!this.keyword){
					this.list = []
					return
				}
				this.timer = setTimeout(()=>{
					const result = []
					this.addresss.forEach((item)=>{
						if(item.G_ABC.indexOf(this.keyword) > -1||item.G_CName.indexOf(this.keyword) > -1){
							result.push(item)
						}
					})
					this.list = result
				},100)
			}
		},
		methods:{
			...mapMutations(['setLocationAddress']),
			handleInput (e) {
				this.keyword = e.detail.value
			},
			handleClick (e) {
				//this.$emit('paramClick',e.target.dataset);
				service.setRecentAddress(e.target.dataset);
				this.setLocationAddress(e.target.dataset.name);
				uni.reLaunch({url: '../../pages/index/index'});
			}
		}
	}
</script>

<style>
	.hover{
		background-color: #eee;
	}
	.search{
		background-color: #fff;
		padding: 10upx 20upx;
		border-bottom: 1px solid #e5e5e5;
	}

	.search-input{
		font-size:28upx;
		border: 1px solid #e5e5e5;
		border-radius: 3px;
		padding: 10upx 20upx 10upx 20upx;
	}
	
	.search-main{
		height: 100%;
		padding-bottom: 20upx;
		background-color:#fff;
		overflow: hidden;
	}
	
	.search-main-errtitle,.search-main-title{
		width: 100%;
		height: 92upx;
		line-height: 92upx;
		font-size: 32upx;
		padding: 0 20upx;
		border-bottom: 1px solid #e5e5e5;
	}

</style>
