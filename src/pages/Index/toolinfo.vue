<template>
    <div id="content-component">
        <iframe :src="url"
                seamless
                width="100%"
                :height="$iframeHeight"
                frameborder="0">
            Your browser does not support iframe
            <mu-float-button icon="add" mini class="demo-float-button"/>
        </iframe>

        <mu-dialog :open="dialog" title="温馨提示">
            亲，记得点两次返回键回来哦！
            <mu-flat-button label="确定" slot="actions" primary @click="dialog = false"/>
        </mu-dialog>

    </div>
</template>

<script>
    //引入拆分出去的URL跳转逻辑
    import info from './info.js'
    export default{
        mounted(){
            this.$SetTitle(this.$route.query.ti)
            info.ChangeUrl(this,this.$route.params.id)
        },
        data(){
            return{
                url:'',
                dialog: false
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    body{
        background-color:#ff0000;
    }
</style>
