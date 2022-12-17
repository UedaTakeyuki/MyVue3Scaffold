import { createApp } from 'vue/dist/vue.esm-bundler'
import './style.css'
import App from './App.vue'
import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//const Home = { template: '<div>Home</div>' }
//const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const vuetify = createVuetify({
  components,
  directives,
})
createApp(App).use(router).use(vuetify).mount('#app')
