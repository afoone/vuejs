<template>
  <section class="services-section" style="background-image: url(images/background/1.jpg);">
    <div class="auto-container">
      <div class="sec-title text-center">
        <span class="title">We take for you</span>
        <h2>Our Best Services</h2>
        <div class="separator">
          <span class="flaticon-flower"></span>
        </div>
        <p>
          Every treatment is specifically designed to offer a unique experience, using powerful massage sequences
          <br />and the most potent actives available in the world today.
        </p>
      </div>
      <services-carousel />
    </div>
  </section>
</template>

<script>
import servicesCarousel from "./ServicesCarousel";
export default {
  components: {
    servicesCarousel
  }
};
</script>

<style>
</style>