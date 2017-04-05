import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

//全局方法
import Public from './GlobalJS/Public_Function'
//数据接口
import Api from './api/api'
//全局配置
import config from './config/config'
//muse-ui 组件库
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'

//实例化各配置
Vue.use(Public)
Vue.use(Api)
Vue.use(config)
Vue.use(MuseUI)
Vue.use(VueResource)


Vue.config.productionTip = false
Vue.http.options.emulateJSON = true

//挂着app节点，示例路由，引入组件
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
