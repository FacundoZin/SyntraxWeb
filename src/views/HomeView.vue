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

      <button>Contáctanos</button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh; /* que ocupe toda la altura visible */
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
  background: rgba(0, 0, 0, 0.3);
}

.hero-content {
  position: relative; /* para que quede encima del overlay */
  z-index: 1;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 1000px; /* limita el ancho para que no se estire demasiado */
  line-height: 1.3; /* reduce el espacio entre líneas */
  margin-right: auto; /* centra el párrafo */
}

.hero button {
  background: #ffffff;
  color: #000;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
}

.hero button:hover {
  background: #ddd;
}
</style>
