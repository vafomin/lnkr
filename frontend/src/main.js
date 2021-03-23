import Vue from "vue";
import router from "./plugins/router";
import vuetify from "./plugins/vuetify";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import VueClipboard from "vue-clipboard2";
import "./plugins/truncate";
import i18n from "./plugins/i18n";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.component(VueQrcode.name, VueQrcode);
VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);

new Vue({
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
