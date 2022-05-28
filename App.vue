<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	//引用iconfont
	// @import url("/static/css/iconfont-weapp-icon.css");
	// @import url("http://at.alicdn.com/t/font_3435339_ji46rwt1ah.css");
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	//uviewUI
	@import "uview-ui/index.scss";
	
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	
	// iconfont 通用样式
	
	  // 
	  @font-face {
	    font-family: 'iconfont';  /* Project id 3435339 */
	    src: 
	         url('//at.alicdn.com/t/font_3435339_ji46rwt1ah.woff2?t=1653734204941') format('woff2'),
	         url('//at.alicdn.com/t/font_3435339_ji46rwt1ah.woff?t=1653734204941') format('woff'),
	         url('//at.alicdn.com/t/font_3435339_ji46rwt1ah.ttf?t=1653734204941') format('truetype');
	  }
	  .iconfont {
	    font-family: "iconfont" !important;
	    font-size: 16px;
	    font-style: normal;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	  }
	
</style>
<!-- <style src="./static/js/iconfont.js"></style> -->