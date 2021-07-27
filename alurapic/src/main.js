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
import 'bootstrap/dist/js/bootstrap.js';

//importação de arquivos js e css globais
import './assets/css/teste.css';
import './assets/js/teste.js';

Vue.use(VueResource);
//se a variável não estiver setada, utilizar a localhost
Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';
Vue.use(VueRouter);

/*
//Setar informações no cabeçalho da requisição
Vue.http.interceptors.push((req, next) => {

  // é possível colocar informações no header antes do envio da requisição
  req.headers.set('Authorization', 'informação de segurança aqui');
  console.log('Lidando com o request');

  next(res => {
    console.log('Lidando com a resposta')
    // é possível acessar os dados da reposta e realizar transformações antes
    console.log(res.body);
  });
});
*/
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
