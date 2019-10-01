<template>
  <div class="playwrap">
    <div @click="back">返回</div>
    {{text}}
    获得的数据{{id}}{{size}}
    <div class = 'progress'>
      <span class="start"></span>
      <div class="progress-bar" >
        <div class="now"></div>
      </div>
      <span class="end"></span>
    </div>
  </div>
</template>

<script>
// import { get } from 'api'
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
  methods: {
    getParams () {
      return (this.id = this.$route.params.arrid)
    },
    transform (time) {
      let min = Math.floor(time / 60)
      min = min.toString().length === 1 ? ('0' + min) : min
      let sec = Math.floor(time % 60)
      sec = sec.toString().length === 1 ? ('0' + sec) : sec
      return { min, sec }
    },
    controlprogress () {
      const pLeft = this.$refs.progressbar.getBoundingClientRect().left
      const pWidth = this.$refs.progressbar.getBoundingClientRect().width
      // console.log(this.$progressbar.getBoundingClientRect())
      this.$refs.progressbar.onclick = function (e) {
        let perc = (e.clientX - pLeft) / pWidth
        this.$refs.progressnow.style.width = perc.toFixed(3) * 100 + '%'
        this.$refs.audio.currentTime = perc * this.$audio.duration
      }
    },
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    const audio = this.$store.state.audio
    const spanStart = document.querySelector('.start')
    const spanEnd = document.querySelector('.end')
    const progressbar = document.querySelector('.progress-bar')
    const progressnow = document.querySelector('.now')
    audio.ontimeupdate = function () {
      function transform (time) {
        let min = Math.floor(time / 60)
        min = min.toString().length === 1 ? ('0'+min) : min
        let sec = Math.floor(time % 60)
        sec = sec.toString().length === 1 ? ('0'+sec) : sec
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
      audio.currentTime = perc * audio.duration
    }
  }
}
</script>

<style lang="stylus" scoped>
  .playwrap
    position: absolute
    top: 0
    left: 0
    width: 375px
    height: 667px
    background-color: lightblue
    .progress
      display: flex
      justify-content: space-between
      align-items: center
      width: 380px
      margin: 100px auto
      .progress-bar
        position: relative
        width: 70%
        height: 5px
        background-color: #eee
        vertical-align: 2px
        border-radius: 3px
        cursor: pointer
        .now
          position: absolute
          left: 0
          display: inline-block
          height: 5px
          background: #31c27c
          :after
            content: ''
            position: absolute
            left: 100%
            width: 3px
            height: 7px
            background-color: lightblue
</style>
