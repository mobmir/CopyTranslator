import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sharedResult: {
      src: "",
      result: "",
      source: "",
      target: ""
    }
  },
  mutations: {
    setShared(state, sharedResult) {
      state.sharedResult = sharedResult;
    }
  },
  actions: {}
});
