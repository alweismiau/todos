<template>
  <div>
    <div class="container shadow-lg px-5 py-5 rounded-3">
      <h1>MY TO DO LIST</h1>
      <input
        type="text"
        name="newTask"
        placeholder="Enter To Do"
        v-model="TODO.task.newTask"
        class="form-control form-input me-3"
        @keyup.enter="addNewTask()"
      />
      <div v-for="(category, index) in TODO.category" :key="index" class="btn btn-outline-warning mx-2 mt-3" >
        <input
          type="checkbox"
          v-model="TODO.task.newCategory"
          :name="category.name"
          :id="category.name"
          :value="category.name"
        />
        <label :for="category.name">{{ category.name }}</label>
      </div>
      <button @click="TODO.addNewTask()" class="btn btn-outline-success mx-4 mt-3">Submit</button>
      <div class=" mt-3">
        <h5>To Do: {{ TODO.task.newTask }}</h5>
        <h5>Category: {{ TODO.task.newCategory.join(", ") }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { useTodo } from "../stores/index.js";

export default {
  setup() {
    const TODO = useTodo();
    return { TODO };
  },
  created() {
    this.TODO.getNewTasks();
  },
};
</script>
