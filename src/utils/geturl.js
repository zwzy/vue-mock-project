// 得到后端路径
let baseURL = ''
if (process.env.NODE_ENV === 'development') {
  // baseURL = "http://192.168.22.39:5826";
  baseURL = 'http://192.168.3.26:5826'
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
  if (sessionStorage.getItem('ifIsZyf')) {
    loginURL = 'http://localhost:8060/#/zyfLogin'
  } else {
    loginURL = 'http://localhost:8060/#/login'
  }
} else {
  if (process.env.type === 'test') {
    if (sessionStorage.getItem('ifIsZyf')) {
      loginURL = 'http://192.168.3.26:5026/ws-operationsystem/#/zyfLogin'
    } else {
      loginURL = 'http://192.168.3.26:5026/ws-operationsystem/#/login'
    }
  } else {
    if (sessionStorage.getItem('ifIsZyf')) {
      loginURL = 'http://report.wsloan.com:8888/wsdm/#/zyfLogin'
    } else {
      loginURL = 'http://report.wsloan.com:8888/wsdm/#/login'
    }
  }
}
export { baseURL, loginURL }
