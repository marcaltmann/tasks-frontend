<template>
  <form v-on:submit="submit">
    <input v-model="content" placeholder="Enter task" />
    <select v-model="category">
      <option v-for="cat in categories" :key="cat" :value="cat">
        {{cat}}
      </option>
    </select>
    <select v-model="project">
      <option v-for="proj in projects" :key="proj.id" :value="proj.id">
        {{proj.name}}
      </option>
    </select>
    <button type="submit" :disabled="isDisabled">Create</button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { TaskState } from "@/components/Task.vue";

export default Vue.extend({
  name: "NewTaskForm",
  data() {
    return {
      category: "",
      content: "",
      project: ""
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
    projects() {
      return this.$store.state.projects;
    },
    isDisabled() {
      return this.content.trim() === "";
    }
  },
  methods: {
    submit(e) {
      e.preventDefault();

      const task = {
        id: undefined,
        content: this.content.trim(),
        category: this.category,
        project: this.project,
        state: TaskState.Pending
      };
      this.$store.commit("addTask", task);
      this.content = "";
    }
  },
  created() {
    this.category = this.categories[0];
    this.project = this.projects[0].id;
  }
});
</script>

<style scoped lang="scss">
@import "@/_variables.scss";

form {
  display: flex;
  justify-content: center;
  margin: 2rem 0 2rem;
}

form > * {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>
