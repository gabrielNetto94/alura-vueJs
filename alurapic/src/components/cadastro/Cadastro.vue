<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <!--prevent default do Vue-->
    <form id="form" @submit.prevent="gravar()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" v-model="foto.titulo" />
      </div>
      <!-- Utilização do two-way data binding v-model -->
      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="foto.url" />
        <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo"/>
      </div>

      <div class="controle">
        <label for="descricao"> DESCRIÇÃO</label>
        <textarea
          id="descricao"
          autocomplete="off"
          v-model="foto.descricao"
        ></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit" />

        <router-link to="/">
          <meu-botao rotulo="VOLTAR" tipo="button" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },
  data() {
    return {
      foto: {
        titulo: "",
        url: "",
        descricao: "",
      },
    };
  },

  methods: {
    gravar() {
      // duas maneiras de limpar os campos do formulário, setar os campos para '' ou um reset do JS puro
      //document.querySelector("#form").reset();

      this.foto = {
        titulo: "",
        url: "",
        descricao: "",
      };
    },
  },
};
</script>

<style scoped>
.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>