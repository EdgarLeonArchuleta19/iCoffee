<template>
  <div class="d-flex">
    <div class="side-menu d-flex flex-column">
      <!-- Logo Section -->
      <div class="logo-section text-center py-4">
        <img src="@/assets/Logo iCoffee.png" alt="iCoffee Admin Logo" class="img-fluid logo">
      </div>

      <!-- Menu Items -->
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/admin/dashboard" class="nav-link text-white">Dashboard</router-link>
        </li>

        <!-- Pedidos en tiempo real -->
        <li class="nav-item">
          <router-link to="#" class="nav-link dropdown-toggle text-white" data-bs-toggle="collapse" data-bs-target="#pedidosSubmenu" aria-expanded="false">Pedidos en tiempo real</router-link>
          <div id="pedidosSubmenu" class="collapse">
            <ul class="nav flex-column ms-3">
              <li><router-link to="/admin/pedidos-pendientes" class="nav-link text-white">Pendientes</router-link></li>
              <li><router-link to="/admin/pedidos-proceso" class="nav-link text-white">En proceso</router-link></li>
              <li><router-link to="/admin/pedidos-completados" class="nav-link text-white">Completados</router-link></li>
            </ul>
          </div>
        </li>

        <!-- Menú de productos -->
        <li class="nav-item">
          <router-link to="#" class="nav-link dropdown-toggle text-white" data-bs-toggle="collapse" data-bs-target="#menuProductosSubmenu" aria-expanded="false">Menú de productos</router-link>
          <div id="menuProductosSubmenu" class="collapse">
            <ul class="nav flex-column ms-3">
              <li><router-link to="/admin/categorias" class="nav-link text-white">Categorías</router-link></li>
              <li><router-link to="/admin/promociones" class="nav-link text-white">Promociones</router-link></li>
              <li><router-link to="/admin/inventario" class="nav-link text-white">Inventario</router-link></li>
            </ul>
          </div>
        </li>

        <!-- Opciones de administración -->
        <li class="nav-item">
          <router-link to="#" class="nav-link dropdown-toggle text-white" data-bs-toggle="collapse" data-bs-target="#adminSubmenu" aria-expanded="false">Opciones de administración</router-link>
          <div id="adminSubmenu" class="collapse">
            <ul class="nav flex-column ms-3">
              <li><router-link to="/admin/empleados" class="nav-link text-white">Gestión de empleados</router-link></li>
              <li><router-link to="/admin/horarios" class="nav-link text-white">Horarios de operación</router-link></li>
              <li><router-link to="/admin/sesiones-empleados" class="nav-link text-white">Historial de empleados</router-link></li>
            </ul>
          </div>
        </li>

        <!-- Ventas -->
        <li class="nav-item">
          <router-link to="/admin/ventas" class="nav-link text-white">Ventas</router-link>
        </li>

        <!-- Clientes -->
        <li class="nav-item">
          <router-link to="/admin/clientes" class="nav-link text-white">Clientes</router-link>
        </li>
      </ul>

      <!-- User and Logout Section -->
      <div class="user-section text-center mt-auto py-4">
        <i class="bi bi-person-circle fs-3"></i> <!-- Icono de usuario Bootstrap -->
        <p class="text-white mb-0">Usuario Admin</p>
        <router-link to="/cerrar-sesion" class="nav-link text-white mt-2">Cerrar sesión</router-link>
      </div>
    </div>

    <!-- Content Area -->
    <div class="content-area flex-grow-1 p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
};
</script>

<style scoped>
.side-menu {
  width: 250px; /* Ancho fijo para el sidemenu */
  min-height: 100vh; /* Asegúrate de que ocupe toda la altura */
  background-color: #09233e; /* Azul mate más claro */
  position: fixed; /* Haciendo el sidemenu estático */
}

.logo {
  width: 180px; /* Logo más pequeño para ajustarlo al menú */
}

.nav-link {
  padding: 10px;
  border-radius: 5px;
}

.nav-link:hover {
  background-color: #1c2736; /* Azul más oscuro para hover */
}

.user-section {
  border-top: 1px solid #fff;
}

.user-section i {
  font-size: 32px; /* Tamaño del ícono de usuario */
}

.user-section .nav-link {
  font-size: 14px; /* Texto más pequeño para "Cerrar sesión" */
}
</style>
