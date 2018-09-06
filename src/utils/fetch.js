import axios from 'axios'
import Qs from 'qs'
import { baseURL } from './geturl'
import {
  Spin,
  Message
} from 'iview'
// 封装axios 创建基础实例以及axios拦截
const service = axios.create({
  timeout: 10000,
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
service.interceptors.request.use(config => {
  Spin.show({
    render: (h) => {
      return h('div', [
        h('Icon', {
          'class': 'demo-spin-icon-load',
          props: {
            type: 'ios-loading',
            size: 18
          }
        }),
        h('div', 'Loading')
      ])
    }
  })
  if (sessionStorage.getItem('token')) {
    config.headers.common['Authorization'] = sessionStorage.getItem('token')
  }
  if (config.url === '/user/login') {
    config.data = JSON.stringify(config.data)
  } else {
    config.data = Qs.stringify(config.data)
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    Spin.hide()
    console.log(response)
    if (response.status !== 200) {
      let baseURL = response.config.baseURL
      let fullUrl = response.config.url
      let apiUrl = fullUrl.replace(`/${baseURL}/`, '')
      Message.error(`接口故障：（${apiUrl}）`)
    } else {
      if (response.data.code !== 0) { // 0是正确返回的
        Message.warning(response.data.msg)
      }
    }
    return response
  },
  error => {
    Spin.hide()
    return Promise.reject(error)
  }
)
export default service
