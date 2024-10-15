<template>
  <div id="app">
    <!-- Mostrar Navbar solo si la ruta comienza con "/cliente" -->
    <Navbar v-if="isClientRoute" />

    <!-- Mostrar SideMenu solo si la ruta comienza con "/admin" -->
    <SideMenu v-if="isAdminRoute" />

    <!-- Aquí se mostrarán las vistas -->
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import SideMenu from './components/SideMenu.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    SideMenu,
  },
  computed: {
    // Verifica si la ruta actual es para un cliente
    isClientRoute() {
      return this.$route.path.startsWith('/cliente');
    },
    // Verifica si la ruta actual es para un admin
    isAdminRoute() {
      return this.$route.path.startsWith('/admin');
    },
  },
};
</script>

<style>
/* Aquí puedes agregar estilos generales */
</style>
