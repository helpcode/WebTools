
export default{

    CityData (){
        return ['北京', '上海', '苏州','杭州','合肥']
    },
    WeatherApiUrl (val){
        return "http://api.map.baidu.com/telematics/v3/weather?" + "location=" + val + "&output=json&ak=t1fLY5kTo0eegUAqtENfvPzn"
    }

}