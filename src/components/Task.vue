<template>
  <li class="task" :style="{ backgroundColor: color }" v-on:click="toggle">
    <div :class="{ complete: isCompleted }">
      {{ task.content }}
    </div>
    <div v-if="enabled">
      <button v-if="!isCompleted" type="button" v-on:click="complete">
        Done
      </button>
      <button type="button" v-on:click="remove">
        X
      </button>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export enum TaskState {
  Pending = "PENDING",
  Waiting = "WAITING",
  Done = "DONE"
}

export interface TaskType {
  id: string;
  content: string;
  category: string;
  project: string;
  state: TaskState;
}

interface ProjectType {
  id: string;
  name: string;
  color: string;
}

export default Vue.extend({
  name: "Task",
  props: {
    id: String
  },
  computed: {
    task() {
      return this.$store.state.tasks.find(
        (task: TaskType) => task.id === this.id
      );
    },
    isCompleted() {
      return this.task.state === TaskState.Done;
    },
    color() {
      const projectId = this.task.project;
      const project = this.$store.state.projects.find(
        (proj: ProjectType) => proj.id === projectId
      );
      return project.color;
    }
  },
  data() {
    return {
      enabled: false
    };
  },
  methods: {
    remove() {
      this.$store.commit("deleteTask", this.id);
    },
    complete() {
      this.$store.commit("completeTask", this.id);
    },
    toggle() {
      this.enabled = !this.enabled;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/_variables.scss";

.task {
  cursor: pointer;
  font-style: italic;
  margin: 1em 0 0;
  padding: 0.25em 0.5em;
  user-select: none;
}

.complete {
  text-decoration: line-through;
}
</style>
