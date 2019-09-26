<template>
  <div class="foundwrap">
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
        <div class="title">{{songwrap.title}}</div>
        <div class="more">{{songwrap.more}}</div>
      </div>
      <ul class="content">
        <li v-for="(item, index) in songwrap.songs" :key="index" class="block">
          <div class="imgwrap"></div>
          <div class="text">
            {{item.name}}
          </div>
        </li>
      </ul>
    </div>
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
      songwrap: {
        title: '推荐歌单',
        more: '歌单广场',
        songs: [
          { name: '每日推荐11111111111111111111111111111111111' },
          { name: '歌单歌单歌单歌单歌单' },
          { name: '排行榜啊哈佛啊好狗狗' },
          { name: '电台' },
          { name: '直播' },
          { name: '电台' },
          { name: '直播' }
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
    getSongData () {
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + 'recommend/songs'
      get(url)().then((res) => {
        // console.log(res)
      })
    }
  },
  mounted () {
    // this.getSwiperData()
    // this.getSongData()
  }
}
</script>

<style lang="stylus" scoped>
.foundwrap
  width: 100%
  height: 100%
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
        width: 33%
        //flex: 0 0 33%
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
