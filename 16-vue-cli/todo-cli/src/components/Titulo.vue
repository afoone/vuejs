<template>
  <h1>- {{title}} -</h1>
</template>

<script>
export default {
  name: "titulo",
  props: {
    title: {
      type: String,
      default: "Título"
    }
  }
};
</script>

