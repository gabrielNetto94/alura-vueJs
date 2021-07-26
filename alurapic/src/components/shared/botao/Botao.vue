<template>
  <!--método estiloDoBotao teste qual classe o botao utilizará -->
  <button
    @click="dispararAcao()"
    class="botao"
    v-bind:class="estiloDoBotao"
    :type="tipo"
  >
    {{ rotulo }}
  </button>
  <!--É possível utilizar a class  e :class com bind -->
</template>
<script>

export default {
  //validação das props do botão
  props: {
    tipo: {
      required: true,
      type: String,
    },
    rotulo: {
      required: true,
      type: String,
    },
    confirmacao: Boolean,
    estilo: String,
  },

  methods: {
    dispararAcao() {
      if (this.confirmacao) {
        //emite evento para quem utilizar este componente
        if (confirm("Deseja realmente deletar a foto?")) {
          //emite o evento para o elemento pai passando o nome do evento e tbm uma Data
          this.$emit("botaoAtivado");
        } else {
          this.$emit("botaoDesativado");
        }
      } else {
        this.$emit("botaoAtivado");
      }
    },
  },
  computed: {
    estiloDoBotao() {
      //se estilo for padrao ou não for definido usar estilizacao padrão
      if (this.estilo == "padrao" || !this.estilo) return "botao-padrao";
      if (this.estilo == "perigo") return "botao-perigo";
    },
  },
};
</script>

<style>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>