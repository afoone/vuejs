<template>
  <!--Header Top-->
  <div class="header-top">
    <div class="auto-container">
      <div class="inner-container clearfix">
        <div class="top-left">
          <ul class="clearfix">
            <li>
              <a href="#">
                <i class="fa fa-volume-control-phone"></i>
                {{phone}}
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-envelope-o"></i>
                {{mail}}
              </a>
            </li>
          </ul>
        </div>
        <div class="top-right">
          <div class="link-box">
            <a href="appointment.html">{{cta}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mail: "pepe@hola.com",
      phone: "+34 7675483934"
    };
  },
  props: ["cta"]
};
</script>

<style>
</style>