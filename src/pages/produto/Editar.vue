<template>
 <div id="editar">
     <h1>
         Editando produto {{ id }}
     </h1>
        <span>
         Codigo do produto: <strong> {{ id }} </strong>
     </span><br>
     <span>
         Editar produto: <strong>
             {{ id }}
         </strong>
     </span>
     <br>
    <span>
        {{ $route.query.nome }} , {{ $route.query.qtd }}
    </span>
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