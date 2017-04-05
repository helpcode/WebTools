<template>
    <div id="footer-component" v-if="CloseFooter">
        <mu-paper style="max-width: 100%;">
            <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
                <mu-bottom-nav-item
                        v-for="item in $BottomNav"
                        :href="item.ItemUrl"
                        :value="item.ItemTitle"
                        :title="item.ItemTitle"
                        :icon="item.ItemIcon"/>
            </mu-bottom-nav>
        </mu-paper>
    </div>
</template>

<script>
export default{
  mounted () {
    //this.$TestFunction()
  },
  data () {
    return {
      bottomNav: this.$BottomNav[0].ItemTitle,
      bottomNavColor: this.$BottomNav[0].ItemTitle,
      CloseFooter: true
    }
  },
  methods: {
    handleChange (val) {
      console.log(this.bottomNav = val)
    }
  }
}
</script>

<style scoped>
  @import "./../../assets/css/footer.css";
</style>
