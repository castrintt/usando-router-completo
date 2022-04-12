<template>
 <div id="meus-produtos">
     <ul>
         <li v-for="(prod, indice) in caminhos" :key="indice">
             <router-link :to="`/produto/${prod.id}`"> {{ prod.produto }} </router-link>
         </li>

     </ul>
 </div>
</template>

<script>
export default {
    name:'MeusProdutos',
    data(){
        return{
            caminhos:[
                {
                    id:11,
                    produto:'Camisa'
                },
                {
                    id:20,
                    produto:'Jaqueta'
                },
                {
                    id:552,
                    produto:'Blusa'
                },
                {
                    id:123,
                    produto:'Sapato'
                },
                {
                    id:515,
                    produto:'Mesa'
                }
            ]
        }
    }
}
</script>

<style>

</style>