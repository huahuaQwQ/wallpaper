<template>
	<view>
		
		
		<view class="u-page">
			<!-- 所有内容的容器 -->
			<!-- 搜索 -->
			<view class="/">
			<u-search  shape="round" :show-action="false" bg-color="#cccccc" placeholder="日照香炉生紫烟" height="80" v-model="keyword"></u-search>
			<!-- 上传壁纸 -->
				<!-- <view class="t-icon t-icon-jia" >
					
				</view> -->
				<!-- <view class="iconfont icon-jia" style="color: red;" >
					
				</view> -->
				<view class="iconfont" >
					&#xe600;
				</view>
				
			</view>
			
			dynamic
			<u-button type="primary">月落</u-button>
			<u-button text="点我一下"></u-button>
			<view class="" v-for="(img,index) in imgList" :key="img.imgId">
				
			<u-image :src="img.imgUrl" style="background-color: blue;"></u-image>
			</view>
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="list" ></u-tabbar>
	</view>
</template>

<script>
	export default {
		name:"dynamic",
		data() {
			return {
				keyword: '遥看瀑布挂前川',
				imgId:1,
				imgList:[],
				src:1
			};
		},
		onLoad() {
			this.$axios({
				url:`/images/getImg`,method:"get"
			}).then(res=>{
				console.log(res.data);
				console.log(this);
				 this.imgList = res.data.imgList;
			},rej=>{
				
			}).catch(err => {
				
			})
		},
		
	}
</script>

<style lang="scss">

</style>
