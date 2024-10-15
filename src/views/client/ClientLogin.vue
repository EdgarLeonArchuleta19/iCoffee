<template>
  <div class="login-container">
    <div class="login-box">
      <img src="@/assets/Logo iCoffee.png" alt="iCoffee Logo" class="logo" />
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Correo Institucional" />
        <input type="password" v-model="password" placeholder="Contraseña" />
        <div class="button-group">
          <button @click="volverSeleccion" class="back-button">Regresar</button>
          <button type="submit" class="login-button">Ingresar</button>
        </div>
      </form>

      <p class="register-text">
        ¿No tienes una cuenta? 
        <router-link to="/registro-cliente" class="register-link">Regístrate aquí</router-link>
      </p>
      credenciales: 1234 - 1234
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
      if (this.username === '1234' && this.password === '1234') {
        localStorage.setItem('auth', 'true');
        this.$router.push('/cliente/home'); // Redirigir al Home del cliente
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
  background-color: #FFA500; /* Color naranja del contenedor */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 150px;
  margin-bottom: 10px;
}

h2{
  color: white;
  margin-bottom: 50px;
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
}

.login-button,
.back-button {
  width: 48%;
  background-color: #2a4c96;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover,
.back-button:hover {
  background-color: #1e3570;
}

.register-text {
  margin-top: 15px;
  font-size: 14px;
  color: white; /* Color de texto blanco para el párrafo */
}

.register-link {
  color: #2a4c96;
  text-decoration: none;
  font-weight: bold;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
