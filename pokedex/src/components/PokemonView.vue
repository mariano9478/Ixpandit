<template>
<div>
  <div>
    <h2>Resultado de la busqueda</h2>
    <div class="item" v-if="history.length >0">
      <img :src="history[0].image" alt="">
      <h3>{{history[0].name}}</h3>
    </div>
    <h2>Historial</h2>
    <div class="item" v-for="poke in listHistory" v-bind:key="poke.id">
      <img :src="poke.image" alt="">
      <h3>{{poke.name}}</h3>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "PokemonView",
    computed:{
    ...mapState(['history']),
    listHistory(){
      return this.history.slice(1)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
    width: inherit;
    display: inline-block;
    padding: 0 20px;
    text-transform: capitalize;
    font-size: 2em;
    width: 1em;
    color:#0a0a0a
} 
img{
    display: inline-block;
    vertical-align: middle;

}
.item{
    background: #ffffff80;
    width: 30em;
    text-align: left;
    padding: 0px;
    margin:15px auto;
    -webkit-box-shadow: 3px 3px 15px -4px #000000;
    box-shadow: 3px 3px 15px -4px #000000;
    border-radius: 10px;
}
</style>
