const CORE_PATH = '@/views/vue/core/'
const PLUGIN_PATH = '@/views/vue/plugin/'
const UI_PATH = '@/views/vue/ui/'
// vue-core
const VueCore = resolve => require([CORE_PATH + 'VueCore'], resolve)
const VueRouterCore = resolve => require([CORE_PATH + 'VueRouterCore'], resolve)
const VuexCore = resolve => require([CORE_PATH + 'VuexCore'], resolve)
// vue-plugin
const VueCore = resolve => require([PLUGIN_PATH + 'VueCore'], resolve)
const VueRouterCore = resolve => require([PLUGIN_PATH + 'VueRouterCore'], resolve)
const VuexCore = resolve => require([PLUGIN_PATH + 'VuexCore'], resolve)
// vue-ui
const ElementUI = resolve => require([UI_PATH + 'ElementUI'], resolve)
const IviewUI = resolve => require([UI_PATH + 'IviewUI'], resolve)
const VuxUI = resolve => require([UI_PATH + 'VuxUI'], resolve)