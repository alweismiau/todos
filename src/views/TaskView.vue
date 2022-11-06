<template>
  <div class="container shadow-lg px-5 py-5 rounded-3">
    <div class="task">
      <h1>All Task</h1>
      <div
        v-for="(item, index) in TODO.task.newTodo"
        :key="index"
        class="form-control p-3 mb-2 "
      >
        <input
          type="checkbox"
          :name="item.id"
          id=""
          :checked="item.status == true"
          @click="TODO.updateStatus(item.id, index)"
        />
        <h4 v-if="showEdit == false" @dblclick="showEdit = true">
          {{ item.task }} 
        </h4>
        <input
          type="text"
          name=""
          id=""
          v-model="item.task"
          v-if="showEdit == true"
          @keyup.enter="TODO.editTask(item.id, index), (showEdit = false)"
        />
        <h4 class="d-inline bg-warning text-dark mx-2 form-control">
          {{ item.category.join(", ") }}
        </h4>
        <button @click="TODO.deleteTask(item.id)" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useTodo } from "../stores/index.js";

export default {
  data() {
    return {
      showEdit: false,
    };
  },
  setup() {
    const TODO = useTodo();
    return { TODO };
  },
  created() {
    this.TODO.getNewTasks();
  },
};
</script>

<style></style>
