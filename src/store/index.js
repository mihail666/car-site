import { createStore } from 'vuex'

export default createStore({
  state: {
    arrcar: 0
  },
  getters: {
    arrcar: s => s.arrcar
  },
  mutations: {
    SET_arrcar (state, result) {
      state.arrcar = result
    }
  },
  actions: {
    async GET_arrcar ({ commit }) {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: []
      }
      await fetch('https://api.caiman-app.de/api/cars-test', requestOptions)
        .then(response => response.json())
        .then(result => {
          commit('SET_arrcar', result)
        })
        .catch(error => console.log('error', error))
    }
  },
  modules: {}
})
