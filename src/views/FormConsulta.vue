<template>
  <section class="contact-section">
    <div class="contact-container">
      <!-- Texto lateral -->
      <div class="contact-text">
        <h2>Ponte en contacto con nosotros</h2>
        <p>Queremos saber de ti.</p>
      </div>

      <!-- Formulario -->
      <div class="contact-form">
        <h1>Contáctanos</h1>
        <form @submit.prevent="handleSubmit">
          <input type="text" placeholder="Nombre" v-model="form.name" required />
          <input type="email" placeholder="Correo electrónico" v-model="form.email" required />
          <textarea placeholder="Mensaje" rows="4" v-model="form.message" required></textarea>

          <button type="submit">ENTREGAR</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  console.log('Formulario enviado:', form)
  // Acá podrías hacer la llamada a tu API
  alert('Mensaje enviado (demo)')
}
</script>

<style scoped>
.contact-section {
  background: #000;
  color: #fff;
  padding: 4rem 2rem;

  /* Ocupa toda la altura del viewport */
  min-height: 100vh;

  /* Centrado vertical y horizontal */
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  max-width: 1100px;
  width: 100%;
}

.contact-text {
  flex: 1;
}

.contact-text h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.contact-text p {
  font-size: 1rem;
  color: #aaa;
}

.contact-form {
  flex: 1;
}

.contact-form h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  background: transparent;
  border: 1px solid #333;
  padding: 0.8rem;
  color: #fff;
  font-size: 1rem;
  outline: none;
}

.contact-form button {
  background: #ff3c00; /* rojo estilo Mercel */
  color: #fff;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease;
}

.contact-form button:hover {
  background: #e63200;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
