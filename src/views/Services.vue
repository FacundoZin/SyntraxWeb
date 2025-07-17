<script setup lang="ts">
const services = [
  {
    title: 'Página web + posicionamiento',
    desc: 'Diseño web moderno + optimización SEO para destacar tu marca.',
    img: '/Images/WebServices.png',
  },
  {
    title: 'Software a medida',
    desc: 'Soluciones personalizadas para automatizar y optimizar procesos internos.',
    img: '/Images/SoftwareServices.jpg',
  },
  {
    title: 'IoT',
    desc: 'Integración de dispositivos para monitoreo y control inteligente.',
    img: '/Images/IoT.jpeg',
  },
  {
    title: 'Despliegue en la nube',
    desc: 'Deployment seguro y escalable en plataformas como AWS, Azure o GCP.',
    img: '/Images/ServicioNube3.png',
  },
]
</script>

<template>
  <section class="services-section">
    <div
      class="service-card"
      v-for="serv in services"
      :key="serv.title"
      :style="{ backgroundImage: `url('${serv.img}')` }"
    >
      <div class="service-content">
        <h3>{{ serv.title }}</h3>
        <p>{{ serv.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  margin-top: 3.5rem;
}

.service-card {
  position: relative;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 200px;
  border-radius: 8px;
  overflow: hidden;
  transition:
    transform 0.3s,
    filter 0.3s;
  filter: brightness(0.9);
}

.service-card:hover {
  transform: translateY(-3px);
  filter: brightness(1);
}

.service-content {
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 4rem;
}

.service-content h3 {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  font-weight: 600; /* MÁS GRUESA */
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.service-content p {
  margin: 0;
  font-size: 1rem;
  color: #ddd;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

/* Responsive */
@media (max-width: 600px) {
  .service-card {
    min-height: 150px;
    align-items: center;
  }
  .service-content {
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
  }
}
</style>
