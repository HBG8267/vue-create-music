<template>
  <div class="playwrap">
    <div class="bg">
      <div class="info">
        <span class="iconfont icon-right-arrow" @click="back"></span>
        歌名
      </div>
      <div class="lyric"></div>
      <div class="controls">
        <div class = 'progress'>
          <span class="start"></span>
          <div class="progress-bar" >
            <div class="now"></div>
          </div>
          <span class="end"></span>
        </div>
        <div class="button">
          <div class="playtype ico">
            <span class="iconfont icon-liebiaoxunhuan"></span>
          </div>
          <div class="down ico">
            <span class="iconfont icon-btn_prestep"></span>
          </div>
          <div class="play ico">
            <span class="iconfont icon-bofang"></span>
          </div>
          <div class="up ico">
            <span class="iconfont icon-btn_nextstep"></span>
          </div>
          <div class="detail ico">
            <span class="iconfont icon-category"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex"

export default {
  name: 'play',
  data () {
    return {
      id: '',
      text: '这里是playdetail',
      playUrl: '',
      size: 0
    }
  },
  computed: {
    ...mapState(['audio'])
  },
  methods: {
    getParams () {
      return (this.id = this.$route.params.arrid)
    },
    setcontrols () {
      const audio = this.$store.state.audio
      const spanStart = document.querySelector('.start')
      const spanEnd = document.querySelector('.end')
      const progressbar = document.querySelector('.progress-bar')
      const progressnow = document.querySelector('.now')
      if (spanStart.innerHTML === '') {
        spanStart.innerHTML = '0:00'
        spanEnd.innerHTML = '3:00'
      }
      audio.ontimeupdate = function () {
        function transform (time) {
          let min = Math.floor(time / 60)
          min = min.toString().length === 1 ? ('0' + min) : min
          let sec = Math.floor(time % 60)
          sec = sec.toString().length === 1 ? ('0' + sec) : sec
          return { min, sec }
        }
        // 设置总时长
        let bool = true
        if (bool) {
          let { min, sec } = transform(audio.duration)
          spanEnd.innerHTML = min + ':' + sec
          bool = false
        }
        // 设置当前时间
        let { min, sec } = transform(audio.currentTime)
        spanStart.innerHTML = min + ':' + sec
        // 设置进度条
        progressnow.style.width = (audio.currentTime / audio.duration).toFixed(3) * 100 + '%'
      }

      // 快进
      const pLeft = progressbar.getBoundingClientRect().left
      const pWidth = progressbar.getBoundingClientRect().width
      // console.log(progressbar.getBoundingClientRect())
      progressbar.onclick = function (e) {
        let perc = (e.clientX - pLeft) / pWidth
        progressnow.style.width = perc.toFixed(3) * 100 + '%'
        audio.currentTime = Math.floor(perc * audio.duration)
      }
    },
    back () {
      this.$router.go(-1)
    },
    ...mapMutations(['PLAY', 'PAUSE'])
  },
  mounted () {
    this.setcontrols()
  }
}
</script>

<style lang="stylus" scoped>
  .playwrap
    position: absolute
    box-sizing: border-box
    top: 0
    left: 0
    padding: 10px
    width: 375px
    height: 667px
    color: #fffdef
    background-color: rgb(0, 0, 0)
    .bg
      display: flex
      flex-direction: column
      width: 100%
      height: 100%
      background-color: rgba(3, 3, 3 .3)
      .info
        flex: 0 0 100px
      .lyric
        flex: 1
      .controls
        flex: 0 0 200px
        .progress
          display: flex
          justify-content: space-between
          align-items: center
          margin: 10px auto
          .start, .end
            display: inline-block
          .progress-bar
            display: inline-block
            position: relative
            width: 70%
            height: 2px
            background-color: rgba(240, 240, 240, .3)
            vertical-align: 2px
            border-radius: 3px
            cursor: pointer
            .now
              position: absolute
              left: 0
              display: inline-block
              height: 2px
              background: #fff
              &::after
                content: ''
                position: absolute
                left: 100%
                width: 5px
                height: 5px
                margin-top: -2px
                background-color: #fff
                border-radius: 50%
        .button
          display: flex
          flex-direction: row
          text-align: center
          .ico
            flex: 1
            .iconfont
              font-size: 24px
              line-height: 50px
            .icon-bofang
              font-size: 48px
</style>
