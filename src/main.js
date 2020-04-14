import Vue from 'vue'
import router from "./plugins/router"
import vuetify from './plugins/vuetify'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import App from './App.vue'

Vue.config.productionTip = false
Vue.component(VueQrcode.name, VueQrcode);

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
