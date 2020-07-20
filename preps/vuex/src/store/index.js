import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {
        title: "hacer algo",
        completed: false
      },
      {
        title: "hacer otra cosa",
        completed: true
      }
    ]
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addTodo(state, payload) {
      state.todos = [...state.todos, payload]
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    todoPending(state) {
      return state.todos.filter(i => !i.completed)
    }
  }
})
