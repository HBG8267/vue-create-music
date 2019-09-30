<template>
  <div class="footerwrap">
    <img :src="picUrl" class="pic">
    <div class="text">
      <p class="name">歌曲名</p>
      <p class="author">作者</p>
    </div>
    <div class="control">开始</div>
    <div class="detail">详情</div>
  </div>
</template>

<script>
export default {
  name: 'playfooter',
  data () {
    return {
      picUrl: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .footerwrap
    display: flex
    flex-flow: row nowrap
    position: absolute
    left: 0
    bottom: 0
    width: 100%
    height: 50px
    padding: 5px 0
    background-color: #fff
    .pic
      flex: 0 0 50px
      height: 50px
      -webkit-border-radius: 50%
      -moz-border-radius: 50%
      border-radius: 50%
      background-color: #000;
    .text
      flex: 1
      .name
        padding: 2px 5px
        line-height:24px
        font-size: 20px
        color: #333
      .author
        padding: 2px
        line-height:18px
        font-size: 14px
        color: #999
    .control , .detail
      flex: 0 0 50px
      height: 50px
      -webkit-border-radius: 50%
      -moz-border-radius: 50%
      border-radius: 50%
      background-color: #000;
</style>
