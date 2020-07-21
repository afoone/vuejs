<template>
  <div>
    <h3>Tareas</h3>
    <div>
      <input type="text" v-model="todo" />
      <button v-on:click="onSubmit">Añadir</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Tarea</th>
          <th>Completada</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in todos" :key="index">
          <td>{{item.title}}</td>
          <td>{{item.completed ? "Si": "No"}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    ...mapActions(["addTodo", "fetchTodos"]),
    onSubmit() {
      this.addTodo(this.todo);
      this.todo = "";
    }
  },
  computed: {
    ...mapGetters(["todos"])
  },

  created() {
    this.fetchTodos();
  }
};
</script>

<style>
</style>