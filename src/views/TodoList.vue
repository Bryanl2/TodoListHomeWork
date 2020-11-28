<template>
  <div>
    <div class="container" id="todo-app">
      <h1>{{ title }}</h1>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Put your new task name heare"
          id="inputTask"
          v-model="newTaskName"
          @keyup.enter="createTask"
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" @click="createTask">
            Create
          </button>
        </div>
      </div>

      <div class="todolist row">
        <div class="col">
          <h2>Todo</h2>
          <ul class="list-group mylist" id="list-todo">
            <task v-for="task in todoList" 
                  :key="task.id" 
                  :task="task"/>
          </ul>
        </div>
        <div class="col">
          <h2>Done</h2>
          <ul class="list-group mylist" id="list-done">
            <task v-for="task in doneList" 
                  :key="task.id" 
                  :task="task"/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../models/listData.js";
import Task from "../components/Task.vue";

export default {
  components: {
    Task
  },
  data() {
    return {
      title: "What do I need to do today!",
      list: data,
      newTaskName: "",
    };
  },
  computed: {
    todoList() {
      return this.list.filter((task) => !task.done);
    },
    doneList() {
      return this.list.filter((task) => task.done);
    },
  },
  methods: {
    createTask() {
      this.list.push({
        id: this.list.length + 1,
        name: this.newTaskName,
        done: false,
      });
      this.newTaskName = "";
    },
  },
};
</script>

<style lang="scss">
.is-done {
  text-decoration: line-through;
}
</style>
