<template>
  <div class="listwrap">
    <div class="mask" @click="CONTROL_LIST">
    </div>
    <div class="listbox" ref="listbox">
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
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'songlist',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['songList', 'showlist'])
  },
  methods: {
    ...mapMutations(['CONTROL_LIST'])
  },
  watch: {
    showlist (newvalue, oldvalue) {
      if (newvalue === true) {
        console.log('true')
        this.$refs.listbox.style.transform = 'translateY(-300px)'
      } else {
        console.log('false')
        this.$refs.listbox.style.transform = ''
      }
      console.log('watch---')
    }
  }
}
</script>

<style lang="stylus" scoped>
.listwrap
  position: absolute
  top:0
  left:0
  width: 100%
  height: 100%
  -webkit-border-radius: 15px
  -moz-border-radius: 15px
  border-radius: 15px
  .mask
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(100, 100, 100, .3);
    z-index: 100
  .listbox
    position: absolute
    width: 100%
    top: 100%
    height: 300px
    background-color: #fff;
    z-index: 500
    -webkit-transition: all .5s
    -moz-transition: all .5s
    -ms-transition: all .5s
    -o-transition: all .5s
    transition: all .5s
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
