<template>
  <div class="playwrap">
    播放界面
  </div>

</template>

<script>import { get } from 'api'
export default {
  name: 'play',
  data () {
    return {
      id: undefined
    }
  },
  methods: {
    getSongUrl () {
      console.log('getsongurl----------')
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + `song/url?id=${this.id}`
      get(url)().then((res) => {
        console.log(res)
      })
    },
    getParams () {
      this.id = this.$route.params.id
      console.log(this.id)
    }
  },
  mounted () {
    this.getParams()
  }
}
</script>

<style lang="stylus" scoped>
  .playwrap
    position: absolute
    top: 0
    left: 0
    width: 500px
    height: 500px
    background-color: lightblue;
</style>
