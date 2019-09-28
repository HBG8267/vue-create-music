<template>
  <div class="playwrap">
    <div @click="back">返回</div>
    {{text}}
    获得的数据{{id}}
    <video :src="playUrl" controls="controls" ref="video" autoplay></video>
  </div>
</template>

<script>import { get } from 'api'
export default {
  name: 'play',
  data () {
    return {
      id: '',
      text: '这里是playdetail',
      // playList: [{
      //   coverImgUrl: '',
      //   id: '',
      //   name: '',
      //   creator: {
      //     nickname: '',
      //     userId: ''
      //   }
      // }]
      playUrl: ''
    }
  },
  methods: {
    getSongUrl (id) {
      console.log('getsongdetail----------')
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + `/song/url?id=${id}`
      get(url)().then((res) => {
        this.playUrl = res.data[0].url
        console.log(res, this.playUrl)
      })
    },
    getParams () {
      return (this.id = this.$route.params.arrid)
    },
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.getSongUrl(this.getParams())
  }
}
</script>

<style lang="stylus" scoped>
  .playwrap
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: lightblue
    .playlist
      li
        margin: 20px
</style>
