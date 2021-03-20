import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;

[[VueAxios, axios]].forEach(args => Vue.use(...args));

new Vue({
  render: h => h(App),
}).$mount("#app");
