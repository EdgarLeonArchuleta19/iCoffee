<template>
    <div class="login-page">
      <img class="logo" src="@/assets/Logo iCoffee.png" alt="Logo de iCoffee" />
      <h2>Iniciar sesión como Administrador</h2>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Correo electrónico" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Lógica de autenticación para administradores
        this.$router.push('/admin-dashboard'); // Redirigir al dashboard del admin
      },
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    text-align: center;
    padding: 100px;
    background-color: #fff;
  }
  
  .logo {
    width: 150px;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input {
    padding: 10px;
    margin: 10px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 10px 20px;
    background-color: #1c4581;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  