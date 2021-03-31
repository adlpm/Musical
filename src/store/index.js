import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
    scores: [],
  },
  mutations: {
    setScore(state, score) {
      state.score = score;
    },
    setScores(state, scores) {
      state.scores = scores;
    },
  },
  actions: {},
  modules: {},
});
