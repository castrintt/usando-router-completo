<template>
  <div id="app">
    <Header/>
    <hr/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>

</style>