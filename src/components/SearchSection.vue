<template>
  <div>
    <input list="pokemons-list" @input="selectPokemon" v-model="selected" placeholder="Select a pokemon">
    <datalist id="pokemons-list">
      <option :value="poke.text" v-for="poke in pokemons" v-bind:key="poke.value">{{poke.text}}</option>
    </datalist>  
    <button v-on:click="search">Search</button>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
export default {
  name: "SearchSection",
  data(){
    return {selected:''}
  },
  computed:{
    ...mapState(['pokemons','selectedPokemon'])
  },
  methods:{
    ...mapActions(['getPokemons','searchPokemon']),
    ...mapMutations(['selectPokemon']),
    async search(){
       await this.searchPokemon(this.selected)
       this.selected=''
    }
  },
  async created(){
    await this.getPokemons()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
    margin: 30px auto;
    width: 30em;
}
button{
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 0 10px;
    -webkit-box-shadow: 2px 2px 2px 0px #0000004f;
    box-shadow: 1px 1px 4px 0px #0000004f;
    color: #000;
    background: #e6e6e6;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.5s ease;
}
button:hover{
  color:#000;
  -webkit-box-shadow: 2px 2px 2px 0px #0000007a;
  box-shadow: 1px 1px 4px 0px #0000007a;
}
input{
  border-radius: 5px;
    border: 1px solid #848484;
    outline: 0;
    height: 25px;
    width: 28em;
}
</style>
