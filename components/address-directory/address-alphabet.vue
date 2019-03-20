<template>
	<view class="alphabet">
		<view class="alphabet-item" 
		v-for="(item, key) of addresss" 
		:key="key"
		:data-key="key"
		:class="activeClass == key ? 'active' : ''"
		@touchstart="handleTouchStart"
		@touchmove = "handleTouchMove"
		@touchend="handleTouchEnd"
		@touchcancel="handleTouchCancel" 
		>
			{{key}}
		</view>
		<view class="alphabet-alert" v-if="touchmove">
			{{activeClass}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"address-alphabet",
		props:{
			addresss:Object,
			addressListIndex:String
		},
		data() {
			return {
				touchStatus:false,
				timer:null,
				activeClass:'', 
				addresssArr:[],
				touchmove:false
			};
		},
		mounted () {
			let addresssArr = Object.keys(this.addresss)
			this.addresssArr = addresssArr
		},
		watch:{
			addressListIndex (index) {
				this.activeClass = index
			}
		},
		methods:{
			handleTouchStart (e) {
				this.$emit('reset',false)
				let key = e.target.dataset.key
				this.activeClass = key
				this.$emit('change',e.target.dataset.key)
				this.touchStatus = true
			},
			handleTouchMove (e) {
				this.$emit('scrollAnimationOFF',false)
				if(this.touchStatus){
					this.touchmove = true
					if(this.timer){
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(()=>{
						const touchY = e.touches[0].clientY - 54
						const index = Math.floor(touchY / 20)
						if(index >= 0 && index < this.addresssArr.length){
							this.activeClass = this.addresssArr[index]
							this.$emit('change',this.addresssArr[index])
						} 
					},16)
				}
			},
			handleTouchEnd (e) {
				this.$emit('scrollAnimationOFF',true)
				this.touchStatus = false
				this.touchmove = false
			}
		}
	}
</script>

<style>
.alphabet>.active,.hover{
	color: #fff;
	background-color: #0190a0;
	border-radius: 40upx;
}

.alphabet{
	display: flex;
	flex-direction: column;
	text-align: center;
	z-index: 10;
	padding: 10upx 10upx 0 10upx;
}

.alphabet-item{
	width: 40upx;
	font-size:24upx; 
	height: 40upx;
	line-height: 40upx;
	
}

.alphabet-alert{
	position: absolute;
	z-index: 20;
	width: 160upx;
	height: 160upx;
	left: 50%;
	top: 50%;
	margin-left: -80upx;
	margin-top: -80upx;
	border-radius: 80upx;
	text-align: center;
	line-height: 160upx;
	font-size: 70upx;
	color: #fff;
	background-color: rgba(0, 0, 0, 0.5);
}

</style>
