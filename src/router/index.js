import Vue from 'vue'
import Router from 'vue-router'
import vuecore from './vuecore'
// base
const BaseLogin = resolve => require(['@/components/base/BaseLogin'], resolve)
const LayoutWrapper = resolve => require(['@/components/layout/LayoutWrapper'], resolve)

Vue.use(Router)
const pageStyle = {
  background: '#f5f7f9',
  'font-size': '14px'
}
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'LayoutWrapper',
      component: LayoutWrapper,
      meta: {
        style: { ...pageStyle }
      },
      children: [
        ...vuecore
      ]
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
export default router
