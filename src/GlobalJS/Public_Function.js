export default {
  install (Vue) {

    //获取 封装 ajax请求
    Vue.prototype.$GetDatasApi = function (ApiUrl,data) {
      console.log(ApiUrl+data)
      Vue.http.jsonp(ApiUrl+data)
          .then((success) => {
            console.log(success.body)
      }, (error) => {
        console.log(error)
      })
    }

   /**
    * param 将要转为URL参数字符串的对象
    * key URL参数字符串的前缀
    * encode true/false 是否进行URL编码,默认为true
    * return URL参数字符串
    */
    Vue.prototype.$parseParam = function (param, key, encode) {
        if(param==null) return '';
        var paramStr = '';
        var t = typeof (param);
        if (t == 'string' || t == 'number' || t == 'boolean') {
            paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);
        } else {
            for (var i in param) {
                var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
                paramStr += this.$parseParam(param[i], k, encode);
            }
        }
        return paramStr;
    }

    //设置顶部显示的标题
    Vue.prototype.$SetTitle = function (title) {
        this.$parent.$refs.head.$data.showTitle = title
    }

    //关闭底部导航
    Vue.prototype.$CloseFooter = function () {
        this.$parent.$refs.footer.$data.CloseFooter = false
    }

    //关于页面的跳转
    Vue.prototype.$GoToUrl = function (url) {
        window.location.href = url
    }

    //展示tosat
    Vue.prototype.$showToast = function () {
        this.toast = true
        if (this.toastTimer) clearTimeout(this.toastTimer)
        this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
    }

    //隐藏toast
    Vue.prototype.$hideToast = function () {
        this.toast = false
        if (this.toastTimer) clearTimeout(this.toastTimer)
    }

    //编码url地址
    Vue.prototype.$EncodeURI = function (value){
        return encodeURI(value)
    }

  }
}
