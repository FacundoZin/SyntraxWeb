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
    <router-link to="/services">
      <button>
        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon" />
        <span class="btn-text"> Conoce nuestros servicios</span>
      </button>
    </router-link>
  </section>
</template>

<style scoped>
.hero {
  /* separación del header */
  margin-top: 95px;

  /* altura final */
  height: 80vh; /* más alto que 60vh */
  min-height: 500px; /* asegura un mínimo en pantallas bajas */

  /* fondo */
  background: url('/Images/Heroplaya.jpg') center/cover no-repeat;

  /* centrado del contenido */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* centra el texto verticalmente */
  text-align: center;
  color: white;

  /* para que los elementos absolutos (botón) funcionen bien */
  position: relative;

  /* borde superior/inferior en diagonal */
  clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0% 100%);
}

/* Un overlay oscuro suave para mejorar contraste */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0% 100%);
}

.hero-content {
  position: relative; /* para que quede encima del overlay */
  z-index: 1;
}

.hero h1 {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 1);
  font-size: 3rem;
  font-weight: 450;
  margin-bottom: 1rem;
  transition:
    text-shadow 0.3s ease,
    transform 0.3s ease;
  transform: translateY(0);
}

.hero p {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  font-weight: 100;
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

.hero button {
  position: absolute;
  bottom: 4rem; /* ✅ Ahora está más arriba (antes 1.5rem) */
  right: 1.5rem;

  background: rgba(37, 36, 36, 0.9);
  color: white;

  /* tamaño inicial */
  height: 50px;
  width: 50px;
  border-radius: 999px;
  cursor: pointer;
  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.85rem;
  font-weight: 100;

  transition:
    width 0.3s ease,
    padding 0.3s ease,
    background 0.3s ease,
    transform 0.3s ease;

  overflow: hidden;
  gap: 0.3rem;
}

/* Hover suave */
.hero button:hover {
  background: rgba(25, 23, 23, 0.95);
  transform: translateY(-3px);
}

/* Hover en el hero → se expande */
.hero:hover button {
  width: 190px;
  padding: 0 1rem;
  justify-content: flex-start;
  padding-left: 1.2rem;
}

/* Texto del botón */
.hero button .btn-text {
  opacity: 0;
  width: 0;
  white-space: nowrap;
  transition: opacity 0.3s ease 0.1s;
}

.hero:hover button .btn-text {
  opacity: 1;
  width: auto;
  margin-left: 0.5rem;
}

.hero button .icon {
  font-size: 1.2rem;
}
</style>
