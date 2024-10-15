<template>
  <div class="login-container">
    <div class="login-box">
      <img src="@/assets/Logo iCoffee.png" alt="iCoffee Logo" class="logo" />
      <h2>Iniciar Sesión  Administrador</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Usuario" />
        <input type="password" v-model="password" placeholder="Contraseña" />
        <div class="button-group">  
          <button @click="volverSeleccion" class="back-button">Regresar</button>
          <button type="submit" class="login-button">Ingresar</button>
        </div>
        credenciales: admin - admin
      </form>

      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Simular autenticación
      if (this.username === 'admin' && this.password === 'admin') {
        localStorage.setItem('auth', 'true');
        this.$router.push('/admin/home'); // Redirigir al Home del administrador
      } else {
        alert('Credenciales incorrectas');
      }
    },
    volverSeleccion() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
}

.login-box {
  text-align: center;
  width: 350px;
  padding: 30px;
  background-color: #2a4c96; /* Color azul del contenedor */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 150px;
  margin-bottom: 10px;
}

h2 {
  margin-bottom: 30px;
  color: white; /* Color de texto blanco para el h2 */
}

input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
}

.login-button {
  width: 48%;
  background-color: #FFA500; /* Color naranja para el botón de ingresar */
  color: white; /* Color de texto blanco para el botón */
  border: none;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
}

.back-button {
  width: 48%;
  background-color: #FFA500; /* Color naranja para el botón de regresar */
  color: white; /* Color de texto blanco para el botón */
  border: none;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover,
.back-button:hover {
  background-color: #ff8c00; /* Color naranja más oscuro al pasar el mouse */
}

.register-text {
  margin-top: 15px;
  font-size: 14px;
  color: white; /* Color de texto blanco para el párrafo */
}

.register-link {
  color: #FFA500; /* Color naranja para el enlace */
  text-decoration: none;
  font-weight: bold;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
