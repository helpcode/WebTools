<template>
    <div id="content-component">

        <div v-if ="ShowDetailed">

            <mu-list-item :title="ShowDetailedTitle" @click="OpenNewWindows('','')">
                <mu-icon slot="left" value="keyboard_arrow_left"/>
            </mu-list-item>

            <iframe seamless
                    :src="OpenNewWindowsUrl"
                    frameborder="0"
                    :height="$iframeHeight"
                    width="100%">
                <p>Your browser does not support iframes.</p>
            </iframe>
        </div>


        <div v-else>
            <mu-tabs :value="activeTab" @change="handleTabChange">
                <mu-tab value="top" title="头条"/>
                <mu-tab value="yule" title="娱乐"/>
                <mu-tab value="junshi" title="军事"/>
                <mu-tab value="keji" title="科技"/>
                <mu-tab value="shehui" title="社会"/>
                <mu-tab value="shishang" title="时尚"/>
            </mu-tabs>

            <div v-if="activeTab === 'top'">
                <br><br>
                <mu-divider class="hr-line hr-line-bottom"/>
                <div class="gridlist-demo-container">
                    <mu-grid-list class="gridlist-demo">
                        <mu-grid-tile v-for="tile in NewData">
                            <img :src="tile.thumbnail_pic_s"
                                 @click="OpenNewWindows(tile.url,tile.title)"/>
                            <span slot="title">{{tile.title}}</span>
                            <span slot="subTitle">by <b>{{tile.author_name}}</b></span>
                        </mu-grid-tile>
                    </mu-grid-list>
                </div>
            </div>

            <div v-if="activeTab === 'yule'">
                <br><br>
                <mu-divider class="hr-line hr-line-bottom"/>
                <div class="gridlist-demo-container">
                    <mu-grid-list class="gridlist-demo">
                        <mu-grid-tile v-for="tile in NewData">
                            <img :src="tile.thumbnail_pic_s" @click="OpenNewWindows(tile.url,tile.title)"/>
                            <span slot="title">{{tile.title}}</span>
                            <span slot="subTitle">by <b>{{tile.author_name}}</b></span>
                        </mu-grid-tile>
                    </mu-grid-list>
                </div>
            </div>
            <div v-if="activeTab === 'junshi'">
                <br><br>
                <mu-divider class="hr-line hr-line-bottom"/>
                <div class="gridlist-demo-container">
                    <mu-grid-list class="gridlist-demo">
                        <mu-grid-tile v-for="tile in NewData">
                            <img :src="tile.thumbnail_pic_s" @click="OpenNewWindows(tile.url,tile.title)"/>
                            <span slot="title">{{tile.title}}</span>
                            <span slot="subTitle">by <b>{{tile.author_name}}</b></span>
                        </mu-grid-tile>
                    </mu-grid-list>
                </div>
            </div>

            <div v-if="activeTab === 'keji'">
                <br><br>
                <mu-divider class="hr-line hr-line-bottom"/>
                <div class="gridlist-demo-container">
                    <mu-grid-list class="gridlist-demo">
                        <mu-grid-tile v-for="tile in NewData">
                            <img :src="tile.thumbnail_pic_s" @click="OpenNewWindows(tile.url,tile.title)"/>
                            <span slot="title">{{tile.title}}</span>
                            <span slot="subTitle">by <b>{{tile.author_name}}</b></span>
                        </mu-grid-tile>
                    </mu-grid-list>
                </div>
            </div>
            <div v-if="activeTab === 'shehui'">
                <br><br>
                <mu-divider class="hr-line hr-line-bottom"/>
                <div class="gridlist-demo-container">
                    <mu-grid-list class="gridlist-demo">
                        <mu-grid-tile v-for="tile in NewData">
                            <img :src="tile.thumbnail_pic_s" @click="OpenNewWindows(tile.url,tile.title)"/>
                            <span slot="title">{{tile.title}}</span>
                            <span slot="subTitle">by <b>{{tile.author_name}}</b></span>
                        </mu-grid-tile>
                    </mu-grid-list>
                </div>
            </div>
            <div v-if="activeTab === 'shishang'">
                <br><br>
                <mu-divider class="hr-line hr-line-bottom"/>
                <div class="gridlist-demo-container">
                    <mu-grid-list class="gridlist-demo">
                        <mu-grid-tile v-for="tile, index in NewData" :key="index">
                            <img :src="tile.thumbnail_pic_s" @click="OpenNewWindows(tile.url,tile.title)"/>
                            <span slot="title">{{tile.title}}</span>
                            <span slot="subTitle">by <b>{{tile.author_name}}</b></span>
                        </mu-grid-tile>
                    </mu-grid-list>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default{
  mounted () {
      this.$SetTitle(this.$route.query.ti)
      this.GetNewData()

  },
  data () {
    return {
        NewData: {},
        featured: true,
        activeTab: 'top',
        ShowDetailed: false,
        OpenNewWindowsUrl: '',
        ShowDetailedTitle: '',
    }
  },
  methods: {
      OpenNewWindows(url,title){
          if(url == '' || title == ''){
              this.ShowDetailed = false
              this.$SetTitle(this.$route.query.ti)
          }else {
              this.ShowDetailed = !this.ShowDetailed
              this.OpenNewWindowsUrl = url
              this.ShowDetailedTitle = title
          }
      },
      //切换标签，请求新标签的新闻数据
      handleTabChange (val) {
          this.activeTab = val
          this.GetNewData()
      },
      //请求数据
      GetNewData () {
          this.$http.post(this.$DataApiUrl.NewsApiUrl,
              {
                  type: this.activeTab,
                  action: this.$route.params.id
              })
              .then(function (success) {
                  console.log(success)
                  if(success.data.reason == "成功的返回"){
                      this.NewData = success.data.result.data
                  }
              },function (error) {
                  console.log(error)
              })
    }
  }
}
</script>

<style scoped>
#content-component{
    margin: 55px 0 50px 0;
}
.demo-float-button{
    position: fixed;
    bottom: 13%;
    right: 30px;
    z-index: 9999;
}
.mu-item.show-left{
    padding-left: 54px !important;
}
.mu-tabs{
    background: #5c5e5e !important;
    position: fixed !important;
}
</style>
