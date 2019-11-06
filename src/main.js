import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//初始化css样式
import "./stylesheets/main.scss"
import "swiper/css/swiper.min.css"

//路由触发多次报错解决
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}

import { Tabbar, TabItem ,Header,Button,Swipe, SwipeItem,InfiniteScroll,Search} from 'mint-ui';



// 异步请求数据
import axios from "axios"
Vue.prototype.$http = axios   
Vue.component('mt-tabbar', Tabbar);
Vue.component('mt-tab-item', TabItem);
Vue.component('mt-header', Header);
Vue.component('mt-button', Button);
Vue.component('mt-swipe', Swipe);
Vue.component('mt-swipe-item', SwipeItem);
Vue.component('mt-search', Search);
Vue.use(InfiniteScroll);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')