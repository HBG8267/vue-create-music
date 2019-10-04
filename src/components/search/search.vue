<template>
  <div class="searchwrap">
    <div class="header">
      <span class="iconfont icon-right-arrow" @click="back"></span>
      <div class="searchbox">
        <div class="text"></div>
        <div class="placeholder"></div>
      </div>
    </div>
    <div class="hotsbox"></div>
  </div>
</template>
<script>
export default {
  name: 'search',
  data () {
    return {

    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
.searchwrap
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #fff;
  .header
    display: flex
    height: 40px
    .iconfont
      flex: 0 0 40px
      text-align: center
      line-height: 40px
      font-size: 20px
    .searchbox
      flex: 1
      margin-right: 50px
      border-bottom: 1px solid #000
</style>
