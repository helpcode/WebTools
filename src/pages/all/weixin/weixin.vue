<template>
    <div id="content-component" class="demo-infinite-container">

        <div v-if="ShowIframe">
            <iframe seamless
                    id="weixiniframe"
                    :src="WeiXinUrl"
                    frameborder="0"
                    :height="$iframeHeight"
                    width="100%">
                <p>Your browser does not support iframes.</p>
            </iframe>
        </div>


        <div v-else>
            <div class=weixinlist>
                <mu-grid-list class="gridlist-demo">
                    <mu-grid-tile v-for="tile, index in list" :key="index">
                        <img :src="tile.firstImg" :alt="tile.title" @click="OpenWeiXin(tile.url)"/>
                        <span slot="title" @click="OpenWeiXin(tile.url)">{{tile.title}}</span>
                        <span slot="subTitle" @click="OpenWeiXin(tile.url)">by <b>{{tile.source}}</b></span>
                    </mu-grid-tile>
                </mu-grid-list>
                <mu-infinite-scroll
                        :scroller="scroller"
                        :loading="loading"
                        loadingText="玩命加载..."
                        @load="loadMore"/>
            </div>
        </div>

    </div>
</template>

<script>

export default{
  mounted () {
      this.$SetTitle(this.$route.query.ti)
      this.GetWeiXin()
  },
  data () {
    return {
      //展示多少数据
      ShowNumber: '20',
      //存放新闻数据
      list:[],
      //当前默认页数
      Pages: 1,
      //是否展示加载进度
      loading: false,
      //滚动的元素，会监听它的 scroll 事件
      scroller: this.$el,
      WeiXinUrl: '',
        ShowIframe: false
    }
  },
  methods: {
      OpenWeiXin(url){
        this.WeiXinUrl = url
        this.ShowIframe = true
          console.log("获取weixiniframe：")
          console.log(document.getElementById('weixiniframe'))
      },
      loadMore () {
          //加载按钮显示
          this.loading = true
          //设置超时两秒开始加载
          setTimeout(() => {

              this.Pages += 1
              this.GetWeiXin()
              //关闭加载按钮
              this.loading = false
          }, 1000)
      },
    GetWeiXin () {
        //alert("当前page页数："+this.Pages)
        this.$http.post(this.$DataApiUrl.WeiXinApiUrl,
            {
                action: this.$route.params.id,
                number: this.ShowNumber,
                page: this.Pages
            })
            .then((success) => {
                if(success.body.reason == '请求成功'){
                    if(this.list.length == '0'){
                        //console.log("第一次请求微信新闻数据：")
                        this.list = success.body.result.list
                    }else {
                        //console.log("下拉加载数据：")
                        this.list.push.apply(this.list,success.body.result.list)
                    }
                }else {

                }
            },(error) => {
                console.log(error)
            })
    }
  }
}
</script>

<style scoped>
    .demo-infinite-container{
        width: 100%;
        height: 680px;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
</style>
