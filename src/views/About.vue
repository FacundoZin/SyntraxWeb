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
</style>
