<template>
  <div class="hello">
    <button v-on:click="searchCategories()">Search Categories</button>
  </div>
</template>

<script>
export default {
  name: 'CatSearch',
  props: {
    msg: String
  },
  methods:{
    searchCategories(){
      fetch('https://api.thecatapi.com/v1/breeds')
      .then(data => data.json())
      .then(data =>{
        
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
