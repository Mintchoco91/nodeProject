// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
 
const socket = io('http://localhost:3000');
 
Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$socket = socket

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
