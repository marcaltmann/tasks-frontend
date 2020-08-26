<template>
  <div class="task" :class="{ enabled: enabled }">
    <div v-on:click="toggle">{{ content }}</div>
    <div v-if="enabled">
      <button type="button" v-on:click="remove">
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export interface TaskType {
  id: number;
  content: string;
  category: string;
}

export default Vue.extend({
  name: "Task",
  props: {
    id: String,
    content: String
  },
  data() {
    return {
      enabled: false
    };
  },
  methods: {
    remove() {
      this.$store.commit("deleteTask", this.id);
    },
    toggle() {
      this.enabled = !this.enabled;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/_variables.scss";

.task {
  background-color: $primary_color;
  font-style: italic;
  margin: 1em 0 0;
  user-select: none;
}

.task.enabled {
  background-color: $secondary-color;
}
</style>
