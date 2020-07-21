<template>
  <div>
    <div>
      Username:
      <input type="text" v-model.trim="user" />
    </div>
    <div>
      Password:
      <input type="password" v-model="password" />
    </div>
    <div>
      <button v-on:click="onSubmit">Login</button>
    </div>
  </div>
</template>

<script>
import { login } from "../api/login";
export default {
  data() {
    return {
      user: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      login(this.user, this.password).then(res =>
        localStorage.setItem("token", res.data.token)
      );
    }
  }
};
</script>

<style>
</style>