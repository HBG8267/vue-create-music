import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import playDetail from './components/play/play.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  { path: 'playDetail', name: 'playDetail', component: playDetail }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  store,
  router: router,
  render: h => h(App)
}).$mount('#app')
