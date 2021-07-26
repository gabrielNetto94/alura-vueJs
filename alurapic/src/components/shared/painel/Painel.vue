<template>
  <!-- Painel é o componete que é exportado-->
  <div class="painel">
    <!-- titulo será recebido do componente pai-->
    <!-- on double click inverte o valor da variável visivel-->
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>

    <transition name="painel-fade">
      <div class="painel-conteudo" v-show="visivel">
        <!-- a tag slot indica que este componente vai receber outros componentes -->
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  //array de propriedades que o elemento aceita, neste caso apenas o titulo do painel
  props: ["titulo"],
  data() {
    return {
      visivel: true,
    };
  },
};
</script>

<!-- TAG scoped define que o estilo será aplicado apenas para este componente-->
<style scoped>
.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

/*o global neste caso, será aplicado apenas dentro do componente */
* {
  box-shadow: 5px 5px 5px black;
}

.painel-fade-enter, .painel-fade-leave-active{
  opacity: 0;

}
.painel-fade-enter-active, .painel-fade-leave-active{
  transition: opacity .5s;
}
.painel-conteudo{
  overflow: hidden;
}
</style>
