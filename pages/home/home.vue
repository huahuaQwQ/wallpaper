<template>
	<view class="">
		<view class="u-page">
			<!-- 所有内容的容器 -->
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="list" ></u-tabbar>
	</view>
</template>

<script>
	export default {
			data() {
				return {
					list: [{
							iconPath: "../../static/img/dynamic.png",
							selectedIconPath: "../../static/img/dynamic-fill.png",
							text: '动态壁纸',
							// isDot: true,
							customIcon: true,
							pagePath:"/pages/dynamic/dynamic"
						},
						{
							iconPath: "../../static/img/static.png",
							selectedIconPath: "../../static/img/static-fill.png",
							text: '静态壁纸',
							customIcon: true,
							pagePath:"/pages/static/static"
						},
						{
							iconPath: "../../static/img/suject.png",
							selectedIconPath: "../../static/img/suject-fill.png",
							text: '主题',
							midButton: false,
							customIcon: true,
							pagePath:"/pages/suject/suject"
						},
						{
							iconPath: "../../static/img/widget.png",
							selectedIconPath: "../../static/img/widget-fill.png",
							text: '小组件',
							customIcon: false,
							pagePath:"/pages/widget/widget"
						},
						{
							iconPath: "../../static/img/user.png",
							selectedIconPath: "../../static/img/user-fill.png",
							text: '我的',
							// count: 23,
							// isDot: false,
							customIcon: false,
							pagePath:"/pages/user/user"
						},
					],
					current: 0
				}
			},
		}
</script>

<style>
</style>