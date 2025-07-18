<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <router-view />
</template>

<style>
.router-container {
  overflow: auto; /* para scroll si se pasa */
}
</style>
