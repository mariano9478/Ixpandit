import { createStore } from "vuex";
var functions = require('../functions')
var axios = require('axios');

export default createStore({
  state: {
    pokemons:[],
    selectedPokemon:'',
    history:new Array()
  },
  mutations: {
    setPokemons(state, pokemons){
      state.pokemons = pokemons.map((poke, index) => {return{text:poke.name, value:index}})
    },
    selectPokemon(state, pokemon){
      state.selectedPokemon=pokemon
    },
    searched(state, pokemon){
      this.selectedPokemon=''
      if(state.history.length == 10){
        state.history.pop()
      }
      state.history=Array.prototype.concat({id:pokemon.id, name: pokemon.name, image: pokemon.sprites.front_default},state.history)
    }
  },
  actions: {
    async getPokemons(context){
      let pokemons = await functions.getPokemons_recursive("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      context.commit('setPokemons', pokemons)
    },
    async searchPokemon(context, pokemon){
      var config = {
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon-form/${pokemon}`,
        headers: { }
      };
      
      let response = await axios(config)
      console.log("🚀 ~ file: index.js ~ line 53 ~ response.data", response.data)
      context.commit('searched', response.data)
    }
  },
  modules: {},
});
