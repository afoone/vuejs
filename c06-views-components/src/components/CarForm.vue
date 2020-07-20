<template>
  <div>
    <div>
      Marca:
      <input type="text" v-model="brand" />
    </div>

    <div>
      Modelo:
      <input type="text" v-model="model" />
    </div>

    <div>
      País
      <input type="text" v-model="country" />
    </div>
    {{brand}} - {{model}} - {{country}}
    <button v-on:click="onSubmit">Guardar</button>
  </div>
</template>

<script>
import axios from "axios";
import bus from "../bus";

export default {
  data() {
    return {
      brand: "",
      model: "",
      country: ""
    };
  },

  methods: {
    onSubmit() {
      axios
        .post("http://localhost:3000/cars", {
          brand: this.brand,
          model: this.model,
          country: this.country
        })
        .then(res => bus.$emit("CarCreated", res.data));
    }
  }
};
</script>

<style>
</style>