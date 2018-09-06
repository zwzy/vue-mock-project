// 得到后端路径
let baseURL = ''
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://192.168.21.87:8080'
} else {
  console.log(111, process.env.type)
  if (process.env.type === 'test') {
    baseURL = 'http://192.168.3.26:5826'
  } else {
    baseURL = 'http://report.wsloan.com:8888/projectManage'
  }
}
export function getUploadUrl () {
  return baseURL + '/uploadFile'
}
// 得到403跳转的返回的登录的链接
let loginURL
if (process.env.NODE_ENV === 'development') {
  loginURL = 'http://localhost:8080/#/login'
} else {
  if (process.env.type === 'test') {
    loginURL = 'http://localhost:8080/#/login'
  } else {
    loginURL = 'http://localhost:8080/#/login'
  }
}
export { baseURL, loginURL }
