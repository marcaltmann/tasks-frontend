import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: "0", content: "Call agent and ask about job offers", category: "Communicate" },
      { id: "1", content: "Lookup tax documents 2019", category: "Home" },
      { id: "2", content: "Write letter cancelling old phone contract", category: "Communicate" },
      { id: "3", content: "Pick up pens from Dussmann", category: "Town" }
    ],
    categories: ["Communicate", "Home", "Town"]
  },
  mutations: {
    deleteTask(state, id: string) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    }
  },
  actions: {},
  modules: {}
});
