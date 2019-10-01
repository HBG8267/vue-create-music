import Vue from 'vue'
import Vuex from 'vuex'
import { get } from 'api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    song: {
      id: -1,
      name: '0',
      picUrl: ''
    },
    songList: [],
    isplaydetailshow: false,
    audio: document.createElement('audio'),
    playUrl: ''
  },
  mutations: {
    PUSH_SONG (state, song) {
      console.log('PUSH_SONG')
      state.songList.push(song)
      return 1
    },
    SHOW_PLAYDETAIL (state) {
      console.log('SHOW_PLAYDETAIL')
      return (state.isplaydetailshow = true)
    },
    CLOSE_PLAYDETAIL (state) {
      console.log('CLOSE_PLAYDETAIL')
      return (state.isplaydetailshow = false)
    },
    GET_PLAYURL (state, params) {
      console.log('getplayurl----------', params)
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + `song/url?id=${params.id}`
      get(url)().then((res) => {
        state.playUrl = res.data[0].url
        state.audio.src = state.playUrl
        console.log(res)
      })
      return state.playUrl
    }
  },
  actions: {

  }
})
