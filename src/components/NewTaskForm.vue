<template>
  <form v-on:submit="submit">
    <div>
      <input v-model="content" placeholder="Enter task" />
    </div>
    <div>
      <button type="submit">Create</button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { TaskState } from "@/components/Task.vue";

export default Vue.extend({
  name: "NewTaskForm",
  props: {
  },
  computed: {
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      console.log('submitted', this.content);
      const task = {
        id: undefined,
        content: this.content,
        category: "Communicate",
        project: "1",
        state: TaskState.Pending
      };
      this.$store.commit("addTask", task);
      this.content = "";
    }
  }
});
</script>

<style scoped lang="scss">
@import "@/_variables.scss";

form {
  margin: 2rem 0 2rem;
}
</style>
