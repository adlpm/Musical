import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
    scores: [],
    access_token: null,
    refresh_token: null,
    user: null,
  },
  mutations: {
    setScore(state, score) {
      state.score = score;
    },
    setScores(state, scores) {
      state.scores = scores;
    },
    setAccessToken(state, access_token) {
      state.access_token = access_token;
    },
    setRefreshToken(state, refresh_token) {
      state.refresh_token = refresh_token;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {},
  modules: {},
});
