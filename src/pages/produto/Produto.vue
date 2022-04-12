<template>
  <div id="produto">
  <button @click="irHome">ir Home</button>
  <h1>Tela Produto</h1>
  <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'Produto',
  methods:{
    irHome(){
      this.$router.push('/')
    }
  },
}
</script>

<style>

</style>