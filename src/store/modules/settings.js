const state = {
  themeType: 'dark'
}
const getters = {

}
const actions = {

}
const mutations = {
  changeThemeType (state, val) {
    console.log(val)
    state.themeType = val
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
