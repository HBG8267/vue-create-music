<template>
  <div class="wrap">
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import tab from './components/tab/tab.vue'
import my from './components/my/my.vue'
import { get } from 'api'

export default {
  name: 'app',
  data () {
    return {
      userId: undefined
    }
  },
  methods: {
    login () {
      console.log('login----------')
      let phone = '18260095016'
      let password = 'hubaogang'
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + `login/cellphone?phone=${phone}&password=${password}`
      get(url)().then((res) => {
        this.userId = res.account.id
        console.log('登陆中', res, this.userId)
      })
    },
    getStatus () {
      console.log('getstatus----------')
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + 'login/status'
      get(url)().then((res) => {
        console.log('登录状态', res)
      })
    },
    getUserDetail () {
      console.log('getdetail----------')
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + `user/detail?uid=${this.userId}`
      get(url)().then((res) => {
        console.log('登录状态', res)
      })
    }
  },
  components: {
    tab,
    my
  }
}
</script>
<style lang="stylus">
  html,body,#app{
    height: 100%;
  }
  body
    margin: 8px
    #app
      font-family 'Avenir', Helvetica, Arial, sans-serif
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      text-align center
      color #2c3e50
</style>
