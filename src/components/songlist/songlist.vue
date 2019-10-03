<template>
  <div class="listwrap">
    <div class="info">
      <div class="type">
        <span class="iconfont icon-liebiaoxunhuan"></span>
        列表循环
      </div>
      <div class="clearall">
        <span class="iconfont icon-lajixiang"></span>
      </div>
      <div class="collectall">
        <span class="iconfont icon-tianjia"></span>
        收藏全部
      </div>
    </div>
    <ul class="content">
      <li v-for="(item, index) in songList" :key="index" class="single">
        <div class="name">{{item.name}}</div>
        <div class="author"></div>
        <span class="iconfont icon-chuyidong"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'songlist',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['songList'])
  }
}
</script>

<style lang="stylus" scoped>
.listwrap
  position: absolute
  bottom: 0
  width: 100%
  min-height: 300px
  background: lightblue
  transform: translateY(0)
  -webkit-border-radius: 15px
  -moz-border-radius: 15px
  border-radius: 15px
  .info
    height: 40px
    box-sizing: border-box
    .type
      float: left
      padding: 0 10px
      line-height: 40px
    .collectall
      float: right
      padding: 0 10px
      line-height: 40px
    .clearall
      float: right
      padding: 0 10px
      line-height: 40px
  .content
    margin: 5px 15px
    .single
      height: 20px
      line-height: 20px
      .name
        float: left
      .autohor
        float: left
      .iconfont
        float: right
</style>
