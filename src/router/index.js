import Vue from 'vue'
import Router from 'vue-router'
import vuecore from './vuecore'
// base
const BaseLogin = resolve => require(['@/components/Base/BaseLogin'], resolve)
const BaseWrapper = resolve => require(['@/components/Base/BaseWrapper'], resolve)

Vue.use(Router)
const pageStyle = {
  background: '#f5f7f9',
  'font-size': '14px'
}
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'BaseWrapper',
      component: BaseWrapper,
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
console.log(router)
export default router
