<template>
  <div v-for="(pokemon, index) in pokemonList" class="col-12 co-md-6 col-lg-4 col-xl-3">
    <div class="card my-2">
      <img :src="pokemon.image" :type="pokemon.types[0].type.name" class="card-img-top p-2" :alt="pokemon.name">

      <div class="card-body">
        <h3 class="card-title text-center">{{ pokemon.name }}</h3>
        <div class="card-text text-center">
          <h5><span class="badge bg-secondary m-1" v-for="pokemonType in pokemon.types">{{ pokemonType.type.name }}</span></h5>
        </div>
      </div>

      <div class="card-footer">
        <button class="btn btn-primary float-start" data-bs-toggle="modal" data-bs-target="#pokemonModal" @click="sendPokemon(pokemon.id);"><i class="bi bi-search"></i> Ver</button>
        <button class="btn btn-danger float-end" @click="favorito(pokemon.id, index);">
          <i v-if="pokemon.like" class="bi bi-heart-fill"></i>
          <i v-else class="bi bi-heart"></i>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie';
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
      favorito(id, index){
        //Cookies.remove('fav');
        let favoritos = Cookies.get('fav');

        if(favoritos) {
          favoritos = favoritos.split(';');
          let flag;
          let newFav = favoritos.map(fav => {
            if(fav == id) {
              flag = true;
              //mensaje de se quito el id
              this.pokemonList[index].like = false;
            }else {
              return fav;
            }
          });
  
          if(!flag) {
            //mensaje de se agrego el id
            this.pokemonList[index].like = true;
            newFav.push(id);
          }
  
          newFav = newFav.filter(element => element != undefined);
  
          Cookies.set('fav', newFav.join(";"), { expires: 7 });
        }else {
          this.pokemonList[index].like = true;
          Cookies.set('fav', id, { expires: 7 });
        }
      }
    }
  };
</script>