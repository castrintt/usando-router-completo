<template>
 <div id="detalhes">
     <h1>
         detalhe do produto
     </h1>
     <span>
         Codigo do produto: <strong> {{ id }} </strong>
     </span>
     <ul>
         <li>
             <router-link :to="`/produto/${id}/editar`">EDITAR CAMISA</router-link>
         </li>
         <li>
             <router-link :to="`/produto/${id}/editar`">EDITAR JAQUETA</router-link>
         </li>
         <li>
             <router-link :to="`/produto/${id}/editar`">EDITAR BLUSA</router-link>
         </li>
         <li>
             <router-link :to="{name: 'editar', params: { id }, query:{ nome:'sujeito programador', qtd:12 }}" >LALALA</router-link>
         </li>
 </ul>
 </div>
</template>
<script>
export default {
    name:'MeusProdutos',
    props:['id']
}
</script>

<style>

</style>