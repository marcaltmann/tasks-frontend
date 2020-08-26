import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: "0",
        content: "Call agent and ask about job offers",
        category: "Communicate",
        project: "0"
      },
      {
        id: "1",
        content: "Lookup tax documents 2019",
        category: "Home",
        project: "1"
      },
      {
        id: "2",
        content: "Write letter cancelling old phone contract",
        category: "Communicate",
        project: "2"
      },
      {
        id: "3",
        content: "Pick up pens from Dussmann",
        category: "Town",
        project: "3"
      }
    ],
    categories: ["Communicate", "Home", "Town"],
    projects: [
      {
        id: "0",
        name: "Find new job",
        color: "#b3d1ff"
      },
      {
        id: "1",
        name: "Taxes 2019",
        color: "#c2f0c2"
      },
      {
        id: "2",
        name: "Find new mobile provider",
        color: "#ffb3b3"
      },
      {
        id: "3",
        name: "Shopping List",
        color: "#ffffb3"
      }
    ]
  },
  mutations: {
    deleteTask(state, id: string) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    }
  },
  actions: {},
  modules: {}
});
