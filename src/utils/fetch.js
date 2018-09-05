import axios from 'axios'
import Qs from 'qs'
import { baseURL, loginURL } from './geturl'
import {
  Spin,
  Modal
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
    if (response.status !== 200) {
    } else {
      if (response.data.code === 403) {
        sessionStorage.clear()
        localStorage.clear()

        Modal.error({
          title: '提示',
          content: '您的登录信息已过时，请重新登录!',
          onOk: () => {
            window.top.location.href = loginURL
          }
        })
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
