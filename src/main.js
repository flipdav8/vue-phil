import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.component("LineChart", require("./components/LineChart.vue").default);

Vue.component("LineBack", require("./components/LineBack.vue").default);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
