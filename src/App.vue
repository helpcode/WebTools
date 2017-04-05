<template>
  <div id="app">
      <footer-component ref="footer"></footer-component>
      <keep-alive>
          <transition name="slide-fade" v-on:before-enter="beforeEnter">
            <router-view ref="content"></router-view>
          </transition>
      </keep-alive>
      <head-component ref="head"></head-component>
  </div>
  </div>
</template>

<script>
import FooterComponent from './components/footer/footer'
import HeadComponent from './components/head/head'
export default {
  name: 'app',
  methods: {
      beforeEnter(el){
         // console.log(el)
      }
  },
  components: {
    FooterComponent,
    HeadComponent
  }
}
</script>

<style scoped>
    #content-component{
        margin: 55px 0 50px 0;
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
