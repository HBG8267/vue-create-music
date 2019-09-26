import axios from 'axios'

function get (url) {
  return function (params = {}) {
    return axios.get(url, {
      params: params
    }).then((res) => {
      return res.data
    }).catch((err) => {
      console.log('----失败----' + err)
    })
  }
}
export {
  get
}
