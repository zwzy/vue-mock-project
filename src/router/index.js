import Vue from 'vue'
import Router from 'vue-router'
// import HomePage from '@/views/home/HomePage'
import BaseLogin from '@/components/Base/BaseLogin'
import BaseWrapper from '@/components/Base/BaseWrapper'

Vue.use(Router)
const pageStyle = {
  background: '#515a6e',
  'font-size': '14px'
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'BaseWrapper',
      component: BaseWrapper,
      meta: {
        style: { ...pageStyle }
      }
    },
    {
      path: '/login',
      name: 'BaseLogin',
      component: BaseLogin,
      meta: {
        style: { ...pageStyle, background: '#333' }
      }
    }
  ]
})
