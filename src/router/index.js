import Vue from 'vue'
import Router from 'vue-router'
import vuecore from './vuecore'
import reactcore from './reactcore'
import jscore from './jscore'
import csscore from './csscore'

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
        ...vuecore, ...reactcore, ...jscore, ...csscore
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
router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('isLogin')) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
    // next()
  }
})

export default router
