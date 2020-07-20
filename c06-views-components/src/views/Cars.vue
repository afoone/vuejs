<template>
  <div>
    <button v-on:click="crear = !crear">crear nuevo</button>
    <div class="container">
      <car-list></car-list>
      <car-form v-if="crear"></car-form>
    </div>
  </div>
</template>

<script>
import carList from "../components/CarList";
import carForm from "../components/CarForm";

export default {
  components: {
    carList,
    carForm
  },
  data() {
    return {
      crear: true
    };
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>