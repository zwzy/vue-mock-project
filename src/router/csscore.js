const CssTemplate = resolve => require(['@/views/css/css/CssTemplate'], resolve)
export default [
  {
    path: '/css',
    name: 'CssTemplate',
    component: CssTemplate,
    meta: {}
  }
]
