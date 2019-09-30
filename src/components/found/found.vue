<script src="../../../vue.config.js"></script>
<template>
  <div class="foundwrap">
    <cube-scroll>
    <div class="slidewrap">
      <cube-slide ref="slide" :data="swiperData" @change="changePage">
        <cube-slide-item v-for="(item, index) in swiperData" :key="index">
          <a href="#">
            <img :src="item.picUrl">
          </a>
        </cube-slide-item>
      </cube-slide>
    </div>
    <ul class="navwrap">
      <li v-for="(item, index) in navs" :key="index" class="navblock">
        <div class="iconwrap"></div>
        <div class="text">
          {{item.name}}
        </div>
      </li>
    </ul>
    <div class="songwrap">
      <div class="head">
        <div class="title">{{songWrap.title}}</div>
        <div class="more">{{songWrap.more}}</div>
      </div>
      <ul class="content">
        <li v-for="(item, index) in songWrap.songs" :key="index" class="block" @click="click(item.id)">
          <div class="imgwrap">
            <img :src="item.picUrl" alt="">
          </div>
          <div class="text">
            {{item.name}}
          </div>
        </li>
      </ul>
    </div>
    </cube-scroll>
  </div>
</template>

<script>
import { get } from 'api'

export default {
  name: 'found',
  data: function () {
    return {
      swiperData: [],
      phoneWidth: document.documentElement.clientWidth,
      navs: [
        { name: '每日推荐' },
        { name: '歌单' },
        { name: '排行榜' },
        { name: '电台' },
        { name: '直播' }
      ],
      songWrap: {
        title: '推荐新音乐',
        more: '歌单广场',
        songs: [
        ]
      }
    }
  },
  methods: {
    changePage () {
      return 1
    },
    getSwiperData () {
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + 'personalized/mv'
      get(url)({}).then((res) => {
        let result = res.result
        result.forEach((item, index) => {
          this.swiperData.push({
            picUrl: item.picUrl
          })
        })
      })
    },
    getSongsData () {
      console.log('getsong----------')
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + 'personalized/newsong'
      get(url)().then((res) => {
        console.log(res)
        res.result.forEach((item) => {
          let {id,name,song: {album: {picUrl}}} = item
          this.songWrap.songs.push({id, name, picUrl})
        })
      })
      // console.log('songs:',typeof this.songWrap.songs,this.songWrap.songs)
    },
    login () {
      console.log('login----------')
      let phone = '18260095016'
      let password = 'hubaogang'
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + `login/cellphone?phone=${phone}&password=${password}`
      get(url)().then((res) => {
        console.log('登陆中', res)
      })
    },
    click (id) {
      this.$router.push({
        name: 'playdetail',
        params: {
          arrid: id
        }
      }).catch((err) => {err})
      this.$store.commit({
        type: 'SHOW_PLAYDETAIL'
      })
    }
  },
  mounted () {
    this.login()
    setTimeout(this.getSongsData, 1000)
    this.getSwiperData()
  }
}
</script>

<style lang="stylus" scoped>
.foundwrap
  width: 100%
  height: 600px
  overflow: hidden
  .slidewrap
    width: 250px
    height: 120px
    margin: 5px auto
  .navwrap
    display: flex
    width: 100%
    .navblock
      flex: 1
      .iconwrap
        width: 60px
        height: 60px
        margin: 10px auto 0
        background-color: red;
        border-radius: 50%
      .text
        padding: 9px 0
        line-height: 20px
        font-size: 12px
        text-align: center
  .songwrap
    width: 100%
    .head
      height: 40px
      .title
        float: left
        padding: 9px 15px
        font-size: 20px
        font-weight: 700
      .more
        float: right
        padding: 7px 12px
        margin-top: 8px
        font-size: 12px
        border: 1px solid #ccc
        -webkit-border-radius: 10px
        -moz-border-radius: 10px
        border-radius: 10px
    .content
      display: flex
      flex-flow: row wrap
      width: 100%
      .block
        //width: 33%
        flex: 0 0 33%
        height: 180px // 最好固定宽高比
        box-sizing border-box
        padding: 5px
        .imgwrap
          width: 100%
          height: 70% // 最好固定宽高比
          -webkit-box-shadow: inset 0 0 1px #000
          -moz-box-shadow: inset 0 0 1px #000
          box-shadow: inset 0 0 1px #000
          webkit-border-radius: 5px
          -moz-border-radius: 5px
          border-radius: 5px
          img
            width: 100%
            height: 100%
        .text
          height: 40px
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-box-orient: vertical
          -webkit-line-clamp: 2
          white-space: pre-wrap
          font-size: 12px
</style>
