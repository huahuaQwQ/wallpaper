<template>
	<view>
		<view class="u-page">
					<!-- 所有内容的容器 -->
				</view>
				<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
				<u-tabbar :list="footerTabbar" ></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				//tabbar组件
				footerTabbar:this.$store.state.footerTabbar
			};
		},
	}
</script>

<style>
</style>