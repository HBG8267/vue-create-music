<template>
  <div class="wrap">
    <tab></tab>
    <router-view></router-view>
    <playfooter v-show="false"></playfooter>
    <songlist v-show="showlist"></songlist>
  </div>
</template>

<script>
import tab from './components/tab/tab.vue'
import playfooter from './components/playfooter/playfooter'
import songlist from './components/songlist/songlist.vue'

export default {
  name: 'app',
  data () {
    return {
      userId: undefined
    }
  },
  computed: {
    showfooter: {
      get: function () {
        console.log(!this.$store.state.isplaydetailshow)
        return !this.$store.state.isplaydetailshow
      }
    },
    showlist: {
      get: function () {
        console.log('change show list----')
        return this.$store.state.showlist
      }
    }
  },
  mounted () {
    let wrap = document.querySelector('.wrap')
    console.log('wrap----')
    wrap.addEventListener('touchend', this.playtest)
  },
  methods: {
    playtest () {
      console.log('触发了touchend')
      let wrap = document.querySelector('.wrap')
      this.$store.commit('PLAY')
      wrap.removeEventListener('touchend', this.playtest)
      setTimeout(() => {
        console.log('--播放成功，现在停止')
        // this.$store.state.audio.pause()
      }, 5000)
    }
    // login () {
    //   console.log('login----------')
    //   let phone = '18260095016'
    //   let password = 'hubaogang'
    //   let baseUrl = 'https://api.wulv5.com/music/'
    //   let url = baseUrl + `login/cellphone?phone=${phone}&password=${password}`
    //   get(url)().then((res) => {
    //     this.userId = res.account.id
    //     console.log('登陆中', res, this.userId)
    //   })
    // },
    // getStatus () {
    //   console.log('getstatus----------')
    //   let baseUrl = 'https://api.wulv5.com/music/'
    //   let url = baseUrl + 'login/status'
    //   get(url)().then((res) => {
    //     console.log('登录状态', res)
    //   })
    // },
    // getUserDetail () {
    //   console.log('getdetail----------')
    //   let baseUrl = 'https://api.wulv5.com/music/'
    //   let url = baseUrl + `user/detail?uid=${this.userId}`
    //   get(url)().then((res) => {
    //     console.log('登录状态', res)
    //   })
    // }
  },
  components: {
    playfooter,
    tab,
    songlist
  }
}
</script>
<style lang="stylus">
  html,body,#app
    height: 100%
  body
    margin: 8px
    #app
      font-family 'Avenir', Helvetica, Arial, sans-serif
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      text-align center
      color #2c3e50
  .wrap
    position:relative
    width: 100%
    height: 100%
    overflow: hidden
</style>
