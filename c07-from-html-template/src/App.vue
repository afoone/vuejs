<template>
  <div id="app">
    <!-- Main Header-->
    <main-header></main-header>
    <router-view></router-view>
  </div>
</template>

<script>
import mainHeader from "@/components/MainHeader.vue";
export default {
  components: {
    mainHeader
  }
};
</script>
<style>
</style>
