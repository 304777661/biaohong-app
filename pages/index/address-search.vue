<template>
	<view>
		<address-search-list :addresss="addresss" @paramClick="paramClick"></address-search-list>
	</view>		
</template>

<script>
	
	import addressSearchList from '@/components/address-directory/address-search-list.vue'
	
	export default {
		name:"address-search",
		components:{
			addressSearchList
		},
		data() {
			return {
				addresss:null,
			}
		},
		onLoad (option) {
			this.addresss = JSON.parse(unescape(option.addresss))
		},
		methods:{
			/* paramClick (e) {
				console.log(e);
			} */
		}
	}
</script>

<style>
	
</style>
