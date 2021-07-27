//import Cadastro from './components/cadastro/Cadastro.vue';
//separa o componente Cadastro para apenas quando o usuário clica no componente e será carregado "Lazy Loading"
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue').then(m => m.default);
import Home from './components/home/Home.vue';

export const routes = [
    { path: '/home', name: 'home', component: Home, titulo: 'Home', menu: true },
    { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
    { path: '/cadastro/:id', name: 'alterar', component: Cadastro, titulo: 'Alterar' },
    { path: '*', component: Home, menu: false }//rota default da aplicação

];