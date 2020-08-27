import Vue from "vue";
import Vuex from "vuex";

import { TaskType, TaskState } from "@/components/Task.vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: "0",
        content: "Call agent and ask about job offers",
        category: "Communicate",
        project: "0",
        state: TaskState.Pending
      },
      {
        id: "1",
        content: "Lookup tax documents 2019",
        category: "Home",
        project: "1",
        state: TaskState.Pending
      },
      {
        id: "2",
        content: "Write letter cancelling old phone contract",
        category: "Communicate",
        project: "2",
        state: TaskState.Pending
      },
      {
        id: "3",
        content: "Pick up pens from Dussmann",
        category: "Town",
        project: "3",
        state: TaskState.Pending
      }
    ],
    nextTaskId: 4,
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
    addTask(state, task: TaskType) {
      task.id = (state.nextTaskId++).toString();
      state.tasks.push(task);
    },
    completeTask(state, id: string) {
      const task: TaskType = state.tasks.find(task => task.id === id);
      task.state = TaskState.Done;
    },
    deleteTask(state, id: string) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    }
  },
  actions: {},
  modules: {}
});
