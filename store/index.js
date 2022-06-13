export const state = () => ({
  mountains: []
})

export const getter = {
  getMountains(state) {
    return state.mountains;
  }
}

export const mutations = {
  SET_MOUNTAINS(state, payload) {
    state.mountains = payload
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { $axios }) {
    const mountains = await $axios.$get('/mountains')
    commit('SET_MOUNTAINS', mountains)
  },
  removeItem({ commit, state }, slug) {
    const mountains = state.mountains;
    const new_mountains = mountains.filter(item => item.slug !== slug);
    commit('SET_MOUNTAINS', new_mountains);
  }
}