<template>
  <article class="category">
    <h3>{{ name }}</h3>
    <ul>
      <li v-for="task in tasks" :key="task.content">
        <Task v-bind:content="task.content" />
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import Task from "@/components/Task.vue";

export default Vue.extend({
  name: "Category",
  components: {
    Task
  },
  props: {
    name: String,
    tasks: Array
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
