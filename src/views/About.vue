<template>
  <div class="about-container">
    <div class="about-text">
      <h1>Sobre nosotros</h1>
      <p>
        Somos proveedores de soluciones Informaticas, con enfoque en la calidad y la innovación.
        nuestra mision es transformar procesos complejos en flujos de trabajo eficientes y
        automatizados, utilizando las últimas tecnologías en Software, IoT e Inteligencia Artificial
        para que tu empresa mejore su eficiencia y puedas tener un mejor control de tu negocio.
      </p>

      <h1>Como trabajamos</h1>
      <p>
        en primera instancia nos contactamos con vos para conocer mejor los procesos de tu empresa,
        en base a eso hacemos un análisis de necesidad y requerimientos para identificar los puntos
        de mejora.
      </p>

      <p>
        luego de esta instancia, te presentamos una propuesta de solución y un presupuesto. si estas
        de acuerdo, comenzamos a trabajar en el desarrollo de la solución.
      </p>

      <p>
        nosotros nos encargamos de todo el proceso, desde la planificación hasta la implementación y
        el soporte post-lanzamiento. nuestro objetivo es asegurarnos de que la solución se adapte
        perfectamente a tus necesidades y que obtengas el máximo beneficio de ella.
      </p>
      <p>
        Si crees que tu empresa puede benificiarse de una solución a medida no dudes en
        contactarnos.
      </p>
      <router-link to="/services">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>

          <span class="btn-text"> contactate con nosotros</span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  margin-top: 5rem;
  background: url('/Images/About3.jpg') center/cover no-repeat;
  color: white;
  font-family: 'Oswald', sans-serif;
  padding: 0 2rem;
  min-height: 100vh;

  /* Para que el texto se destaque un poco más */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  backdrop-filter: brightness(0.8);
}

.about-text {
  max-width: 800px;
  padding: 2rem;
  border-radius: 10px;
}

.about-text h1 {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.about-text p {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  font-weight: 100;
  font-size: 1.1rem;
  line-height: 1.8rem;
  margin-bottom: 1rem;
}

.about-container button {
  display: block;
  margin: 2rem auto 0; /* 👈 esto lo centra horizontalmente */

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
  justify-content: flex-start; /* ✅ SIEMPRE a la izquierda */
  padding-left: calc((50px - 1.5rem) / 2);
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
.about-container button:hover {
  background: rgba(25, 23, 23, 0.95);
  transform: translateY(-3px);
}

/* Hover en el hero → se expande */
.about-container:hover button {
  width: 190px;
  padding-left: 1.2rem; /* ✅ cuando se abre, padding normal */
}

/* Texto del botón */
.about-container button .btn-text {
  opacity: 0;
  width: 0;
  white-space: nowrap;
  transition: opacity 0.3s ease 0.1s;
}

.about-container:hover button .btn-text {
  opacity: 1;
  width: auto;
  margin-left: 0.5rem;
}

.about-container button svg {
  width: 1.5rem; /* ✅ igual que FontAwesome */
  height: 1.5rem;
  flex-shrink: 0; /* ✅ evita que se deforme al expandir */
}
</style>
