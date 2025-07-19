<template>
  <section class="contact-section">
    <div class="contact-container">
      <!-- Info de contacto -->
      <div class="contact-info">
        <h2>CONTACTO</h2>
        <p>
          <font-awesome-icon :icon="['fas', 'location-dot']" />
          <span class="label">Dirección:</span> Córdoba 1636, San Francisco, Córdoba
        </p>
        <p>
          <font-awesome-icon :icon="['fas', 'phone']" />
          <span class="label">Teléfono:</span> +54 (3564)-653136
        </p>
        <p>
          <font-awesome-icon :icon="['fas', 'envelope']" />
          <span class="label">Email:</span> Syntrax@gmail.com
        </p>
        <p>
          <font-awesome-icon :icon="['fas', 'clock']" />
          <span class="label">Horario:</span> Lunes a Viernes, 9:00 - 18:00
        </p>
      </div>

      <!-- Mapa -->
      <div class="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13135.17369038203!2d-58.3815595!3d-34.6036845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac7c6c0a4fd%3A0x25d5b249e9c4a0a6!2sObelisco%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1689781234567!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  margin-top: 5rem;
  width: 100%;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1080px;
  width: 100%;
  background: #444040d3;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  font-family: 'Bebas Neue', sans-serif; /* Para títulos */
  color: white;
}

.contact-info {
  text-align: center; /* para centrar texto en general */
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* TITULOS con Bebas Neue */
.contact-info h2 {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  font-size: 1.8rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

/* PÁRRAFOS y LABELS con Oswald para fuente fina */
.contact-info p,
.contact-info .label {
  font-family: 'Oswald', sans-serif;
  font-weight: 100;
  font-size: 1.1rem;
  line-height: 1.8rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-info .label {
  font-weight: 400;
  text-transform: uppercase;
  margin-right: 0.3rem;
}

.contact-map {
  width: 100%;
  height: 380px;
  border-radius: 10px;
  overflow: hidden;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
  .contact-map {
    height: 200px;
  }
}
</style>
