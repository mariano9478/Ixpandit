<template>
  <div class="bg">
    <div class="container">
      <h1>Pokemon finder</h1>
      <p>El que quiere Pokemons, que los busque.</p>
      <SearchSection></SearchSection>
      <PokemonView></PokemonView>
    </div>
  </div>
</template>

<script>
import SearchSection from "./components/SearchSection.vue";
import PokemonView from "./components/PokemonView.vue";
export default {
  name: "App",
  components: {
    SearchSection,
    PokemonView
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: #eee;
  height: 100vh;
  width: 100%;
  margin: auto;
}
*{
  webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;   
  margin:0;      /* Opera/IE 8+ */
}
.bg{
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
  background-image: url('~@/assets/bg.png');
}
.container{
  text-align: left;
  margin: 0 auto 30px auto;
  width: 30em;
  padding:50px 0
}
</style>
