import axios from 'axios'

axios.defaults.baseURL = process.env.API_ROOT
// axios.defaults.baseURL = 'http://localhost:8118/ghmall/login'
axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = window.localStorage.getItem('gh-token')// token存储在浏览器
    if (token) {
      config.headers.token = token
      console.log(config.headers.token)
    }
    return config
  },
  error => {
    return Promise.error(error)
  })

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  // 对响应数据做些事
  if (!res.data.success) {
    return Promise.reject(res)
  }
  return res
}, (error) => {
  return Promise.reject(error)
})

// 返回一个Promise(发送get请求)
export function get (url, param) {
  console.log('url' + process.env.API_ROOT)
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 返回一个Promise(发送post请求)
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
