import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import PokemonViewV2 from '../views/PokemonViewV2.vue'
import PokemonView from '../views/PokemonView.vue'
import FavoritesView from '../views/FavoritesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: PokemonView
    },
    {
      path: '/pokemones',
      name: 'pokemones',
      component: PokemonView
    },
    {
      path: '/pokemones-v2',
      name: 'pokemones-v2',
      component: PokemonViewV2
    },
    {
      path: '/favoritos',
      name: 'favorites',
      component: FavoritesView
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ]
})

export default router
