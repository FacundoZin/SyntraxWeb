<template>
  <div class="about-container">
    <!-- Hero corto -->
    <section class="about-hero">
      <h1>Sobre Nosotros</h1>
      <p>Innovación, tecnología y soluciones para el crecimiento de tu empresa</p>
    </section>

    <!-- Sección descriptiva -->
    <section class="about-description">
      <h2>Quiénes somos</h2>
      <p>
        Somos un equipo apasionado por la tecnología, especializado en crear soluciones informáticas
        de alto impacto. Nuestro objetivo es ayudar a empresas y organizaciones a optimizar sus
        procesos, integrando software, IoT e Inteligencia Artificial para impulsar su crecimiento.
      </p>
      <p>
        Creemos en la innovación como motor de cambio y trabajamos junto a nuestros clientes para
        ofrecer servicios personalizados que se adapten a cada necesidad.
      </p>
    </section>

    <!-- Valores / Ventajas -->
    <section class="about-values">
      <div class="value-card">
        <h3>🚀 Innovación</h3>
        <p>Siempre incorporamos las últimas tecnologías para ofrecer soluciones modernas.</p>
      </div>
      <div class="value-card">
        <h3>🤝 Compromiso</h3>
        <p>Trabajamos codo a codo con cada cliente para garantizar resultados reales.</p>
      </div>
      <div class="value-card">
        <h3>💡 Experiencia</h3>
        <p>Contamos con expertos en software, IoT y despliegue en la nube.</p>
      </div>
    </section>

    <!-- Mensaje final -->
    <section class="about-footer">
      <h2>¿Listo para trabajar juntos?</h2>
      <p>Contáctanos y demos el siguiente paso para transformar tu empresa.</p>
    </section>
  </div>
</template>

<style scoped>
.about-container {
  color: white;
  font-family: 'Oswald', sans-serif;
  padding: 0 2rem;
}

/* HERO */
.about-hero {
  text-align: center;
  padding: 6rem 2rem 4rem;
  background: rgba(0, 0, 0, 0.3);
}
.about-hero h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.about-hero p {
  font-size: 1.3rem;
  font-weight: 300;
}

/* DESCRIPCIÓN */
.about-description {
  max-width: 800px;
  margin: 4rem auto;
  text-align: center;
}
.about-description h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}
.about-description p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #ddd;
}

/* VALORES */
.about-values {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 4rem auto;
  max-width: 1000px;
}
.value-card {
  flex: 1 1 250px;
  background: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: background 0.3s ease;
}
.value-card:hover {
  background: rgba(0, 0, 0, 0.6);
}
.value-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
}
.value-card p {
  font-size: 1rem;
  color: #ccc;
}

/* FOOTER SECTION */
.about-footer {
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.2);
}
.about-footer h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.about-footer p {
  font-size: 1.2rem;
  color: #ddd;
}
</style>
