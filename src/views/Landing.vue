<script setup lang="ts">
import Header from '@/components/Header.vue'
import About from './About.vue'
import Contact from './Contact.vue'
import FormConsulta from './FormConsulta.vue'
import HomeView from './HomeView.vue'
import Services from './Services.vue'
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
    <section id="consulta">
      <FormConsulta />
    </section>
  </div>
</template>
