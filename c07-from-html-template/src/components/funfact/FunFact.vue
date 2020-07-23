<template>
  <section class="fun-fact-section" style="background-image:url(images/background/2.jpg);">
    <div class="auto-container">
      <div class="row clearfix">
        <!--Column-->
        <div class="counter-column col-md-3 col-sm-6 col-xs-12">
          <div class="count-box counted">
            <span class="icon flaticon-massage"></span>
            <span class="count-text" data-speed="3000" data-stop="1356">{{masaje}}</span>
            <h4 class="counter-title">Massage Therapy</h4>
          </div>
        </div>

        <!--Column-->
        <div class="counter-column col-md-3 col-sm-6 col-xs-12">
          <div class="count-box counted">
            <span class="icon flaticon-spa-8"></span>
            <span class="count-text" data-speed="3000" data-stop="750">{{sauna}}</span>
            <h4 class="counter-title">Sauna, Jacuzzi</h4>
          </div>
        </div>

        <!--Column-->
        <div class="counter-column col-md-3 col-sm-6 col-xs-12">
          <div class="count-box counted">
            <span class="icon flaticon-spa-tools"></span>
            <span class="count-text" data-speed="3000" data-stop="289">289</span>
            <h4 class="counter-title">Soften the heel</h4>
          </div>
        </div>

        <!--Column-->
        <div class="counter-column col-md-3 col-sm-6 col-xs-12">
          <div class="count-box counted">
            <span class="icon flaticon-bamboo"></span>
            <span class="count-text" data-speed="3000" data-stop="496">496</span>
            <h4 class="counter-title">Skin rejuvenation</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sauna: 0,
      masaje: 0,
      masajeTop: 750,
      saunaTop: 3750,
      interval: null
    };
  },
  created() {
    this.interval = setInterval(() => {
      if (this.sauna < this.saunaTop) {
        this.sauna += Math.floor(this.saunaTop / 43);
        this.masaje += Math.floor(this.masajeTop / 43);
      } else {
        this.sauna = this.saunaTop;
        this.masaje = this.masajeTop;
        clearInterval(this.interval);
      }
    }, 70);
  }
};
</script>

<style>
</style>