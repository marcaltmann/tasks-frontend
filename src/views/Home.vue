<template>
  <div class="home">
    <h1>Tasks</h1>

    <div class="grid">
      <Category name="Communicate" :tasks="tasks1" />
      <Category name="Home" :tasks="tasks2" />
      <Category name="Town" :tasks="tasks3" />
      <Category name="Other" :tasks="tasks4" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Category from "@/components/Category.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Category
  },
  data() {
    return {
      tasks1: [
        { id: "0", content: "Ha" },
        { id: "1", content: "What?" }
      ],
      tasks2: [{ id: "0", content: "Huhu" }],
      tasks3: [{ id: "1", content: "Hallo" }],
      tasks4: []
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
