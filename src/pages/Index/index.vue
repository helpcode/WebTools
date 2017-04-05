<template>
    <div id="content-component">
        <mu-sub-header>生活助手</mu-sub-header>
        <mu-content-block>
        <div class="demo-grid">
            <mu-row gutter>
                <mu-col class="grid-margin"
                        v-for="item in $IndexClass"
                        width="25"
                        tablet="25"
                        desktop="25">
                    <a :href="item.IndexClassUrl+'?ti='+$EncodeURI(item.IndexClassTitle)">
                        <div v-html="item.IndexClassIcon"></div>
                        <div class="title">{{item.IndexClassTitle}}</div>
                    </a>
                </mu-col>
            </mu-row>
        </div>
        </mu-content-block>
        <mu-sub-header>便捷工具</mu-sub-header>
        <mu-content-block>
            <div class="demo-grid">
                <mu-row gutter>
                    <mu-col class="grid-margin"
                            v-for="item in $ConvenientTool"
                            width="25"
                            tablet="25"
                            desktop="25">
                        <a :href="item.IndexClassUrl+'?ti='+$EncodeURI(item.IndexClassTitle)">
                            <div v-html="item.IndexClassIcon"></div>
                            <div class="title">{{item.IndexClassTitle}}</div>
                        </a>
                    </mu-col>
                </mu-row>
            </div>
        </mu-content-block>
    </div>
</template>

<script>

export default{
  mounted () {
    this.$SetTitle(this.$BottomNav[0].ItemTitle)
    this.$parent.$refs.footer.$data.CloseFooter = true

    if(!localStorage.getItem("HistoryLength")){
        localStorage.setItem("HistoryLength",window.history.length)
    }
  },
  data () {
    return {
      msg: 'this is template body',
      ToolData: {}
    }
  },
  methods: {
    GetClick (val) {
      console.log(val.title)
    }
  }
}
</script>

<style scoped>
    .grid-margin{
        margin: 5px 0;
        padding: 10px 0;
    }
    .grid-margin .title{
        display: inline-block;
        margin-top: 10px;
        color: #8d8d8d;
    }
    .demo-grid {
        text-align: center;
    }
</style>
