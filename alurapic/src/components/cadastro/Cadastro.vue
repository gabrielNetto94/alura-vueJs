<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>

    <!-- Se tiver exisitr _id significa que é alteração e exibe -->
    <h2 v-if="foto._id" class="centralizado">Alterando</h2>
    <!-- Se não tiver id exibe esta tag -->
    <h2 v-else class="centralizado">Incluindo</h2>

    <!--prevent default do Vue-->
    <form id="form" @submit.prevent="gravar()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input
          data-vv-as="Título"
          name="titulo"
          v-validate
          data-vv-rules="required|min:3|max:30"
          id="titulo"
          autocomplete="off"
          v-model="foto.titulo"
        />
        <span v-show="errors.has('titulo')" class="erro">{{
          errors.first("titulo")
        }}</span>
      </div>
      <!-- Utilização do two-way data binding v-model -->
      <div class="controle">
        <label for="url">URL</label>
        <input
          name="url"
          v-validate
          data-vv-rules="required"
          id="url"
          autocomplete="off"
          v-model="foto.url"
        />
        <imagem-responsiva
          class="imagem-reduzida"
          v-show="foto.url"
          :url="foto.url"
          :titulo="foto.titulo"
        />
        <span v-show="errors.has('url')" class="erro">{{
          errors.first("url")
        }}</span>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea
          name="descricao"
          v-validate
          data-vv-rules="required"
          id="descricao"
          autocomplete="off"
          v-model="foto.descricao"
        ></textarea>
        <span v-show="errors.has('descricao')" class="erro">{{
          errors.first("descricao")
        }}</span>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit" />

        <!-- Ao invés de navegar pelo caminho absoluto da rota, nevagar pelo name -->
        <router-link :to="{ name: 'home' }">
          <meu-botao rotulo="VOLTAR" tipo="button" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import Foto from "../../domain/foto/Foto";
import FotoService from "../../domain/foto/FotoService";

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },
  data() {
    return {
      foto: new Foto(),
      //pega o id passado pela rota
      id: this.$route.params.id,
    };
  },

  methods: {
    gravar() {
      //chama o $validator que é do módulo vee-validate e valida se o formulário está validado
      this.$validator.validateAll().then((success) => {
        //se sucesso na validação insere a foto
        if (success) {
          this.service.cadastrar(this.foto).then(
            () => {
              //se tiver id da foto é alteração, concluir alteração e redireciona para home
              if (this.id) this.$router.push({ name: "home" });
              this.foto = new Foto();
            },
            //2º param caso dê erro
            (err) => console.log(err)
          );
        }
      });
    },
  },

  created() {
    this.service = new FotoService(this.$resource);

    //se o parâmetro foi passado pela rota, busca o item na api e seta os valor nos campos
    if (this.id) {
      this.service.buscar(this.id).then((foto) => (this.foto = foto));
    }
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

.imagem-reduzida {
  width: 20%;
  height: 20%;
}

.erro {
  color: red;
}
</style>