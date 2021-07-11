import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-180c1-default-rtdb.europe-west1.firebasedatabase.app/data.json';

new Vue({
  el: '#app',
  render: h => h(App)
})
