<template>
  <div v-for="pokemon in pokemonList" class="col-12 co-md-6 col-lg-4 col-xl-3">
    <div class="card" style="width: 18rem;">
      <img :src="pokemon.image" class="card-img-top p-2" :alt="pokemon.name">
      
      <div class="card-body">
        <h3 class="card-title text-center">{{ pokemon.name }}</h3>
        <div class="card-text text-center">
          <span class="m-1" v-for="pokemonType in pokemon.types">{{ pokemonType.type.name }}</span>
        </div>
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
  };
</script>