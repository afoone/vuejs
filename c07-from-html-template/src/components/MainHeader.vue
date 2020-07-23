<template>
  <header class="main-header">
    <header-top cta="Contratanos ahora!" />
    <header-lower />
    <sticky-header />
  </header>
</template>

<script>
import stickyHeader from "./StickyHeader";
import headerTop from "./HeaderTop";
import headerLower from "./HeaderLower";
export default {
  components: {
    stickyHeader,
    headerTop,
    headerLower
  }
};
</script>

<style>
</style>