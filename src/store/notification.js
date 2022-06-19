const state = () => {
  return {
    notification: null
  }
}

const getters = {}

const actions = {
  setNotification: ({ commit }, payload) => {
    commit('setNotification', payload)
  }
}

const mutations = {
  setNotification: (state, payload) => {
    state.notification = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
