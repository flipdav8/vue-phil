<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <vue-slider v-model="value"></vue-slider>
    <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    VueSlider
  },
  data() {
    return {
      value: 50
    };
  }
};
</script>
