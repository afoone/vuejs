<template>
  <div>
    <div>
      <input type="text" v-model="todo" />
      <button v-on:click="addTodo">Añadir</button>
    </div>
    <button v-on:click="incrementaContador">Incrementa</button>
    <h2>{{count}}</h2>
    <ul>
      <li v-for="(item, index) in todos" :key="index">{{item.title}}</li>
    </ul>
    <h3>pendientes</h3>
    <ul>
      <li v-for="(item, index) in todoPending" :key="index">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    incrementaContador() {
      this.$store.commit("increment");
    },
    addTodo() {
      this.$store.commit("addTodo", {
        title: this.todo,
        completed: false
      });
    }
  },
  props: {
    msg: String
  },
  computed: {
    ...mapState(["count", "todos"]),
    ...mapGetters(["todoPending"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
