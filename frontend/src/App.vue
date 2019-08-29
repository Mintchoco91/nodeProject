<template>
  <div id="app">
    <img src="./assets/logo.png" @click="goToList">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goToList(){
        this.$router.push({
            name: 'boardListPage'
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
