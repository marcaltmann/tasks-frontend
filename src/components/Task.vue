<template>
  <p v-on:click="toggle" v-bind:class="{ enabled: isEnabled }">{{ content }}</p>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Task",
  props: {
    content: String
  },
  data() {
    return {
      isEnabled: false
    };
  },
  methods: {
    toggle() {
      this.isEnabled = !this.isEnabled;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/_variables.scss";

p {
  background-color: $primary_color;
  font-style: italic;
  margin: 1em 0 0;
  user-select: none;
}

p.enabled {
  background-color: $secondary-color;
}
</style>