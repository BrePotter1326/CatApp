<template>
  <div id="app">
    <img id="logo" alt="Vue logo" src="./assets/cat.jpg">
    <h1 class="title">Cats App</h1> 
    <router-link to="/cats">Go to CatSearch</router-link>
    |
    <router-link to="/Home">Go to Home</router-link>
  <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import CatSearch from './components/cats.vue'

export default {
  name: 'app',
  components: {
    Home,
    CatSearch
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
#logo{
  margin-top:-100px;
}
.title{
  font-size: 70px;
  margin-top: 50px;
  font-family: cursive;
}
</style>
