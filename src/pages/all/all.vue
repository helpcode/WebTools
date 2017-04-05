<template>
    <div id="content-component">

        <div>
            <mu-list >
                <mu-sub-header>你的贴心助手</mu-sub-header>
                <mu-list-item
                        :title="$ReturnLifeTool.LifeFirstItem.LifeToolFirstItemTitle"
                        toggleNested
                        :open="opentoggleNested">
                    <mu-icon slot="left" :value="$ReturnLifeTool.LifeFirstItem.LifeToolFirstItemIcon"/>

                    <mu-list-item
                            v-for="otheritem, index in $ReturnLifeTool['LifeToolOtherItem']"
                            :href="otheritem.LifeToolOtherItemHref +
                             otheritem.LifeToolOtherItemID+
                             '?ti='+
                             otheritem.LifeToolOtherItemTitle"
                            slot="nested"
                            :key="index"
                            :vaule="otheritem.LifeToolOtherItemTitle"
                            :title="otheritem.LifeToolOtherItemTitle">
                        <mu-icon slot="left" :value="otheritem.LifeToolOtherItemIcon"/>
                    </mu-list-item>


                </mu-list-item>
            </mu-list>
            <mu-divider class="hr-line"/>
            <mu-list>

                <mu-sub-header>甩卖各类票</mu-sub-header>

                <mu-list-item title="出行/车辆" toggleNested :open="opentoggleNested">
                    <mu-icon slot="left" value="directions_railway"/>
                    <mu-list-item slot="nested" title="找景区">
                        <mu-icon slot="left" value="terrain"/>
                    </mu-list-item>
                    <mu-list-item slot="nested" title="抢火车票">
                        <mu-icon slot="left" value="http"/>
                    </mu-list-item>
                </mu-list-item>
            </mu-list>

            <mu-divider class="hr-line"/>
            <mu-list>
                <mu-sub-header>码农独家专属</mu-sub-header>
                <mu-list-item title="开发/优化" toggleNested :open="opentoggleNested">
                    <mu-icon slot="left" value="cloud_done"/>
                    <mu-list-item slot="nested" title="域名备案查询">
                        <mu-icon slot="left" value="http"/>
                    </mu-list-item>

                    <mu-list-item slot="nested" title="网站安全检测">
                        <mu-icon slot="left" value="https"/>
                    </mu-list-item>
                    <mu-list-item slot="nested" title="百度权重">
                        <mu-icon slot="left" value="line_weight"/>
                    </mu-list-item>
                    <mu-list-item slot="nested" title="Alexa网站排名">
                        <mu-icon slot="left" value="looks_1"/>
                    </mu-list-item>
                </mu-list-item>
            </mu-list>
        </div>

    </div>
</template>

<script>

    export default{
        mounted () {
            //设置标题
            this.$SetTitle(this.$BottomNav[1].ItemTitle)
        },
        data () {
            return {
                opentoggleNested: false,
                ItemSelect: ''
            }
        },
        methods: {
            MenuListClick (val) {
                console.log(val)
            }
        }
    }
</script>

<style scoped>

</style>
