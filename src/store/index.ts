import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: "0", content: "Ha", category: "Communicate" },
      { id: "1", content: "What?", category: "Home" },
      { id: "2", content: "Hallo", category: "Communicate" },
      { id: "3", content: "Hello", category: "Town" }
    ],
    categories: ["Communicate", "Home", "Town"]
  },
  mutations: {},
  actions: {},
  modules: {}
});
