import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    // 存放状态
	//存放底部tabbar组件状态
	footerTabbar: [{
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
			customIcon: true,
			pagePath:"/pages/subject/subject"
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
	
  },
  mutations: {
    // 更改state中状态的逻辑，同步操作
	//修改tabbar组件状态
	updateList(state,list){
		list = state.list;
	}
  },
  getters: {
    // state的计算属性
  },
  actions: {
    // 提交mutation，异步操作
  },
  // 如果将store分成一个个的模块的话，则需要用到modules。
   //然后在每一个module中写state, getters, mutations, actions等。
  modules: {
    // a: moduleA,
    // b: moduleB,
    // // ...
  }
});

export default store