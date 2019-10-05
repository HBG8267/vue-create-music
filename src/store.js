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
      author: '',
      picUrl: '',
      playUrl: ''
    },
    songList: [
      {
        id: 1392990601,
        name: '我和我的祖国',
        author: [{
          id: 9621,
          name: '王菲'
        }],
        picUrl: 'https://p2.music.126.net/HeGrAKPiZhKkONiFDxZvmw==/109951164384346866.jpg',
        playUrl: 'http://m7.music.126.net/20191005165115/d1e88c7e867…5d/0059/065e/67740c9f7a73955cd7f31461ad05f7e0.mp3'
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
    PUSH_SONG (state, params) {
      console.log('PUSH_SONG')
      state.songList.forEach((item, index) => { // 在数组首部插入 并判断原列表中是否存在 是:删除原先
        if (item.id === params.song.id) {
          state.songList.splice(index, 1)
        }
      })
      state.songList.unshift(params.song)
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
      return 1
    },
    PLAY (state, params = { playUrl: '' }) { // params.playUrl 可传参数
      console.log('----PLAY----')
      state.audio.src = params.playUrl ? params.playUrl : state.songList[0].playUrl
      state.audio.play()
      return 1
    },
    PAUSE (state) {
      console.log('---PAUSE----')
      state.audio.pause()
      return 1
    }
  },
  actions: {
    GET_PLAYURL (state, params) { // 通过id 获得url 并赋值给state.playUrl上
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + `song/url?id=${params.id}`
      get(url)().then((res) => {
        console.log('getplayurl----------')
        state.playUrl = res.data[0].url
        // this.commit({
        //   type: 'SET_URL',
        //   url: state.playUrl
        // })
      })
    },
    CREAT_SONG (state, params) {
      let name, picUrl, playUrl
      let author = []
      console.log('getplayurl----------', params)
      let baseUrl = 'https://api.wulv5.com/music/'
      let url = baseUrl + `song/detail?ids=${params.id}`
      get(url)().then((res) => {
        console.log('creat-----------', res, res.songs[0])
        name = res.songs[0].name
        picUrl = res.songs[0].al.picUrl
        author.push(...res.songs[0].ar)
        url = baseUrl + `song/url?id=${params.id}`
        get(url)().then((res) => {
          console.log('getplayurl----------')
          playUrl = res.data[0].url
          console.log({
            id: params.id,
            name,
            author,
            picUrl,
            playUrl
          }, 'xinxiande song ----')
          this.commit({
            type: 'PUSH_SONG',
            song: {
              id: params.id,
              name,
              author,
              picUrl,
              playUrl
            }
          })
        })
      })
    }
  }
})
