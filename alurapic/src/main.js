import Vue from 'vue'
import App from './App.vue'
//utilizado para realizar requests  HTTP
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
//importa as rotas
import { routes } from './routes';
import './directives/Transform';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode:'history'
 });

//Vue =  global view object
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
