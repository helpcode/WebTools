
export default {
  install (Vue) {

      //获取手机归属地
      Vue.prototype.$GetPhoneInfo = 'http://tcc.taobao.com/cc/json/mobile_tel_segment.htm'

      Vue.prototype.$DataApiUrl = {
          //请求新闻数据
          NewsApiUrl:'http://139.224.210.190/WebTools-php/index.php/Home/Index/index',
          //微信精选 接口
          WeiXinApiUrl: 'http://139.224.210.190/WebTools-php/index.php/Home/Index/weixin',
          //在线电影票 接口
          MovieApiUrl: 'http://139.224.210.190/WebTools-php/index.php/Home/Index/movie'

      }

      //拼接获取天气的url接口
      Vue.prototype.$WeatherApiUrl = function (val) {
          return "http://api.map.baidu.com/telematics/v3/weather?"
              + "location="
              + val
              + "&output=json&ak=t1fLY5kTo0eegUAqtENfvPzn"
      }

  }
}
