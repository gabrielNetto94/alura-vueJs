  <template>
  <div class="corpo">
    
    <meu-menu :routes="routes"/>

    <transition name="pagina">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
import { routes } from "./routes";
import Menu from './components/shared/menu/Menu.vue';
export default {

  components:{
    'meu-menu': Menu
  },
  data() {
    return {
      //filtra as rotas que são menu, removendo por exemplo a rota default da aplicação
      routes: routes.filter(route => route.menu)
    };
  },
};
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.pagina-enter, .pagina-leave-active{
  opacity: 0;

}
.pagina-enter-active, .pagina-leave-active{
  transition: opacity .5s;
}

</style>
