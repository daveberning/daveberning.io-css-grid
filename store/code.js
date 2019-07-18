export const state = () => ({
  theme: 'okaidia',
})

export const mutations = {
  SET_CODE_THEME(state, payload) {
    state.theme = payload
  }
}

export const actions = {
  setCodeTheme({ commit }, payload) {
    commit('SET_CODE_THEME', payload)
  }
}