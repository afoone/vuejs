<template>
  <div class="services-carousel owl-carousel owl-theme owl-loaded owl-drag">
    <div class="owl-stage-outer">
      <div class="owl-stage" style=" transition: all 0s ease 0s; width: 7094px;">
        <template v-for="(item, index) in services">
          <div
            class="owl-item cloned"
            style="width: 373.333px;"
            :key="index"
            v-if="showService(index)"
          >
            <div class="service-block">
              <div class="inner-box">
                <div class="image-box">
                  <div class="image">
                    <router-link :to="item.url">
                      <img :src="item.image" alt />
                    </router-link>
                  </div>
                </div>
                <div class="lower-content">
                  <div class="icon-box">
                    <span :class="item.icon"></span>
                  </div>
                  <h3>
                    <a href="service-detail.html">{{item.title}}</a>
                  </h3>
                  <p>{{item.text}}.</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="owl-nav">
      <div class="owl-prev">
        <span class="fa fa-angle-left"></span>
      </div>
      <div class="owl-next">
        <span class="fa fa-angle-right"></span>
      </div>
    </div>
    <div class="owl-dots">
      <div
        class="owl-dot"
        :class="dot === index ?'active':null"
        v-for="index in ndots"
        :key="index"
        v-on:click="onDotClick(index)"
      >
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      services: [],
      dot: 1
    };
  },
  created() {
    axios
      .get("http://localhost:3000/services")
      .then(res => (this.services = res.data))
      .catch(console.error);
  },
  computed: {
    ndots() {
      return Math.ceil(this.services.length / 3);
    }
  },
  methods: {
    onDotClick(index) {
      this.dot = index;
    },
    showService(index) {
      return index >= (this.dot - 1) * 3 && index < this.dot * 3;
    }
  }
};
</script>

<style scoped>
.der {
  -webkit-animation: der 3s ease-in-out 0s 1 normal;
}
@keyframes der {
  0% {
    left: 0;
  }
  100% {
    left: 80%;
  }
}
.izq {
  -webkit-animation: izq 3s ease-in-out 0s 1 reverse;
}
@keyframes izq {
  0% {
    left: 0;
  }
  100% {
    left: 80%;
  }
}
</style>