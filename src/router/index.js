import Vue from 'vue'
import Router from 'vue-router'
// base
const BaseLogin = resolve => require(['@/components/Base/BaseLogin'], resolve)
const BaseWrapper = resolve => require(['@/components/Base/BaseWrapper'], resolve)

Vue.use(Router)
const pageStyle = {
  background: '#f5f7f9',
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
      },
      children: [
        {
          path: '/login',
          name: 'BaseLogin',
          component: BaseLogin,
          meta: {
            style: { ...pageStyle, background: '#333' }
          }
        }
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
