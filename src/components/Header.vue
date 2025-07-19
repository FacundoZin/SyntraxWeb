<template>
  <header class="main-header">
    <div class="header-content">
      <!-- Logo -->
      <router-link to="/">
        <img src="/Images/LogoSyntrax.png" alt="Logo Syntrax" class="logo" />
      </router-link>

      <!-- Links -->
      <nav class="nav-links">
        <RouterLink :to="{ hash: '#home' }">Home</RouterLink>
        <RouterLink :to="{ hash: '#about' }">About</RouterLink>
        <RouterLink :to="{ hash: '#services' }">Services</RouterLink>
        <RouterLink :to="{ hash: '#contact' }">Contact</RouterLink>
        <a
          href="https://www.linkedin.com/in/facundozin/"
          target="_blank"
          rel="noopener noreferrer"
          class="redes-sociales"
          aria-label="LinkedIn de la empresa"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a
          href="https://www.instagram.com/facu_zin/"
          target="_blank"
          rel="noopener noreferrer"
          class="redes-sociales"
          aria-label="Instagram de la empresa"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* negro semitransparente al 50% */
  backdrop-filter: blur(8px); /* desenfoque sobre el fondo */
  -webkit-backdrop-filter: blur(8px); /* para compatibilidad */
  /*backdrop-filter: blur(4px);*/
  z-index: 1000;
  padding: 0; /* sin espacio extra */
  height: 70px; /* altura fija del header */
  display: flex;
  align-items: center; /* centra verticalmente el contenido */
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo reducido para no forzar altura */
.logo {
  height: 120px; /* más compacto */
  object-fit: contain;
  display: block;

  filter: brightness(0) invert(1);
  transition: filter 0.25s ease; /* animación suave */
}

.logo:hover {
  filter: brightness(0) invert(0.8);
  /* sigue siendo claro, pero un 20% menos brillante para ese efecto “gris” */
}

/* Links pegados al centro vertical del header */
.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-links a {
  position: relative; /* Necesario para colocar la barrita debajo */
  color: white; /* Texto blanco por defecto */
  text-decoration: none; /* Sin subrayado */
  font-weight: 500;
  font-size: 1rem;
  line-height: 1;
  transition: color 0.3s ease;
}

/* Barra invisible por defecto */
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; /* Un poquito debajo del texto */
  left: 0;
  width: 100%;
  height: 2px;
  background: transparent; /* Oculta la barra inicialmente */
  transition: background 0.3s ease;
}

/* Hover → barra gris */
.nav-links a:hover::after {
  background: #aaa;
}

/* Ruta activa EXACTA (Vue Router agrega esta clase automáticamente) → barra blanca fija */
.nav-links a.router-link-active::after,
.nav-links a.router-link-exact-active::after {
  background: white;
}

.redes-sociales {
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
}

.redes-sociales svg {
  height: 24px;
  width: 24px;
  fill: white; /* blanco */
  transition: fill 0.3s ease;
  cursor: pointer;
}

.redes-sociales:hover svg {
  fill: #0a66c2; /* azul LinkedIn en hover */
}
</style>
