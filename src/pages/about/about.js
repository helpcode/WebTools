export default{
    openBottomSheet (vm,val) {
        var self = vm
        if (!(typeof(val.title) === 'undefined')){
            switch (val.title){
                case "MyBlog":
                    self.$GoToUrl(self.$myblog)
                    break;
                case "GitHub":
                    self.$GoToUrl(self.$github)
                    break;
                case "KnowMe":
                    self.$GoToUrl(self.$knowme)
                    break;
                default:;
            }
        }
        //关闭或展示弹窗
        self.bottomSheet = !self.bottomSheet
    }
}