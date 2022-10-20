<template>
  <div v-for="pokemon in pokemonList" class="col-12 co-md-6 col-lg-4 col-xl-3">
    <div class="card my-2">
      <img :src="pokemon.image" :type="pokemon.types[0].type.name" class="card-img-top p-2" :alt="pokemon.name">
      
      <div class="card-body">
        <h3 class="card-title text-center">{{ pokemon.name }}</h3>
        <div class="card-text text-center">
          <h5><span class="badge bg-secondary m-1" v-for="pokemonType in pokemon.types">{{ pokemonType.type.name }}</span></h5>
        </div>
      </div>

      <div class="card-footer">
        <button class="btn btn-primary float-start" data-bs-toggle="modal" data-bs-target="#pokemonModal" @click="sendPokemon(pokemon.id);">Ver</button>
        <button class="btn btn-danger float-end" @click="favorito(pokemon.id);">Favorito</button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //pokemonLink: ""
      }
    },
    props: ["pokemonList"],
    methods: {
      async sendPokemon(id){
        this.$emit('get_pokemon', id);
      },
      favorito(id){
        //this.pokemonLink = id;
      }
    }
  };
</script>