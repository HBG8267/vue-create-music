import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    song: {
      id: -1,
      name: '0',
      picUrl: ''
    },
    songList: [],
    isplaydetailshow: false
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
    }
  },
  actions: {

  }
})
