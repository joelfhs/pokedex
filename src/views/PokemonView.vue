<template>
  <div class="container bg-white p-3">
    <h1 class="text-center">{{ title }}:</h1>
    <div class="row align-items-center">

      <pokemon-list :pokemonList="pokemonList"></pokemon-list>

      <div class="col-12 text-center my-3">
        <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
          <button type="button" class="btn btn-primary" v-if="previousPage != null" @click="loadPokemons(previousPage)">Anteriror</button>
          <button type="button" class="btn btn-primary" @click="loadPokemons(nextPage)">Siguiente</button>
        </div>
      </div>

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
        previousPage: "",
        nextPage: "",
      }
    },
    methods: {
      async loadPokemons(page) {
        await axios.get(page ? page : 'https://pokeapi.co/api/v2/pokemon/')
        .then((response) => {
          this.pokemonLinks = response.data.results;
          this.previousPage = response.data.previous;
          this.nextPage = response.data.next;
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


<style>
  div.card img {
    max-height: 400px;
  }
  div.card div.card-body {
    background-color: #eceff1;
  }

  div.card img[type="fire"] {
    background-color: #FDDFDF;
  }
  div.card img[type="grass"] {
    background-color: #DEFDE0;
  }
  div.card img[type="electric"] {
    background-color: #FCF7DE;
  }
  div.card img[type="water"] {
    background-color: #DEF3FD;
  }
  div.card img[type="ground"] {
    background-color: #f4e7da;
  }
  div.card img[type="rock"] {
    background-color: #d5d5d4;
  }
  div.card img[type="fairy"] {
    background-color: #fceaff;
  }
  div.card img[type="poison"] {
    background-color: #98d7a5;
  }
  div.card img[type="bug"] {
    background-color: #f8d5a3;
  }
  div.card img[type="dragon"] {
    background-color: #97b3e6;
  }
  div.card img[type="psychic"] {
    background-color: #eaeda1;
  }
  div.card img[type="fighting"] {
    background-color: #E6E0D4;
  }
  div.card img[type="flying"], div.card img[type="normal"] {
    background-color: #F5F5F5;
  }
</style>