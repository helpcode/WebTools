<template>
    <div id="content-component">
            <mu-list>
                <mu-list-item disabled title="18305520337" describeText="总是欠费"/>
            </mu-list>

            <mu-divider />

            <mu-list>
                <mu-sub-header>主要方式</mu-sub-header>
                <mu-list-item disableRipple title="QQ：2271608011" describeText="消息太多不一定看">
                </mu-list-item>
                <mu-list-item disableRipple title="微信：cxy-monkey" describeText="总是不玩别找我">
                </mu-list-item>
                <mu-list-item disableRipple title="博客：geekhelp.cn" describeText="夜更频繁多留言">
                </mu-list-item>
            </mu-list>

            <mu-divider />

            <mu-list>
                <mu-sub-header>给我留言</mu-sub-header>
                <mu-text-field class="leaving-message"
                               labelFloat
                               label="评论必须要吊，否则我不看"
                               hintText="不超过100个字"
                               :errorText="multiLineInputErrorText"
                               @textOverflow="handleMultiLineOverflow"
                               multiLine :rows="3" :rowsMax="6"
                               :maxLength="100"
                               @focus="IfShowBtnOk = true"
                               v-model="input"
                               icon="comment"/><br/>

                <mu-flat-button
                        label="提交"
                        v-if="IfShowBtnOk"
                        class="demo-flat-button"
                        @click="Submit(input)"
                        primary/>

                <mu-toast v-if="toast" message="必填内容" @close="$hideToast"/>

            </mu-list>
    </div>
</template>

<script>
export default{
  mounted () {
      this.$SetTitle(this.$BottomNav[3].ItemTitle)
  },
  data () {
    return {
        input: '',
        multiLineInputErrorText: '',
        IfShowBtnOk: false,
        toast: false
    }
  },
  methods: {
      Submit(val){
          if(val.length != '0' || val != ''){
              console.log("有数据，暂未开发留言")
          }else {
              this.$showToast()
          }
      },
      handleMultiLineOverflow (isOverflow) {
          this.multiLineInputErrorText = isOverflow ? '这么多，还是发短信吧！！' : ''
      }
  }
}
</script>

<style scoped>
.leaving-message{
    width: 98%;
    margin: 0 1%;
}
.mu-toast{
    top: 30% !important;
    left: 30%;
    text-align: center;
    width: auto !important;
}
</style>
