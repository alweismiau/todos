<template>
  <div>
    <h1>Category College</h1>
    <div v-for="(item, index) in TODO.colle" :key="index">
      <h4>{{ item.task }}</h4>
      <h4>{{ item.category.join(", ") }}</h4>
    </div>
  </div>
</template>

<script>
import { useTodo } from "../stores/index.js";

export default {
  created() {
    this.TODO.colle = [];
    this.TODO.getColle("College");
  },
  setup() {
    const TODO = useTodo();
    return { TODO };
  },
};
</script>
