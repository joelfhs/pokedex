import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

//import axios from 'axios'
//import Cookies from 'js-cookie';

const app = createApp(App)
app.use(router)
app.mount('#app')
