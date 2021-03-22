import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import VueAxios from "vue-axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSadCry, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

library.add(faSadCry, faAngleDown, faAngleUp);
Vue.component("font-awesome-icon", FontAwesomeIcon);

[[VueAxios, axios]].forEach(args => Vue.use(...args));

new Vue({
  render: h => h(App),
}).$mount("#app");
