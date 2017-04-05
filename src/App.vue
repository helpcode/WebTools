<template>
  <div id="app">
      <footer-component ref="footer"></footer-component>
      <keep-alive>
          <transition name="bounce" v-on:before-enter="beforeEnter">
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

    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-out .5s;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(0);
        }
    }
</style>
