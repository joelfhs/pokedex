<template>
  <div v-for="pokemon in pokemonList" class="col-12 co-md-6 col-lg-4 col-xl-3">
    <div class="card" style="width: 18rem;">
      <img src="#" class="card-img-top p-2" :alt="pokemon.name">
      
      <div class="card-body">
        <h3 class="card-title">{{ pokemon.name }}</h3>
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