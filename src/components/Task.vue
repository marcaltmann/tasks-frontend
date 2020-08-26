<template>
  <p>{{ content }}</p>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Task",
  props: {
    content: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p {
  background-color: yellow;
  font-style: italic;
}
</style>
