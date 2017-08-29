// store.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// the root, initial state object
const state = {
  players: []
}

// define the possible mutations that can be applied to our state
const mutations = {
  ADD_PLAYER: (myState, player) => {
    myState.players.push(player)
  },
  REMOVE_PLAYER: (myState, player) => {
    myState.players.splice()
  }
}

const getters = {
  players: myState => (myState.players)
}

const actions = {
  addPlayer ({ commit }, player) {
    commit('ADD_PLAYER', player)
  }
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
