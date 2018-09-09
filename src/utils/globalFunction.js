import Vue from 'vue'
// type = 0 是alert button  type=other 是字体
Vue.prototype.$GetType = (val, type = 0) => {
  let array
  if (type === 0) {
    array = ['info', 'success', 'warning', 'error']
  } else {
    array = ['primary', 'success', 'warning', 'error']
  }
  const index = val % 4
  return array[index]
}
