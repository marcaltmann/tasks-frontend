<template>
  <div class="home">
    <h1>Tasks</h1>

    <div class="grid">
      <Category name="Communicate" v-bind:tasks="tasks1" />
      <Category name="Home" v-bind:tasks="tasks2" />
      <Category name="Town" v-bind:tasks="tasks3" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Category from "@/components/Category.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Category,
  },
  data() {
    return {
      tasks1: [
        { content: 'Ha' },
        { content: 'What?' }
      ],
      tasks2: [
        { content: 'Huhu' }
      ],
      tasks3: [
        { content: 'Hallo' }
      ]
    };
  }
});
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
