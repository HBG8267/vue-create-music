<template>
  <div class="searchwrap">
    <div class="header">
      <span class="iconfont icon-right-arrow" @click="back"></span>
      <div class="searchbox">
        <input type="text" class="text" v-model="value" />
        <div class="placeholder" v-show="showicon"></div>
        <span class="iconfont icon-chuyidong" v-show="showicon" @click="deleteValue"></span>
      </div>
    </div>
    <ul class="hotsbox">
      <li v-for="(item, index) in hots" :key="index" class="hot" @click="sousuo(item.first)">
        {{item.first}}
      </li>
    </ul>
    <div class="resultbox">
      <div v-for="(item, index) in result" :key="index" >
        {{item.name}}
      </div>
    </div>
  </div>
</template>
<script>
import { get } from 'api'
export default {
  name: 'search',
  data () {
    return {
      hots: [
      ],
      showicon: false,
      value: '',
      result: []
    }
  },
  watch: {
    value (newvalue) {
      this.showicon = !!newvalue
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    gethots () {
      console.log('gethot----------')
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + `search/hot`
      get(url)().then((res) => {
        console.log(res, typeof res.result.hots)
        this.hots.push(...res.result.hots)
      })
    },
    deleteValue () {
      this.value = ''
    },
    sousuo (words) {
      console.log('sousuo----------')
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + `search?keywords=${words}`
      get(url)().then((res) => {
        this.result.push(...res.result.songs)
      })
    }
  },
  mounted () {
    this.gethots()
    console.log('gethot----------', typeof this.hots, this.hots)
    console.log('value-------')
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
    .icon-right-arrow
      flex: 0 0 40px
      text-align: center
      line-height: 40px
      font-size: 20px
    .searchbox
      position: relative
      flex: 1
      margin-right: 50px
      font-size: 20px
      line-height: 50px
      border-bottom: 1px solid #000
      .text
        position: absolute
        width: 80%
        height: 100%
        z-index: 100
      .placeholder
        position: absolute
        width: 100%
        height: 100%
        z-index: 10
      .icon-chuyidong
        position: absolute
        right: 0
  .hotsbox
    width:100%
    .hot
      float: left
      margin: 5px 10px
      padding: 2px
      font-size: 12px
      border: 1px solid #999
      border-radius: 5px
</style>
