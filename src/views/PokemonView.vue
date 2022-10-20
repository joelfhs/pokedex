<template>
  <div class="container bg-light">
    <h1 class="text-center">{{ title }}:</h1>
    <div class="row">

        <pokemon-list :pokemonList="pokemonList"></pokemon-list>

    </div>
  </div>
</template>


<script>
  import axios from 'axios';
  import pokemonList from "../components/PokemonList.vue";
  export default { 
    components: {
        pokemonList,
    },
    data() {
      return {
        title: "Pokemones",
        pokemonList: [],
      }
    },
    methods: {
      async loadPokemons() {
        await axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => {
          this.pokemonList = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
      },
    },

    async mounted() {
      await this.loadPokemons();
    },
  }
</script>
