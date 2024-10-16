<template>
  <div class="seleccion-container">
    <div class="logo-container">
      <img src="@/assets/Logo iCoffee.png" alt="Logo iCoffee" class="logo" />
    </div>
    <h1>Selecciona tu tipo de usuario</h1>
    <div class="tarjetas-container">
      <router-link class="tarjeta" to="/login-cliente">
        <div class="tarjeta-contenido">
          <i class="bi bi-person-fill icono"></i>
          <h2>Cliente</h2>
        </div>
      </router-link>
      <router-link class="tarjeta" to="/login-admin">
        <div class="tarjeta-contenido">
          <i class="bi bi-person-badge-fill icono"></i>
          <h2>Administrador</h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Seleccion",
};
</script>

<style scoped>
/* Estilos generales */
.seleccion-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FF8C00; /* Naranja fuerte */
  color: white;
  padding: 20px;
  box-sizing: border-box;
}

.logo-container {
  margin-bottom: 10px;
}

.logo {
  width: 280px; /* Logo más grande */
}

h1 {
  font-size: 2.8em;
  margin-bottom: 60px;
  color: #fff;
  text-align: center;
}

.tarjetas-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap; /* Permite que las tarjetas se acomoden en filas si hay poco espacio */
}

.tarjeta {
  text-decoration: none;
  width: 220px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #2a4c96;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.tarjeta:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.tarjeta-contenido {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.tarjeta-contenido h2 {
  font-size: 1.6em;
  font-weight: bold;
  margin-top: 10px;
}

/* Estilos para los íconos */
.icono {
  font-size: 2.5em;
  color: #2a4c96;
}

/* Responsividad para pantallas pequeñas */
@media (max-width: 768px) {
  .tarjeta {
    width: 180px;
    height: 180px;
  }

  .logo {
    width: 240px;
  }

  h1 {
    font-size: 2.3em;
    margin-bottom: 30px;
  }

  .tarjeta-contenido h2 {
    font-size: 1.4em;
  }
}

/* Responsividad para pantallas muy pequeñas (teléfonos) */
@media (max-width: 480px) {
  .tarjeta {
    width: 150px;
    height: 150px;
  }

  .logo {
    width: 220px;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 40px;
  }

  .tarjeta-contenido h2 {
    font-size: 1.1em;
  }

  .icono {
    font-size: 2em;
  }
}
</style>
