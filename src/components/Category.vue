<template>
  <article class="category">
    <h3>{{ name }}</h3>
    <ul>
      <Task v-for="task in tasks" :key="task.id" :id="task.id" />
    </ul>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import Task, { TaskType } from "@/components/Task.vue";

export default Vue.extend({
  name: "Category",
  components: {
    Task
  },
  computed: {
    tasks() {
      const allTasks = this.$store.state.tasks;
      const tasks = allTasks.filter(
        (task: TaskType) => task.category === this.name
      );
      return tasks;
    }
  },
  props: {
    name: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
article {
  border: 1px solid black;
}
h3 {
  margin: 1rem 0 0;
}
ul {
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0;
}
a {
  color: #42b983;
}
</style>
