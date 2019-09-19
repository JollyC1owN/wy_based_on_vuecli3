
import Vue from 'vue'
import App from './App.vue'
import { Tabbar, TabbarItem, Swipe, SwipeItem, Row, Col, Search } from 'vant'
import './mock/mock.server'
import router from './router/index'
import store from './store/index'
Vue.config.productionTip = false
Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Row)
  .use(Col)
  .use(Search)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
