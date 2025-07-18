<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Bienvenido a Syntrax</h1>
      <p>
        Automatizamos tus flujos de trabajo y optimizamos procesos complejos mediante soluciones
        integrales de Software, IoT e Inteligencia Artificial para que tu empresa mejore su
        eficiencia y crezca sin limites.
      </p>
    </div>
    <router-link to="/services"><button>Conoce nuestros servicios</button></router-link>
  </section>
</template>

<style scoped>
.hero {
  margin-top: 70px; /* espacio igual a la altura del header */
  height: 85vh; /* ahora solo ocupa 60% del alto visible, podés ajustar a gusto */
  min-height: 400px; /* para que no quede muy chico en pantallas bajas */
  background: url('/Images/Heroplaya.jpg') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
}

/* Un overlay oscuro suave para mejorar contraste */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
}

.hero-content {
  position: relative; /* para que quede encima del overlay */
  z-index: 1;
}

.hero h1 {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 1);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  transition:
    text-shadow 0.3s ease,
    transform 0.3s ease;
  transform: translateY(0);
}

.hero p {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 800px; /* limita el ancho para que no se estire demasiado */
  line-height: 1.3; /* reduce el espacio entre líneas */
  margin-right: auto; /* centra el párrafo */
  transition:
    text-shadow 0.3s ease,
    transform 0.3s ease;
  transform: translateY(0);
}

.hero h1:hover,
.hero p:hover {
  /* sutil movimiento hacia arriba */
  transform: translateY(-4px);
}

.hero {
  position: relative; /* necesario para que el botón se posicione dentro de la sección */
  height: 60vh; /* tu altura parcial */
  background: url('/Images/Heroplaya.jpg') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* el texto queda centrado */
  text-align: center;
  color: white;
}

.hero button {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.512);
  color: white;
  padding: 0.6rem 1.8rem; /* un poco menos padding para equilibrio */
  font-size: 0.85rem; /* texto más chico */
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;

  border: none; /* saca cualquier borde */
  outline: none; /* saca outline al click */
  box-shadow: none; /* elimina sombras */

  transition:
    background 0.3s ease,
    transform 0.2s ease;
}

.hero button:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: translateY(-3px);
}

.hero button:active {
  transform: scale(0.97);
}
</style>
