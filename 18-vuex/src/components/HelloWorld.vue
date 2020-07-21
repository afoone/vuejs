<template>
  <div class="hello">
    <h1>Hola vuex, tienes {{pendingNumber}} tareas por terminar</h1>
    <button v-on:click="increment">Incrementa</button>
    Contador: {{ count }}
    <hr />
    <todos></todos>
  </div>
</template>

<script>
import todos from "./Todos";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  components: {
    todos
  },
  methods: {
    // incrementa() {
    //   console.log("incrementa");
    //   this.$store.dispatch("increment");
    // }
    ...mapActions(["increment"])
  },
  computed: {
    ...mapGetters(["pendingNumber"]),
    // count() {
    //   return this.$store.state.count;
    // }
    ...mapState(["count"])
  }
};
</script>











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
