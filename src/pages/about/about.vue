<template>
    <div id="content-component">
        <br/><br/>
        <div class="demo-grid">
            <mu-row gutter>
                <mu-col width="15"></mu-col>
                <mu-col width="32" tablet="30" desktop="20">
                    <img
                            width="130"
                            height="130"
                            :src="$LeftAboutMe.LeftAboutMeFirst.WeiXinImgUrl"
                            alt="">
                </mu-col>
                <mu-col width="15"></mu-col>
            </mu-row>
            <mu-row gutter>
                <mu-col width="100" tablet="100" desktop="100">
                    <mu-content-block class="text-center-about">
                        {{$LeftAboutMe.LeftAboutMeFirst.AboutMeTitle}}
                        <br>
                        <a href="https://github.com/helpcode/WebTools" target="_blank">GitHub</a>
                    </mu-content-block>
                </mu-col>

                <mu-divider class="hr-line-about"/>

                <mu-col width="100" tablet="100" desktop="100" class="technology-list-about">
                    <mu-row gutter>
                        <mu-col width="20">
                            <img class="technology-icon-about" src="./../../assets/img/vue.png" alt="Vue.js">
                        </mu-col>
                        <mu-col width="20">
                            <div class="mu-logo-about">
                                {{$LeftAboutMe.LeftAboutMeFirst.MuLogoAbout}}
                            </div>
                        </mu-col>
                        <mu-col width="20">
                            <img class="technology-icon-about" width="" src="./../../assets/img/material.svg" alt="">
                        </mu-col>
                        <mu-col width="20">
                            <img class="technology-icon-about" width="" src="./../../assets/img/webpack.svg" alt="">
                        </mu-col>
                        <mu-col width="20">
                            <img class="technology-icon-about border-about" width="" src="./../../assets/img/npm.png" alt="">
                        </mu-col>
                    </mu-row>

                    <mu-row gutter class="send-technology-icon-about">
                        <mu-col width="20">
                            <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                        </mu-col>
                        <mu-col width="20">
                            <img class="technology-icon-about" width="" src="./../../assets/img/babel.svg" alt="">
                        </mu-col>
                        <mu-col width="20">
                            <svg class="technology-icon-about" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4612"><path d="M112.198 80.609h799.677l-65.412 759.139-339.032 104.107-322.449-104.107-72.784-759.139z m640.296 229.398l19.347-115.158-515-0.923 33.168 345.482h335.348v90.287l-112.396 39.617-117.006-41.457-7.367-48.829-92.13 0.922 13.82 121.609 197.155 69.1 207.29-65.412 26.714-278.229H376.606l-9.212-117.004 385.099-0.001z m0 0z" fill="#D81E06" p-id="4613"></path></svg>
                        </mu-col>
                        <mu-col width="20">
                            <svg class="technology-icon-about" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6761"><path d="M512.564 678.976 512.564 678.976z" fill="#049AA9" p-id="6762"></path><path d="M128 64l69.892 806.438L511.534 960l314.518-89.7L896 64 128 64zM709.352 733.796l-197.214 56.25-196.916-56.496L301.728 578l96.506 0 6.866 79.124 107.172 30.326 0.264 0.546 0.068 0 106.934-29.704L630.762 530 406 530l-8-100 241.292 0 8.792-102L280 328l-8-98L753.16 230 709.352 733.796z" fill="#049AA9" p-id="6763"></path></svg>
                        </mu-col>
                        <mu-col width="20">
                            <svg class="technology-icon-about" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7665"><path d="M1004.728 466.4l-447.104-447.072c-25.728-25.76-67.488-25.76-93.28 0l-103.872 103.872 78.176 78.176c12.544-5.984 26.56-9.376 41.376-9.376 53.024 0 96 42.976 96 96 0 14.816-3.36 28.864-9.376 41.376l127.968 127.968c12.544-5.984 26.56-9.376 41.376-9.376 53.024 0 96 42.976 96 96s-42.976 96-96 96-96-42.976-96-96c0-14.816 3.36-28.864 9.376-41.376l-127.968-127.968c-3.04 1.472-6.176 2.752-9.376 3.872l0 266.976c37.28 13.184 64 48.704 64 90.528 0 53.024-42.976 96-96 96s-96-42.976-96-96c0-41.792 26.72-77.344 64-90.528l0-266.976c-37.28-13.184-64-48.704-64-90.528 0-14.816 3.36-28.864 9.376-41.376l-78.176-78.176-295.904 295.872c-25.76 25.792-25.76 67.52 0 93.28l447.136 447.072c25.728 25.76 67.488 25.76 93.28 0l444.992-444.992c25.76-25.76 25.76-67.552 0-93.28z" p-id="7666"></path></svg>
                        </mu-col>
                    </mu-row>

                </mu-col>

                <mu-divider class="hr-line-about hr-line-bottom-about"/>

                <mu-col width="100" tablet="100" desktop="90">
                    <mu-sub-header>{{$LeftAboutMe.LeftAboutMeFirst.UpdateLog}}</mu-sub-header>
                    <mu-list-item
                            :title="log.UpdateLogTitle"
                            v-for="log in $UpdateLog">
                        <mu-icon
                                :value="log.UpdateLogIcon"
                                color="indigo"
                                slot="leftAvatar"/>
                        <span slot="describe">
                            {{log.UpdateLogContent}}
                        </span>
                    </mu-list-item>
                </mu-col>

                <mu-divider class="hr-line-about hr-line-bottom-about"/>

                <mu-col width="100" tablet="100" desktop="90">
                    <mu-content-block class="text-center-about text-center-lable-about">
                        <mu-flat-button
                                @click="openBottomSheet"
                                :label="$LeftAboutMe.LeftAboutMeFirst.WeiXinImgByBmy"
                                class="demo-flat-button"
                                secondary/>

                        <mu-bottom-sheet :open="bottomSheet" @close="openBottomSheet">
                            <mu-list @itemClick="openBottomSheet">
                                <mu-sub-header>
                                    {{$LeftAboutMe.LeftAboutMeFirst.YourChoice}}
                                </mu-sub-header>
                                <mu-list-item title="MyBlog"/>
                                <mu-list-item title="GitHub"/>
                                <mu-list-item title="KnowMe"/>
                            </mu-list>
                        </mu-bottom-sheet>

                    </mu-content-block>
                </mu-col>
            </mu-row>
        </div>
    </div>
</template>

<script>
import about from './about.js'

export default{
  mounted () {
      //设置标题
      this.$SetTitle(this.$BottomNav[2].ItemTitle)
  },
  data () {
    return {
        //决定是否展示顶部弹窗
        bottomSheet: false
    }
  },
  methods: {
   openBottomSheet (val) {
       about.openBottomSheet(this,val)
    }
  }
}
</script>

<style scoped>
@import "./../../assets/css/about.css";
</style>
