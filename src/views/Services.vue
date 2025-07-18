<script setup lang="ts">
const services = [
  {
    title: 'Página web + posicionamiento',
    desc: 'Diseño web moderno + optimización SEO para destacar tu marca.',
    img: '/Images/WebServices.png',
    link: '/servicios/web', // opcional para redirigir
  },
  {
    title: 'Software a medida',
    desc: 'Soluciones personalizadas para automatizar y optimizar procesos internos.',
    img: '/Images/SoftwareServices.jpg',
    link: '/servicios/software',
  },
  {
    title: 'IoT',
    desc: 'Integración de dispositivos para monitoreo y control inteligente.',
    img: '/Images/IoT.jpeg',
    link: '/servicios/iot',
  },
  {
    title: 'Despliegue en la nube',
    desc: 'Deployment seguro y escalable en plataformas como AWS, Azure o GCP.',
    img: '/Images/ServicioNube3.png',
    link: '/servicios/nube',
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
        <a class="service-btn" :href="serv.link">Ver más</a>
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
  font-weight: 600;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.service-content p {
  margin: 0 0 1rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.697);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}

/* BOTÓN DE LAS CARDS CON ESTILO DEL HERO */
/* --- BOTÓN OCULTO POR DEFECTO --- */
.service-btn {
  display: inline-block;
  background: rgba(37, 36, 36, 0.9);
  color: #fff;
  padding: 0.6rem 1.4rem;
  border-radius: 999px; /* estilo pill como el del hero */
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 100;
  cursor: pointer;
  border: none;
  outline: none;

  /* oculto inicialmente */
  opacity: 0;
  transform: translateY(10px); /* un poco desplazado hacia abajo */
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    background 0.3s ease;
}

/* --- CUANDO HOVER EN LA TARJETA --- */
.service-card:hover .service-btn {
  opacity: 1; /* aparece */
  transform: translateY(0); /* vuelve a su posición normal */
}

/* --- HOVER DIRECTO DEL BOTÓN --- */
.service-btn:hover {
  background: rgba(25, 23, 23, 0.95);
}

/* Responsive */
@media (max-width: 600px) {
  .service-card {
    min-height: 150px;
    align-items: center;
  }
  .service-content {
    background: rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 2rem;
  }
}
</style>
