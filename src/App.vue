<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>


<template>
  <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Pokedex</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/pokemones">Pokemones</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/pokemones-v2">Pokemones-V2</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/favoritos">Favoritos</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>


<style scoped>
</style>
