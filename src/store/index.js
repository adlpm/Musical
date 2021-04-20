import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
    scores: [],
    selectedMusics: [],
  },
  mutations: {
    setScore(state, score) {
      state.score = score;
    },
    setScores(state, scores) {
      state.scores = scores;
    },
    setSelectedMusics(state, selectedMusics) {
      state.selectedMusics = selectedMusics;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
