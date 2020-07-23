<template>
  <div class="home">
    <services></services>
    <fun-fact></fun-fact>
  </div>
</template>

<script>
import services from "../components/services/Services";
import funFact from "../components/funfact/FunFact";
export default {
  name: "Home",
  components: {
    services,
    funFact
  }
};
</script>
