<template>
    <div id="head-component">
        <mu-appbar :title="showTitle" class="header-head">
            <mu-icon-button @click="toggle(true)" icon='menu' slot="left"/>
            <mu-icon-button @click="$router.go(-1)" icon='keyboard_arrow_right' slot="right"/>
        </mu-appbar>

        <mu-drawer :open="open" :docked="docked" @close="toggle()">
            <mu-list class="mu-list-head" @itemClick="toggle()">
                <div class="demo-grid-head">
                    <mu-row gutter>
                        <mu-col width="15"></mu-col>
                        <mu-col width="32" tablet="30" desktop="20">
                            <img width="130"
                                 height="130"
                                 :src="$LeftAboutMe.LeftAboutMeFirst.WeiXinImgUrl"
                                 alt="">
                        </mu-col>
                        <mu-col width="15"></mu-col>
                    </mu-row>
                </div>
            </mu-list>


            <div class="">
                <mu-row gutter>
                    <mu-col width="100" tablet="100" desktop="100">
                        <mu-content-block class="text-center-head">
                            {{$LeftAboutMe.LeftAboutMeFirst.WeiXinImgTitle}}
                        </mu-content-block>
                    </mu-col>
                </mu-row>
                <mu-row gutter>
                    <mu-col width="100" tablet="100" desktop="90">
                        <mu-list-item
                                v-for="item in $LeftAboutMe.LeftAboutMeSecond"
                                :title="item.Title">
                            <span slot="describe">{{item.TitleSub}}</span>
                        </mu-list-item>
                    </mu-col>
                </mu-row>
                <mu-row class="bottom-bq">
                    <mu-col width="100" tablet="100" desktop="100">
                        <p>{{$LeftAboutMe.LeftAboutMeFirst.WeiXinImgByBmy}}</p>
                    </mu-col>
                </mu-row>
            </div>
        </mu-drawer>

    </div>
</template>

<script>
export default{
  mounted () {

  },
  data () {
    return {
      showTitle: '',
      open: false,
      docked: true
    }
  },
  methods: {
    toggle (status) {
      this.open = !this.open
      this.docked = !status
    }
  }
}
</script>

<style scoped>
    @import "./../../assets/css/head.css";
</style>
