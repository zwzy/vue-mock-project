const state = {
  userPower: ''
}
const getters = {

}
const actions = {

}
const mutations = {
  setPower (state, val) {
    switch (val) {
      case 'CEO':
        state.userPower = 4
        break
      case '总监':
        state.userPower = 3
        break
      case '部门经理':
        state.userPower = 2
        break
      case '组长/副组长':
        state.userPower = 1
        break
      default:
        state.userPower = 0
    }
    console.log('power', val)
  },
  changeIfCanOperationZiTask (state, val) {
    state.ifCanOperationZiTask = val
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
