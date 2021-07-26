<template>
    
    <nav>
        <ul>
        <!-- Faz um v-for para iterar os elementos de rotas da aplicação-->
        <li :key="route.path" v-for="route in routes">
            <!--Utilizar o router-link para não recarregar a página quando acessar outra rota -->
            <router-link :to="route.path ? route.path : '/'">{{ route.titulo }}</router-link>
        </li>
        </ul>
    </nav>

</template>

<script>
export default {

    props:{
        //Pode usar as props desta maneira para validar a prop
        routes:{
            type: Array,
            required:true
        }
    }
    
}
</script>

<style scoped>

</style>