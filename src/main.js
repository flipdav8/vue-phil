import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.component("LineChart", require("./components/LineChart.vue").default);

Vue.component("LineBack", require("./components/LineBack.vue").default);

Vue.component("IconBase", require("./components/icons/IconBase.vue").default);
Vue.component(
  "IconDisconnect",
  require("./components/icons/IconDisconnect.vue").default
);
Vue.component(
  "IconConnect",
  require("./components/icons/IconConnect.vue").default
);
Vue.component("IconLeft", require("./components/icons/IconLeft.vue").default);
Vue.component("IconRight", require("./components/icons/IconRight.vue").default);
Vue.component(
  "IconSquare",
  require("./components/icons/IconSquare.vue").default
);
Vue.component("IconPlay", require("./components/icons/IconPlay.vue").default);
Vue.component("IconPause", require("./components/icons/IconPause.vue").default);
Vue.component(
  "IconRecord",
  require("./components/icons/IconRecord.vue").default
);
Vue.component("IconStop", require("./components/icons/IconStop.vue").default);
Vue.component(
  "IconOpenvalve",
  require("./components/icons/IconOpenvalve.vue").default
);
Vue.component(
  "IconClosevalve",
  require("./components/icons/IconClosevalve.vue").default
);
Vue.component(
  "IconInflate",
  require("./components/icons/IconInflate.vue").default
);
Vue.component(
  "IconDeflate",
  require("./components/icons/IconDeflate.vue").default
);
Vue.component(
  "IconSettings",
  require("./components/icons/IconSettings.vue").default
);
Vue.component("IconHelp", require("./components/icons/IconHelp.vue").default);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
