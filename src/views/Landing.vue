<script setup lang="ts">
import Header from '@/components/Header.vue'
import HomeView from './HomeView.vue'
import Services from './Services.vue'
import About from './About.vue'
import Contact from './Contact.vue'
</script>

<template>
  <div>
    <Header />

    <section id="home">
      <HomeView />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
</template>
