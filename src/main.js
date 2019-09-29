import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import playdetail from './components/play/play.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    path: '/playdetail',
    name: 'playdetail',
    component: playdetail
  }
]
const router = new VueRouter({
  routes
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

window.οnlοad = function () {
  window.addEventListener('mousewheel', (e) => {
    console.log('wheel')
    return false
  }) // IE/Opera/Chrome
}
