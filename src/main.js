import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic);

Vue.config.productionTip = false

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
