<script setup>
import Navbar from '/src/components/Navbar.vue'
const links = [
      { icon: 'home', text: 'Home', route: '/'},
      { icon: 'face', text: 'About', route: '/about'},
    ]
</script>

<template>
  <v-app>
    <Navbar titleStr="Demo App" :links="links" />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>