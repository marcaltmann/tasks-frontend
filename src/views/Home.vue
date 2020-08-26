<template>
  <div class="home">
    <Category name="Communicate" />
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
});
</script>
