import fetch from '../utils/fetch'
require('./mock.js')
// 登录
export function login (data = {}) {
  return fetch({
    url: '/user/login',
    method: 'post',
    data: data
    // headers: {
    //   'Content-Type': 'application/json;charset=utf-8'
    // }
    // baseURL: 'http://36.7.138.114:5026/ws-syslogin/'
  })
}
// 菜单
export function getMenu (data = {}) {
  return fetch({
    url: '/user/menu',
    method: 'post'
  })
}
