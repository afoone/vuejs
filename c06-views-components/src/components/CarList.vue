<template>
  <div>
    <h1>{{devuelveVendidos()}}</h1>
    <table>
      <thead>
        <tr>
          <td>Marca</td>
          <td>Modelo</td>
          <td>País</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(car, index) in (cars)" :key="index">
          <td>{{car.brand | uppercase}}</td>
          <td>{{car.model | capitalize}}</td>
          <td>{{car.country | capitalize}}</td>
          <td>Coches vendidos: {{vendidos | multiplicar(5)}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import bus from "../bus";
import capitalize from "../filters/capitalize";

export default {
  data() {
    return {
      cars: [],
      vendidos: 100
    };
  },
  created() {
    axios.get("http://localhost:3000/cars").then(res => (this.cars = res.data));
    bus.$on("CarCreated", car => this.cars.push(car));
  },
  mixins: [capitalize],
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },

    sumaUno(value) {
      return value + 1;
    },
    multiplicaPorDos(value) {
      return value * 2;
    },
    multiplicar(value, multiplicador) {
      return value * multiplicador;
    },
    limitBy(arr, n) {
      console.log(arr, n);
      return arr.slice(0, n);
    }
  }
};
</script>

<style>
</style>