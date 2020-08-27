<template>
  <div class="home">
    <h1>Tasks</h1>

    <div class="grid">
      <Category v-for="cat in categories" :name="cat" :key="cat" />
    </div>

    <NewTaskForm />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Category from "@/components/Category.vue";
import NewTaskForm from "@/components/NewTaskForm.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Category,
    NewTaskForm
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    }
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
