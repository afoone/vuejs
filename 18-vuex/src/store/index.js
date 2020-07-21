import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [],
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addTodo(state, payload) {
      state.todos.push(
        payload
      )
    },
    setTodos(state, payload) {
      state.todos = payload
    }
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    pending(state) {
      return state.todos.filter(i => !i.completed)
    },
    pendingNumber(state) {
      return state.todos ? state.todos.filter(i => !i.completed).length : 0
    },
    count(state) {
      return state.count
    },

  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    addTodo({ commit }, payload) {
      axios.post("http://localhost:3000/todos", {
        title: payload,
        completed: false
      }).then(res => {
        commit("addTodo", res.data)
      }
      )
    },
    async fetchTodos({ commit }) {
      const { data } = await axios.get("http://localhost:3000/todos");
      commit("setTodos", data);
    }
  },
  modules: {
  }
})
