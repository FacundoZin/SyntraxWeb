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

      <button>Conoce nuestros servicios</button>
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
  background: rgba(0, 0, 0, 0.2);
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
  text-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 850px; /* limita el ancho para que no se estire demasiado */
  line-height: 1.3; /* reduce el espacio entre líneas */
  margin-right: auto; /* centra el párrafo */
}

.hero button {
  background: transparent;
  color: #66f1c2; /* Aquamarine claro */
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid #66f1c2;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}

.hero button:hover {
  background: #017371; /* Aquamarine oscuro */
  color: white;
  border-color: #017371;
}

.hero button:active {
  transform: scale(0.97);
}
</style>
