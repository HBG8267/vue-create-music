<template>
  <tab></tab>
</template>

<script>
import tab from './components/tab/tab.vue'

export default {
  name: 'app',
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
