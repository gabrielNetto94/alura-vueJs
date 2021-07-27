import Vue from 'vue'
import App from './App.vue'
//utilizado para realizar requests  HTTP
import VueResource from 'vue-resource';
//importa biblioteca de rotas
import VueRouter from 'vue-router';
//importa as rotas
import { routes } from './routes';
import './directives/Transform';
//validação da formulários
import VeeValidate from 'vee-validate';
//importação do arquivo de mensagens em português do vee validate
import msg from './pt_BR';
import 'bootstrap/dist/css/bootstrap.css';

//importação de arquivos criados
import './assets/css/teste.css';
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

//utilização do vee-validate e configuração do arquivo para utilizar pt-br nas mensagens
Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});

//Vue =  global view object
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
