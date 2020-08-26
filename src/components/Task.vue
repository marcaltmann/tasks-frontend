<template>
  <li class="task" :style="{ backgroundColor: color }" v-on:click="toggle">
    <div>{{ task.content }}</div>
    <div v-if="enabled">
      <button type="button" v-on:click="remove">
        Done
      </button>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export interface TaskType {
  id: string;
  content: string;
  category: string;
  project: string;
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
</style>
