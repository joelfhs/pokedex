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
        pokemonLinks: [],
        pokemonList: [],
      }
    },
    methods: {
      async loadPokemons() {
        await axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => {
          this.pokemonLinks = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });

        this.pokemonList = [];
        for(const pokemon of this.pokemonLinks) {
          await axios.get(pokemon.url)
          .then((response) => {
            this.pokemonList.push({
              id:response.data.id,
              name: response.data.name,
              image: response.data.sprites.other.dream_world.front_default,
              types: response.data.types
            });
          })
          .catch((error) => {
            console.log(error);
          });
        }
      },
    },

    async mounted() {
      await this.loadPokemons();
    },
  }
</script>
