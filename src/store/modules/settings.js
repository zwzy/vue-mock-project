const state = {
  headThemeType: sessionStorage.getItem('headTheme') || 'dark',
  leftThemeType: sessionStorage.getItem('leftTheme') || 'dark'
}
const getters = {

}
const actions = {

}
const mutations = {
  changeThemeType (state, obj) { // obj={type, pos}
    if (obj.pos === 'left') {
      state.leftThemeType = obj.type
    } else if (obj.pos === 'head') {
      state.headThemeType = obj.type
    }
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
