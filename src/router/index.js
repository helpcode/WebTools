import Vue from 'vue'
import Router from 'vue-router'

const movie = r => require.ensure([], () => r(require('@/pages/all/movie/movie.vue')), 'movie')
const weixin = r => require.ensure([], () => r(require('@/pages/all/weixin/weixin.vue')), 'weixin')
const weather = r => require.ensure([], () => r(require('@/pages/all/weather/weather.vue')), 'weather')
const toolinfo = r => require.ensure([], () => r(require('@/pages/Index/toolinfo.vue')), 'toolinfo')
const index = r => require.ensure([], () => r(require('@/pages/Index/index.vue')), 'index')
const about = r => require.ensure([], () => r(require('@/pages/about/about.vue')), 'about')
const contact = r => require.ensure([], () => r(require('@/pages/contact/contact.vue')), 'contact')
const all = r => require.ensure([], () => r(require('@/pages/all/all.vue')), 'all')
const journalism = r => require.ensure([], () => r(require('@/pages/all/journalism/info.vue')), 'journalism')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: about,
        beforeEnter(to, from, next){
            console.log("from从哪个界面过来的")
            console.log(from)
            console.log("to要去的界面")
            console.log(to)
            next()
        }
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/all',
      name: 'all',
      component: all
    },
    {
      path: '/journalism/:id',
      name: 'journalism',
      component: journalism
    },
    {
       path: '/weather/:id',
       name: 'weather',
       component: weather
    },
      {
          path: '/weixin/:id',
          name: 'weixin',
          component: weixin
      },
      {
          path: '/movie/:id',
          name: 'movie',
          component: movie
      },
      {
          path: '/toolinfo/:id',
          name: 'toolinfo',
          component: toolinfo
      }
  ]
})
