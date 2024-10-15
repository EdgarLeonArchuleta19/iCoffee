<template>
  <div class="login-container">
    <div class="login-box">
      <img src="@/assets/Logo iCoffee.png" alt="iCoffee Logo" class="logo" />
      <h2>Iniciar Sesión - Cliente</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Correo Institucional" />
        <input type="password" v-model="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form>

      <!-- Botón para regresar al menú de selección -->
      <button @click="volverSeleccion" class="back-button">Regresar al menú</button>
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
  width: 80px;
  margin-bottom: 20px;
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

button {
  width: 100%;
  background-color: #2a4c96;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #1e3570;
}

.back-button {
  margin-top: 15px;
  background-color: #f5f5f5;
  color: #333;
}

.back-button:hover {
  background-color: #ddd;
}
</style>
