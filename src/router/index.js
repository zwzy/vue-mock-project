import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/home/HomePage'
import BaseLogin from '@/components/Base/BaseLogin'

Vue.use(Router)
const pageStyle = {
  style: {
    background: '#fff',
    'font-size': '14px'
  }
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
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
