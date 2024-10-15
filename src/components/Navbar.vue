<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-orange">
    <div class="container-fluid">
      <!-- Logo y nombre de la aplicación -->
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="@/assets/Logo iCoffee.png" alt="Logo iCoffee" class="logo" />
        iCoffee
      </a>

      <!-- Botón de colapsar para móviles -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        ref="navbarToggler"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links del navbar -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/cliente/home" @click="closeMenu">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cliente/menu" @click="closeMenu">Ordenar</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cliente/contacto" @click="closeMenu">Contacto</router-link>
          </li>
        </ul>

        <!-- Íconos de carrito y cuenta usando Bootstrap Icons -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/cliente/carrito" @click="closeMenu">
              <i class="bi bi-cart"></i> Carrito
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person"></i> Cuenta
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="/cliente/perfil" @click="closeMenu">Ver Perfil</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/cliente/configuracion" @click="closeMenu">Configuración</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/cliente/historial" @click="closeMenu">Historial de Pedidos</router-link>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <router-link class="dropdown-item" to="/cerrar-sesion" @click="closeMenu">Cerrar Sesión</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    closeMenu() {
      // Detecta si el botón de colapsar está visible (solo visible en dispositivos móviles)
      const navbarToggler = this.$refs.navbarToggler;
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click(); // Simula un clic en el botón de colapsar
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #FFA500; /* Color naranja fuerte */
}

.navbar-brand {
  font-weight: bold;
  color: white; /* Color del texto de la marca */
}

.navbar-brand .logo {
  width: 100px; /* Ajusta el tamaño del logo */
}

.nav-link {
  color: white; /* Color de los enlaces */
}

.nav-link:hover {
  color: #FFD700; /* Color dorado al pasar el mouse */
}

/* Asegurar que el menú desplegable no se salga de la pantalla */
.dropdown-menu {
  right: 0; /* Alinea el menú desplegable a la derecha */
}
</style>
