<template>
  <div class="main">
  <h1 v-if="true"v-bind:title="hiddenMessage">Welcome to the iTunes App {{inputText}}</h1>
  <button v-on:click="showAlert()">Click</button>
  <button v-on:click="toggleTitle()">title</button>
  <hr>
  <input type="text" v-model="inputText">
  <button v-on:click="getItuneData()">Get Songs</button>
  <div id="song">
    <div class="title"><a v-bind:herf="song.trackViewUrl">{{song.trackName}}</a>{{song.trackName}}</div>
    <img v-bind:src="song.artworkUrl60">
    <audio controls>
      <source v-bind:src="song.previewUrl">
    </audio>
    <div class="artistName">{{song.artistName}}</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ItunesApp',
  props: {
    msg: String
  },
  data() {
    return{
      inputText: '',
      title: "Hey Ya'll!",
      message:"This is a message",
      hiddenMessage:"This a hidden ninja",
      hasTitle: true,
      songsArray:[]
      }
  },
  methods: {
    showAlert(){
      alert(this.message);
    },
    toggleTitle(){
      this.hasTitle =!this.hasTitle
    }
  },
  getItuneData(){
    fetch(`https://itunes.apple.com/search?term=$(this.inputText)` )
    .then(data => {
      data.json()
    })
    .then(this.songsArray = data.results)
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
