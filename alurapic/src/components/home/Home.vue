<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <!-- v-on:input pega o que é digitado e insere na variável filtro -->
    <input
      type="seach"
      class="filtro"
      v-on:input="filtro = $event.target.value"
      placeholder="Filtro por título"
    />

    <ul class="lista-fotos">
      <!-- v-for ao invés de interar pelas fotos, vai ser interado pelo filtro das fotos-->
      <li
        class="lista-fotos-item"
        v-for="foto of fotosComFiltro"
        :key="foto.id"
      >
        <!-- Passa as propriedades pro componente meu-painel-->
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva
            v-meu-transform:rotate.animate="
              15 /*Passa para a diretiva a rotação de 15*/
            "
            :url="foto.url"
            :titulo="foto.titulo"
          />

          <!--Não precisa fazer bind pq está passando o valor direto pro componente -->
          <!-- no evento @click adicionar o .native para chamar o evento nativo do componente que no caso é o button  -->
          <meu-botao
            tipo="button"
            rotulo="Remover"
            @botaoDesativado="naoRemoverFoto()"
            @botaoAtivado="removerFoto(foto)"
            :confirmacao="true"
            estilo="perigo"
          />
          <!-- passa um boolean para o botão se deve haver confirmação de exclusão ou não -->
        </meu-painel>
      </li>
    </ul>

    <!--Outro componente sendo chamado e passando 2 props para ele  -->
    <formulario-teste :prop1="teste1" :prop2="blabla"> </formulario-teste>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import transform from "../../directives/Transform";

export default {
  //seta os componentes que serão utilizados
  components: {
    //nome do componente : nome do componente importado
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },

  directives: {
    "meu-transform": transform,
  },
  data() {
    return {
      titulo: "Alurapic",
      //array vazio que será preenchido com os dados da api
      fotos: [],
      filtro: "",

      //dados que serão enviado para o componente <teste>
      teste1: "Meu formulário",
      blabla: "Enviar Dados",
    };
  },

  computed: {
    //método que realizará o filtra das imagens
    fotosComFiltro() {
      if (this.filtro) {
        /*Filtrar */

        //let exp = new RegExp(this.filtro.trim(),'i');//expressão regular para remover ignorar letras maiusculas e minusculas
        //return this.fotos.filter(foto => exp.test(foto.titulo));//filtra as fotos passando como teste o titulo

        //outra maneira de filtrar

        return this.fotos.filter((foto) =>
          foto.titulo.toLowerCase().includes(this.filtro.trim().toLowerCase())
        );
      } else {
        return this.fotos;
      }
    },
  },
  //propriedade utlizada para os métodos que serão utilizados na interface
  methods: {
    removerFoto(foto) {
      alert("Remover a foto " + foto.titulo);
    },
    naoRemoverFoto() {
      alert("A foto não será removida! =)");
    },
  },
  //quando criar o componente este método será executado
  created() {
    //faz a request para o endereço
    let promise = this.$http.get("http://localhost:3000/v1/fotos");

    //quando terminar converte pra JSON
    promise
      .then((res) => res.json())
      //assim que converter para JSON coloca os elementro no array de fotos
      .then(
        (foto) => (this.fotos = foto),
        (err) => console.log(err)
      ); //segundo parâmetro mostra o erro caso algo acontece
  },
};
</script>

<style>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
