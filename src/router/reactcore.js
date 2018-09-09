// const CORE_PATH = '@/views/react/core/'  路径不能做运算
// react-core
const ReactCore = resolve => require(['@/views/react/core/ReactCore'], resolve)
const ReactRouter = resolve => require(['@/views/react/core/ReactRouter'], resolve)
const ReactRedux = resolve => require(['@/views/react/core/ReactRedux'], resolve)
// react-plugin
const ReactAxios = resolve => require(['@/views/react/plugin/ReactAxios'], resolve)
const ReactWebpack = resolve => require(['@/views/react/plugin/ReactWebpack'], resolve)
// react-ui
const AntDesign = resolve => require(['@/views/react/ui/AntDesign'], resolve)
const AntMobileDesign = resolve => require(['@/views/react/ui/AntMobileDesign'], resolve)
// const VuxUI = resolve => require(['@/views/react/ui/VuxUI'], resolve)
// const VuxUI = () => import('@/views/react/ui/VuxUI')

export default [
  {
    path: '/react',
    name: 'ReactCore',
    component: ReactCore,
    meta: {}
  },
  {
    path: '/react-router',
    name: 'ReactRouter',
    component: ReactRouter,
    meta: {}
  },
  {
    path: '/react-redux',
    name: 'ReactRedux',
    component: ReactRedux,
    meta: {}
  },
  {
    path: '/react-axios',
    name: 'ReactAxios',
    component: ReactAxios,
    meta: {}
  },
  {
    path: '/react-webpack',
    name: 'ReactWebpack',
    component: ReactWebpack,
    meta: {}
  },
  {
    path: '/ant-design',
    name: 'AntDesign',
    component: AntDesign,
    meta: {}
  },
  {
    path: '/ant-mobile-design',
    name: 'AntMobileDesign',
    component: AntMobileDesign,
    meta: {}
  }
]
