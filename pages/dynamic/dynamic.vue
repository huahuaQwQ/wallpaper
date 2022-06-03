<template>
	<view class="content">	
		<!-- 所有内容的容器 -->
		<view class="u-page">
			<!-- 系统状态栏 【可封装组件】-->
			 <view class="status_bar">
				<!-- 这里是状态栏 -->
			</view>
			
			<!-- 搜索 【可封装组件】 -->
			<view class="wqh-searchGroup">
				<u-image class="wqh-search-left-img" width="100rpx" height="100rpx" src="../../static/img/icon/lingyugan.png"></u-image>
				<u-search  shape="round" :show-action="false" bg-color="#f7f7f7" placeholder="日照香炉生紫烟" height="80" v-model="keyword" style="width:670rpx" ></u-search>
				<!-- 上传壁纸按钮 -->
				<u-image class="wqh-search-right-img" width="100rpx" height="100rpx" src="../../static/img/icon/jia.png" ></u-image>
			</view>
			
			<!-- 分类导航栏 -->
			<view class="wqh-nav">
				
			</view>
			
			<!-- 分类图标 -->
			<view class="wqh-nav-icons">
				<view class="wqh-nav-icon">
					<u-image class="wqh-icon" width="100rpx" height="100rpx" src="../../static/img/icon/zhuomianzujian.png"></u-image>
					<text>桌面组件</text>
				</view>
				<view class="wqh-nav-icon">
					<u-image class="" width="100rpx" height="100rpx" src="../../static/img/icon/tiezhitiaozujian.png"></u-image>
					<text>贴纸条组件</text>
				</view>
				<view class="wqh-nav-icon">
					<u-image class="wqh-nav-icon" width="100rpx" height="100rpx" src="../../static/img/icon/renqizuozhe.png"></u-image>
					<text>人气作者</text>
				</view>
				<view class="wqh-nav-icon">
					<u-image class="wqh-nav-icon" width="100rpx" height="100rpx" src="../../static/img/icon/bizhizhuanti.png"></u-image>
					<text>壁纸专题</text>
				</view>
				
				
				
				<!-- <u-image src="../../static/img/icon/tiezhitiaozujian.png"></u-images>
				<u-image src="../../static/img/icon/renqizuozhe.png"></u-images>
				<u-image src="../../static/img/icon/bizhizhuanti.png"></u-images> -->
			</view>
			
			
			<!-- 壁纸列表 -->
			<view class="wqh-wallpaper-list">
				<!-- <view  v-for="(img,index) in imgList" :key="img.imgId"> -->
				
					<!-- <u-image class="wqh-img" :src="img.imgUrl" style="background-color: blue;"></u-image> -->
					<u-image class="wqh-img" width="350rpx" height="600rpx"  src="../../static/img/wallpaper/001.png" border-radius="25"></u-image>
					<u-image class="wqh-img" width="350rpx" height="600rpx"  src="../../static/img/wallpaper/002.png" border-radius="25"></u-image>
					<u-image class="wqh-img" width="350rpx" height="600rpx"  src="../../static/img/wallpaper/003.png" border-radius="25"></u-image>
					<u-image class="wqh-img" width="350rpx" height="600rpx"  src="../../static/img/wallpaper/004.png" border-radius="25"></u-image>
					
				
			</view>
			
		</view>
		
		
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar  :list="footerTabbar" ></u-tabbar>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex';
	export default {
		name:"dynamic",
		data() {
			return {
				keyword: '遥看瀑布挂前川',
				imgId:1,
				imgList:[],
				src:1,
				//tabbar组件
				footerTabbar:this.$store.state.footerTabbar
			};
		},
		onLoad() {
			//获取图片接口
			// this.getImg();
			
		},
		methods:{
			//获取图片接口
			getImg(){
				this.$axios({
					url:`/images/getImg`,method:"get"
				}).then(res=>{
					console.log(res.data);
					console.log(this);
					 this.imgList = res.data.imgList;
				},rej=>{
					
				})
			},
		},
		
		
	}
</script>

<style lang="scss">
.content{
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.wqh-searchGroup{
		display: flex;
		justify-content: center;
		align-items: center;
		.wqh-search-left-img{
			margin: 5rpx;
		}
		.wqh-search-right-img{
			margin:  5rpx;
		}
	}
	.wqh-nav{
		margin-top: 10rpx;
		border: 1px solid red;
		height: 70rpx;
	}
	.wqh-nav-icons{
		margin: 10rpx 0 0 0;
		// border: 1px solid green;
		height: 150rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.wqh-nav-icon{
			display:flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			
		}
		
	}
	.wqh-wallpaper-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		// margin-top: 10rpx;
		border: 1px solid yellow;
		height: 1000rpx;
		.wqh-img {
			margin: 10rpx;

		}
	}
}

</style>
