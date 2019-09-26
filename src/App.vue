<template>
  <tab></tab>
</template>

<script>
import tab from './components/tab/tab.vue'
import { get } from 'api'

export default {
  name: 'app',
  data () {
    return {
      userId: undefined
    }
  },
  mounted () {
    this.login()
    setTimeout(this.getStatus, 3000)
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
        console.log('登陆中', res)
      })
    },
    getStatus () {
      console.log('getstatus----------')
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + 'login/status'
      get(url)().then((res) => {
        console.log('登录状态', res)
      })
    }
  },
  components: {
    tab
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
