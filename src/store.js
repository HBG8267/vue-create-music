import Vue from 'vue'
import Vuex from 'vuex'
import { get } from 'api'
Vue.use(Vuex)

let audio = document.createElement('audio')
audio.controls = true
document.body.appendChild(audio)

export default new Vuex.Store({
  state: {
    song: {
      id: -1,
      name: '0',
      picUrl: ''
    },
    songList: [
      {
        id: 1,
        name: '11111',
        picUrl: ''
      },
      {
        id: 2,
        name: '222',
        picUrl: ''
      }
    ],
    isplaydetailshow: false,
    showlist: false,
    audio: audio,
    playUrl: ''
  },
  mutations: {
    CONTROL_LIST (state) {
      return (state.showlist = !state.showlist)
    },
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
    SET_URL (state, params) {
      state.audio.src = params.url
      return true
    },
    PLAY (state) {
      console.log('----PLAY----')
      state.audio.play()
      return true
    },
    PAUSE (state) {
      console.log('---PAUSE----')
      state.audio.pause()
      return true
    }
  },
  actions: {
    GET_PLAYURL (state, params) {
      console.log('getplayurl----------', params)
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + `song/url?id=${params.id}`
      get(url)().then((res) => {
        state.playUrl = res.data[0].url
        console.log(state.playUrl)
        this.commit({
          type: 'SET_URL',
          url: state.playUrl
        })
      })
      return state.playUrl
    }
  }
})
