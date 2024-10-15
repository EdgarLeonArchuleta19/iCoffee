<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar />
    
    <!-- Contenido dinámico según la ruta -->
    <router-view />
  </div>
</template>

<script>
// Importa el componente Navbar
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
/* Estilos globales opcionales */
</style>
