// const CORE_PATH = '@/views/vue/core/'  路径不能做运算
// vue-core
const VueCore = resolve => require(['@/views/vue/core/VueCore'], resolve)
const VueRouterCore = resolve => require(['@/views/vue/core/VueRouterCore'], resolve)
const VuexCore = resolve => require(['@/views/vue/core/VuexCore'], resolve)
// vue-plugin
const VueAxios = resolve => require(['@/views/vue/plugin/VueAxios'], resolve)
const VueWebpack = resolve => require(['@/views/vue/plugin/VueWebpack'], resolve)
// vue-ui
const ElementUI = resolve => require(['@/views/vue/ui/ElementUI'], resolve)
const IviewUI = resolve => require(['@/views/vue/ui/IviewUI'], resolve)
// const VuxUI = resolve => require(['@/views/vue/ui/VuxUI'], resolve)
const VuxUI = () => import('@/views/vue/ui/VuxUI')

export default [
  {
    path: '/vue',
    name: 'VueCore',
    component: VueCore,
    meta: {}
  },
  {
    path: '/vue-router',
    name: 'VueRouterCore',
    component: VueRouterCore,
    meta: {}
  },
  {
    path: '/vuex',
    name: 'VuexCore',
    component: VuexCore,
    meta: {}
  },
  {
    path: '/vue-axios',
    name: 'VueAxios',
    component: VueAxios,
    meta: {}
  },
  {
    path: '/vue-webpack',
    name: 'VueWebpack',
    component: VueWebpack,
    meta: {}
  },
  {
    path: '/vux',
    name: 'VuxUI',
    component: VuxUI,
    meta: {}
  },
  {
    path: '/element-ui',
    name: 'ElementUI',
    component: ElementUI,
    meta: {}
  },
  {
    path: '/iview',
    name: 'IviewUI',
    component: IviewUI,
    meta: {}
  }
]
