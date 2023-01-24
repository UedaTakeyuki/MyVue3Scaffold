<script setup>
import {Navbar} from 'vuetify-nav'
const links = [
      { icon: 'home', text: 'Home', route: '/'},
    ]
</script>

<template>
  <v-app>
    <Navbar :links="links"/>
  </v-app>
</template>