import fetch from '../utils/fetch'
require('./mock.js')
export function login (data = {}) {
  return fetch({
    url: '/user/login',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
    // baseURL: 'http://36.7.138.114:5026/ws-syslogin/'
  })
}
