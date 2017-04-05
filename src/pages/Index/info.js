
export default{
    //根据单击产生的id跳转载入不同的iframe地址
    ChangeUrl(vm,id){
        var self = vm
        switch (id){
            case '1':
                self.url = self.$IndexClass[0].IndexClassItemInfoUrl
                break;
            case '2':
                self.url = self.$IndexClass[1].IndexClassItemInfoUrl
                this.$CloseFooter()
                break;
            case '3':
                self.url = self.$IndexClass[2].IndexClassItemInfoUrl
                break;
            case '4':
                self.url = self.$IndexClass[3].IndexClassItemInfoUrl
                break;
            case '5':
                self.url = self.$IndexClass[4].IndexClassItemInfoUrl
                break;
            case '6':
                self.url = self.$IndexClass[5].IndexClassItemInfoUrl
                break;
            case '7':
                self.dialog = true
                setTimeout( function () {
                    location.href = self.$IndexClass[6].IndexClassItemInfoUrl
                },2000)

                break;
            case '8':
                self.url = self.$IndexClass[7].IndexClassItemInfoUrl
                break;
            case '9':
                self.url = self.$IndexClass[8].IndexClassItemInfoUrl
                break;
            case '10':
                self.url = self.$IndexClass[9].IndexClassItemInfoUrl
                break;
            case '11':
                self.url = self.$IndexClass[10].IndexClassItemInfoUrl
                self.$CloseFooter()
                break;
            case '12':
                self.url = self.$IndexClass[11].IndexClassItemInfoUrl
                break;
            case '13':
                self.url = self.$ConvenientTool[0].IndexClassItemInfoUrl
                break;
            case '14':
                self.url = self.$ConvenientTool[1].IndexClassItemInfoUrl
                break;
            case '15':
                self.url = self.$ConvenientTool[2].IndexClassItemInfoUrl
                self.$CloseFooter()
                break;
            case '16':
                self.url = self.$ConvenientTool[3].IndexClassItemInfoUrl
                self.$CloseFooter()
                break;
        }
    }
}