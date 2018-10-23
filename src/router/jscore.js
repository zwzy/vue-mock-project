const JsCore = resolve => require(['@/views/javascript/core/JsCore'], resolve)
export default [
  {
    path: '/js',
    name: 'JsCore',
    component: JsCore,
    meta: {}
  }
]
