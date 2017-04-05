<template>
    <div id="content-component">
            <iframe seamless
                    :src="MovieUrl"
                    frameborder="0"
                    :height="$iframeHeight"
                    width="100%">
                <p>Your browser does not support iframes.</p>
            </iframe>
    </div>
</template>

<script>

export default{
  mounted () {
      this.$SetTitle(this.$route.query.ti)
      this.GetMovieUrl()
  },
  data () {
    return {
      MovieUrl: ''
    }
  },
  methods: {
    GetMovieUrl () {
      this.$http.post(this.$DataApiUrl.MovieApiUrl,
          {
              action: this.$route.params.id
          })
      .then((success) => {
          if(success.body.reason == '请求成功'){
              this.MovieUrl = success.body.result.h5url
          }else {
              console.log("")
          }
      },(error)=>{
         console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
