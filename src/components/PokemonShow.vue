<template>
  <div class="modal fade" tabindex="-1" id="pokemonModal" role="dialog" aria-labelledby="pokemonModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">{{ pokemon.name }}</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-md-6">
                <img :src="pokemon.image" class="card-img-top p-2" :alt="pokemon.name">
              </div>
              <div class="col-12 col-md-6">
                <p class="h5"><strong>Experiencia Base:</strong> {{ pokemon.base_experience }}</p>
                <p class="h5"><strong>Altura:</strong> {{ pokemon.height }} dm (decímetros)</p>
                <p class="h5"><strong>Peso:</strong> {{ pokemon.weight }} hg (hectogramos)</p>

                <br>
                <div class="d-inline">
                  <h5><strong>Tipos:</strong></h5>
                  <h4><span class="badge bg-secondary mx-1" v-for="pokemonType in pokemon.types">{{ pokemonType.type.name }}</span></h4>
                </div>
                
                <br>
                <div>
                  <h5><strong>Estadisticas:</strong></h5>
                  <p v-for="stat in pokemon.stats"><strong>{{ stat.stat.name }}:</strong> {{ stat.base_stat }}</p>
                </div>

                <br>
                <div class="d-inline">
                  <h5><strong>Habilidades:</strong></h5>
                  <h4><span class="badge bg-primary mx-1" v-for="ability in pokemon.abilities">{{ ability.ability.name }}</span></h4>
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      //pokemon: []
    },
    props: ["pokemon"],
    methods: {
      
    }
  };
</script>

<style>
  #pokemonModal div.modal-body p {
    margin-bottom: 0;
  }
</style>